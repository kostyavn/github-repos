import { cx } from 'class-variance-authority'
import { type FC } from 'react'

import { type HtmlDivProps } from '@shared/types/html'

import { Icon } from '../svg'

export interface ILoaderProps extends Omit<HtmlDivProps, 'className'> {
  className?: string
}

export const Loader: FC<ILoaderProps> = props => {
  const { className, ...restProps } = props
  return (
    <div className={cx('flex-center flex-col gap-y-4', className)} {...restProps}>
      <Icon className={'animate-spin'} icon={'outline/FaceSmileIcon'} size={'md'} />
      <h1>Loading...</h1>
    </div>
  )
}
