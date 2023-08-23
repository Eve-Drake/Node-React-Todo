import React from 'react'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'
import { Task } from './TaskInterface'

interface Props{
  text: string,
  completed: boolean,
  id: number,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskDisplay = ({text, completed, id, setTasks} :Props) => {
  return (
    <>
        <h1>{text}</h1>
        <p>{completed ? 'Done': 'Not Done'}</p>
        <DeleteTask id={id} setTasks ={setTasks}/>
        <EditTask />
    </>
  )
}

export default TaskDisplay