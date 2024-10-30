import { setup } from '@setup'

import { Icon, type IIconProps } from '@shared/elements/svg'

describe('Icon', () => {
  const props: IIconProps = {
    icon: 'outline/AcademicCapIcon',
    onClick: vi.fn(),
    onFocus: vi.fn(),
    onBlur: vi.fn(),
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn()
  }

  it('renders', () => {
    const { getByTestId } = setup(Icon, props)

    expect(getByTestId('icon')).toBeInTheDocument()
  })

  it('handles onClick event', async () => {
    const { click, getByTestId } = setup(Icon, props)

    await click(getByTestId('icon'))
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('handles onMouseEnter/onMouseLeave events', async () => {
    const { getByTestId, hover, unhover } = setup(Icon, props)

    await hover(getByTestId('icon'))

    expect(props.onMouseEnter).toHaveBeenCalledTimes(1)
    expect(props.onMouseLeave).toHaveBeenCalledTimes(0)

    await unhover(getByTestId('icon'))

    expect(props.onMouseEnter).toHaveBeenCalledTimes(1)
    expect(props.onMouseLeave).toHaveBeenCalledTimes(1)
  })
})
