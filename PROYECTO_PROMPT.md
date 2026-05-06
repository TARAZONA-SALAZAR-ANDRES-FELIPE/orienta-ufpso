# 🎓 Prompt para Replicar OrientaUFPSO - PWA Institucional

## 📋 DESCRIPCIÓN GENERAL DEL PROYECTO

Crea una **PWA (Progressive Web App)** moderna y minimalista llamada **OrientaUFPSO** diseñada para la Universidad Francisco de Paula Santander - Seccional Ocaña. Es una plataforma de orientación y soporte para estudiantes con integración de chatbot IA, glosario interactivo, mapa del campus y un navbar moderno sticky.

**Colores Institucionales:**

- Primario: #E03B3E (Rojo UFPS)
- Accent: #FF6B6B (Rojo claro)
- Secundario: #1a1a1a (Negro)
- Textos: #2c3e50 (Gris oscuro)

---

## 🛠️ STACK TECNOLÓGICO

**Frontend:**

- React 19.2.5 (con React Router DOM v7.14.2)
- Vite 8.0.10 (bundler/dev server)
- React Router DOM para navegación SPA
- CSS3 puro (sin Tailwind/Bootstrap)

**Backend:**

- Node.js + Express 5.2.1
- HTTP Proxy Middleware v3.0.5 (para proxy de Chatbase)
- Concurrently para ejecutar servidor + Vite simultáneamente

**PWA:**

- Vite PWA Plugin con Workbox
- Service Workers para offline support
- Manifest.json configurable

---

## 📁 ESTRUCTURA DE CARPETAS

```
Luck/
├── src/
│   ├── assets/
│   │   ├── logo.png (Logo UFPS Ocaña)
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Navbar.jsx (Navegación sticky con logo y menú)
│   │   └── Footer.jsx (Pie de página con 3 secciones)
│   ├── pages/
│   │   ├── Home.jsx (Bienvenida + Banner de soporte)
│   │   ├── Glosario.jsx (Buscador de términos)
│   │   ├── Mapa.jsx (Listado de bloques del campus)
│   │   └── ChatHelp.jsx (Iframe de Chatbase full-screen)
│   ├── App.jsx (Router principal + lógica de Footer)
│   ├── App.css (Estilos globales + componentes)
│   ├── index.css (Reset y tipografía global)
│   ├── main.jsx (Entry point React)
│   └── index.html (HTML base)
├── public/
│   └── (Favicons, PWA icons, etc.)
├── server.js (Express proxy para Chatbase)
├── vite.config.js (Configuración Vite + PWA)
├── package.json (Dependencias y scripts)
└── eslint.config.js
```

---

## 🎨 DISEÑO Y ESTILOS

### **Características Visuales:**

1. **Navbar Sticky:**
   - Alto fijo de 70px
   - Logo con efecto degradado rojo
   - Links con efecto hover deslizante (fondo gradiente entra de izq a der)
   - Responsive: Logo + menú se ajustan en móvil

2. **Paleta de Colores Global:**
   - Gradientes: Primario + Accent para títulos
   - Sombras modernas: `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12)`
   - Bordes suaves: border-radius 16px-20px

3. **Animaciones:**
   - `fadeInUp`: Elementos entran desde abajo (0.6s)
   - `fadeInDown`: Encabezados bajan suavemente
   - `float`: Esferas de fondo flotan
   - `pulse`: Animación opcional de opacidad
   - Transición smooth: `cubic-bezier(0.34, 1.56, 0.64, 1)`

4. **Cards/Elementos:**
   - Línea superior roja animada en hover
   - Elevación: `transform: translateY(-12px)`
   - Efecto radial de fondo al hover
   - Sombras aumentan en hover

5. **Footer:**
   - Gradiente oscuro (gris-dark → black)
   - 3 columnas responsivas (Navegación, Información, Sobre)
   - Copyright con año dinámico

### **Tipografía:**

- Font: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI'`)
- Pesos: 600-800 para títulos, 500 para texto
- Letter-spacing: -0.5px a -1px (condensado moderno)

