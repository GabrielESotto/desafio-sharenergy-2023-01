import {useContext, useState} from 'react'
import Global from '../../assets/styles/global'
import Header from '../../components/Header/Header'
import CustomersContext from '../../contexts/CustomersContext'
import { 
  TableContainer, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell, 
  Paper 
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdateIcon from '@mui/icons-material/Update';
import AddIcon from '@mui/icons-material/Add';
import { Background, TitleDog as Title } from '../Dog/DogElements'
import { WrapRight, Container, WrapItems, ContentBox, BtnCreate } from './CustomersElements'
import Modal from '../../components/Modal/Modal'

const Customers = () => {

  const { allCustomers, setAllCustomers } = useContext(CustomersContext)
  const [open, setOpen] = useState<boolean>(false)

  const handleModal = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <Global />
      <Background>
        <Header />
        <Container>
          <WrapItems>
            <Title>Customers</Title>
            <ContentBox>
              <WrapRight>
                <BtnCreate onClick={handleModal}>New Customer <AddIcon sx={{marginLeft: '10px'}} /></BtnCreate>
                <Modal isOpen={open} ocModal={handleModal} />
              </WrapRight>
              <TableContainer 
                sx={{boxShadow: '3px 3px 16px 4px #585858be',}} 
                component={Paper}
              >
                <Table>
                  <TableHead >
                    <TableRow >
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell sx={{textAlign: 'center'}}>
                        View All
                      </TableCell>
                      <TableCell sx={{textAlign: 'center'}}>
                        Update
                      </TableCell>
                      <TableCell sx={{textAlign: 'center'}}>
                        Delete
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      allCustomers.map(row => (
                        <TableRow key={row._id}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.phone}</TableCell>
                          <TableCell sx={{textAlign: 'center'}}>
                            <VisibilityIcon sx={{ cursor: 'pointer' }} />
                          </TableCell>
                          <TableCell sx={{textAlign: 'center'}}>
                            <UpdateIcon sx={{ cursor: 'pointer' }} />
                          </TableCell>
                          <TableCell sx={{textAlign: 'center'}}>
                            <DeleteIcon sx={{ cursor: 'pointer' }} />
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </ContentBox>
          </WrapItems>
        </Container>
      </Background>
    </>
   
  )
}

export default Customers
