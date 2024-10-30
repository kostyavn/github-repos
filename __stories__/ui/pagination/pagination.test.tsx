import { fireEvent } from '@testing-library/react'

import { setup } from '@setup'

import { Pagination, type IPaginationProps } from '@shared/elements/ui'

describe('Pagination', () => {
  const props: IPaginationProps = {
    current: 1,
    limit: 5,
    totalPages: 10,
    onChange: vi.fn()
  }

  it('renders', () => {
    const { getByTestId } = setup(Pagination, props)
    expect(getByTestId('pagination')).toBeInTheDocument()
  })

  it('renders correct number of pages', () => {
    const { getByText } = setup(Pagination, props)

    for (let i = 1; i <= 5; i++) {
      expect(getByText(i)).toBeInTheDocument()
    }
  })

  it('handles onChange event', async () => {
    const { getByText } = setup(Pagination, props)

    await fireEvent.click(getByText('2')) // Эмулируем клик по странице 2
    expect(props.onChange).toHaveBeenCalledWith(2)

    await fireEvent.click(getByText('3')) // Эмулируем клик по странице 3
    expect(props.onChange).toHaveBeenCalledWith(3)
  })

  it('handles onClick for previous and next buttons', async () => {
    const { getByTestId } = setup(Pagination, props)

    const nextButton = getByTestId('next')
    await fireEvent.click(nextButton)
    expect(props.onChange).toHaveBeenCalledWith(2)

    const prevButton = getByTestId('prev')
    await fireEvent.click(prevButton)
    expect(props.onChange).toHaveBeenCalledWith(2)
  })

  it('does not call onChange if on first page and clicking previous', async () => {
    const { getByTestId } = setup(Pagination, { ...props, current: 1 })

    await fireEvent.click(getByTestId('prev'))
    expect(props.onChange).toHaveBeenCalledTimes(0)
  })

  it('does not call onChange if on last page and clicking next', async () => {
    const { getByTestId } = setup(Pagination, { ...props, current: 10 })

    await fireEvent.click(getByTestId('next'))
    expect(props.onChange).toHaveBeenCalledTimes(0)
  })
})
