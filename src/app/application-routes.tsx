import { createRoute, createRootRoute, createRouter } from '@tanstack/react-router'

import { RepositoriesListPage } from '@pages/repositories-list'
import { RepositotyIdPage } from '@pages/respository-id'

import { Application } from './application'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootRoute = createRootRoute({
  component: Application
})

const repositoriesListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/repositories-list',
  component: RepositoriesListPage
})

const repositoryIdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/repository-id/$repoId',
  component: RepositotyIdPage
})

const routeTree = rootRoute.addChildren([repositoriesListRoute, repositoryIdRoute])

export const router = createRouter({ routeTree })
