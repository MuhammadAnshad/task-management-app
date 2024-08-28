import React from 'react';
import { Checkbox, IconButton, Typography, Box, Paper } from '@mui/material';
import { Delete as DeleteIcon, CheckCircle , RadioButtonUnchecked } from '@mui/icons-material';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 8 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Checkbox
            checked={task.isCompleted}
            onChange={() => toggleTask(task.id)}
            color="primary"
            icon={<RadioButtonUnchecked />}
            checkedIcon={<CheckCircle />}
          />
          <Typography
            variant="body1"
            style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', flexGrow: 1 }}
          >
            {task.title}
          </Typography>
        </Box>
        <IconButton onClick={() => deleteTask(task.id)} color="error">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default TaskItem;
