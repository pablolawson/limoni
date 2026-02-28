#!/bin/bash
# deploy.sh — Commitea y pushea los cambios a GitHub (sin sincronizar productos)
# Uso: bash deploy.sh

echo "📦 Haciendo commit y push..."
read -p "💬 Mensaje del commit (Enter = auto): " MSG
if [ -z "$MSG" ]; then
    MSG="🍋 update $(date '+%Y-%m-%d %H:%M')"
fi
git add -A
git commit -m "$MSG"
git push

echo ""
echo "✅ ¡Deploy completado! Los cambios se verán en GitHub Pages en unos minutos."
