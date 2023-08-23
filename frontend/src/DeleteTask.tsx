import React from 'react'
import { Task } from './TaskInterface';

interface Props {
  id: number;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const DeleteTask = ({ id, setTasks }: Props) => {
  const deleteTask = () => {
    const request: RequestInit = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }), // Include the id in the request body
    };

    fetch('http://localhost:5000/api', request) // Send the DELETE request to the correct endpoint
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Error');
        }
        // Remove the deleted task from the tasks array and update the state
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <button onClick={deleteTask}>Delete</button>;
};

export default DeleteTask;