---

## 📄 COMPONENTES PRINCIPALES

### **1. Navbar.jsx**

```
✓ Import logo desde assets
✓ useLocation() para detectar pathname
✓ Link envuelto en "/" (Link a home)
✓ Logo con height 40px + marginRight
✓ Menú: "Consultas IA", "Glosario", "Mapa"
✓ Link "Inicio" condicional (solo si pathname !== "/")
```

### **2. Footer.jsx**

```
✓ 3 Secciones de enlaces
✓ Año dinámico: new Date().getFullYear()
✓ Links internos con react-router <Link>
✓ Responsivo: Grid 1-3 columnas según pantalla
✓ Animaciones fadeInUp
```

### **3. Home.jsx**

```
✓ Sección "Bienvenido a OrientaUFPSO"
✓ Banner rojo de soporte con:
  - Título "¿Tienes dudas? Usa el chat de soporte"
  - Botón "Abrir chat de soporte" → /help
  - Esferas flotantes de fondo
✓ SIN sección "¿Qué necesitas hoy?" (removida)
✓ page-container class
```

### **4. Glosario.jsx**

```
✓ Input de búsqueda (buscador fuzzy)
✓ Términos predefinidos: Homologación, Fraccionamiento, Supletorio, etc.
✓ Filtro por término O descripción
✓ Resultado dinámico: listado de term-item
✓ Mensaje "No se encontraron términos"
✓ term-item: borde izq rojo, efecto hover translateX
```

### **5. Mapa.jsx**

```
✓ Array de bloques: Bloque A, B, C, Administrativo, Bienestar
✓ Grid de bloque-card con descripción
✓ Efectos hover: elevación + esferas de fondo animadas
✓ Nombre + descripción en cada card
```

### **6. ChatHelp.jsx**

```
✓ iframe full-screen (100% width/height)
✓ Sin footer (página exclusiva)
✓ Altura: calc(100vh - 70px)
✓ ID/src del iframe configurable (ej: Chatbase URL)
✓ Manejo de headers para bypass CORS
```

### **7. App.jsx**

```
✓ Router + Routes (react-router-dom v7)
✓ Rutas: "/" (Home), "/glosario", "/mapa", "/help" (ChatHelp)
✓ useLocation() para detectar pathname
✓ Footer condicional: mostrar si pathname !== "/help"
✓ Navbar siempre visible
```

---

## 🎬 FUNCIONALIDADES CLAVE

1. **Navegación SPA:** Cambio de páginas sin reload (React Router)
2. **Buscador Fuzzy:** Glosario filtra por término o descripción en tiempo real
3. **Responsive Design:** Adaptable a móvil, tablet, desktop
4. **Animaciones Smooth:** Transiciones visuales profesionales
5. **Sticky Navbar:** Barra de nav siempre visible al scroll
6. **PWA:** Instalable en dispositivos, offline support
7. **Proxy para Chatbase:** Server.js redirige /help al iframe de Chatbase
8. **Footer Dinámico:** Año actualizado automáticamente

---

## 📦 ARCHIVOS CLAVE

### **server.js** (Express Proxy)

```javascript
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3000;

// Proxy a Chatbase
app.use(
  "/help",
  createProxyMiddleware({
    target: "https://chatbase-url-del-proyecto.com",
    changeOrigin: true,
    ignorePath: false,
    followRedirects: true,
    headers: {
      "X-Forwarded-For": "client-ip",
      "X-Forwarded-Proto": "https",
    },
  }),
);

// Ruta comodín
app.get("(.*)", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => console.log(`✅ Proxy en http://localhost:${PORT}`));
```

### **vite.config.js** (Vite + PWA)

```javascript
✓ React plugin habilitado
✓ VitePWA configurado con:
  - Manifest name: "OrientaUFPSO"
  - Theme color: "#E03B3E"
  - Display: "standalone"
  - Icons: 192x192, 512x512
  - Workbox glob patterns
```

### **package.json** (Scripts)

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "server": "node server.js",
  "start": "concurrently \"npm run server\" \"npm run dev\""
}
```

