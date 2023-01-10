import { createContext, useState, ReactNode } from 'react'
import axios from 'axios'

type CreateCustomerType = {
  name: string;
  email: string;
  phone: string;
  adress: string;
  cpf: string;
  itIsOpen: boolean;
  btnIsClicked: boolean;
  catchMessage: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAdress: React.Dispatch<React.SetStateAction<string>>;
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  setBtnIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setCatchMessage: React.Dispatch<React.SetStateAction<string>>;
  handleCreate: () => void;
  closeModal: () => void;
}

type CreateCustomerProps = {
  children?: ReactNode | undefined;
}

const CreateCustomerContext = createContext({} as CreateCustomerType)

export const CreateCustomerProvider = ({children}: CreateCustomerProps) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [adress, setAdress] = useState('')
  const [cpf, setCpf] = useState('')
  const [btnIsClicked, setBtnIsClicked] = useState(false)
  const [itIsOpen, setItIsOpen] = useState<boolean>(false)
  const [catchMessage, setCatchMessage] = useState<string>('')

  const closeModal = () => {
    setItIsOpen(prev => !prev)
  }

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
