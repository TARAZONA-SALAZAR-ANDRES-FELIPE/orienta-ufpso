# 🎯 PROMPT CORTO PARA REPLICAR ORIENTAUFPSO

**Crea una PWA React + Vite moderna llamada OrientaUFPSO (plataforma institucional para UFPS Ocaña) con las siguientes características:**

## REQUISITOS TÉCNICOS

- Stack: React 19 + Vite 8 + React Router DOM v7 + Express + Workbox PWA
- Routing: "/" (Home), "/glosario", "/mapa", "/help" (ChatHelp)
- Port backend: 3000 | Port frontend: 5173 (ambos con concurrently)
- Usar CSS3 puro (sin frameworks CSS)

## ESTRUCTURA Y COMPONENTES

```
src/
├── components/
│   ├── Navbar.jsx (sticky 70px, logo + 3 links, efecto hover gradiente)
│   └── Footer.jsx (3 columnas: Navegación/Información/Sobre, solo en Home/Glosario/Mapa)
├── pages/
│   ├── Home.jsx (bienvenida + banner rojo de soporte con botón a /help)
│   ├── Glosario.jsx (input buscador + listado de términos con border-left rojo)
│   ├── Mapa.jsx (grid de bloques campus con descriptions)
│   └── ChatHelp.jsx (iframe full-screen sin footer)
├── App.jsx (Router + Footer condicional)
├── App.css (estilos + animaciones)
└── index.css (reset + typography)
```

## DISEÑO Y COLORES

- Primario: #E03B3E | Accent: #FF6B6B | Dark: #1a1a1a | Text: #2c3e50
- Animaciones: fadeInUp (0.6s), hover elevación (-12px), línea superior roja animada en cards
- Gradientes en títulos: primarylighto + accent
- Sombras modernas: 0 8px 24px rgba(0, 0, 0, 0.12)
- Border-radius: 16-20px | Transición: cubic-bezier(0.34, 1.56, 0.64, 1)
- Font: System fonts con pesos 500-800, letter-spacing -0.5px a -1px

## FUNCIONALIDADES

1. **Home:** Título "Bienvenido a OrientaUFPSO" + Banner rojo "¿Tienes dudas?" con botón al chat
2. **Glosario:** Input buscador que filtra términos por nombre O descripción en tiempo real
3. **Mapa:** Grid de 5 bloques (Bloque A-C, Administrativo, Bienestar)
4. **Chat:** Iframe de Chatbase full-screen sin footer
5. **Navbar:** Logo UFPS con gradiente, link Home condicional, effects hover suave
6. **Footer:** Links + copyright con año dinámico (solo en 3 primeras páginas)

## CONFIGURACIÓN IMPORTANTE

- server.js: Express proxy a Chatbase (/help)
- vite.config.js: PWA plugin (manifest name: "OrientaUFPSO", theme: "#E03B3E", standalone)
- package.json scripts: dev, build, server, start (concurrently)
- NO incluir sección "¿Qué necesitas hoy?" en Home
- Footer: condicional useLocation() → pathname !== "/help"

## RESULTADO FINAL

PWA minimalista, moderna, responsiva, instalable, con animaciones suaves, branding UFPS, navbar sticky, chat IA integrado, y pies de página en todas las páginas excepto chat.

---

**Coloca este prompt en cualquier IA (ChatGPT, Claude, etc.) para que replique el proyecto completo.**
