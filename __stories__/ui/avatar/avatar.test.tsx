import { setup } from '@setup'

import { Avatar } from '@shared/elements/ui'

describe('Avatar', () => {
  const props = {
    src: 'test'
  }

  it('renders', async () => {
    const { setProps, queryByTestId } = setup(Avatar, props)

    expect(queryByTestId('avatar')).toBeInTheDocument()

    setProps({ src: undefined })

    expect(queryByTestId('avatar')).not.toBeInTheDocument()

    expect(queryByTestId('avatar-placeholder')).toBeInTheDocument()
  })

  it('renders with size prop', async () => {
    const { setProps, queryByTestId } = setup(Avatar, props)

    expect(queryByTestId('avatar')).toBeInTheDocument()
    expect(queryByTestId('avatar')).toHaveClass('w-32 h-32')
    setProps({ size: 'md' })
    expect(queryByTestId('avatar')).toBeInTheDocument()
    expect(queryByTestId('avatar')).toHaveClass('w-16 h-16')
    setProps({ size: 'sm' })
    expect(queryByTestId('avatar')).toHaveClass('w-8 h-8')
  })
})
