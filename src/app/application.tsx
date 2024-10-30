import { Outlet } from '@tanstack/react-router'
import { type FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Header } from '@widgets/header'

import { ApplicationProvider } from './application-provider'

export interface IApplicationProps {}

export const Application: FC<IApplicationProps> = () => {
  return (
    <ApplicationProvider>
      <main className={'flex flex-1 flex-col'}>
        <Header />
        <ErrorBoundary fallback={'error'}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </ApplicationProvider>
  )
}
