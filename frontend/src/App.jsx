import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Tasks from './pages/Tasks';
import TasksDeleted from './components/TasksDeleted';



function App() {
  return (
    <div>
      <Tasks />
      <TasksDeleted/>
    </div>
  );
}

export default App
