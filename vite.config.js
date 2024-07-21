import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.jsx',  // Ensure this path is correct
      external: [],  // Add external dependencies here if needed
    },
    // Ensure that you specify the base if using a non-root directory for deployment
    base: '/',  // Adjust this if your site is deployed in a subdirectory
  },
});
