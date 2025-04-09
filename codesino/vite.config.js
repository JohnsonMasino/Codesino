import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // Import Tailwind Vite plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],  // Add tailwindcss plugin to the plugins array
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
