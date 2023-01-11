import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ImgLogo = styled.img `
  width: 240px;
  height: 30px;
  cursor: pointer;
  margin-top: 20px;
`

export const HomeLogo = styled.div`
  width: 240px;
  height: 100px;
  margin: 20px 0 0 70px;
  
  @media screen and (max-width: 650px) {
    width: 150px;
    height: 85px;
  }
`

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Ulist = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 70px;
`

export const NavLink = styled(Link)`
  margin: 20px;
  list-style: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover{
    transition: 0.2s ease-in;
    color: #4eaa6b;
    text-decoration: underline;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const Wrap = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: inline;
  }

  @media screen and (max-width: 650px) {
    margin-top: 13px;
  }
`
