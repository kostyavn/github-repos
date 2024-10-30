import { type ReactNode } from 'react'
import  { type ClassValue } from 'class-variance-authority'


declare global {
  type Children = ReactNode

  type Nullable<T = unknown> = T | null


  type ClassName = ClassValue
}
