import styled from 'styled-components'
import bgLogo from '../../assets/images/bgHome.jpeg'
import pgNotFound from '../../assets/images/pagenotfound.jpg'

export const Background = styled.div`
  width: 100%;
  height: 930px;
  background-image: url(${bgLogo});
  background-size: cover
`

export const TitleCat = styled.h1`
  text-align: center;
  margin-top: 30px;
`

export const SubTitle = styled.p`
  margin-top: 20px;
  margin-left: 30px;
`

export const Select = styled.select`
  margin-top: 10px;
  width: 200px;
  padding: 4px;
  font-size: 12px;
  margin-left: 30px;
`

export const Option = styled.option`
  font-size: 12px;
`

export const ImgCat = styled.img`
  width: 430px;
  height: 350px;
  margin: 30px auto;
  object-fit: fill;
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
`
