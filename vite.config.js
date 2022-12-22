// import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'assets',
  build: {
    outDir: 'dist',
    rollupOptions: {

      input: {
        main: 'assets/js/main.js',
      },

      output: {
        entryFileNames: 'bundle.js'
      }

    },
  },
})