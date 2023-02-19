import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filterByName"
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};
