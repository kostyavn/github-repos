export namespace Repository {
  export type Owner = {
    login: string
    avatarUrl: string
  }

  export type PrimaryLanguage = {
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
  }

  export type Type = {}

  export type ListStore = {
    repositoryList: Array<Node>
    setRepositoryList: (repositoryList: Array<Node>) => void
  }

  export type Store = {}
}
