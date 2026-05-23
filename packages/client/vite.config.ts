import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const dir = path.dirname(fileURLToPath(import.meta.url));
const apiOrigin = process.env.FOODMAPPER_API_ORIGIN ?? 'http://127.0.0.1:3000';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@food-mapper/shared': path.resolve(dir, '../shared/src/index.ts'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: apiOrigin,
        changeOrigin: true,
      },
    },
  },
});
