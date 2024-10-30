import { type FC } from 'react'

import { useRepositoriesListModel } from '@entities/repository'

import { Icon } from '@shared/elements/svg'
import { Result } from '@shared/elements/ui'

export interface IRepositoriesListPageProps {}

export const RepositoriesListPage: FC<IRepositoriesListPageProps> = () => {
  const { data, loading, error } = useRepositoriesListModel()

  return (
    <section className={'page-wrapper flex-center flex-col'}>
      {loading && <div></div>}
      {error && <Result message={<h1 className={'text-red-500'}>Something went wrong...</h1>} type={'error'} />}

      <Result message={<h1>Repositories not found...</h1>} type={'empty'} />
    </section>
  )
}
