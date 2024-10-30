export namespace Repository {
  export type Owner = {
    login: string
    avatarUrl: string
    url: string
  }

  export type PrimaryLanguage = {
    name: string
  }

  export type Language = {
    name: string
  }

  export type Node = {
    id: string
    name: string
    stargazerCount: number
    updatedAt: string
    url: string
    owner: Owner
    primaryLanguage?: PrimaryLanguage
    description?: string
    languages: {
      edges: Array<{
        node: Language
      }>
    }
  }

  export type ListStore = {
    repositoryList: Array<Node>
    totalRepositories: number
    setRepositoryList: (repositoryList: Array<Node>) => void
    setTotalRepositories: (totalRepositories: number) => void
  }

  export type Store = {
    repository: Nullable<Node>
    setRepository: (repository: Node) => void
  }
}
