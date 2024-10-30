// vitest-setup.ts
import * as matchers from '@testing-library/jest-dom/matchers'
import { expect, vi, afterEach } from 'vitest'

expect.extend(matchers)

afterEach(() => {
  vi.clearAllMocks()
})
