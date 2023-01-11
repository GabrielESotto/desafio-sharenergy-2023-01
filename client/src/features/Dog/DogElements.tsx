import styled from 'styled-components'
import { styled as styling } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Button, { ButtonProps } from '@mui/material/Button'

export const Container = styled.div`
  max-width: 900px;
  height: 100%;
  max-height: 600px;
  background-color: #f5faf0;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;

  @media screen and (max-width: 920px) {
    max-width: 600px;
  }

  @media screen and (max-width: 620px) {
    max-width: 400px;
  }

  @media screen and (max-width: 450px) {
    max-width: 350px;
  }
`

export const WrapItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleDog = styled.h1`
  text-align: center;
  font-size: 21px;
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
  margin: 30px auto 100px auto;
` 

export const DivVideo = styled.video`
  width: 300px;
  height: 300px;
  margin: 30px auto 100px auto;
` 

export const ImgClick = styled.img`
  width: 150px;
  height: 200px;
  margin: 30px auto 100px auto;
`
