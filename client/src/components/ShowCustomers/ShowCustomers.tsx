import {useContext, useState} from 'react'
import Modal from '../Modal/Modal'
import UpdateCustomerContext from '../../contexts/UpdateCustomerContext'
import CreateCustomerContext from '../../contexts/CreateCustomerContext'
import DeleteCustomerContext from '../../contexts/DeleteCustomerContext'
import AlertDialog from '../AlertDialog/AlertDialog'
import SnackbarAlert from '../Snackbar/SnackbarAlert'

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
import GetCustomerContext from '../../contexts/GetCustomerContext';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../interfaces/typeCustomer';

type Props = {
  customers: Customer[];
  load: boolean;
}

const ShowCustomers = ({customers, load}: Props) => {

  const { getOneCustomer } = useContext(UpdateCustomerContext)
  const { catchMessage } = useContext(CreateCustomerContext)
  const { deleteOneCustomer } = useContext(DeleteCustomerContext)
  const { getSpecifyCustomer } = useContext(GetCustomerContext)

  const [id, setId] = useState<string>('')
  const [del, setDel] = useState<boolean>(false)
  const [nameClicked, setNameClicked] = useState<string>('')
  const [whichModal, setWhichModal] = useState<string>('')
  const [updateOpen, setUpdateOpen] = useState<boolean>(false)
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleUpdateModal = () => {
    setWhichModal('updateModal')
    setUpdateOpen(prev => !prev) 
  }

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleUpdateSubmit = () => {
    getOneCustomer(id)
    handleOpenSnackbar()
  }

  const handleDeleteSubmit = () => {
    deleteOneCustomer(id)
    setDel(prev => !prev)
    handleOpenSnackbar()
  }

  const handleOpenAlert = () => {
    setOpenAlert(true)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleOpenPage = (id: string) => {
    navigate(`/customers/${id}`)
    getSpecifyCustomer(id)
  }


  if(load) {
    return <h2>Loading...</h2>
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
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
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
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell sx={{textAlign: 'center', width: '50px'}}>
                    <VisibilityIcon 
                      onClick={() => {
                        handleOpenPage(row._id)
                      }}
                      sx={{ cursor: 'pointer' }} />
                  </TableCell>
                  <TableCell sx={{textAlign: 'center', width: '50px'}}>
                    <UpdateIcon 
                      onClick={() => {
                        setId(row._id)
                        setNameClicked(row.name)
                        handleUpdateModal()
                      }} 
                    sx={{ cursor: 'pointer' }} />
                  </TableCell>
                  <TableCell sx={{textAlign: 'center', width: '50px'}}>
                    <DeleteIcon 
                      onClick={() => {
                        setId(row._id)
                        handleOpenAlert()
                        setDel(true)
                      }} 
                      sx={{ cursor: 'pointer' }} />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    )}              
    <SnackbarAlert openSnack={openSnackbar} closeSnack={handleCloseSnackbar} message={catchMessage} />
    {del && <AlertDialog openAlert={openAlert} handleClose={handleCloseAlert} handleDelete={handleDeleteSubmit}/>}
    <Modal isOpen={updateOpen} ocModal={handleUpdateModal} btn='Update' titleModal={`Update the customer:  ${nameClicked}`} submit={handleUpdateSubmit} whichModal={whichModal}/>

  </>
}

export default ShowCustomers