---

## 🎨 VARIABLES CSS GLOBALES

```css
:root {
  --primary: #e03b3e;
  --primary-light: #f44747;
  --primary-dark: #c42c2f;
  --accent: #ff6b6b;
  --accent-light: #ffe5e5;
  --secondary: #1a1a1a;
  --white: #ffffff;
  --gray-dark: #2c3e50;
  --text-light: #7f8c8d;
  --gray-light: #f8f9fa;
  --gray-lighter: #f0f2f5;
  --border: #e8ecf1;

  /* Sombras */
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 16px 40px rgba(0, 0, 0, 0.16);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 16px rgba(224, 59, 62, 0.1);

  /* Transiciones */
  --transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
@media (max-width: 768px) {
  /* Navbar: flex-direction row, gap 0.5rem */
  /* Cards: grid-template-columns 1fr */
  /* Font sizes: reducir 10-15% */
  /* Padding: ajustar a 1.25rem */
}
```

---

## 🚀 INSTALACIÓN Y USO

```bash
# 1. Crear proyecto Vite + React
npm create vite@latest OrientaUFPSO -- --template react
cd OrientaUFPSO

# 2. Instalar dependencias
npm install
npm install express http-proxy-middleware concurrently
npm install vite-plugin-pwa workbox-cli

# 3. Copiar archivos (src/, public/, etc.)

# 4. Crear server.js en raíz

# 5. Actualizar package.json con scripts

# 6. Ejecutar
npm start  # Inicia Express (puerto 3000) + Vite (puerto 5173/5174)
```

---

## 🔐 CONFIGURACIÓN DE CHATBASE

1. Crear cuenta en Chatbase.co
2. Generar chatbot institucional
3. Obtener iframe URL: `https://www.chatbase.co/chatbot-iframe/xxxxx`
4. Configurar `ChatHelp.jsx` con la URL correcta
5. Proxy en `server.js` redirige solicitudes a la URL de Chatbase

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Estructura de carpetas correcta
- [ ] Componentes React (Navbar, Footer, Home, Glosario, Mapa, ChatHelp)
- [ ] React Router configurado (4 rutas)
- [ ] Estilos CSS con animaciones y gradientes
- [ ] Navbar sticky con logo y menú
- [ ] Footer condicional (sin mostrar en /help)
- [ ] Buscador de glosario funcional
- [ ] ChatHelp con iframe responsive
- [ ] Express proxy configurado
- [ ] Package.json con scripts (dev, build, server, start)
- [ ] Vite PWA plugin habilitado
- [ ] Responsive design (móvil, tablet, desktop)
- [ ] Sin sección "¿Qué necesitas hoy?" en Home

---

## 📝 NOTAS IMPORTANTES

1. **Variables CSS:** Usar :root para facilitar cambios de color global
2. **Animaciones:** Usar `cubic-bezier(0.34, 1.56, 0.64, 1)` para efecto bounce suave
3. **Footer:** Visible en Home, Glosario, Mapa; NO en ChatHelp
4. **Navbar:** Siempre visible, sticky, 70px de alto
5. **Responsive:** Priorizar mobile-first en media queries
6. **PWA:** Manifest debe tener name, short_name, theme_color, icons
7. **Proxy:** Configurar headers para bypass de CORS en Chatbase
8. **Performance:** Lazy load de imágenes, optimizar assets

---

## 🎯 RESULTADO ESPERADO

Una PWA institucional moderna, responsiva y performante con:

- ✅ Navbar elegante con branding UFPS
- ✅ Página de inicio minimalista
- ✅ Glosario buscable con términos académicos
- ✅ Mapa del campus interactivo
- ✅ Chat IA integrado (Chatbase)
- ✅ Footer profesional
- ✅ Animaciones suaves y modernas
- ✅ Soporte offline (PWA)
- ✅ Instalable en dispositivos
- ✅ Fully responsive

---

**Proyecto completado y listo para producción en UFPS Ocaña 🎓**
