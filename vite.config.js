import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import { manifestForPlugIn } from './src/assets/manifest.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/assets/test/setup.js',
    css: true,
  },
})
