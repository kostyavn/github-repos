import { Link } from '@tanstack/react-router'
import { cx } from 'class-variance-authority'
import dayjs from 'dayjs'
import { type FC } from 'react'

import { Icon } from '@shared/elements/svg'
import { DEFAULT_DATE_FORMAT } from '@shared/lib/constants'
import { type HtmlDivProps } from '@shared/types/html'

import { type Repository } from '../types'

export interface IRepositoryCardProps extends Omit<HtmlDivProps, 'className'> {
  containerClassName?: string
  repository: Repository.Node
}

export const RepositoryCard: FC<IRepositoryCardProps> = props => {
  const { containerClassName, repository, ...restContainerProps } = props

  const { id, name, stargazerCount, updatedAt, url, primaryLanguage } = repository

  const lastCommitDate = dayjs(updatedAt).format(DEFAULT_DATE_FORMAT)

  return (
    <div
      className={cx(
        'flex w-full flex-col items-start gap-y-3 rounded-xl border-[1px] border-gray-500 bg-gray-100 p-3',
        containerClassName
      )}
      {...restContainerProps}
    >
      <div className={'flex-center gap-x-2'}>
        <p>Stars:</p>
        <p>{stargazerCount}</p>
        <Icon className={'text-yellow-400'} icon={'solid/StarIcon'} size={'sm'} />
      </div>

      <div>
        <p>Repository name:</p>
        <Link
          className={'cursor-pointer text-blue-500 hover:underline hover:underline-offset-2'}
          params={{ repoId: id }}
          to={'/repository-id/$repoId'}
        >
          {name}
        </Link>
      </div>

      {primaryLanguage && (
        <div>
          <p>Primary language:</p>
          <p>{primaryLanguage?.name || ''}</p>
        </div>
      )}

      <div>
        <p>Last commit:</p>
        <p>{lastCommitDate}</p>
      </div>

      <a
        className={'cursor-pointer text-blue-500 hover:underline hover:underline-offset-2'}
        href={url}
        rel="noreferrer"
        target={'_blank'}
      >
        GitHub Link
      </a>
    </div>
  )
}
