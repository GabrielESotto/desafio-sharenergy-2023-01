// Built-in
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'

// Externos
import LogoutIcon from '@mui/icons-material/Logout';

// Internos
import AuthContext from '../../contexts/AuthContext'
import NavMobile from '../NavMobile/NavMobile'
import imageLogo from '../../assets/images/logo_color.png'
import { 
  HomeLogo,
  Ulist,
  NavLink,
  NavBar,
  Wrap,
  ImgLogo
 } from './HeaderElements'

 
const Header = () => {

  // Authorization Login/Logout
  const { logout, user } = useContext(AuthContext)

  // Function to redirect page when click in logo image
  const navigate = useNavigate()
  const redirectHome = () => navigate('/')

  return <>
    <NavBar>
      <HomeLogo>
        <ImgLogo onClick={redirectHome} src={imageLogo} />
      </HomeLogo>
      {user === null || !user ? null : (
      <Ulist>
        <NavLink to='/random'>Random User</NavLink>
        <NavLink to='/cat'>HTTP Cat</NavLink>
        <NavLink to='/dog'>Random Dog</NavLink>
        <NavLink to='/customers'>CRUD</NavLink>
        <NavLink to='/' onClick={logout}><LogoutIcon sx={{marginTop: '3px'}} /></NavLink>
        <Wrap>
          <NavMobile />
        </Wrap>
      </Ulist>
      )}
    </NavBar> 
  </>
}

export default Header
