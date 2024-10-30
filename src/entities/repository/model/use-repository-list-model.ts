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
  const currentPage = useRepositoryListStore(state => state.currentPage)
  const searchQuery = useRepositoryListStore(state => state.searchQuery)

  const storedCursorsString = localStorage.getItem('cursors')
  const cursors = storedCursorsString ? JSON.parse(storedCursorsString) : {}

  return useQuery<RepositoryListResponse>(api.query.REPOSITORIES_LIST, {
    variables: {
      query: searchQuery || 'stars>4',
      first: 10,
      after: currentPage > 1 ? cursors[currentPage - 1] : null // Заменили cursors[currentPage - 1] на cursors[currentPage]
    },
    onCompleted: response => {
      const { search } = response
      const { edges, repositoryCount, pageInfo } = search

      setRepositoryList(edges.map(ed => ed.node))
      setTotalRepositories(repositoryCount)

      if (currentPage > 1) {
        cursors[currentPage] = pageInfo.endCursor
        localStorage.setItem('cursors', JSON.stringify(cursors))
      }
    }
  })
}
