# 🍋 Paso a Paso Completo — Mac

> Todo lo que hay que hacer para que tu compañero quede listo para trabajar en Limoni.
> Solo Mac. Paso a paso, sin saltar nada.

---

## 🅰️ LO QUE HACÉS VOS (Pablo) — ANTES de juntarse

---

### Paso P1: Agregar al compañero como colaborador en GitHub

1. Abrir **https://github.com/pablolawson/limoni**
2. Click en **Settings** (pestaña con engranaje ⚙️)
3. En el menú izquierdo → **Collaborators**
4. Click en **"Add people"**
5. Buscar por el **nombre de usuario o email** de tu compañero
6. Enviar la invitación

> ⚠️ Tu compañero tiene que aceptar el email de invitación antes de poder hacer push.

### Paso P2: Verificar que tu repo está limpio

Abrir Terminal y correr:
```bash
cd ~/Desktop/limoni
git status
```
Debería decir: `nothing to commit, working tree clean`

Si hay cambios pendientes:
```bash
git add -A
git commit -m "🍋 limpieza antes de onboarding"
git push
```

✅ Listo, tu parte previa está hecha.

---

---

## 🅱️ LO QUE HACE ÉL — En su Mac, con vos guiándolo

---

### Paso 1: Abrir la Terminal

1. Presionar **⌘ Cmd + Espacio** (abre Spotlight)
2. Escribir **Terminal**
3. Presionar **Enter**

> 💡 La Terminal es donde se escriben los comandos. A partir de acá, todo lo que está en un recuadro gris se escribe ahí.

---

### Paso 2: Instalar las herramientas de desarrollo de Mac

Escribir en la Terminal:
```bash
xcode-select --install
```

- Va a aparecer una ventana pidiendo instalar → click en **"Instalar"**
- Esperar a que termine (puede tardar 5-10 minutos)
- Si dice "already installed" → ✅ ya lo tiene, seguir al paso 3

Esto instala **Git** y otras herramientas necesarias.

Verificar:
```bash
git --version
```
Debería mostrar algo como `git version 2.39.0` → ✅

---

### Paso 3: Instalar Python 3

Verificar si ya lo tiene:
```bash
python3 --version
```

- Si muestra `Python 3.x.x` → ✅ ya lo tiene, seguir al paso 4
- Si da error → instalarlo:

1. Ir a **https://www.python.org/downloads/**
2. Click en **"Download Python 3.x.x"** (el botón amarillo grande)
3. Abrir el `.pkg` descargado e instalar aceptando todo por defecto
4. **Cerrar y volver a abrir la Terminal**
5. Verificar: `python3 --version` → ahora debería funcionar

---

### Paso 4: Instalar Antigravity (editor de código con IA)

Antigravity es la app que usamos para programar. Es un editor de código con inteligencia artificial integrada, hecho por Google DeepMind. Es **gratis**.

1. Ir a **https://antigravity.google**
2. Click en **"Download for Mac"**
3. Se descarga un archivo `.dmg` → abrirlo
4. Arrastrar **Antigravity.app** a la carpeta **Aplicaciones**
5. Abrir Antigravity desde Aplicaciones (la primera vez: click derecho → Abrir → Abrir)
6. En la pantalla de bienvenida:
   - Si le pregunta importar settings de VS Code o Cursor → elegir **"Start fresh"** (empezar de cero)
   - Elegir tema oscuro o claro
   - **Iniciar sesión con una cuenta de Google** (le va a pedir "Sign in with Google")
7. ¡Listo! Ya tiene el editor con la IA integrada

> 💡 Con esto ya puede chatear con la IA directamente desde el editor, igual que vos. El ícono de la IA está en la barra lateral izquierda.

---

### Paso 5: Crear cuenta en GitHub

1. Abrir **https://github.com** en el navegador
2. Click en **Sign up**
3. Completar:
   - Email
   - Contraseña
   - Nombre de usuario (ej: `juan-dev` — que sea fácil de recordar)
4. Resolver el captcha
5. Verificar el email (le llega un código al correo)

#### Aceptar la invitación de colaborador:
6. Buscar en el email un correo de GitHub con asunto tipo "You've been invited to collaborate..."
7. Click en **"View invitation"** → **"Accept invitation"**

---

### Paso 6: Configurar Git con su identidad

En la Terminal:
```bash
git config --global user.name "Su Nombre"
git config --global user.email "su-email@que-uso-en-github.com"
```

> ⚠️ El email **tiene que ser el mismo** que usó para crear la cuenta de GitHub.

