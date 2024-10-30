import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { type FC } from 'react'

export interface IApplicationProviderProps {
  children: Children
}

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache()
})

export const ApplicationProvider: FC<IApplicationProviderProps> = props => {
  const { children } = props
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
