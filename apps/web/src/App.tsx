import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<string | null>(null)
  useEffect(() => {
    fetch("http://localhost:8000").then((res) => res.text()).then((d) => {
      setData(d)
    })
  })

  return (
    <main>
    {JSON.stringify(data)}
    </main>
  )
}

export default App
