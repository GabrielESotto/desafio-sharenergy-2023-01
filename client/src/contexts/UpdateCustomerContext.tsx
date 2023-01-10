import { createContext, useState, ReactNode, useContext } from 'react'
import axios from 'axios'
import CreateCustomerContext from './CreateCustomerContext';

type UpdateCustomerType = {
  getOneCustomer: (id: string) => void;
  updateName: string;
  updateEmail: string;
  updatePhone: string;
  updateAdress: string;
  updateCpf: string;
  setUpdateName: React.Dispatch<React.SetStateAction<string>>;
  setUpdateEmail: React.Dispatch<React.SetStateAction<string>>;
  setUpdatePhone: React.Dispatch<React.SetStateAction<string>>;
  setUpdateAdress: React.Dispatch<React.SetStateAction<string>>;
  setUpdateCpf: React.Dispatch<React.SetStateAction<string>>;
}

type UpdateCustomerProps = {
  children?: ReactNode | undefined;
}

const UpdateCustomerContext = createContext({} as UpdateCustomerType)

export const UpdateCustomerProvider = ({children}: UpdateCustomerProps) => {

  const { closeModal, setCatchMessage } = useContext(CreateCustomerContext)

  const [updateName, setUpdateName] = useState('')
  const [updateEmail, setUpdateEmail] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [updateAdress, setUpdateAdress] = useState('')
  const [updateCpf, setUpdateCpf] = useState('')

  const updating = {
    name: updateName || undefined,
    email: updateEmail || undefined,
    phone: updatePhone || undefined,
    adress: updateAdress || undefined,
    cpf: updateCpf || undefined
  }

  const getOneCustomer = async (id: string) => {
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
