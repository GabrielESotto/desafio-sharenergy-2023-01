import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const UlWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;


  @media screen and (max-width: 780px) {
    margin-top: 25px;
  }

  @media screen and (max-width: 550px) {
    margin-top: 20px;
  }

`

export const List = styled.li`
  list-style: none;

`

export const NavLink = styled(Link)`
  padding: 12px 16px;
  box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
  line-height: 1.25;
  background: #d8f4d7;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .08em;
  text-transform: uppercase;
  position: relative;
  border-radius: 5px;
  transition: background-color .6s ease;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    top: var(--mouse-y);
    left: var(--mouse-x);
    transform-style: flat;
    transform: translate3d(-50%,-50%,0);
    background: rgba(white,.1);
    border-radius: 100%;
    transition: width .3s ease, height .3s ease;
  }

  &:active {
    &:after {
      width: 300px;
      height: 300px;
    }
  }

  &:focus,
  &:hover {
    background-color: #f1e6e6;
  }

  &:active {
    background-color: #a5a1a1;
    opacity: 1;
  }

  @media screen and (max-width: 780px) {
    padding: 8px 14px;
  }

  @media screen and (max-width: 550px) {
    padding: 6px 10px;
  }
`
