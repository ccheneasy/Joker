import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  /** 打包时根据实际情况修改 base */
  base: '/operationrisk',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern", "legacy"
      },
    },
  },
  server: {
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    // port: 9527,
    /** 是否自动打开浏览器 */
    // open: true,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    // strictPort: false,
    /** 接口代理 */
    proxy: {
      // "/api/v1": {
      "/api/v1": {
        // target: "http://192.168.0.6:8000",
        // target: "http://192.168.0.46:18199",
        target: "http://192.168.10.157:8000",
        // target: "http://192.168.0.63:8000",
        // target: "http://192.168.10.157:13302",
        // target: "http://192.168.0.32:5001",
        // target: "http://192.168.0.24:5001",
        // ws: true,
        /** 是否允许跨域 */
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/v1/, '/v1')
        // rewrite: (path) => path.replace(/api\/v1/g, '/')
      },
      // "/stream": {
      //   target: "http://localhost:5088",
      //   ws: true,
      //   /** 是否允许跨域 */
      //   changeOrigin: true
      // }

      '/api/c': {
        target: "http://192.168.7.46:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/api\/c/g, '/api/v1')
      }
    },
    /** 预热常用文件，提高初始页面加载速度 */
    // warmup: {
    //   clientFiles: ["./src/layouts/**/*.vue"]
    // }
  },
  build: {
    /** 单个 chunk 文件的大小超过 2048KB 时发出警告 */
    // chunkSizeWarningLimit: 2048,
    /** 禁用 gzip 压缩大小报告 */
    // reportCompressedSize: false,
    /** 打包后静态资源目录 */
    // assetsDir: "static",
    // rollupOptions: {
    // output: {
    /**
     * 分块策略
     * 1. 注意这些包名必须存在，否则打包会报错
     * 2. 如果你不想自定义 chunk 分割策略，可以直接移除这段配置
     */
    // manualChunks: {
    //   vue: ["vue", "vue-router", "pinia"],
    //   element: ["element-plus", "@element-plus/icons-vue"],
    //   vxe: ["vxe-table", "vxe-table-plugin-element", "xe-utils"]
    // }
    // }
    // }
  },
  /** 混淆器 */
  esbuild: {
    /** 打包时移除 console.log */
    // pure: ["console.log"],
    /** 打包时移除 debugger */
    drop: ["debugger"],
    /** 打包时移除所有注释 */
    legalComments: "none"
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ]
})
