import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
  ],
  server: {
    proxy: {
      '/iframe-chat': {
        target: 'https://www.chatbase.co/cIP0T7fcpeuzyNU3-4Uub/help',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/iframe-chat/, ''),
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            delete proxyRes.headers['x-frame-options'];
            delete proxyRes.headers['content-security-policy'];
            proxyRes.headers['access-control-allow-origin'] = '*';
          });
        }
      },
      '/api': {
        target: 'https://www.chatbase.co',
        changeOrigin: true,
        secure: false
      },
      '/_next': {
        target: 'https://www.chatbase.co',
        changeOrigin: true,
        secure: false
      },
      '/__cb': {
        target: 'https://www.chatbase.co',
        changeOrigin: true,
        secure: false
      },
      '/static': {
        target: 'https://www.chatbase.co',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
