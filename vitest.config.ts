/// <reference types="vitest" />

import path from 'path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    deps: {
      optimizer: {
        web: { enabled: true }
      }
    },
    testTimeout: 10000,
    globals: true,
    environment: 'jsdom',
    setupFiles: '.vitest/setup.ts',
    coverage: {
      reporter: ['text', 'html', 'json', 'json-summary'],
      provider: 'v8',
      exclude: ['node_modules/', '.vitest/setup.ts', 'src/api/', 'src/hocs', 'src/shared/elements/svg/icons/']
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
      '@tests': path.resolve('__tests__'),
      '@twconfig': path.resolve('tailwind.config.ts'),
      '@setup': path.resolve('__tests__/setup-util.tsx')
    }
  }
})