Verificar:
```bash
git config --global user.name
git config --global user.email
```
Debería mostrar su nombre y email → ✅

---

### Paso 7: Configurar autenticación con GitHub (SSH)

Esto es para que pueda subir cambios sin poner contraseña cada vez.

#### 8a. Generar la clave SSH
```bash
ssh-keygen -t ed25519 -C "su-email@que-uso-en-github.com"
```
- Presionar **Enter** 3 veces (acepta ubicación por defecto, sin contraseña)

#### 8b. Copiar la clave pública
```bash
cat ~/.ssh/id_ed25519.pub | pbcopy
```
> Esto copia la clave al portapapeles (no se ve nada, pero se copió).

#### 8c. Agregar la clave en GitHub
1. Ir a **https://github.com/settings/ssh/new**
2. **Title**: escribir algo como `Mi MacBook`
3. **Key**: pegar con **⌘ Cmd + V** (lo que se copió en el paso anterior)
4. Click en **"Add SSH key"**
5. Poner la contraseña de GitHub si la pide

#### 8d. Probar que funciona
```bash
ssh -T git@github.com
```
- Si pregunta "Are you sure you want to continue connecting?" → escribir **yes** + Enter
- Debería decir: `Hi [su-usuario]! You've successfully authenticated...` → ✅

---

### Paso 8: Clonar el repositorio

```bash
cd ~/Desktop
git clone git@github.com:pablolawson/limoni.git
cd limoni
```

Verificar:
```bash
ls
```
Debería ver:
```
ONBOARDING.md    deploy.sh        index.html       products.json    style.css
PASO_A_PASO.md   generate_complete.py  images       script.js        sync_products.py
```
✅ ¡El proyecto está en su Mac!

---

### Paso 9: Abrir el proyecto en Antigravity

1. Abrir **Antigravity** desde Aplicaciones
2. Click en **File → Open Folder** (o **⌘ Cmd + O**)
3. Navegar a **Desktop → limoni** → click en **Open**

> Esto abre Antigravity con toda la carpeta del proyecto. Puede explorar todos los archivos desde la barra lateral izquierda.

---

### Paso 10: Ver el sitio funcionando en su computadora

