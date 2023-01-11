// Built-in
import { useContext, useState } from 'react'

// Externos

// Internos
import LoginContext from '../../contexts/LoginContext'
import SnackbarAlert from '../Snackbar/SnackbarAlert';
import {
  ContainerTitle,
  ContainerForm,
  Box,
  Label,
  InputEmail,
  InputPassword,
  ContentDiv,
  RememberMe,
  RememberBox,
  SpanRm,
  ColorButton
} from './SigninElements'



const Signin = () => {

  // Contexts of Login, Functions and States
  const {
    handleSubmit, 
    catchMessage, 
    username, 
    password, 
    setUsername, 
    setPassword
  } = useContext(LoginContext)

  // State to open snackbar
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  // Function to open/close snackbar
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  // Function to handle login and activate snackbar
  const handleFullSubmit = () => {
    handleSubmit()
    handleOpenSnackbar()
  }

  return <>
  <ContentDiv>
    <ContainerTitle>Login</ContainerTitle>
    <ContainerForm>
      <Box>
        <Label>Username</Label>
        <InputEmail 
          value={username} 
          onChange={e => setUsername(e.target.value)}
        />
      </Box>
      <Box>
        <Label>Password</Label>
        <InputPassword 
          type='password' 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <RememberBox>
          <RememberMe type='checkbox' />
          <SpanRm>Remember Me?</SpanRm>
        </RememberBox>
      </Box>
      <ColorButton 
        onClick={handleFullSubmit} 
        variant="contained"
      >
        Login
      </ColorButton>
      <SnackbarAlert 
        openSnack={openSnackbar} 
        closeSnack={handleCloseSnackbar}
        message={catchMessage}
      />
    </ContainerForm>
  </ContentDiv>
  </>
}

export default Signin
