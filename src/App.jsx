import { useState } from 'react'
import ToDoList from './todolist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToDoList/>
    </>
  )
}

export default App
