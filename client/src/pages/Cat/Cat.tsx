// Built-in
import {useEffect, useState} from 'react'

// Externos
import axios from 'axios'

// Internos
import Global from '../../assets/styles/global'
import Header from '../../components/Header/Header'
import { httpStatus } from '../../utils/HttpStatus'
import { Container, WrapItems } from '../Dog/DogElements'
import { 
  Select, 
  Option, 
  ImgCat, 
  TitleCat, 
  SubTitle,
  Img404 
} from './CatElements'


const Cat = () => {

  // States for request
  const [photo, setPhoto] = useState<string>('')
  const [chosenCode, setChosenCode] = useState<string>('')

  // Request API to get Image Cat
  useEffect(() => {
    (async () => {
      await axios.get(`http://localhost:9090/cattp/${chosenCode}`)
      .then(res => {
        setPhoto(res.data)
      })
      .catch(error => {
        if(error.response.status === 404) {
          console.log('Escolha um HTTP Code')
        } else {
          console.log(error)
        }
      })
    }) ()
  }, [chosenCode])

  return (
    <>
      <Global />
      <Header />
      <Container>
        <WrapItems>
          <TitleCat>HTTP Status Cat</TitleCat>
          <SubTitle>Choose a HTTP Status and receive a CAT image</SubTitle>
          <Select 
            data-testid='selector'
            onChange={e => setChosenCode(e.target.value)} 
            name="https" 
            id="https"
          >
            <Option id='first'>Select one code</Option>
            {httpStatus.map(oneStatus => {
              return <Option key={oneStatus} value={oneStatus}>
                {oneStatus}
              </Option>
            })}
          </Select>
          {!chosenCode || chosenCode === 'Select one code' ? (
            <Img404 /> 
          ) : (
            <ImgCat src={photo}/>
          )}
        </WrapItems>
      </Container>
      <br></br>
    </>
  )
}

export default Cat
