import { create } from 'zustand'

import { type Repository } from '../types'

export const useRepositoryListStore = create<Repository.ListStore>(set => ({
  repositoryList: [],
  totalRepositories: 0,
  currentPage: 1,
  searchQuery: '',

  setRepositoryList: repositories => set({ repositoryList: repositories }),
  setTotalRepositories: count => set({ totalRepositories: count }),
  setCurrentPage: page => set({ currentPage: page }),
  setSearchQuery: query => set({ searchQuery: query })
}))
