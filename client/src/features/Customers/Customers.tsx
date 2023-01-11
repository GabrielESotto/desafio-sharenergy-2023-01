// Built-in
import {useContext, useState} from 'react'

// Externos
import AddIcon from '@mui/icons-material/Add';

// Internos
import CustomersContext from '../../contexts/CustomersContext'
import CreateCustomerContext from '../../contexts/CreateCustomerContext';
import Global from '../../assets/styles/global'
import Modal from '../../components/Modal/Modal'
import Header from '../../components/Header/Header'
import ShowCustomers from '../../components/ShowCustomers/ShowCustomers'
import SnackbarAlert from '../../components/Snackbar/SnackbarAlert'
import Pagination from '../../components/Pagination/Pagination';
import { TitleDog as Title } from '../Dog/DogElements'
import { 
  WrapRight, 
  Container, 
  WrapItems, 
  ContentBox, 
  BtnCreate 
} from './CustomersElements'


const Customers = () => {

  // Customers Contexts
  const { allCustomers, loading } = useContext(CustomersContext)
  const { handleCreate, catchMessage } = useContext(CreateCustomerContext)

  // Page States
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [customersPerPage] = useState<number>(5)

  // Modal and Snackbar States
  const [whichModal, setWhichModal] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  // Get current customers
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomer = allCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)


  // Change state of snackbar
  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };


  // Handle create customer request
  const handleCreateSubmit = () => {
    handleCreate()
    handleOpenSnackbar()
  }

  // Open modal of create customer
  const handleModal = () => {
    setWhichModal('createModal')
    setOpen(prev => !prev)
  }

  return (
    <>
      <Global />
      <Header />
        <Container>
          <WrapItems>
            <Title>Customers</Title>
            <ContentBox>
              <WrapRight>
                <BtnCreate onClick={handleModal}>New Customer <AddIcon sx={{marginLeft: '10px'}} /></BtnCreate>
              </WrapRight>
              {/* ShowCustomers component to render customers */}
              <ShowCustomers customers={currentCustomer} load={loading} />  
              <Pagination dataPerPage={customersPerPage} totalData={allCustomers.length} paginate={paginate}/> 
              <Modal isOpen={open} ocModal={handleModal} btn='Create' titleModal='Create a new customer' submit={handleCreateSubmit} whichModal={whichModal} />    
              <SnackbarAlert openSnack={openSnackbar} closeSnack={handleCloseSnackbar} message={catchMessage} />
            </ContentBox>
          </WrapItems>
        </Container>
        <br></br>
    </>
   
  )
}

export default Customers
