import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Welcome to Task Management System
      </h1>

      <TaskForm/>
    </>
  )
}

export default App
