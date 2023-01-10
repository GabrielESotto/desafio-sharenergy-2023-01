import styled from 'styled-components'
import bgLogo from '../../assets/images/bgHome.jpeg'


export const Container = styled.div`
  max-width: 1700px;
  height: 800px;
  background-color: #f5faf0;
  margin: 0 auto 40px auto;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgLogo});
  background-size: cover
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
  height: 500px;
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
