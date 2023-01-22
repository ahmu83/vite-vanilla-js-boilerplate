// import { resolve } from 'path'
import { defineConfig } from 'vite'

// const root = resolve(__dirname, 'assets');
// const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  // root,
  root: 'assets',
  build: {
    // outDir,
    outDir: 'dist',
    minify: false,
    minifySyntax: false,
    minifyIdentifiers: false,
    rollupOptions: {

      input: {
        main: 'assets/js/main.js',
        // main: resolve(__dirname, 'assets/js/main.js'),
      },

      output: {
        entryFileNames: 'bundle.js',
        // entryFileNames: resolve(__dirname, 'assets/dist/bundle.js'),
      }

    },
  },
})