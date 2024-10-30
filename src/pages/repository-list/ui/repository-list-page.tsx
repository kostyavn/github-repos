import { isEmpty } from 'ramda'
import { Fragment, type FC, useEffect } from 'react'

import { useRepositoryListModel, useRepositoryListStore, RepositoryCard } from '@entities/repository'

import { Loader, Pagination, Result } from '@shared/elements/ui'
import { DEFAULT_PAGE_LIMIT } from '@shared/lib/constants'

export interface IRepositoryListPageProps {}

export const RepositoryListPage: FC<IRepositoryListPageProps> = () => {
  const { loading, error } = useRepositoryListModel()

  const { repositoryList, totalRepositories, currentPage, searchQuery, setSearchQuery, setCurrentPage } =
    useRepositoryListStore(state => ({
      repositoryList: state.repositoryList,
      totalRepositories: state.totalRepositories,
      currentPage: state.currentPage,
      searchQuery: state.searchQuery,
      setSearchQuery: state.setSearchQuery,
      setCurrentPage: state.setCurrentPage
    }))

  const shouldRender = !loading && !error

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchQuery(value) // Обновляем состояние поиска в store
    setCurrentPage(1) // Сбрасываем страницу на 1
    localStorage.setItem('currentPage', '1') // Сбрасываем страницу на 1
    localStorage.setItem('cursors', '{}') // Сбрасываем курсоры
  }

  const handlePaginationChange = (newPage: number) => {
    setCurrentPage(newPage)
    localStorage.setItem('currentPage', newPage.toString())
  }

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString())
  }, [currentPage])

  return (
    <section className={'page-wrapper flex-center flex-col gap-y-3'}>
      <input
        value={searchQuery} // Устанавливаем значение из состояния
        onChange={handleSearchChange}
      />

      {loading && <Loader />}

      {error && <Result message={<h1 className={'text-red-500'}>Something went wrong...</h1>} type={'error'} />}

      {isEmpty(repositoryList) && shouldRender && (
        <Result message={<h1>Repositories not found...</h1>} type={'empty'} />
      )}

      {!isEmpty(repositoryList) && shouldRender && (
        <Fragment>
          <ul className={'grid grid-cols-1 gap-3 lg:grid-cols-5 lg:grid-rows-2'}>
            {repositoryList.map(repository => (
              <RepositoryCard key={repository.id} repository={repository} />
            ))}
          </ul>
        </Fragment>
      )}

      {!error && totalRepositories > 10 && (
        <Pagination
          current={currentPage}
          limit={DEFAULT_PAGE_LIMIT}
          totalPages={Math.ceil(totalRepositories / DEFAULT_PAGE_LIMIT)}
          onChange={handlePaginationChange}
        />
      )}
    </section>
  )
}
