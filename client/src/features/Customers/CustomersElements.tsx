import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1700px;
  height: 700px;
  background-color: #f5faf0;
  margin: 0 auto 40px auto;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;

  @media screen and (max-width: 1750px) {
    max-width: 1300px;
  }

  @media screen and (max-width: 1350px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1050px) {
    max-width: 780px;
  }

  @media screen and (max-width: 800px) {
    max-width: 600px;
  }

  @media screen and (max-width: 620px) {
    max-width: 470px;
  }

  @media screen and (max-width: 500px) {
    max-width: 350px;
  }
`

export const WrapItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContentBox = styled.div`
  margin: 30px auto 0px auto;
  width: 100%;
  max-width: 1500px;
  height: 100%;
  max-height: 500px;

  @media screen and (max-width: 1750px) {
    width: 80%;
  }

  @media screen and (max-width: 1050px) {
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    width: 95%;
    margin: 0 auto;
  }

  @media screen and (max-width: 550px) {
    margin: 0 auto;
    width: 98%;
  }
`

export const BtnCreate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  background-color: white;
  border: 0;
  box-shadow: 2px 2px 20px 1px #585858be;
  border-radius: 5px;
  width: 150px;
  margin-bottom: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    background-color: #f8f3f3;
  }

  &:active {
    background-color: #b5b5b5;
  }
`

export const WrapRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const UlWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`
