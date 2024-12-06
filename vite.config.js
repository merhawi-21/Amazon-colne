import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  build: {
    chunkSizeWarningLimit: 1000, // Set the warning limit to 1000 kB
  },
})
