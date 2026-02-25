#!/usr/bin/env python3
"""
sync_products.py — Sincroniza productos desde Google Sheets → products.json

Uso:
    python sync_products.py <URL_CSV_PUBLICO>

La URL se obtiene desde Google Sheets:
    Archivo → Compartir → Publicar en la web → Hoja 1 → CSV → Publicar

Las imágenes se descargan desde Google Drive (links en la columna image_url).
"""

import csv
import io
import json
import os
import re
import sys
import requests

# --- Configuración ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(BASE_DIR, "images")
PRODUCTS_JSON = os.path.join(BASE_DIR, "products.json")


def extract_drive_file_id(url):
    """Extrae el File ID de una URL de Google Drive.

    Soporta los formatos:
      - https://drive.google.com/file/d/FILE_ID/view?...
      - https://drive.google.com/open?id=FILE_ID
      - https://drive.google.com/uc?id=FILE_ID&...
    """
    if not url:
        return None

    patterns = [
        r"/file/d/([a-zA-Z0-9_-]+)",
        r"[?&]id=([a-zA-Z0-9_-]+)",
    ]
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None


def download_drive_image(file_id, dest_path):
    """Descarga una imagen de Google Drive dado su File ID."""
    download_url = f"https://drive.google.com/uc?export=download&id={file_id}"

    try:
        response = requests.get(download_url, timeout=30, allow_redirects=True)

        # Google Drive puede devolver una página de confirmación para archivos grandes
        if b"confirm=" in response.content and response.headers.get("content-type", "").startswith("text/html"):
            # Extraer token de confirmación
            confirm_match = re.search(r'confirm=([a-zA-Z0-9_-]+)', response.text)
            if confirm_match:
                confirm_token = confirm_match.group(1)
                download_url = f"{download_url}&confirm={confirm_token}"
                response = requests.get(download_url, timeout=30, allow_redirects=True)

        if response.status_code == 200 and len(response.content) > 1000:
            with open(dest_path, "wb") as f:
                f.write(response.content)
            return True
        else:
            print(f"  ⚠️  Descarga fallida (status={response.status_code}, size={len(response.content)} bytes)")
            return False

    except requests.RequestException as e:
        print(f"  ❌ Error de red: {e}")
        return False


def fetch_sheet_csv(csv_url):
    """Descarga la Google Sheet publicada como CSV y la parsea."""
    print(f"📥 Descargando datos de Google Sheets...")
    response = requests.get(csv_url, timeout=30)
    response.raise_for_status()

    # Decodificar UTF-8
    content = response.content.decode("utf-8-sig")  # utf-8-sig para BOM
    reader = csv.DictReader(io.StringIO(content))

    rows = list(reader)
    print(f"   ✅ {len(rows)} filas encontradas")
    return rows


def sanitize_id(text):
    """Genera un ID seguro a partir de un texto."""
    return re.sub(r'[^a-z0-9_-]', '', text.lower().strip().replace(' ', '-'))


def row_to_product(row, index):
    """Convierte una fila del CSV en un objeto producto."""
    # Obtener ID (obligatorio)
    product_id = row.get("id", "").strip()
    if not product_id:
        name = row.get("name", row.get("name_es", f"producto-{index}"))
        product_id = sanitize_id(name)

    # Parsear precio
    price_str = row.get("price", "0").strip().replace(".", "").replace(",", "")
    try:
        price = int(price_str) if price_str else 0
    except ValueError:
        price = 0

    # Parsear precio original (puede estar vacío)
    price_orig_str = row.get("price_original", "").strip().replace(".", "").replace(",", "")
    try:
        price_original = int(price_orig_str) if price_orig_str else None
    except ValueError:
        price_original = None

    # Parsear stock
    stock_str = row.get("stock", "0").strip()
    try:
        stock = int(stock_str) if stock_str else 0
    except ValueError:
        stock = 0

    # Tag (puede estar vacío)
    tag = row.get("tag", "").strip() or None

    return {
        "id": product_id,
        "category": row.get("category", "").strip().lower(),
        "images": [],  # Se completa después de descargar
        "tag": tag,
        "price": price,
        "price_original": price_original,
        "dimensions": row.get("dimensions", "").strip(),
        "stock": stock,
        "name_es": row.get("name", row.get("name_es", "")).strip(),
        "name_en": row.get("name", row.get("name_en", "")).strip(),
        "desc_es": row.get("desc_es", "").strip(),
        "desc_en": row.get("desc_en", "").strip(),
    }


