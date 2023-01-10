import Header from '../../components/Header/Header'
import Global from '../../assets/styles/global'
import axios from 'axios'
import { Result } from '../../interfaces/types'
import { useState, useEffect } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import SearchIcon from '@mui/icons-material/Search';
import {
  Background,
  Container,
  Title,
  ContainerBox,
  WrapBox,
  SearchInput,
  WrapPagination,
  WrapSearch,
  WrapIconSearch
} from './RandomElements'
import ShowRandomUsers from '../../components/ShowRandomUsers/ShowRandomUsers'

const Random = () => {

  // States Random User Page
  const [users, setUsers] = useState<Result[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [usersPerPage] = useState<number>(8)
  

  // Request to API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await axios.get(`https://randomuser.me/api/?page=1&results=80&seed=abc`)
      setUsers(res.data.results)
      setLoading(false)
    }

    fetchUsers()
  }, [])  

  const filterSearch = users.filter(user => {
    if(user.email.includes(filter) || user.login.username.includes(filter) || user.name.first.includes(filter) || user.name.last.includes(filter)) return user
  })

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser)
  const currentUserFiltered = filterSearch.slice(indexOfFirstUser, indexOfLastUser)

  // Change page
  const [flag, setFlag] = useState<boolean>(false)
  const paginate = (pageNumber: number) => {setCurrentPage(pageNumber)}

  useEffect(() => {
    if(filter) setFlag(true)
    if(!filter) setFlag(false)
  }, [filter])

  return (
    <>
      <Global />
      <Background>
        <Header />
        <Container>
          <ContainerBox>
            <Title>Random User Generator</Title>
            <WrapSearch>
              <WrapIconSearch>
                <SearchIcon sx={{color: 'grey'}}/>
              </WrapIconSearch>   
              <SearchInput 
                value={filter} 
                onChange={e => {
                  setFilter(e.target.value)
                }} 
                placeholder='Find one user'>
              </SearchInput>
            </WrapSearch>
            <WrapBox>
              {
                filter ?  
                  <ShowRandomUsers users={currentUserFiltered} load={loading} filter={filter} /> : 
                  <ShowRandomUsers users={currentUser} load={loading} filter={filter} />
              }
            </WrapBox>
            <WrapPagination>
              {
                flag ? 
                <Pagination 
                  dataPerPage={usersPerPage} 
                  totalData={filterSearch.length} 
                  paginate={paginate} /> :
                <Pagination 
                  dataPerPage={usersPerPage} 
                  totalData={users.length} 
                  paginate={paginate} />
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
