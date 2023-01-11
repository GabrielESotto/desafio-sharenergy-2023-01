// Built-in
import React, {useState, useEffect} from 'react'

// Externos
import axios from 'axios'

// Internos
import Global from '../../assets/styles/global'
import Header from '../../components/Header/Header'
import DivLoading from '../../components/DivLoading/DivLoading'
import {
  Background,
  Container,
  TitleDog,
  WrapItems,
  ColorButton,
  DivImg,
  DivVideo,
  InitialDog
} from './DogElements'


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

  // Render loading gif
  if(loading) {
    return <DivLoading />
  }

  return (
    <>
      <Global />
      <Background>
        <Header />
        <Container>
          <WrapItems>
            <TitleDog>Random Dog</TitleDog>
            <ColorButton onClick={handleRefresh} variant="contained">
              Refresh Image
            </ColorButton>
            {randomDog.includes('.mp4') || randomDog.includes('.gif') || randomDog.includes('.webm') ? (
              randomDog ? (
                <DivVideo autoPlay src={`http://random.dog/${randomDog}`}/> 
              ) : (
                <InitialDog>Press the button to see one dog</InitialDog>
              )) : (
              randomDog ? (
                <DivImg src={`http://random.dog/${randomDog}`} /> 
              ) : (
                <InitialDog>Press the button to see one dog</InitialDog>
              )
            )}
          </WrapItems>
        </Container>
      </Background>
    </>
  )
}

export default Dog
