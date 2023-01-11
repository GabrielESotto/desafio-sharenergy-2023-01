// Built-in
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'

// Externos
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdateIcon from '@mui/icons-material/Update';
import { 
  TableContainer, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell, 
  Paper, 
} from '@mui/material'

// Internos
import GetCustomerContext from '../../contexts/GetCustomerContext';
import UpdateCustomerContext from '../../contexts/UpdateCustomerContext'
import CreateCustomerContext from '../../contexts/CreateCustomerContext'
import DeleteCustomerContext from '../../contexts/DeleteCustomerContext'
import DivLoading from '../DivLoading/DivLoading'
import Modal from '../Modal/Modal'
import AlertDialog from '../AlertDialog/AlertDialog'
import SnackbarAlert from '../Snackbar/SnackbarAlert'
import { Customer } from '../../interfaces/typeCustomer';

type Props = {
  customers: Customer[];
  load: boolean;
}

const ShowCustomers = ({customers, load}: Props) => {

  // Contexts of Customers, Functions and States
  const { getOneCustomer } = useContext(UpdateCustomerContext)
  const { catchMessage } = useContext(CreateCustomerContext)
  const { deleteOneCustomer } = useContext(DeleteCustomerContext)
  const { getSpecifyCustomer } = useContext(GetCustomerContext)

  // States for contexts, modals, snackbar and alert.
  const [id, setId] = useState<string>('')
  const [del, setDel] = useState<boolean>(false)
  const [nameClicked, setNameClicked] = useState<string>('')
  const [whichModal, setWhichModal] = useState<string>('')
  const [updateOpen, setUpdateOpen] = useState<boolean>(false)
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  const navigate = useNavigate()

  // Function Snackbar Controller
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };


  // Function Update Customer
  const handleUpdateSubmit = () => {
    getOneCustomer(id)
    handleOpenSnackbar()
  }

  // Function Delete Customer
  const handleDeleteSubmit = () => {
    deleteOneCustomer(id)
    setDel(prev => !prev)
    handleOpenSnackbar()
  }

  // Function Alert Open and Close
  const handleOpenAlert = () => {
    setOpenAlert(true)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  // Function Open Specify Customer Page
  const handleOpenPage = (id: string) => {
    navigate(`/customers/${id}`)
    getSpecifyCustomer(id)
  }

  // Function to Open Create Customer Modal
  const handleUpdateModal = () => {
    setWhichModal('updateModal')
    setUpdateOpen(prev => !prev) 
  }

  // Render loading gif
  if(load) {
    return <DivLoading />
  }

  return <>
    {!customers ? ('No customer found') : (
      <TableContainer 
        sx={{boxShadow: '3px 3px 16px 4px #585858be',}} 
        component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell sx={{textAlign: 'center', width: '50px'}}>
                View
              </TableCell>
              <TableCell sx={{textAlign: 'center', width: '50px'}}>
                Update
              </TableCell>
              <TableCell sx={{textAlign: 'center', width: '50px'}}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell sx={{textAlign: 'center', width: '10px'}}>
                    <VisibilityIcon 
                      onClick={() => {
                        handleOpenPage(row._id)
                      }}
                      sx={{ 
                        cursor: 'pointer', 
                        transition: '0.2s ease-in', 
                        '&:hover': {color: 'green'} 
                      }} 
                    />
                  </TableCell>
                  <TableCell sx={{textAlign: 'center', width: '10px'}}>
                    <UpdateIcon 
                      onClick={() => {
                        setId(row._id)
                        setNameClicked(row.name)
                        handleUpdateModal()
                      }} 
                      sx={{ 
                        cursor: 'pointer', 
                        transition: '0.2s ease-in', 
                        '&:hover': {color: 'blue'} 
                      }} 
                    />
                  </TableCell>
                  <TableCell sx={{textAlign: 'center', width: '10px'}}>
                    <DeleteIcon 
                      onClick={() => {
                        setId(row._id)
                        handleOpenAlert()
                        setDel(true)
                      }} 
                      sx={{ 
                        cursor: 'pointer', 
                        transition: '0.2s ease-in', 
                        '&:hover': {color: 'red'} 
                      }} 
                    />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    )}              
    <SnackbarAlert 
      openSnack={openSnackbar} 
      closeSnack={handleCloseSnackbar} 
      message={catchMessage} 
    />
    {del && 
      <AlertDialog 
        openAlert={openAlert} 
        handleClose={handleCloseAlert} 
        handleDelete={handleDeleteSubmit}
      />
    }
    <Modal 
      isOpen={updateOpen} 
      ocModal={handleUpdateModal} 
      btn='Update' 
      titleModal={`Update the customer:  ${nameClicked}`} 
      submit={handleUpdateSubmit} 
      whichModal={whichModal}
    />

  </>
}

export default ShowCustomers
