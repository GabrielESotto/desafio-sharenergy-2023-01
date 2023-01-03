import { ColorButton } from './HomeElements'
import {
  HomeBg,
  HomeLogo,
  HomeContainer,
  ContainerTitle,
  ContainerForm,
  Box,
  Label,
  InputEmail,
  InputPassword,
  ContentDiv,
  RememberMe,
  RememberBox,
  SpanRm
} from './HomeElements'

const Home = () => {
  return (
    <HomeBg>
      <HomeLogo></HomeLogo>
      <HomeContainer>
        <ContentDiv>
          <ContainerTitle>Login</ContainerTitle>
          <ContainerForm>
            <Box>
              <Label>Username</Label>
              <InputEmail />
            </Box>
            <Box>
              <Label>Password</Label>
              <InputPassword type='password' />
              <RememberBox>
                <RememberMe type='checkbox' />
                <SpanRm>Remember Me?</SpanRm>
              </RememberBox>
            </Box>
            <ColorButton variant="contained">Login</ColorButton>
          </ContainerForm>
        </ContentDiv>
      </HomeContainer>
    </HomeBg>
  )
}

export default Home
