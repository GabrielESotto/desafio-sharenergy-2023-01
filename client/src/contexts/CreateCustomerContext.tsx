import { createContext, useEffect, useState, ReactNode } from 'react'
import axios from 'axios'

type CreateCustomerType = {
  name: string;
  email: string;
  phone: string;
  adress: string;
  cpf: string;
  setName: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPhone: React.Dispatch<React.SetStateAction<string>>
  setAdress: React.Dispatch<React.SetStateAction<string>>
  setCpf: React.Dispatch<React.SetStateAction<string>>
  handleCreate: (e: React.SyntheticEvent) => void;
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

  const handleCreate = (e: React.SyntheticEvent) => {
    e.preventDefault()

    axios.post('http://localhost:9090/customers/create', {
      name: name,
      email: email,
      phone: phone,
      adress: adress,
      cpf: cpf
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
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
    handleCreate
  }

  return <CreateCustomerContext.Provider value={value}>{children}</CreateCustomerContext.Provider>
}

export default CreateCustomerContext;
