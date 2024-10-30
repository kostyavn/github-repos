import { useQuery } from '@apollo/client'

import { api } from '@shared/api'

export const useRepositoriesListModel = () => {
  return useQuery(api.query.REPOSITORIES_LIST, {
    variables: { query: "stars:>0", first: 10,}
  })
}
