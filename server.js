import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// 1. CONFIGURACIÓN DEL PROXY CENTRALIZADA
const proxyConfig = createProxyMiddleware({
  target: 'https://www.chatbase.co',
  changeOrigin: true,
  followRedirects: true,
  onProxyRes: (proxyRes) => {
    // Eliminamos bloqueos de seguridad para permitir el Iframe
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
    proxyRes.headers['access-control-allow-origin'] = '*';
  },
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('Referer', 'https://www.chatbase.co/');
  }
});

// 2. MIDDLEWARE DE RUTAS (Sin usar asteriscos conflictivos)
// Esto detecta si la ruta es para el chat y aplica el proxy manual
app.use((req, res, next) => {
  const chatPaths = ['/iframe-chat', '/__cb', '/_next', '/api', '/static'];
  const isChatRequest = chatPaths.some(p => req.url.startsWith(p));

  if (isChatRequest) {
    // Si es la ruta principal del iframe, reescribimos la URL antes de pasar al proxy
    if (req.url.startsWith('/iframe-chat')) {
      req.url = '/cIP0T7fcpeuzyNU3-4Uub/help';
    }
    return proxyConfig(req, res, next);
  }
  next();
});

// 3. SERVIR ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'dist')));

// 4. MANEJO DE RUTAS SPA (React Router)
// Usamos una función en lugar de un String con '*' para evitar el PathError
app.get(/^(?!\/(api|__cb|_next|static|iframe-chat)).*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 5. INICIO DEL SERVIDOR
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
});