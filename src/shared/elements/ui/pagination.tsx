import { cx } from 'class-variance-authority'
import { nanoid } from 'nanoid'
import { type FC } from 'react'

import { Icon } from '@shared/elements/svg'
import { createArray } from '@shared/lib/create-array'

export interface IPaginationProps {
  className?: ClassName
  current: number // Номер текущей страницы
  limit: number // Максимальное количество отображаемых кнопок пагинации
  totalPages: number // Общее количество страниц
  onChange: (page: number) => void // Хэндлер изменения текущей страницы
}

export const Pagination: FC<IPaginationProps> = props => {
  const { className, current, limit, totalPages, onChange } = props

  if (!current || totalPages <= 1) return null

  const isFirstPage = current === 1
  const isLastPage = current === totalPages
  const halfLimit = Math.floor(limit / 2)

  let startPage = Math.max(1, current - halfLimit)
  let endPage = Math.min(totalPages, current + halfLimit)

  if (endPage - startPage + 1 < limit) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + limit - 1)
    } else if (endPage === totalPages) {
      startPage = Math.max(1, endPage - limit + 1)
    }
  }

  const pages = createArray(endPage - startPage + 1, i => startPage + i)

  const handlePrevPage = () => {
    if (!isFirstPage) onChange(current - 1)
  }

  const handleNextPage = () => {
    if (!isLastPage) onChange(current + 1)
  }

  return (
    <nav className={cx('w-fit', className)} data-testid="pagination" role="pagination">
      <ul className={cx('flex items-center gap-x-2')}>
        <div
          className={cx('flex-center h-8 w-8 rounded-lg', {
            'hover:bg-gray-100': !isFirstPage
          })}
        >
          <Icon
            data-testid={'prev'}
            icon={'outline/ChevronLeftIcon'}
            className={cx('h-6 w-6', {
              'cursor-pointer hover:scale-110': !isFirstPage,
              'cursor-not-allowed text-gray-300': isFirstPage
            })}
            onClick={handlePrevPage}
          />
        </div>

        {pages.map(page => {
          const id = nanoid()
          const handleChangePage = () => onChange(page)

          return (
            <li
              key={id}
              className={cx(`flex-center h-8 w-8 cursor-pointer rounded-lg bg-white font-bold`, {
                'bg-yellow-400 text-white': page === current,
                'hover:bg-gray-100': page !== current
              })}
              onClick={handleChangePage}
            >
              {page}
            </li>
          )
        })}

        <div
          className={cx('flex-center h-8 w-8 rounded-lg', {
            'hover:bg-gray-100': !isLastPage
          })}
        >
          <Icon
            data-testid={'next'}
            icon={'outline/ChevronRightIcon'}
            className={cx('h-6 w-6', {
              'cursor-pointer hover:scale-110': !isLastPage,
              'cursor-not-allowed text-gray-300': isLastPage
            })}
            onClick={handleNextPage}
          />
        </div>
      </ul>
    </nav>
  )
}
