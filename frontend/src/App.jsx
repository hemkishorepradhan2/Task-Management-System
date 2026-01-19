import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Tasks from './pages/Tasks';
import TasksDeleted from './components/TasksDeleted';
import Navbar from './components/Navbar';
import Search from './components/Search';



function App() {
  return (
    <div>
      <Navbar/>
      <Tasks />
      <TasksDeleted/>

      <Search/>
    </div>
  );
}

export default App
