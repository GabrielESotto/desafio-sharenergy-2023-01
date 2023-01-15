// Built-in
import React, {useState, useEffect} from 'react'

// Externos
import axios from 'axios'

// Internos
import Global from '../../assets/styles/global'
import Header from '../../components/Header/Header'
import clickHereImg from '../../assets/images/png.png'
import DivLoading from '../../components/DivLoading/DivLoading'
import {
  Container,
  TitleDog,
  WrapItems,
  ColorButton,
  DivImg,
  DivVideo,
  ImgClick
} from './DogElements'
import Button from '../../components/Button/Button'


const Dog = () => {

  // States for this contexts and loading gif
  const [allDogs, setAllDogs] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  // Request API to get a Random Dog
  useEffect(() => {
    (async () => {
      setLoading(true)
      await axios.get('https://random.dog/doggos')
      .then(res => {
        setAllDogs(res.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
    }) ()
  }, [])

  
  // State to hold a random dog of an array
  const [randomDog, setRandomDog] = useState<string>('')
  
  // Function to button refresh dog
  const handleRefresh = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setRandomDog(allDogs[Math.floor(Math.random() * allDogs.length)])
  }

  const typeDog = {

  }

  console.log(randomDog)

  // Render loading gif
  if(loading) {
    return <DivLoading />
  }

  return (
    <>
      <Global />
      <Header />
      <Container>
        <WrapItems>
          <TitleDog>Random Dog</TitleDog>
          <Button submit={handleRefresh} children='Refresh Image'/>
          {randomDog.includes('.mp4') || randomDog.includes('.webm') ? (
            randomDog ? (
              <DivVideo autoPlay src={`http://random.dog/${randomDog}`}/> 
            ) : (
              <ImgClick src={clickHereImg} />
            )) : (
            randomDog ? (
              <DivImg src={`http://random.dog/${randomDog}`} /> 
            ) : (
              <ImgClick src={clickHereImg} />
            )
          )}
        </WrapItems>
      </Container>
      <br></br>
    </>
  )
}

export default Dog
