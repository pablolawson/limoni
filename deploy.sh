#!/bin/bash
# deploy.sh — Sincroniza productos desde Google Sheets y hace push a GitHub Pages
# Uso: bash deploy.sh

SHEET_URL="https://docs.google.com/spreadsheets/d/1KXwrUnuZySPFKttItSiqgpd_QbXwp-dZB1rwUpg0ALM/edit?gid=1431952739"

echo "🔄 Sincronizando productos desde Google Sheets..."
python3 sync_products.py "$SHEET_URL"

if [ $? -ne 0 ]; then
    echo "❌ Error en la sincronización. Abortando deploy."
    exit 1
fi

echo ""
echo "📦 Haciendo commit y push..."
git add -A
git commit -m "🍋 sync productos $(date '+%Y-%m-%d %H:%M')"
git push

echo ""
echo "✅ ¡Deploy completado! Los cambios se verán en GitHub Pages en unos minutos."
