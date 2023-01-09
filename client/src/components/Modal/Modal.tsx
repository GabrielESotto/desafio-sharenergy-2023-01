import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Modal';

import {
  Input
} from './ModalElements'

import { ContainerForm, Box as BoxContent, ContentDiv, Label, ColorButton } from '../Signin/SigninElements';
import CreateCustomerContext from '../../contexts/CreateCustomerContext'
import { useContext } from 'react'


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: 5,
  p: 4,
};

type ModalProps = {
  isOpen: boolean;
  ocModal: () => void;
}

const Modal = ({isOpen, ocModal}: ModalProps) => {

  const { 
    name,
    email,
    phone,
    adress,
    cpf,
    setName,
    setEmail,
    setPhone,
    setAdress,
    setCpf,
    handleCreate
   } = useContext(CreateCustomerContext)

  return <>
      <Dialog
        open={isOpen}
        onClose={ocModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{textAlign: 'center', marginBottom: '-30px'}} variant="h6" component="h2">
            Create a new customer
          </Typography>
          <ContentDiv>
            <ContainerForm>
              <BoxContent>
                <Label>Full Name</Label>
                <Input value={name} onChange={e => setName(e.target.value)} />
              </BoxContent>
              <BoxContent>
                <Label>E-mail</Label>
                <Input value={email} onChange={e => setEmail(e.target.value)} />
              </BoxContent>
              <BoxContent>
                <Label>Phone Number</Label>
                <Input type='phone' value={phone} onChange={e => setPhone(e.target.value)} />
              </BoxContent>
              <BoxContent>
                <Label>Adress</Label>
                <Input value={adress} onChange={e => setAdress(e.target.value)} />
              </BoxContent>
              <BoxContent>
                <Label>CPF</Label>
                <Input value={cpf} onChange={e => setCpf(e.target.value)} />
              </BoxContent>
              <ColorButton onClick={handleCreate} variant='contained'>Create</ColorButton>
            </ContainerForm>
          </ContentDiv>
        </Box>
      </Dialog>
    </>
}

export default Modal
