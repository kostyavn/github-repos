import { cx } from 'class-variance-authority'
import { type FC } from 'react'

import { type HtmlSectionProps } from '@shared/types/html'

import { Icon, type IconType } from '../svg'

export interface IResultProps extends Omit<HtmlSectionProps, 'className'> {
  className?: ClassName
  type: 'error' | 'empty'
  message?: Children
}

export const Result: FC<IResultProps> = props => {
  const { className, type, message, ...restProps } = props

  const icon: IconType = type === 'empty' ? 'outline/WrenchIcon' : 'outline/FaceFrownIcon'

  return (
    <section className={cx('page-wrapper flex-center flex-col gap-4', className)} data-testid={'result'} {...restProps}>
      <Icon className={cx({ '': type === 'empty', 'text-red-500': type === 'error' })} icon={icon} size={'lg'} />
      {message}
    </section>
  )
}
