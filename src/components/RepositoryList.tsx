import { useEffect, useState } from 'react'

import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

type TRepository = {
  name: string
  description: string
  htmlUrl: string
}

export const RepositoryList: React.FC = () => {
  const [repositories, setRepositories] = useState<TRepository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data =>
        setRepositories(
          data.map((repository: TRepository) => {
            return {
              name: repository.name,
              description: repository.description,
              htmlUrl: repository.htmlUrl
            }
          })
        )
      )
  }, [])

  // https://api.github.com/orgs/rocketseat/repos
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
