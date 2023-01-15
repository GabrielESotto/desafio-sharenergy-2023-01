import styled from 'styled-components'
import pgNotFound from '../../assets/images/pagenotfound.jpg'

export const TitleCat = styled.h1`
  text-align: center;
  margin-top: 30px;
  font-size: 21px;
`

export const SubTitle = styled.p`
  margin-top: 20px;
  margin-left: 30px;

  @media screen and (max-width: 450px) {
    font-size: 15px;
    margin-left: 15px;
  }
`

export const Select = styled.select`
  margin-top: 10px;
  width: 200px;
  padding: 4px;
  font-size: 12px;
  margin-left: 30px;

  @media screen and (max-width: 620px) {
    width: 130px;
  }
`

export const Option = styled.option`
  font-size: 12px;
`

export const ImgCat = styled.img`
  width: 430px;
  height: 350px;
  margin: 30px auto;
  object-fit: fill;

  @media screen and (max-width: 620px) {
    width: 300px;
    height: 300px;
  }
`

export const Img404 = styled.img`
  width: 430px;
  height: 350px;
  background-image: url(${pgNotFound});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 30px auto;
  border: 0;

  @media screen and (max-width: 620px) {
    width: 300px;
    height: 300px;
  }
`
