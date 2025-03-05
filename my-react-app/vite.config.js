import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/2025portfolio/",
  resolve: {
    alias: {
      '@': '/src',  // Ensures @ points to the src directory
    }
  }
});
