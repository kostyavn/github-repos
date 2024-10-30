import { type ReactNode } from 'react'

declare global {
  type Children = ReactNode

  type Nullable<T = unknown> = T | null
}
