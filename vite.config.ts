import 'dotenv/config';
import fs from 'node:fs';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@mocks': fileURLToPath(new URL('./src/_mocks', import.meta.url))
    }
  },
  server: {
    host: true,
    https:
      process.env.VITE_USE_HTTPS === 'true'
        ? {
            key: fs.readFileSync('./certs/localhost+2-key.pem'),
            cert: fs.readFileSync('./certs/localhost+2.pem')
          }
        : undefined,
    proxy:
      process.env.VITE_USE_PROXY === 'true'
        ? {
            '/remote-api': {
              target: process.env.VITE_REMOTE_SERVER_API_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/remote-api/, '')
            },
            '/local-api': {
              target: process.env.VITE_LOCAL_SERVER_API_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/local-api/, '')
            }
          }
        : undefined
  },
  preview: {
    port: Number(process.env.VITE_PREVIEW_PORT) || 5173
  }
});
