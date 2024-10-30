import { type FC } from 'react'

import { useRepositoriesListModel } from '@entities/repository'

export interface IRepositoriesListPageProps {}

export const RepositoriesListPage: FC<IRepositoriesListPageProps> = () => {
  const { data, loading, error } = useRepositoriesListModel()

  return (
    <section className={'page-wrapper'}>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
    </section>
  )
}
