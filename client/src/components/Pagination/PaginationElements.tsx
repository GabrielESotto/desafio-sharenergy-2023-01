import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const UlWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const List = styled.li`
  list-style: none;

`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  margin-right: 7px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #ccc;
  font-weight: bold;
  opacity: 0.8;
  text-decoration: none;
  color: #2f2f2f;

  &:hover {
    background-color: #b9adad;
  }

  &:active {
    background-color: #a5a1a1;
    opacity: 1;
  }
`
