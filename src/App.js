import React, { useState } from 'react';
import { Container, Typography, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import TaskList from './Components/TaskList';
import AddTaskForm from './Components/AddTaskForm';
import FilterTasks from './Components/FilterTasks';
import './Style.css'
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.isCompleted;
    if (filter === 'Completed') return task.isCompleted;
    return true;
  });

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Task Manager</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4">Task Manager</Typography>
        </Box>
        <AddTaskForm addTask={addTask} />
        <FilterTasks filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </Container>
    </Box>
  );
};

export default App;
