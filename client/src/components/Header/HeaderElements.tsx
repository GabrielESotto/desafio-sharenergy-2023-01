import styled from 'styled-components'
import imageLogo from '../../assets/images/logo_color.png'
import { Link } from 'react-router-dom'

export const HomeLogo = styled.div`
  width: 240px;
  height: 110px;
  background-image: url(${imageLogo});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 40px 0 0 70px;

  @media screen and (max-width: 650px) {
    margin: 40px auto;
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
  margin-top: -40px;
  margin-right: 70px;
`

export const NavLink = styled(Link)`
  margin: 20px;
  list-style: none;
  text-decoration: none;
  color: black;
  cursor: pointer;
`
