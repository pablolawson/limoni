#!/bin/bash
# sync.sh — Sincroniza productos desde Google Sheets (sin commitear ni pushear)
# Uso: bash sync.sh

SHEET_URL="https://docs.google.com/spreadsheets/d/1KXwrUnuZySPFKttItSiqgpd_QbXwp-dZB1rwUpg0ALM/edit?gid=1431952739"

echo "🔄 Sincronizando productos desde Google Sheets..."
python3 sync_products.py "$SHEET_URL"

if [ $? -ne 0 ]; then
    echo "❌ Error en la sincronización."
    exit 1
fi

echo ""
echo "✅ ¡Sincronización completada! Revisá products.json e images/"
echo "💡 Cuando estés conforme, corré: bash deploy.sh"
