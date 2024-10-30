import { type FC } from 'react'

import { Result } from '@shared/elements/ui'

export interface INotFoundPageProps {}

export const NotFoundPage: FC<INotFoundPageProps> = props => {
  return (
    <section className={'page-wrapper'}>
      <Result message={<h1>Ooops...Page not found</h1>} type={'empty'} />
    </section>
  )
}
