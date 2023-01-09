import { useContext, useEffect, useState } from 'react'
import { ColorButton } from './SigninElements'
import LoginContext from '../../contexts/LoginContext'
import axios from 'axios';
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
  SpanRm
} from './SigninElements'

const Signin = () => {

  const {handleSubmit, username, password, setUsername, setPassword} = useContext(LoginContext)

  const [checked, setChecked] = useState(false)

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return <>
  <ContentDiv>
    <ContainerTitle>Login</ContainerTitle>
    <ContainerForm>
      <Box>
        <Label>Username</Label>
        <InputEmail value={username} onChange={e => setUsername(e.target.value)}/>
      </Box>
      <Box>
        <Label>Password</Label>
        <InputPassword type='password' value={password} onChange={e => setPassword(e.target.value)} />
        <RememberBox>
          <RememberMe type='checkbox' checked={checked} onChange={handleChecked}/>
          <SpanRm>Remember Me?</SpanRm>
        </RememberBox>
      </Box>
      <ColorButton onClick={handleSubmit} variant="contained">Login</ColorButton>
    </ContainerForm>
  </ContentDiv>
  </>
}

export default Signin
