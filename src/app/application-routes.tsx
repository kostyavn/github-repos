import { createRoute, createRootRoute, createRouter } from '@tanstack/react-router'

import { NotFoundPage } from '@pages/not-found'
import { RepositoryListPage } from '@pages/repository-list'
import { RepositoryIdPage } from '@pages/respository-id'

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
  path: '/repository-list',
  component: RepositoryListPage
})

const repositoryIdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/repository-id/$repoId',
  component: RepositoryIdPage
})

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: NotFoundPage,
  path: '*'
})

const routeTree = rootRoute.addChildren([repositoriesListRoute, repositoryIdRoute, notFoundRoute])

export const router = createRouter({ routeTree })
