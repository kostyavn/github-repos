import { useQuery } from '@apollo/client'

import { api } from '@shared/api'

import { useRepositoryListStore } from '../store/use-repository-list-store'
import { type Repository } from '../types'

type RepositoryListResponse = {
  search: {
    repositoryCount: number
    edges: Array<{
      node: Repository.Node
    }>
    pageInfo: {
      endCursor: Nullable<string>
      hasNextPage: boolean
    }
  }
}

export const useRepositoryListModel = () => {
  const setRepositoryList = useRepositoryListStore(state => state.setRepositoryList)
  const setTotalRepositories = useRepositoryListStore(state => state.setTotalRepositories)

  return useQuery<RepositoryListResponse>(api.query.REPOSITORIES_LIST, {
    variables: { query: 'stars>4', first: 10 },
    onCompleted: response => {
      const { search } = response
      const { edges, repositoryCount } = search

      setRepositoryList(edges.map(ed => ed.node))

      setTotalRepositories(repositoryCount)
    }
  })
}
