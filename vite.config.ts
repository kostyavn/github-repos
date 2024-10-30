import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

/// <reference types="vite/client" />

export const hash = Math.floor(Math.random() * 90000) + 10000

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/github-repos/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@app': path.resolve('src/app'),
      '@processes': path.resolve('src/processes'),
      '@pages': path.resolve('src/pages'),
      '@widgets': path.resolve('src/widgets'),
      '@features': path.resolve('src/features'),
      '@entities': path.resolve('src/entities'),
      '@shared': path.resolve('src/shared'),

      '@twconfig': path.resolve('tailwind.config.ts')
    }
  }
})
