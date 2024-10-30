import { gql } from 'graphql-tag'

export const REPOSITORY_BY_ID = gql`
  query GetRepository($id: ID!) {
    node(id: $id) {
      ... on Repository {
        name
        stargazerCount
        updatedAt
        owner {
          login
          avatarUrl
          url
        }
        languages(first: 10) {
          edges {
            node {
              id
              name
            }
          }
        }
        primaryLanguage {
          name
        }
        description
      }
    }
  }
`
