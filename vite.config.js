import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Make sure this matches your GitHub repo name
  resolve: {
    alias: {
      '@': '/src',  // Ensures @ points to the src directory
    }
  }
});
