import { create } from 'zustand'

import { type Repository } from '../types'

export const useRepositoryListStore = create<Repository.ListStore>(set => ({
  repositoryList: [],
  setRepositoryList: repositoryList => set({ repositoryList })
}))
