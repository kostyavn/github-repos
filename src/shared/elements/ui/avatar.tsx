import { cva, cx } from 'class-variance-authority'
import { type FC } from 'react'

import { Icon } from '@shared/elements/svg'

import { type HtmlDivProps } from '@shared/types/html'

const styles = cva('flex-center relative shrink-0 overflow-hidden rounded-full bg-gray-300 text-red-400', {
  variants: {
    size: {
      lg: 'h-32 w-32',
      md: 'h-xxxxl w-xxxxl',
      sm: 'h-xxxl w-xxxl'
    },
    withBorder: {
      true: 'border-4 border-gray-200 bg-gray-300',
      false: 'border-none'
    },
    disabled: {
      true: 'cursor-not-allowed select-none opacity-75',
      false: ''
    },
    loading: {
      true: 'skeleton',
      false: ''
    }
  },
  compoundVariants: [
    {
      disabled: false,
      withBorder: true,
      className: 'hover:border-gray-400 active:border-gray-500'
    }
  ],
  defaultVariants: {
    size: 'lg',
    disabled: false,
    loading: false,
    withBorder: false
  }
})

export interface IAvatarProps extends Omit<HtmlDivProps, 'className'> {
  /**
   * Размер аватара
   ** lg - 128px
   ** md - 40px
   * @default lg
   */
  size?: 'lg' | 'md' | 'sm'
  /**
   * Классы стилей аватара
   */
  className?: ClassName
  /**
   * Url аватарки пользователя
   */
  src?: string | null
  /**
   * Задизейблен ли аватар
   ** true - аватар задизейблен
   ** false - аватар доступен задизейблен
   * @default false
   */
  disabled?: boolean
  /**
   * Есть ли у аватара рамка
   ** true - рамка есть
   ** false - рамки нет
   * @default false
   */
  withBorder?: boolean
  /**
   * Загружается ли картинка
   ** true - загружается
   ** false - не загружается
   */
  loading?: boolean
}

export const Avatar: FC<IAvatarProps> = props => {
  const { src, className, size = 'lg', disabled = false, loading = false, withBorder = false, ...restProps } = props

  if (!src)
    return (
      <div
        className={cx(styles({ withBorder, size, disabled, loading }), className)}
        data-testid={'avatar-placeholder'}
        {...restProps}
      >
        <Icon
          className={'pointer-events-none absolute -bottom-2 h-full w-full text-neutral-400'}
          icon={'solid/UserIcon'}
        />
      </div>
    )

  return (
    <div
      className={cx(styles({ withBorder, size, disabled, loading }), className)}
      data-testid={'avatar'}
      {...restProps}
    >
      <img className={'h-full w-full object-cover'} src={src} />
    </div>
  )
}
