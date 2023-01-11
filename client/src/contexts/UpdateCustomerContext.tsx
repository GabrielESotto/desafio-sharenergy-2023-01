// Built-in
import { createContext, useState, ReactNode, useContext } from 'react'

// Externos
import axios from 'axios'

// Internos
import CreateCustomerContext from './CreateCustomerContext';
import { UpdateCustomerType } from '../interfaces/typeCustomer';

type UpdateCustomerProps = {
  children?: ReactNode | undefined;
}

const UpdateCustomerContext = createContext({} as UpdateCustomerType)

export const UpdateCustomerProvider = ({children}: UpdateCustomerProps) => {

  // Function to close modal and state to display message
  const { closeModal, setCatchMessage } = useContext(CreateCustomerContext)

  // States for this context
  const [updateName, setUpdateName] = useState('')
  const [updateEmail, setUpdateEmail] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [updateAdress, setUpdateAdress] = useState('')
  const [updateCpf, setUpdateCpf] = useState('')

  // Const to validate email
  const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  // Values to patch request
  const updating = {
    name: updateName || undefined,
    email: updateEmail || undefined,
    phone: updatePhone || undefined,
    adress: updateAdress || undefined,
    cpf: updateCpf || undefined
  }

  const getOneCustomer = async (id: string) => {


    // Logic to validate form
    if (updateName.length < 3 && updateName.length !== 0 || updateName.length > 30) 
    return setCatchMessage('Nome deve ter entre 3 e 30 caracteres')

    if (updateEmail) {
      if(!emailTest.test(updateEmail)){
        setCatchMessage('Insira um e-mail valido para atualizar')
        return
      }
    }

    if (updateCpf) {
      if (updateCpf.length !== 11) {
        setCatchMessage('CPF deve ter 11 digitos')
        return
      }
    }

    if(updateAdress) {
      if(updateAdress.length <= 4) {
        setCatchMessage('Endereço deve ter pelo menos 5 caracteres')
        return
      }
    }

    // Request API to update one customer
    await axios.patch(`http://localhost:9090/customers/update/${id}`, updating)
    .then(res => {
      closeModal()
      setCatchMessage('Cliente atualizado com sucesso.')
      
      setTimeout(() => {
        window.location.reload()
      }, 600)
    })
    .catch(error => {
      console.log(error)
    })
  }    

  // Values for this context
  const value = {
    getOneCustomer, 
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
  }

  return <UpdateCustomerContext.Provider value={value}>{children}</UpdateCustomerContext.Provider>
}

export default UpdateCustomerContext;
