import { useEffect, useState } from "react"

import { RepositoryItem } from "./RepositoryItem"

import "../styles/repositories.scss"

type TRepository = {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<TRepository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data)
      )
  }, [])

  // https://api.github.com/orgs/rocketseat/repos
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {
          repositories.map(repository => {
            return<RepositoryItem key={repository.name} repository={repository}/>
          })
        }
      </ul>
    </section>
  )
}