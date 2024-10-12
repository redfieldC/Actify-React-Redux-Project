import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Employee Data</h1>
      <Table/>
    </div>
  )
}

export default App
