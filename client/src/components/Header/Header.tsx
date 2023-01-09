import {useContext} from 'react'
import AuthContext from '../../contexts/AuthContext'
import { 
  HomeLogo,
  Ulist,
  NavLink,
  NavBar
 } from './HeaderElements'

const Header = () => {

  const { logout } = useContext(AuthContext)

  return <>
    <NavBar>
      <HomeLogo />
      <Ulist>
        <NavLink to='/random'>Random User</NavLink>
        <NavLink to='/cat'>HTTP Cat</NavLink>
        <NavLink to='/dog'>Random Dog</NavLink>
        <NavLink to='/customers'>CRUD</NavLink>
        <NavLink to='/' onClick={logout}>Log out</NavLink>
      </Ulist>
    </NavBar>
    
  </>
}

export default Header
