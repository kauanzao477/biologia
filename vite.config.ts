import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore
import { handleAIChat } from './server/aiHandler.js'

function bioChordataBackendPlugin(): Plugin {
  return {
    name: 'biochordata-backend-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/chat' || req.url?.startsWith('/api/chat?')) {
          handleAIChat(req, res);
        } else {
          next();
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/chat' || req.url?.startsWith('/api/chat?')) {
          handleAIChat(req, res);
        } else {
          next();
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    bioChordataBackendPlugin()
  ],
})