def process_image(row, product):
    """Descarga las imágenes de Drive y actualiza el producto.

    Soporta múltiples URLs separadas por coma en la columna image_url.
    Ej: https://drive.google.com/..., https://drive.google.com/...
    """
    image_url_raw = row.get("image_url", "").strip()
    product_id = product["id"]

    if not image_url_raw:
        print(f"  ⚠️  [{product_id}] Sin URL de imagen")
        # Buscar imágenes existentes con el patrón lamp-{id}.*
        for ext in [".png", ".jpg", ".jpeg", ".webp"]:
            existing = os.path.join(IMAGES_DIR, f"lamp-{product_id}{ext}")
            if os.path.exists(existing):
                product["images"] = [f"images/lamp-{product_id}{ext}"]
                print(f"      Usando imagen existente: lamp-{product_id}{ext}")
                return
        return

    # Separar múltiples URLs por coma
    urls = [u.strip() for u in image_url_raw.split(",") if u.strip()]
    downloaded_images = []

    for idx, image_url in enumerate(urls):
        file_id = extract_drive_file_id(image_url)
        if not file_id:
            print(f"  ⚠️  [{product_id}] URL de Drive no reconocida: {image_url}")
            continue

        # Primera imagen: lamp-{id}.png, siguientes: lamp-{id}_2.png, lamp-{id}_3.png...
        suffix = "" if idx == 0 else f"_{idx + 1}"
        dest_filename = f"lamp-{product_id}{suffix}.png"
        dest_path = os.path.join(IMAGES_DIR, dest_filename)

        print(f"  📷 [{product_id}] Descargando imagen {idx + 1}/{len(urls)}...")
        if download_drive_image(file_id, dest_path):
            downloaded_images.append(f"images/{dest_filename}")
            print(f"      ✅ Guardada como {dest_filename}")
        else:
            print(f"      ❌ Falló la descarga de imagen {idx + 1}")

    if downloaded_images:
        product["images"] = downloaded_images
    else:
        # Si ninguna se descargó, buscar imagen local existente
        for ext in [".png", ".jpg", ".jpeg", ".webp"]:
            existing = os.path.join(IMAGES_DIR, f"lamp-{product_id}{ext}")
            if os.path.exists(existing):
                product["images"] = [f"images/lamp-{product_id}{ext}"]
                print(f"      Usando imagen existente: lamp-{product_id}{ext}")
                return
        print(f"      ❌ No se pudo descargar ni encontrar imagen local")


def main():
    if len(sys.argv) < 2:
        print("❌ Uso: python sync_products.py <URL_DE_GOOGLE_SHEET>")
        print()
        print("   Podés pasar la URL normal de la Sheet (compartida como 'cualquier persona con el enlace'):")
        print()
        print("   Ejemplo:")
        print("   python sync_products.py 'https://docs.google.com/spreadsheets/d/1KXw.../edit?gid=0#gid=0'")
        sys.exit(1)

    csv_url = sys.argv[1]

    # Auto-convertir URL de edición a URL de exportación CSV
    sheet_id_match = re.search(r'/spreadsheets/d/([a-zA-Z0-9_-]+)', csv_url)
    if sheet_id_match and 'export?format=csv' not in csv_url and 'pub?output=csv' not in csv_url:
        sheet_id = sheet_id_match.group(1)
        # Extraer gid si existe
        gid_match = re.search(r'gid=(\d+)', csv_url)
        gid = gid_match.group(1) if gid_match else '0'
        csv_url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid={gid}"
        print(f"🔗 URL convertida a CSV: {csv_url}")

    # Asegurar que existe la carpeta images
    os.makedirs(IMAGES_DIR, exist_ok=True)

    # 1. Descargar y parsear la Sheet
    try:
        rows = fetch_sheet_csv(csv_url)
    except requests.RequestException as e:
        print(f"❌ Error al descargar la Sheet: {e}")
        print("   Asegurate de haberla publicado como CSV.")
        sys.exit(1)

    if not rows:
        print("❌ La Sheet está vacía o no tiene el formato esperado.")
        sys.exit(1)

    # Validar columnas
    expected_cols = {"id", "category", "price"}
    actual_cols = set(rows[0].keys())
    missing = expected_cols - actual_cols
    if missing:
        print(f"❌ Faltan columnas obligatorias: {', '.join(missing)}")
        print(f"   Columnas encontradas: {', '.join(sorted(actual_cols))}")
        sys.exit(1)

    # 2. Convertir filas a productos y descargar imágenes
    products = []
    print(f"\n🔄 Procesando {len(rows)} productos...\n")

    for i, row in enumerate(rows, 1):
        # Saltar filas vacías
        if not row.get("id", "").strip() and not row.get("name_es", "").strip():
            continue

        product = row_to_product(row, i)
        process_image(row, product)
        products.append(product)
        print(f"   ✅ {product['name_es']} ({product['category']})")

    # 3. Guardar products.json
    with open(PRODUCTS_JSON, "w", encoding="utf-8") as f:
        json.dump(products, f, ensure_ascii=False, indent=4)

    print(f"\n{'='*50}")
    print(f"🍋 ¡Sincronización completada!")
    print(f"   📦 {len(products)} productos guardados en products.json")
    print(f"   📁 Imágenes en {IMAGES_DIR}")
    print(f"{'='*50}")

    # Resumen por categoría
    categories = {}
    for p in products:
        cat = p["category"] or "sin categoría"
        categories[cat] = categories.get(cat, 0) + 1

    print(f"\n📊 Resumen por categoría:")
    for cat, count in sorted(categories.items()):
        print(f"   {cat}: {count} productos")


if __name__ == "__main__":
    main()
