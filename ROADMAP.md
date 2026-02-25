# 🍋 Limoni — Roadmap

## ✅ Completado

- [x] Sitio web con productos dinámicos (JSON)
- [x] Diseño responsive y bilingüe (ES/EN)
- [x] Integración con WhatsApp para pedidos
- [x] Repositorio Git configurado
- [x] HTML portable (limoni-completo.html)
- [x] Google Sheets → products.json sync

---

## 🔜 Próximos pasos

### 🚀 Deploy — Firebase Hosting
Publicar el sitio con hosting gratuito de Firebase:
- Dominio: `limoni-xxxx.web.app` (gratuito)
- HTTPS automático
- Deploy con un solo comando: `firebase deploy`

### 📊 Google Analytics
Rastrear visitas, productos más vistos y conversiones:
- Instalar GA4 con el tag de medición
- Configurar eventos para clics en WhatsApp y filtros de categoría

### 🔍 Google Search Console
Indexar el sitio en Google para que aparezca en búsquedas:
- Verificar propiedad del dominio
- Enviar sitemap
- Monitorear impresiones y clics

### 📧 Formulario de contacto
Agregar un formulario que envíe emails a la cuenta Gmail de Limoni:
- Opción 1: Google Forms embebido
- Opción 2: Formulario custom con EmailJS (sin backend)
- Opción 3: Firebase Functions (requiere plan Blaze)

---

## 💡 Ideas futuras

- [ ] **🤖 GitHub Actions auto-sync** — Automatizar la sincronización: editar la Sheet y que se actualice solo (sin correr el script ni pushear)
- [ ] Dominio personalizado (ej: `limonilamps.com`)
- [ ] Carrito de compras con MercadoPago
- [ ] Instagram feed embebido
- [ ] Blog / sección de novedades
- [ ] Sistema de reseñas de clientes
