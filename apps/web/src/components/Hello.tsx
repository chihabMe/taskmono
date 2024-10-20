import { trpc } from '../utils/trpc'

const Hello = () => {
  const { data, isLoading } = trpc.books.getAllBooks.useQuery()
  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>No data</div>
  return (
    <div>
      {data.map((book) => (
        <div key={book.id}>
          {book.name}
        </div>
      )
      )}
    </div>
  )
}

export default Hello
