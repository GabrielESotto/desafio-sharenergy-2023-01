// Built-in
import { createContext, ReactNode, useContext } from 'react'

// Externos
import axios from 'axios'

// Internos
import CreateCustomerContext from './CreateCustomerContext';


type DeleteCustomerType = {
  deleteOneCustomer: (id: string) => void;
}

type DeleteCustomerProps = {
  children?: ReactNode | undefined;
}

const DeleteCustomerContext = createContext({} as DeleteCustomerType)

export const DeleteCustomerProvider = ({children}: DeleteCustomerProps) => {
  
  // State for this context
  const { setCatchMessage } = useContext(CreateCustomerContext)

  // Request API to delete one customer
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
