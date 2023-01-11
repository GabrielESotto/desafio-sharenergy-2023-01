// Built-in
import { createContext, ReactNode, useState } from 'react'

// Externos
import axios from 'axios'

// Internos
import { Customer } from '../interfaces/typeCustomer';


type GetCustomerType = {
  getSpecifyCustomer: (id: string) => void;
  dataCustomer: Customer[];
  loading: boolean;
}

type GetCustomerProps = {
  children?: ReactNode | undefined;
}

const GetCustomerContext = createContext({} as GetCustomerType)

export const GetCustomerProvider = ({children}: GetCustomerProps) => {

  // States for this context
  const [dataCustomer, setDataCustomer] = useState<Customer[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  // Request API to get one specify customer with ID
  const getSpecifyCustomer = async (id: string) => {
    setLoading(true)
    await axios.get(`http://localhost:9090/customers/get/${id}`)
    .then(res => {
      setDataCustomer(res.data)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }

  return <GetCustomerContext.Provider value={{ getSpecifyCustomer, dataCustomer, loading }}>{children}</GetCustomerContext.Provider>
}

export default GetCustomerContext;
