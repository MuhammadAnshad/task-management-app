import React, { useState, useEffect } from 'react';
import api from './api'; 
import TaskList from './Components/TaskList';
import AddTaskForm from './Components/AddTaskForm';
import FilterTasks from './Components/FilterTasks';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    api.get('/tasks')  // Use api instead of axios directly
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTask = (task) => {
    api.post('/tasks', task)  // Use api here
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error(error));
  };

  const deleteTask = (id) => {
    api.delete(`/tasks/${id}`)  // Use api here
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => console.error(error));
  };

  const toggleTaskCompletion = (id) => {
    const task = tasks.find(task => task.id === id);
    api.put(`/tasks/${id}`, { ...task, isCompleted: !task.isCompleted })  
      .then(response => setTasks(tasks.map(t => t.id === id ? response.data : t)))
      .catch(error => console.error(error));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <AddTaskForm onAdd={addTask} />
      <FilterTasks filter={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
    </div>
  );
};

export default App;
