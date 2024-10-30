import { cx } from 'class-variance-authority'
import { nanoid } from 'nanoid'
import { type FC } from 'react'

import { Icon } from '@shared/elements/svg'
import { createArray } from '@shared/lib/create-array'

export interface IPaginationProps {
  className?: ClassName
  /**
   * Номер текущей страницы
   */
  current: number
  /**
   * Максимальное количество отображаемых кнопок пагинации
   */
  limit: number
  /**
   * Количество страниц всего
   */
  totalPages: number
  /**
   * Хэндлер изменения текущей страницы
   */
  onChange: (page: number) => void
}

export const Pagination: FC<IPaginationProps> = props => {
  const { className, current, limit, totalPages, onChange } = props

  if (!current || totalPages <= 1) return null

  const isFirstPage = current === 1
  const isLastPage = current === totalPages
  let pages = []

  if (totalPages <= limit) {
    pages = createArray(totalPages, i => i + 1)
  } else {
    // Добавление первых двух страниц
    pages.push(1, 2)

    // Если текущая страница находится далеко от второй страницы, добавьте "..."
    if (current > 4) {
      pages.push('...')
    }

    // Определение границ для страниц вокруг текущей
    const middleStart = Math.max(3, current - 1)
    const middleEnd = Math.min(totalPages - 2, current + 1)

    // Добавление средних страниц
    pages.push(...createArray(middleEnd - middleStart + 1, i => middleStart + i))

    // Если текущая страница находится далеко от предпоследней страницы, добавить "..."
    if (current < totalPages - 3) {
      pages.push('...')
    }

    // Добавление последних двух страниц
    pages.push(totalPages - 1, totalPages)
  }

  /**Переключение на предыдущую страницу */
  const handlePrevPage = () => {
    if (!isFirstPage) onChange(current - 1)
  }

  /**Переключение на следующую страницу */
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
          if (typeof page === 'number') {
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
          } else {
            return (
              <span className="mx-1" key={id}>
                {page}
              </span>
            )
          }
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