Abrir una **nueva pestaña** de Terminal en Antigravity (click en **Terminal → New Terminal**, o **⌃ Ctrl + `**):

```bash
python3 -m http.server 8000
```

Abrir el navegador en: **http://localhost:8000**

> 🎉 **Debería ver el sitio de Limoni funcionando en su Mac.**
>
> Para parar el servidor: presionar **Ctrl + C** en la terminal.

---

### Paso 11: Hacer su primer cambio, commit y push

Este es el momento clave — su primer aporte real al proyecto.

#### 11a. Editar un archivo

En Antigravity, abrir `ROADMAP.md` desde la barra lateral y agregar una línea al final, dentro de "Ideas futuras":
```markdown
- [ ] Idea de [su nombre]: lo que se le ocurra
```

Guardar con **⌘ Cmd + S**.

#### 11b. Ver qué cambió

En la Terminal:
```bash
git status
```
Va a mostrar:
```
modified:   ROADMAP.md
```

#### 11c. Ver el detalle del cambio
```bash
git diff
```
En verde lo que agregó, en rojo lo que borró.

#### 11d. Agregar los cambios
```bash
git add -A
```

#### 11e. Hacer el commit
```bash
git commit -m "docs: mi primer commit 🎉"
```

#### 11f. Subir a GitHub
```bash
git push
```

#### 11g. Verificar en GitHub
Abrir **https://github.com/pablolawson/limoni** → debería ver su commit arriba de todo. 🎉

---

---

## 🅲️ LO QUE HACEN JUNTOS — Practicar trabajo en equipo

---

### Paso 12: Simular trabajo en equipo

Esto enseña lo más importante: **sincronizar cambios entre dos personas**.

#### 🔵 Pablo (en tu Mac):
```bash
cd ~/Desktop/limoni
```
Editar `ROADMAP.md` — agregar una línea cualquiera al final.
```bash
git add -A
git commit -m "docs: Pablo agrega una idea"
git push
```

#### 🟢 Compañero (en su Mac):
```bash
git pull
```
Abrir `ROADMAP.md` → debería ver lo que Pablo agregó. ✅

> 💡 **Regla de oro:** "Siempre que arrancás a trabajar, lo primero que hacés es `git pull`."

---

### Paso 13: Trabajar con ramas (branches)

#### 🟢 Compañero:
```bash
# Crear una rama
git checkout -b feature/practica

# Hacer un cambio en cualquier archivo
# (ej: agregar un comentario en style.css)

# Guardar y subir la rama
git add -A
git commit -m "feat: practicando con ramas"
git push -u origin feature/practica
```

#### 🔵 Pablo:
Ir a **https://github.com/pablolawson/limoni** → click en el dropdown que dice **"main"** → ver que aparece la rama `feature/practica`.

#### 🟢 Compañero: volver a main
```bash
git checkout main
```

> � Explicar: "Las ramas sirven para trabajar en algo sin romper lo que ya funciona. Cuando está listo, se junta con main."

---

### Paso 14 (Bonus): Provocar y resolver un conflicto

Esto es para que pierda el miedo a los conflictos.

#### 1. 🔵 Pablo edita la línea 1 de `ROADMAP.md`:
Cambiarla a:
```markdown
# 🍋 Limoni — Roadmap (editado por Pablo)
```
```bash
git add -A && git commit -m "edit: Pablo edita título" && git push
```

#### 2. 🟢 Compañero (SIN hacer pull antes) edita la misma línea 1:
```markdown
# 🍋 Limoni — Roadmap (editado por [su nombre])
```
```bash
git add -A && git commit -m "edit: cambio título"
git push
```
> ❌ **Va a fallar** — ¡eso está bien! Es lo que queríamos.

#### 3. 🟢 Compañero resuelve el conflicto:
```bash
git pull
```
Va a decir `CONFLICT` en `ROADMAP.md`.

#### 4. Abrir `ROADMAP.md` — va a verse así:
```
<<<<<<< HEAD
# 🍋 Limoni — Roadmap (editado por [su nombre])
=======
# 🍋 Limoni — Roadmap (editado por Pablo)
>>>>>>> abc123
```

#### 5. Arreglarlo: borrar las marcas `<<<<`, `====`, `>>>>` y dejar lo correcto:
```markdown
# 🍋 Limoni — Roadmap
```

#### 6. Guardar y completar:
```bash
git add -A
git commit -m "fix: resolver conflicto en ROADMAP.md"
git push
```

> 🎉 ¡Conflicto resuelto! Explicar: "Pasa cuando dos editan la misma línea. No es grave, solo elegís qué versión mantener."

---

---

## ✅ Checklist final

| # | ¿Qué? | ¿Hecho? |
|---|---|---|
| 1 | Xcode Command Line Tools instalado | ☐ |
| 2 | Git funciona (`git --version`) | ☐ |
| 3 | Python 3 funciona (`python3 --version`) | ☐ |
| 4 | Antigravity instalado y logueado con Google | ☐ |
| 5 | Cuenta de GitHub creada | ☐ |
| 6 | Invitación de colaborador aceptada | ☐ |
| 7 | Git configurado (nombre + email) | ☐ |
| 8 | SSH configurada y funcionando | ☐ |
| 9 | Repo clonado en ~/Desktop/limoni | ☐ |
| 10 | Sitio funciona en http://localhost:8000 | ☐ |
| 11 | Primer commit + push hecho | ☐ |
| 12 | Sabe hacer `git pull` | ☐ |
| 13 | Creó una rama | ☐ |
| 14 | Resolvió un conflicto | ☐ |

---

## 🧠 Glosario rápido

| Concepto | Explicación |
|---|---|
| **Terminal** | La app donde escribís comandos |
| **Git** | Sistema que guarda el historial de cambios del proyecto |
| **GitHub** | Sitio web donde se sube el proyecto para compartirlo |
| **Repo (repositorio)** | La carpeta del proyecto + todo su historial |
| **Clone** | Descargar el repo a tu compu |
| **Commit** | Guardar un punto de control en el historial |
| **Push** | Subir tus cambios a GitHub |
| **Pull** | Bajar los cambios de GitHub a tu compu |
| **Branch (rama)** | Línea de trabajo separada, para no romper main |
| **Conflicto** | Cuando dos editaron la misma línea — Git te pide que elijas |
| **SSH** | Forma segura de conectarse a GitHub sin poner contraseña |
| **Antigravity** | Editor de código con IA integrada, hecho por Google DeepMind |

---

## ⏱️ Tiempo estimado: ~60 minutos

| Paso | Minutos |
|---|---|
| Terminal + Xcode tools + Git | 10 |
| Python 3 | 3 |
| Antigravity | 5 |
| GitHub + SSH | 12 |
| Clonar + ver sitio | 3 |
| Primer commit + push | 10 |
| Trabajo en equipo + ramas | 10 |
| Conflicto (bonus) | 8 |
| **Total** | **~63 min** |
