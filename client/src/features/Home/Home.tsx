import Header from '../../components/Header/Header'
import Signin from '../../components/Signin/Signin'
import Global from '../../assets/styles/global'

import {
  HomeBg,
  HomeContainer,
} from './HomeElements'

const Home = () => {
  return (
    <>
      <Global />
      <HomeBg>
        <Header />
        <HomeContainer>
          <Signin />
        </HomeContainer>
      </HomeBg>
    </>

  )
}

export default Home
