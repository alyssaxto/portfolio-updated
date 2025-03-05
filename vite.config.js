import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/alyssaxto.github.io/',  // This is correct for GitHub Pages
  resolve: {
    alias: {
      '@': '/src',  // Ensures @ points to the src directory
    },
  },
});
