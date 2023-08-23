import React, { useState } from 'react'
import { Task } from './TaskInterface';

interface Props{
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}


export const AddTask = ({setTasks} : Props) => {
    const [taskInput, setTaskInput] = useState<string>('')

  const addTask = () => {
    const request: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Math.floor(Math.random() * 10000), text: taskInput, completed: false }),
    };
  
    fetch('http://localhost:5000/api', request)
      .then((resp) => resp.json())
      .then(data =>{
        setTasks(data.data)
      })
      .catch((err) => {
        console.error(err);
      });
    setTaskInput('');
  };
  
  return (
    <>
      <input placeholder='Add a Task' onChange={(e => setTaskInput(e.target.value))}/>
      <button onClick={addTask}>Add</button>
    </>
  )
}
