import Header from '../../components/Header/Header'
import Global from '../../assets/styles/global'
import axios from 'axios'
import { Result } from '../../interfaces/types'
import { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {
  Background,
  Container,
  Title,
  ContainerBox,
  Box,
  WrapBox,
  PhotoUser,
  InfoLabel,
  WrapInfo,
  Label,
  SearchInput,
  WrapPagination,
  Pagination,
  ColorButton,
  WrapSearch
} from './RandomElements'
import usePagination from '../../hooks/usePagination'

const Random = () => {

  const [users, setUsers] = useState<Result[]>([])
  const [filter, setFilter] = useState('')
  const { actualPage, setActualPage } = usePagination()

  // Request to API
  useEffect(() => {
    (async () => {
      await axios.get(`https://randomuser.me/api/?page=${actualPage > 10 ? setActualPage(1) : actualPage}&results=8&seed=abc`)
      .then(res => {
        setUsers(res.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    }) ()
  }, [actualPage])  

  // Filter search


  return (
    <>
      <Global />
      <Background>
        <Header />
        <Container>
          <ContainerBox>
            <Title>Random User Generator</Title>
            <WrapSearch>
              <SearchInput 
                value={filter} 
                onChange={e => {
                  setFilter(e.target.value)
                }} 
                placeholder='Find one user'>
              </SearchInput>
              <ColorButton variant="contained">Search</ColorButton>
            </WrapSearch>
            <WrapBox>
                {users &&
                 users
                 .filter(user => 
                  user.email.includes(filter) || 
                  user.login.username.includes(filter) || 
                  user.name.first.includes(filter) || 
                  user.name.last.includes(filter)
                  )
                 .map((user) => (
                  <Box>
                      <PhotoUser src={user.picture.large} />
                      <WrapInfo>
                        <Label>Nome</Label>
                        <InfoLabel>{user.name.first + ' ' + user.name.last}</InfoLabel>
                      </WrapInfo>
                      <WrapInfo>
                        <Label>Email</Label>
                        <InfoLabel>{user.email}</InfoLabel>
                      </WrapInfo>
                       <WrapInfo>
                        <Label>Username</Label>
                        <InfoLabel>{user.login.username}</InfoLabel>
                      </WrapInfo>
                      <WrapInfo>
                        <Label>Idade</Label>
                        <InfoLabel>{user.dob.age}</InfoLabel>
                      </WrapInfo>
                  </Box>
                ))}            
            </WrapBox>
            <WrapPagination>
                {
                  Array(10).fill('').map((_, index) => {
                    return <Pagination key={index} onClick={() => setActualPage(index + 1)}>
                      {index + 1}
                    </Pagination>
                  })
                }
            </WrapPagination>
          </ContainerBox>
        </Container>
        <br></br>
      </Background>
    </>
  )
}

export default Random
