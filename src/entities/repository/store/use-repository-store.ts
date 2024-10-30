import { create } from 'zustand'

import { type Repository } from '../types'

export const useRepositoryStore = create<Repository.Store>(set => ({
  repository: null,
  setRepository: repository => set({ repository })
}))
