import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { type FC } from 'react'

export interface IApplicationProviderProps {
  children: Children
}

export const ApplicationProvider: FC<IApplicationProviderProps> = props => {
  const { children } = props

  const api_token = import.meta.env.VITE_API_TOKEN

  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_BASE_URL
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: api_token && api_token !== '' ? `Bearer ${import.meta.env.VITE_API_TOKEN}` : undefined
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
