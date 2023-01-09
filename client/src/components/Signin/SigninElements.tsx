import styled from 'styled-components'
import { styled as styling } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Button, { ButtonProps } from '@mui/material/Button'

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

  @media screen and (max-width: 500px) {
    max-width: 250px;
  }
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
  '@media screen and (max-width: 500px)': {
    width: '250px'
  }
}));
