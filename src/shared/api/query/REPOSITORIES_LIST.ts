import { gql } from '@apollo/client'

export const REPOSITORIES_LIST = gql`
  query SearchRepositories($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            stargazerCount
            updatedAt
            url
            owner {
              login
              avatarUrl
            }
            primaryLanguage {
              name
            }
            description
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`
