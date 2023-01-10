import {useContext, useState} from 'react'
import Global from '../../assets/styles/global'
import Header from '../../components/Header/Header'
import CustomersContext from '../../contexts/CustomersContext'
import AddIcon from '@mui/icons-material/Add';
import { TitleDog as Title } from '../Dog/DogElements'
import { Background, WrapRight, Container, WrapItems, ContentBox, BtnCreate } from './CustomersElements'
import ShowCustomers from '../../components/ShowCustomers/ShowCustomers'
import CreateCustomerContext from '../../contexts/CreateCustomerContext';
import Modal from '../../components/Modal/Modal'
import SnackbarAlert from '../../components/Snackbar/SnackbarAlert'
import Pagination from '../../components/Pagination/Pagination';


const Customers = () => {

  // Customers Contexts
  const { allCustomers, loading } = useContext(CustomersContext)
  const { handleCreate, catchMessage } = useContext(CreateCustomerContext)

  // Page States
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [customersPerPage] = useState<number>(8)

  const [whichModal, setWhichModal] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  // Get current customers
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomer = allCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCreateSubmit = () => {
    handleCreate()
    handleOpenSnackbar()
  }

  const handleModal = () => {
    setWhichModal('createModal')
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
                </WrapRight>
                <ShowCustomers customers={currentCustomer} load={loading} />  
                <Pagination dataPerPage={customersPerPage} totalData={allCustomers.length} paginate={paginate}/> 
                <Modal isOpen={open} ocModal={handleModal} btn='Create' titleModal='Create a new customer' submit={handleCreateSubmit} whichModal={whichModal} />    
                <SnackbarAlert openSnack={openSnackbar} closeSnack={handleCloseSnackbar} message={catchMessage} />
              </ContentBox>
            </WrapItems>
          </Container>
          <br></br>
      </Background>
    </>
   
  )
}

export default Customers
