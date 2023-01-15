// Built-in
import { useState, useContext } from 'react'

// Externos
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import AnchorIcon from '@mui/icons-material/Anchor';
import AnimationIcon from '@mui/icons-material/Animation';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// Internos
import { NavLink } from './NavMobileElements'
import AuthContext from '../../contexts/AuthContext';


const NavMobile = () => {
  // Logout function
  const { logout } = useContext(AuthContext)

  // NavMobile functions and states
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{
          color: 'black', 
          marginBottom: '5px',
          '@media screen and (max-width: 500px)': {
            marginBottom: '18px'
          }
        }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{color: 'black'}}/>
      </Button>
      
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to='/random'>
            <span>Random User</span> <AlternateEmailIcon />
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to='/cat'>
            <span>HTPP Cat</span> <AnchorIcon />
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to='/dog'>
            <span>Random Dog</span> <AnimationIcon />
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to='/customers'>
            <span>CRUD</span> <CreateIcon />
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink onClick={logout} to='/'>
            <span>Logout</span> <LogoutIcon />
          </NavLink>
        </MenuItem> 
      </Menu>
    </div>
  );
}

export default NavMobile
