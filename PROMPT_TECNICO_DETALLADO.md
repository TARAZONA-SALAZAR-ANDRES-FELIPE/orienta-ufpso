# 📘 PROMPT COMPLETO Y TÉCNICO - OrientaUFPSO

## 🎯 OBJETIVO

Replicar exactamente una PWA React moderna llamada **OrientaUFPSO** - plataforma institucional para la Universidad Francisco de Paula Santander Seccional Ocaña.

---

## 📦 STACK TECNOLÓGICO EXACTO

```json
{
  "name": "luck",
  "version": "0.0.0",
  "type": "module",
  "dependencies": {
    "concurrently": "^9.2.1",
    "express": "^5.2.1",
    "http-proxy-middleware": "^3.0.5",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-router-dom": "^7.14.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.1",
    "vite": "^8.0.10",
    "vite-plugin-pwa": "latest"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "server": "node server.js",
    "start": "concurrently \"npm run server\" \"npm run dev\""
  }
}
```

---

## 🗂️ ESTRUCTURA EXACTA DE CARPETAS

```
Luck/
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Glosario.jsx
│   │   ├── Mapa.jsx
│   │   └── ChatHelp.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── index.html
├── public/
├── server.js
├── vite.config.js
├── package.json
└── eslint.config.js
```

---

## 🎨 VARIABLES CSS GLOBALES (:root)

```css
:root {
  --primary: #e03b3e;
  --primary-light: #f44747;
  --primary-dark: #c42c2f;
  --secondary: #1a1a1a;
  --accent: #ff6b6b;
  --accent-light: #ffe5e5;
  --white: #ffffff;
  --gray-light: #f8f9fa;
  --gray-lighter: #f0f2f5;
  --gray-dark: #2c3e50;
  --text-light: #7f8c8d;
  --border: #e8ecf1;

  --shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 16px 40px rgba(0, 0, 0, 0.16);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 16px rgba(224, 59, 62, 0.1);

  --transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  color: #2c3e50;
}
```

---

## 📄 COMPONENTES EN DETALLE

### **1️⃣ Navbar.jsx**

**Props:** Ninguno  
**Estado:** useLocation()  
**Funcionalidades:**

- Logo importado de `../assets/logo.png` con altura 40px
- Link "UFPS Ocaña" lleva a "/"
- Menú: Links a "/help" (Consultas IA), "/glosario" (Glosario), "/mapa" (Mapa)
- Link "Inicio" solo visible si `location.pathname !== "/"`
- Efecto hover: background gradiente (var(--primary) → var(--accent)) entra de izquierda
- Navbar: display flex, justify-content space-between, align-items center
- Altura: 70px fija

```jsx
// Estructura HTML
<nav className="navbar">
  <div className="nav-container">
    <Link to="/" className="nav-logo">
      <img src={logo} alt="UFPS Logo" style={{ height: "40px" }} />
      <h2>UFPS Ocaña</h2>
    </Link>
    <ul className="nav-menu">
      {condition && (
        <li>
          <Link to="/">Inicio</Link>
        </li>
      )}
      <li>
        <Link to="/help">Consultas IA</Link>
      </li>
      <li>
        <Link to="/glosario">Glosario</Link>
      </li>
      <li>
        <Link to="/mapa">Mapa</Link>
      </li>
    </ul>
  </div>
</nav>
```

---

### **2️⃣ Footer.jsx**

**Estructura:** 3 columnas responsivas  
**Mostrado en:** Home, Glosario, Mapa  
**OCULTO en:** ChatHelp (/help)

**Columnas:**

1. **Navegación Rápida:** Enlaces a todas las rutas (/, /glosario, /mapa, /help)
2. **Información:** Privacidad, Términos, Contacto, Soporte
3. **Sobre:** Párrafo sobre OrientaUFPSO

**Footer Bottom:** Copyright + año dinámico `new Date().getFullYear()`

**Estilos:**

- Background: gradiente oscuro (var(--gray-dark) → var(--secondary))
- Grid: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Gap: 2.5rem
- Color de texto: rgba(255,255,255, 0.85)
- Efectos hover: color var(--accent-light), translateX(4px)

---

### **3️⃣ Home.jsx**

**Estructura:**

```jsx
<div className="home">
  <section className="welcome">
    <h1>Bienvenido a OrientaUFPSO</h1>
    <p>Tu guía institucional para...</p>
  </section>

  <section className="support-card">
    <div className="support-banner">
      <h2>¿Tienes dudas? Usa el chat de soporte</h2>
      <p>Si tu pregunta no está en el glosario...</p>
      <a href="/help" className="chat-button">
        Abrir chat de soporte
      </a>
    </div>
  </section>
</div>
```

**Estilos:**

- `.welcome`: padding 3.5rem, border-radius 20px, background gradiente rgba(224,59,62, 0.08)
- `.support-banner`: gradient red (var(--primary) → var(--accent)), padding 3rem
- `.chat-button`: background white, color var(--primary), padding 0.95rem 2.5rem
- Animaciones: fadeInDown, float en esferas de fondo

