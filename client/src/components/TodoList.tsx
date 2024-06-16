import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function TodoList() {
  const [tasks,setTask]=useState<any[]>([]);
  const [newTask, setNewTask] = useState({
    name: '',
    status: 0
  })

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/tasks');
        console.log("1111",response);
        
        setTask(response.data.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleNewTask= (e:any) =>{
    setNewTask({
      ...newTask,
      name: e.target.value
    });
  }
  const createTask = async() =>{
    try {
      const response = await axios.post('http://localhost:8000/api/v1/task', newTask);
      window.location.reload();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  const deleteTask = async(id:any) =>{
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/task/${id}`);
      window.location.reload();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }
              
  return (
    <div>
      {tasks.map((task) => (
        <label htmlFor="">
        <div key={task.id} className="todo-item">
          <span>{task.name}</span>
           <input type="checkbox" checked={task.status} />
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>🗑️</button>
        </div>
        </label>
      ))}
      <label className="toggle-container">
          Move done items at the end?
          <input type="checkbox" />
          <span className="slider"></span>
      </label>
      <div className="add-item-container">
          <input type="text" placeholder="Add to the todo list" onChange={handleNewTask}/>
          <button onClick={() => createTask()}>Add Item</button>
      </div>
    </div>
  )
}
