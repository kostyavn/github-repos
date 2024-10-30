import type { StoryObj, Meta as StoryMeta } from '@storybook/react'
import { type ClassValue } from 'class-variance-authority'
import { type ReactNode } from 'react'

declare global {
  type Children = ReactNode

  type Nullable<T = unknown> = T | null

  type ClassName = ClassValue

  type Story<T> = StoryObj<T>
  type Meta<T> = StoryMeta<T>
}
