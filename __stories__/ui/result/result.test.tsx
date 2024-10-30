import { setup } from '@setup'

import { Result, type IResultProps } from '@shared/elements/ui'

describe('Result', () => {
  const props: IResultProps = {
    type: 'empty',
    onClick: vi.fn(),
    onFocus: vi.fn(),
    onBlur: vi.fn(),
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn()
  }

  it('renders', () => {
    const { getByTestId } = setup(Result, props)

    expect(getByTestId('result')).toBeInTheDocument()
  })

  it('handles onClick event', async () => {
    const { click, getByTestId } = setup(Result, props)

    await click(getByTestId('result'))
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('handles onMouseEnter/onMouseLeave events', async () => {
    const { getByTestId, hover, unhover } = setup(Result, props)

    await hover(getByTestId('result'))

    expect(props.onMouseEnter).toHaveBeenCalledTimes(1)
    expect(props.onMouseLeave).toHaveBeenCalledTimes(0)

    await unhover(getByTestId('result'))

    expect(props.onMouseEnter).toHaveBeenCalledTimes(1)
    expect(props.onMouseLeave).toHaveBeenCalledTimes(1)
  })
})
