import { defineConfig, loadEnv } from 'vite'
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
export default defineConfig(({ mode }) => {
  // Vite only exposes VITE_* variables to the client. The AI handler runs on the
  // server, so load every .env value and expose the API key to process.env.
  const env = loadEnv(mode, process.cwd(), '');

  if (env.GEMINI_API_KEY) {
    process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;
  }
  if (env.GEMINI_MODEL) {
    process.env.GEMINI_MODEL = env.GEMINI_MODEL;
  }

  console.log(`[BioChordata] Modelo Gemini: ${process.env.GEMINI_MODEL || 'gemini-3.8-flash (padrão)'}`);

  return {
    plugins: [
      tailwindcss(),
      react(),
      bioChordataBackendPlugin()
    ],
  };
})
