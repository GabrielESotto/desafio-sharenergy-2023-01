import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  width: 160px;
  height: 30px;

  span {
    margin-right: 20px;
  }

  &:hover{
    transition: 0.2s ease-in;
    color: #4eaa6b;
    text-decoration: underline;
  }
`
