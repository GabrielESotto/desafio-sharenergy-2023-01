// Built-in

// Externos

// Internos
import Header from '../../components/Header/Header'
import Signin from '../../components/Signin/Signin'
import Global from '../../assets/styles/global'
import { HomeContainer } from './HomeElements'


const Home = () => {
  return (
    <>
      <Global />
      <Header />
      <HomeContainer>
        <Signin />
      </HomeContainer>  
      <br></br>
    </>

  )
}

export default Home
