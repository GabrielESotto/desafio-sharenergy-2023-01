import { createContext, ReactNode, useContext } from 'react'
import axios from 'axios'
import CreateCustomerContext from './CreateCustomerContext';

type DeleteCustomerType = {
  deleteOneCustomer: (id: string) => void;
}

type DeleteCustomerProps = {
  children?: ReactNode | undefined;
}

const DeleteCustomerContext = createContext({} as DeleteCustomerType)

export const DeleteCustomerProvider = ({children}: DeleteCustomerProps) => {
  
  const { setCatchMessage } = useContext(CreateCustomerContext)

  const deleteOneCustomer = async(id: string) => {
    await axios.delete(`http://localhost:9090/customers/delete/${id}`)
    .then(res => {
      setCatchMessage('Cliente deletado com sucesso.')
      
      setTimeout(() => {
        window.location.reload()
      }, 600)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return <DeleteCustomerContext.Provider value={{deleteOneCustomer}}>{children}</DeleteCustomerContext.Provider>
}

export default DeleteCustomerContext;
