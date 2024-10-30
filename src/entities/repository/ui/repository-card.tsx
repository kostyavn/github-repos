import { cx } from 'class-variance-authority'
import { type FC } from 'react'
import dayjs from 'dayjs'

import { Icon } from '@shared/elements/svg'
import { Avatar } from '@shared/elements/ui'
import { type HtmlDivProps } from '@shared/types/html'

import { type Repository } from '../types'

export interface IRepositoryCardProps extends Omit<HtmlDivProps, 'className'> {
  containerClassName?: string
  repository: Repository.Node
}

export const RepositoryCard: FC<IRepositoryCardProps> = props => {
  const { containerClassName, repository, ...restContainerProps } = props

  const { name, stargazerCount, updatedAt, url, owner, primaryLanguage } = repository

  const { login, avatarUrl } = owner

  const lastCommitDate = dayjs(updatedAt).format('D MMMM YYYY, HH:mm')

  return (
    <div
      className={cx(
        'flex w-full flex-col items-start gap-y-3 rounded-xl border-[1px] border-gray-500 bg-gray-100 p-3',
        containerClassName
      )}
      {...restContainerProps}
    >
      <div className={'flex-center gap-x-2'}>
        <Avatar className={'h-8 w-8 cursor-pointer'} src={avatarUrl} />
        <p className={'cursor-pointer hover:underline hover:underline-offset-2'}>{login}</p>
      </div>

      <div className={'flex-center gap-x-2'}>
        <p>Stars:</p>
        <p>{stargazerCount}</p>
        <Icon className={'text-yellow-400'} icon={'solid/StarIcon'} size={'sm'} />
      </div>

      <div>
        <p>Repository name:</p>
        <a className={'cursor-pointer text-blue-500 hover:underline hover:underline-offset-2'} href={url}>
          {name}
        </a>
      </div>

      {primaryLanguage && (
        <div >
          <p>Primary language:</p>
          <p>{primaryLanguage?.name || ''}</p>
        </div>
      )}

      <div>
        <p>Last commit:</p>
        <p>{lastCommitDate}</p>
      </div>
    </div>
  )
}
