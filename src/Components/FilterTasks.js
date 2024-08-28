import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import { FilterList as FilterIcon } from '@mui/icons-material';

const FilterTasks = ({ filter, setFilter }) => {
  return (
    <Box mb={4}>
      <ButtonGroup variant="contained" color="primary" aria-label="outlined button group">
        <Button
          onClick={() => setFilter('All')}
          variant={filter === 'All' ? 'contained' : 'outlined'}
          startIcon={<FilterIcon />}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('Active')}
          variant={filter === 'Active' ? 'contained' : 'outlined'}
          startIcon={<FilterIcon />}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter('Completed')}
          variant={filter === 'Completed' ? 'contained' : 'outlined'}
          startIcon={<FilterIcon />}
        >
          Completed
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default FilterTasks;
