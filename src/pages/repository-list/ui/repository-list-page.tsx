import { isEmpty } from 'ramda'
import { type FC } from 'react'

import { useRepositoryListModel, useRepositoryListStore, RepositoryCard } from '@entities/repository'

import { Loader, Result } from '@shared/elements/ui'

export interface IRepositoryListPageProps {}

export const RepositoryListPage: FC<IRepositoryListPageProps> = () => {
  const { loading, error } = useRepositoryListModel()
  const repositoryList = useRepositoryListStore(state => state.repositoryList)

  const shouldRender = !loading && !error

  return (
    <section className={'page-wrapper flex-center flex-col'}>
      {loading && <Loader />}

      {error && <Result message={<h1 className={'text-red-500'}>Something went wrong...</h1>} type={'error'} />}

      {isEmpty(repositoryList) && shouldRender && (
        <Result message={<h1>Repositories not found...</h1>} type={'empty'} />
      )}

      {!isEmpty(repositoryList) && shouldRender && (
        <ul className={'gird-cols-1 grid gap-3 lg:grid-cols-5 lg:grid-rows-2'}>
          {repositoryList.map(repository => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </ul>
      )}
    </section>
  )
}
