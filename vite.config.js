import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: '.',  // where index.html is
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000  // force dev server to run on port 3000
  }
})
