import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './pages/Tasks';



function App() {
  return (
    <div>
      <h1>Task Management System</h1>
      <Tasks />
    </div>
  );
}

export default App
