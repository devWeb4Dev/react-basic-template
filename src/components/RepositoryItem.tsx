type TRepositoryItemProps = {
  repository: {
    name: string
    description: string
    htmlUrl: string
  }
}

export const RepositoryItem: React.FC<TRepositoryItemProps> = (
  props: TRepositoryItemProps
) => {
  const { repository } = props
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.htmlUrl}>Acessar repositorio</a>
    </li>
  )
}
