import { create } from 'zustand'

import { type Repository } from '../types'

export const useRepositoryListStore = create<Repository.ListStore>(set => ({
  totalRepositories: 0,
  repositoryList: [],
  setRepositoryList: repositoryList => set({ repositoryList }),
  setTotalRepositories: totalRepositories => set({ totalRepositories })
}))
