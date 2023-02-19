import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Item = styled.li`
  display: flex;
  gap: 16px;
  font-size: 16px;
`;
export const Button = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 12px;
  background-color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: lightgrey;
  }
`;
