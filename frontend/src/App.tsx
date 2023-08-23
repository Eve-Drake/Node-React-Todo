import { useEffect, useState } from 'react'
import './index.css'
import TaskDisplay from './TaskDisplay'
import { AddTask } from './AddTask'
import { Task } from './TaskInterface'


function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(()=>{
    getTasks()
  }, [])



  const getTasks =()=>{
    fetch('http://localhost:3000/api')
    .then(data => data.json())
    .then(data =>{
      setTasks(data)
    })
  }

  

  return (
    <>

       <AddTask setTasks={setTasks}/>

      {tasks.map((task) => (
        <div key={task.id}>
          <TaskDisplay key={task.id} text={task.text} id={task.id} completed={task.completed} setTasks={setTasks}/>
        </div>
      ))}

    </>
  )
}

export default App
