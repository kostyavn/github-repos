import { useQuery } from '@apollo/client'
import { useParams } from '@tanstack/react-router'

import { api } from '@shared/api'

import { useRepositoryStore } from '../store/use-repository-store'
import { type Repository } from '../types'

export const useRepositoryModel = () => {
  const { repoId } = useParams({ from: '/repository-id/$repoId' })
  const setRepository = useRepositoryStore(state => state.setRepository)

  return useQuery<{ node: Repository.Node }>(api.query.REPOSITORY_BY_ID, {
    variables: { id: repoId },
    onCompleted: response => {
      const { node } = response

      setRepository(node)
    }
  })
}
