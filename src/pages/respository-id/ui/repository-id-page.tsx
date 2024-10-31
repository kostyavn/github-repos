import { Link } from '@tanstack/react-router'
import dayjs from 'dayjs'
import { isEmpty } from 'ramda'
import { type FC } from 'react'

import { useRepositoryModel, useRepositoryStore } from '@entities/repository'

import { Icon } from '@shared/elements/svg'
import { Avatar, Loader, Result } from '@shared/elements/ui'
import { DEFAULT_DATE_FORMAT } from '@shared/lib/constants'

export interface IRepositoryIdPageProps {}

export const RepositoryIdPage: FC<IRepositoryIdPageProps> = () => {
  const { loading, error } = useRepositoryModel()
  const repository = useRepositoryStore(state => state.repository)

  const shouldRender = !loading && !error

  const handleNavigateToAuthorGithubPage = () => {
    if (!repository) return

    window.location.href = repository.owner.url
  }

  return (
    <section className={'page-wrapper flex flex-col gap-y-3'}>
      {loading && <Loader />}

      {error && (
        <Result
          type={'error'}
          message={
            <div className={'flex-center flex-col gap-y-2'}>
              <h1 className={'text-red-500'}>Something went wrong...</h1>
              <h1 className={'text-red-500'}>{error.message}</h1>
            </div>
          }
        />
      )}

      {shouldRender && (
        <Link
          className={'cursor-pointer text-blue-500 hover:underline hover:underline-offset-2'}
          to={'/repository-list'}
        >
          Get back
        </Link>
      )}

      {repository && shouldRender && (
        <div
          className={'flex w-full flex-col items-start gap-y-3 rounded-xl border-[1px] border-gray-500 bg-gray-100 p-3'}
        >
          <div className={'flex-center gap-x-2'} onClick={handleNavigateToAuthorGithubPage}>
            <Avatar className={'h-8 w-8 cursor-pointer'} src={repository.owner.avatarUrl} />
            <p className={'cursor-pointer hover:underline hover:underline-offset-2'}>{repository.owner.login}</p>
          </div>

          <div className={'flex-center gap-x-2'}>
            <p>Stars:</p>
            <p>{repository.stargazerCount}</p>
            <Icon className={'text-yellow-400'} icon={'solid/StarIcon'} size={'sm'} />
          </div>

          <div className={'flex-center gap-x-2'}>
            <p>Repository name:</p>
            <p>{repository.name}</p>
          </div>

          <div>
            <p>Last commit:</p>
            <p>{dayjs(repository.updatedAt).format(DEFAULT_DATE_FORMAT)}</p>
          </div>

          <a
            className={'cursor-pointer text-blue-500 hover:underline hover:underline-offset-2'}
            href={repository.url}
            rel="noreferrer"
            target={'_blank'}
          >
            GitHub Link
          </a>

          {repository.primaryLanguage && (
            <div className={'flex-center gap-x-2'}>
              <p>Primary language:</p>
              <p>{repository.primaryLanguage?.name || ''}</p>
            </div>
          )}

          {!isEmpty(repository.languages.edges) && (
            <div className={'flex-center gap-x-2'}>
              <p>Languages:</p>
              <p>{repository.languages.edges.map(edge => edge.node.name).join(', ')}</p>
            </div>
          )}

          {repository.description && (
            <div>
              <p>Description:</p>
              <p>{repository.description}</p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
