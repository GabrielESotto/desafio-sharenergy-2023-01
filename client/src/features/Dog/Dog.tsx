import React, {useState, useEffect} from 'react'
import Global from '../../assets/styles/global'
import Header from '../../components/Header/Header'
import axios from 'axios'
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

  const [allDogs, setAllDogs] = useState<string[]>([])

  useEffect(() => {
    (async () => {
      await axios.get('https://random.dog/doggos')
      .then(res => {
        setAllDogs(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    }) ()
  }, [])

  
  // Get a random aleatory
  const [randomDog, setRandomDog] = useState<string>('')
  
  const handleRefresh = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setRandomDog(allDogs[Math.floor(Math.random() * allDogs.length)])
  }

  return (
    <>
      <Global />
      <Background>
        <Header />
        <Container>
          <WrapItems>
            <TitleDog>Random Dog</TitleDog>
            <ColorButton onClick={handleRefresh} variant="contained">Refresh Image</ColorButton>
            {randomDog.includes('.mp4') || randomDog.includes('.gif') || randomDog.includes('.webm') ? 
              randomDog ? <DivVideo autoPlay src={`http://random.dog/${randomDog}`}/> : <InitialDog>Press the button to see one dog</InitialDog>
             :
             randomDog ? <DivImg src={`http://random.dog/${randomDog}`} /> : <InitialDog>Press the button to see one dog</InitialDog>
            }
          </WrapItems>
        </Container>
      </Background>
    </>
  )
}

export default Dog
