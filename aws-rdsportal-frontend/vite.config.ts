import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, '../aws-rdsportal-backend/app/frontend'), // 直接输出到后端
    emptyOutDir: true, // 打包前清空目录
  },
  server: {
    port: 8080,
    host: true, // 开发环境允许外网访问
  },
})
