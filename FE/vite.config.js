import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 後端伺服器的 URL
        changeOrigin: true, // 將請求的來源設置為目標 URL
        rewrite: (path) => path.replace(/^\/api/, ''), // 可選：重寫請求路徑
      },
    },
  }
  
})
