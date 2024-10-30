import { type FC } from 'react'

import { useRepositoriesListModel } from '@entities/repository'

export interface IRepositoriesListPageProps {}

export const RepositoriesListPage: FC<IRepositoriesListPageProps> = () => {
  const { data, loading, error } = useRepositoriesListModel()
  console.log('error: ', error)
  return <section>RepositoriesList</section>
}
