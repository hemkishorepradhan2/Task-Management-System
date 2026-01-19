import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Tasks from './pages/Tasks';
import TasksDeleted from './components/TasksDeleted';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Navbar/>
      <Tasks />
      <TasksDeleted/>
    </div>
  );
}

export default App
