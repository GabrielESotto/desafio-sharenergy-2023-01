import styled from 'styled-components'
import imageLogo from '../../assets/images/logo_color.png'
import imageBg from '../../assets/images/bgHome.jpeg'
import { styled as styling } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Button, { ButtonProps } from '@mui/material/Button'

export const HomeBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url(${imageBg});
  background-size: cover;
`

export const HomeContainer = styled.div`
  background-color: #f5faf0;
  width: 60%;
  height: 70%;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;
`

export const HomeLogo = styled.div`
  width: 240px;
  height: 110px;
  background-image: url(${imageLogo});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 40px 0 0 70px;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerTitle = styled.h1`
  text-align: center;
  margin-top: 110px;
  font-size: 27px;
  font-weight: lighter;
`

export const ContainerForm = styled.form`
  width: 100%;
  height: 400px;
  margin-top: 80px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 20px auto;
`

export const Label = styled.p`
  font-size: 12px;
  color: #9f9595;
  margin-bottom: -3px;
  margin-left: 4px;
`

export const InputEmail = styled.input`
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: 0;
  border-bottom: 1.5px solid #9cc1a7;
  margin-left: 3px;
`

export const InputPassword = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  border-bottom: 1.5px solid #9cc1a7;
  background-color: transparent;
  margin-left: 3px;
  font-size: 18px;
`

export const RememberBox = styled.div`
  display: flex;
  align-items: center;
`

export const SpanRm = styled.span`
  margin-top: 20px;
  margin-left: 8px;
  font-size: 11px;
  color: #9f9595;

`

export const RememberMe = styled.input`
  width: 15px;
  height: 15px;
  margin-top: 20px;
  margin-left: 4px;
  cursor: pointer;
`

export const ColorButton = styling(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[300]),
  backgroundColor: green[300],
  width: '380px',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px auto',
  '&:hover': {
    backgroundColor: green[400],
  },
}));
