import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      ".scss",
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'TreeSelect',
      // the proper extensions will be added
      fileName: 'treeselect'
    },
    rollupOptions: {
      output: {
        exports: "named",
        entryFileNames: 'vue-treeselect.js',
        assetFileNames: 'vue-treeselect.css'
      }
    }
  }
})
