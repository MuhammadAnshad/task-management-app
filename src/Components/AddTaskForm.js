import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center" mb={4} p={2} borderRadius={1} bgcolor="#f0f0f0">
      <TextField
        variant="outlined"
        label="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        style={{ marginRight: 16 }}
      />
      <Button type="submit" variant="contained" color="primary" startIcon={<AddIcon />}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;
