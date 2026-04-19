import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const apiOrigin =
  process.env.FOODMAPPER_API_ORIGIN ?? 'http://127.0.0.1:3000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: apiOrigin,
        changeOrigin: true,
      },
    },
  },
});
