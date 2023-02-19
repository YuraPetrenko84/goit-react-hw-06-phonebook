import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// Генератор випадкових id
const filterInputId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label htmlFor={filterInputId}>
      Find contact by name:
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(setFilter(event.target.value))}
        id={filterInputId}
      />
    </label>
  );
};

export default Filter;
