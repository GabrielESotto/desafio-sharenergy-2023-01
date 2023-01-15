// Built-in
import { useContext, useEffect, useState } from 'react'

// Externos

// Internos
import LoginContext from '../../contexts/LoginContext'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Button from '../../components/Button/Button';
import SnackbarAlert from '../../components/Snackbar/SnackbarAlert';
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

  // State to open snackbar and remember box
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [remember, setRemember] = useState<boolean>(false)

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

  // Get state of Remember Checkbox
  const handleChecked = () => {
    setRemember(prev => !prev)
  }

  // State and function to save/use user and pass in localstorage
  const [userIsCheck, setUserIsCheck] = useLocalStorage('username', null)
  const [passIsCheck, setPassIsCheck] = useLocalStorage('password', null)

  const handleRemember = (user: string, pass: string) => {
    setUserIsCheck(user)
    setPassIsCheck(pass)
  }

  // Function to handle login and activate snackbar
  const handleFullSubmit = () => {
    handleSubmit()
    handleOpenSnackbar()

    if(remember) {
      handleRemember(username, password)
    } else {
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('password')
    }
  }

  // States and constants for remember function
  const [finalUser, setFinalUser] = useState<string>('')
  const [finalPass, setFinalPass] = useState<string>('')

  const usSaved = window.localStorage.getItem('username')
  const psSaved = window.localStorage.getItem('password')

  // Set user and pass to be in input
  const inputShow = () => {
    if(usSaved != null) {
      const strUser = usSaved.slice(1)
      const valueU = strUser.slice(0, -1)
      setFinalUser(valueU)
    }

    if(psSaved != null) {
      const strPass = psSaved.slice(1)
      const valueP = strPass.slice(0, -1)
      setFinalPass(valueP)
    }
  }

  // Render user and pass saved by remember box
  useEffect(() => {
    if(usSaved === 'null' || psSaved === 'null') {
      setRemember(false)
      return
    }
    
    inputShow()
    setRemember(true)
    setUsername(finalUser)
    setPassword(finalPass)

  }, [finalUser, finalPass])

  return (
    <>
      <ContentDiv>
        <ContainerTitle>Login</ContainerTitle>
        <ContainerForm>
          <Box>
            <Label data-testid='lbl-user'>Username</Label>
            <InputEmail
              value={username}
              data-testid='username'
              onChange={e => setUsername(e.target.value)}
            />
          </Box>
          <Box>
            <Label data-testid='lbl-pass'>Password</Label>
            <InputPassword
              type='password'
              value={password}
              data-testid='password'
              onChange={e => setPassword(e.target.value)}
            />
            <RememberBox>
              <RememberMe type='checkbox' checked={remember} onChange={handleChecked} />
              <SpanRm data-testid='rmb-span'>Remember Me?</SpanRm>
            </RememberBox>
          </Box>
          <Button
            children='Login'
            submit={handleFullSubmit}
          />
          <SnackbarAlert
            openSnack={openSnackbar}
            closeSnack={handleCloseSnackbar}
            message={catchMessage}
          />
        </ContainerForm>
      </ContentDiv>
    </>
  )
}

export default Signin
