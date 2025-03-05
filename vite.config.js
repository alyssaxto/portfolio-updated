import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/alyssaxto.github.io/',  // Update base to match your GitHub Pages subpath
  resolve: {
    alias: {
      '@': '/src',  // Ensures @ points to the src directory
    },
  },
});
