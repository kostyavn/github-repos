import { cva, cx } from 'class-variance-authority'
import { type FC } from 'react'

import { Icon } from '@shared/elements/svg'
import { type HtmlDivProps } from '@shared/types/html'

const styles = cva('flex-center relative shrink-0 overflow-hidden rounded-full bg-gray-300 text-red-400', {
  variants: {
    size: {
      lg: 'h-32 w-32',
      md: 'h-16 w-16',
      sm: 'h-8 w-8'
    }
  },
  defaultVariants: {
    size: 'lg'
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
  className?: ClassName
  /**
   * Url аватарки пользователя
   */
  src?: string | null
}

export const Avatar: FC<IAvatarProps> = props => {
  const { src, className, size = 'lg', ...restProps } = props

  if (!src)
    return (
      <div className={cx(styles({ size }), className)} data-testid={'avatar-placeholder'} {...restProps}>
        <Icon
          className={'pointer-events-none absolute -bottom-2 h-full w-full text-neutral-400'}
          icon={'solid/UserIcon'}
        />
      </div>
    )

  return (
    <div className={cx(styles({ size }), className)} data-testid={'avatar'} {...restProps}>
      <img className={'h-full w-full object-cover'} src={src} />
    </div>
  )
}
