import { trpc } from '../utils/trpc'

const Hello = () => {
  const { data, isLoading } = trpc.hello.useQuery()
  if (isLoading) return <h1>loading </h1>
  if (!data) return <h1>no data</h1>
  return (
    <div>
      {data}
    </div>
  )
}

export default Hello
