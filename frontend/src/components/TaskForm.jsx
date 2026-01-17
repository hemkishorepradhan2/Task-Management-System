import React from 'react'
import { useState } from 'react'


function TaskForm() {
    const [name,setName]=useState("");
    

    return (
   
    <>
    <form>
        <label>
            Enter your name: 
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
    </form>
    <p>Hello {name} </p>
    </>
  )
}

export default TaskForm;