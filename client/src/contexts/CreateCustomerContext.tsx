// Built-in
import { createContext, useState, ReactNode } from 'react'

// Externos
import axios from 'axios'

// Internos
import { CreateCustomerType } from '../interfaces/typeCustomer'

type CreateCustomerProps = {
  children?: ReactNode | undefined;
}

const CreateCustomerContext = createContext({} as CreateCustomerType)

export const CreateCustomerProvider = ({children}: CreateCustomerProps) => {

  // All states for this context
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [adress, setAdress] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [btnIsClicked, setBtnIsClicked] = useState<boolean>(false)
  const [itIsOpen, setItIsOpen] = useState<boolean>(false)
  const [catchMessage, setCatchMessage] = useState<string>('')

  const closeModal = () => {
    setItIsOpen(prev => !prev)
  }

  // Request API to create a customer
  const handleCreate = async () => {
    await axios.post('http://localhost:9090/customers/create', {
      name: name,
      email: email,
      phone: phone,
      adress: adress,
      cpf: cpf
    })
    .then(res => {
      setCatchMessage('Cliente cadastrado com sucesso.')
      closeModal()
      
      setTimeout(() => {
        window.location.reload()
      }, 600)
    })
    .catch(error => {
      if(error) {
        setCatchMessage(error.response.data)
      }
    })
  }

  // Values for this context
  const value = {
    name, 
    email, 
    phone, 
    adress, 
    cpf, 
    setName, 
    setEmail, 
    setAdress, 
    setPhone, 
    setCpf, 
    handleCreate,
    closeModal,
    itIsOpen,
    btnIsClicked,
    setBtnIsClicked,
    setCatchMessage,
    catchMessage
  }

  return <CreateCustomerContext.Provider value={value}>{children}</CreateCustomerContext.Provider>
}

export default CreateCustomerContext;
