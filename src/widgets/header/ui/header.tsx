import { type FC } from 'react'

import logo from '@shared/assets/logo.png'

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header className={'wrapper flex items-start gap-x-3 py-2'}>
      <img alt={'logo'} className={'h-5 w-5'} loading={'lazy'} src={logo} />
      <p>Github Repos</p>
    </header>
  )
}
