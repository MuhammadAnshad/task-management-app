import React from 'react';

const FilterTasks = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-tasks">
      <button onClick={() => onFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => onFilterChange('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
      <button onClick={() => onFilterChange('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
    </div>
  );
};

export default FilterTasks;
