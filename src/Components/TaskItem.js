import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';  // Import moment

const TaskItem = ({ task, onDelete, onToggle }) => {
  // Format the createdAt date using moment
  const formattedDate = moment(task.createdAt).format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div className="task-item">
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
          style={{ marginRight: '8px' }}
        />
        <h3 style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
          {task.title}
        </h3>
      </label>
      <p>{task.description}</p>
      <p>{formattedDate}</p>  
      <button onClick={() => onDelete(task.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TaskItem;
