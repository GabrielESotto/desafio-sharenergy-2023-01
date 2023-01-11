// Built-in
import {useEffect, useState} from 'react'

// Externos
import axios from 'axios'

// Internos
import Global from '../../assets/styles/global'
import Header from '../../components/Header/Header'
import {Container, WrapItems} from '../Dog/DogElements'
import { 
  Background, 
  Select, 
  Option, 
  ImgCat, 
  TitleCat, 
  SubTitle,
  Img404 
} from '../Cat/CatElements'


const Cat = () => {

  // Options HTTP Status Code
  const httpStatus = [
    '100', '101', '102', '103', '200', '201', '202', '203', '204', '206', 
    '207', '300', '301', '302', '303', '304', '305', '307', '308',
    '400', '401', '402', '403', '404', '405', '406', '407', '408', '409', 
    '410', '411', '412', '413', '414', '415', '416', '417', '418', '420',
    '421', '422', '423', '424', '425', '426', '429', '431', '444', '450',
    '451', '497', '498', '499', '500', '501', '502', '503', '504', '506',
    '507', '508', '509', '510', '511', '521', '522', '523', '525', '599',
  ]

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
      <Background>
        <Header />
        <Container>
          <WrapItems>
            <TitleCat>HTTP Status Cat</TitleCat>
            <SubTitle>Choose a HTTP Status and receive a CAT image</SubTitle>
            <Select 
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
      </Background>
    </>
  )
}

export default Cat