---

### **4️⃣ Glosario.jsx**

**Datos:** Array de 6 términos predefinidos

```javascript
const terms = [
  { term: "Homologación", description: "Proceso para reconocer créditos..." },
  { term: "Fraccionamiento", description: "Opción de dividir el pago..." },
  // ... más términos
];
```

**Funcionalidad:**

- State: `searchTerm` y `filteredTerms`
- Input busca en term O description (case-insensitive)
- Filtro dinámico en tiempo real
- Mensaje "No se encontraron términos" si array vacío

**Estilos:**

- Input: border 2px, radius 14px, focus con transform translateY(-3px)
- `.term-item`: border-left 5px var(--primary), hover translateX(10px)
- Grid: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`

---

### **5️⃣ Mapa.jsx**

**Datos:** Array de 5 bloques

```javascript
const bloques = [
  { nombre: "Bloque A", descripcion: "Salones de clase..." },
  { nombre: "Bloque B", descripcion: "Aulas para carreras..." },
  // ... más bloques
];
```

**Estructura:**

```jsx
<div className="mapa-page">
  <h1>Mapa del Campus UFPS Ocaña</h1>
  <p>Explora las instalaciones...</p>
  <div className="bloques-grid">
    {bloques.map((bloque) => (
      <div className="bloque-card">
        <h3>{bloque.nombre}</h3>
        <p>{bloque.descripcion}</p>
      </div>
    ))}
  </div>
</div>
```

**Estilos:**

- Grid: `repeat(auto-fit, minmax(300px, 1fr))`
- Cards: hover translateY(-12px), esferas de fondo animadas
- Border: 1px rgba(224,59,62, 0.08)

---

### **6️⃣ ChatHelp.jsx**

**Estructura:**

```jsx
<div className="chat-container">
  <iframe
    src="https://www.chatbase.co/chatbot-iframe/xxxxx"
    className="chat-iframe"
  />
</div>
```

**Estilos:**

- `.chat-container`: width 100%, height calc(100vh - 70px), background var(--secondary)
- `.chat-iframe`: width 100%, height 100%, border none

**Nota:** Sin Footer (App.jsx detecta pathname === "/help" para NO renderizar footer)

---

### **7️⃣ App.jsx**

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// ... imports pages

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== "/help";

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/help" element={<ChatHelp />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
```

---

## 🎬 ANIMACIONES CSS

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}
```

---

## 🔧 server.js (Express)

```javascript
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3000;

app.use(
  "/help",
  createProxyMiddleware({
    target: "https://chatbase-url.com",
    changeOrigin: true,
    ignorePath: false,
    followRedirects: true,
  }),
);

app.get("(.*)", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log(`✅ Servidor Proxy en: http://localhost:${PORT}`);
});
```

---

## ⚙️ vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: { globPatterns: ["**/*.{js,css,html,ico,png,svg}"] },
      manifest: {
        name: "OrientaUFPSO",
        short_name: "OrientaUFPSO",
        description: "PWA institucional para la UFPS Ocaña",
        theme_color: "#E03B3E",
        background_color: "#FFFFFF",
        display: "standalone",
      },
    }),
  ],
});
```

---

## 📱 RESPONSIVE (@media max-width: 768px)

- Navbar: padding reducido, links más pequeños
- Cards/Grid: `grid-template-columns: 1fr`
- Font sizes: -10% a -15%
- Padding page-container: 1.25rem
- Footer: 1 columna

---

## 🚀 INSTALACIÓN PASO A PASO

```bash
# 1. Crear proyecto
npm create vite@latest OrientaUFPSO -- --template react
cd OrientaUFPSO

# 2. Instalar deps
npm install
npm install express http-proxy-middleware concurrently vite-plugin-pwa

# 3. Crear estructura de carpetas y archivos (ver 🗂️ arriba)

# 4. Reemplazar App.jsx, App.css, index.css, crear componentes

# 5. Crear server.js en raíz

# 6. Actualizar package.json con scripts

# 7. Ejecutar
npm start  # Backend (3000) + Frontend (5173/5174)
```

---

## ✅ VERIFICACIÓN FINAL

- [ ] Navbar sticky con logo gradiente
- [ ] Links con efectos hover suave
- [ ] Home solo con bienvenida + banner
- [ ] Glosario filtra en tiempo real
- [ ] Mapa muestra 5 bloques
- [ ] ChatHelp es full-screen
- [ ] Footer en 3 páginas (NO en chat)
- [ ] Animaciones suaves
- [ ] Responsive en móvil
- [ ] PWA instalable
- [ ] npm start inicia ambos servidores

---

## 🎯 RESULTADO

PWA minimalista, moderna, responsiva, con branding UFPS, navbar sticky elegante, chat IA integrado, footer profesional, animaciones suaves.
