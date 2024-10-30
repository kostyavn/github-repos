import { cleanup } from '@testing-library/react'

import { createArray } from '@shared/lib/create-array'

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe('lib', () => {
  it('createArray', () => {
    const item = (index: number) => index
    const result = createArray(3, item)
    expect(result).toStrictEqual([0, 1, 2])
  })
})
