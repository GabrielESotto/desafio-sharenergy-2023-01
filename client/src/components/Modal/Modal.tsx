import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Modal';

import { Input } from './ModalElements'

import { ContainerForm, Box as BoxContent, ContentDiv, Label, ColorButton } from '../Signin/SigninElements';
import CreateCustomerContext from '../../contexts/CreateCustomerContext'
import { useContext, useState } from 'react'
import UpdateCustomerContext from '../../contexts/UpdateCustomerContext';


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
  btn: string;
  titleModal: string;
  submit: () => void;
  whichModal: string;
}

const Modal = ({isOpen, ocModal, btn, titleModal, submit, whichModal}: ModalProps) => {

  const { 
    name,
    email,
    phone,
    adress,
    cpf,
    itIsOpen,
    btnIsClicked,
    setName,
    setEmail,
    setPhone,
    setAdress,
    setCpf,
    closeModal,
  } = useContext(CreateCustomerContext)

  const {
    updateName, 
    updateAdress, 
    updateCpf, 
    updateEmail, 
    updatePhone, 
    setUpdateAdress, 
    setUpdateEmail, 
    setUpdateCpf, 
    setUpdateName, 
    setUpdatePhone
  } = useContext(UpdateCustomerContext)

  return <>
      <Dialog
        open={btnIsClicked ? itIsOpen : isOpen}
        onClose={btnIsClicked ? closeModal : ocModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{textAlign: 'center', marginBottom: '-30px'}} variant="h6" component="h2">
            {titleModal}
          </Typography>
          <ContentDiv>
            <ContainerForm>
              <BoxContent>
                <Label>Full Name</Label>
                { whichModal === 'updateModal' ? <Input value={updateName} onChange={e => setUpdateName(e.target.value)} /> : <Input value={name} onChange={e => setName(e.target.value)} /> }
              </BoxContent>
              <BoxContent>
                <Label>E-mail</Label>
                { whichModal === 'updateModal' ? <Input value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} /> : <Input value={email} onChange={e => setEmail(e.target.value)} /> }
              </BoxContent>
              <BoxContent>
                <Label>Phone Number</Label>
                { whichModal === 'updateModal' ? <Input value={updatePhone} onChange={e => setUpdatePhone(e.target.value)} /> : <Input value={phone} onChange={e => setPhone(e.target.value)} /> }
              </BoxContent>
              <BoxContent>
                <Label>Adress</Label>
                { whichModal === 'updateModal' ? <Input value={updateAdress} onChange={e => setUpdateAdress(e.target.value)} /> : <Input value={adress} onChange={e => setAdress(e.target.value)} /> }
              </BoxContent>
              <BoxContent>
                <Label>CPF</Label>
                { whichModal === 'updateModal' ? <Input value={updateCpf} onChange={e => setUpdateCpf(e.target.value)} /> : <Input value={cpf} onChange={e => setCpf(e.target.value)} /> }
              </BoxContent>
              <ColorButton onClick={submit}variant='contained'>{btn}</ColorButton>
            </ContainerForm>
          </ContentDiv>
        </Box>
      </Dialog>
    </>
}

export default Modal
