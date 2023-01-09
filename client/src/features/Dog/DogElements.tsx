import styled from 'styled-components'
import bgLogo from '../../assets/images/bgHome.jpeg'
import { styled as styling } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Button, { ButtonProps } from '@mui/material/Button'

export const Background = styled.div`
  width: 100%;
  height: 930px;
  background-image: url(${bgLogo});
  background-size: cover
`

export const Container = styled.div`
  max-width: 900px;
  height: 600px;
  background-color: #f5faf0;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;
`

export const WrapItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleDog = styled.h1`
  text-align: center;
  margin-top: 30px;
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

export const DivImg = styled.img`
  width: 300px;
  height: 300px;
  margin: 0 auto;
` 

export const DivVideo = styled.video`
  width: 300px;
  height: 300px;
  margin: 0 auto;
` 

export const InitialDog = styled.p`
  font-size: 30px; 
  text-align: center;
  margin-top: 100px;

`
