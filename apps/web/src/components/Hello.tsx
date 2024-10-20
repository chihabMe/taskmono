import { trpc } from '../utils/trpc'

const Hello = () => {
  const { data, isLoading } = trpc.users.getAllUsers.useQuery()
  if (isLoading) return <h1>loading </h1>
  if (!data) return <h1>no data</h1>
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      )
      )}
    </div>
  )
}

export default Hello
