import styled from "styled-components";
import { styled as styling } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Button, { ButtonProps } from '@mui/material/Button'

export const Container = styled.div`
  max-width: 1800px;
  height: 1110px;
  background-color: #f5faf0;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;

  @media screen and (max-width: 1850px) {
    max-width: 1200px;
    height: auto;
  }

  @media screen and (max-width: 1050px) {
    max-width: 800px;
  }

  @media screen and (max-width: 780px) {
    max-width: 550px;
  }

  @media screen and (max-width: 550px) {
    max-width: 400px;
  }

  @media screen and (max-width: 450px) {
    max-width: 330px;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  font-size: 21px;
`

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const PhotoUser = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: blue;
  margin-top: 20px;
`

export const SearchInput = styled.input`
  max-width: 200px;
  color: grey;
  padding: 5px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 20px;
  text-align: center;
`

export const WrapPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;

  @media screen and (max-width: 1850px) {
    margin-top: 0;
    margin-bottom: 25px;
  }
`

export const Pagination = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  margin-right: 7px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #ccc;
  font-weight: bold;
  opacity: 0.8;

  &:hover {
    background-color: #b9adad;
  }

  &:active {
    background-color: #a5a1a1;
    opacity: 1;
  }
`

export const ColorButton = styling(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[300]),
  backgroundColor: green[300],
  width: '100px',
  borderRadius: '20px',
  marginTop: '-5px',
  '&:hover': {
    backgroundColor: green[400],
  },
  '@media screen and (max-width: 500px)': {
    width: '250px'
  }
}));

export const WrapSearch = styled.div`
  display: inline-block;
  margin: 15px auto;
  position: relative;
`

export const WrapIconSearch = styled.div`
  position: absolute;
  top: 22px;
  left: 5px;
`
