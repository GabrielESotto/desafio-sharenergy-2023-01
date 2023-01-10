import { createContext, ReactNode, useState } from 'react'
import axios from 'axios'
import { Customer } from '../interfaces/typeCustomer';

type GetCustomerType = {
  getSpecifyCustomer: (id: string) => void;
  dataCustomer: Customer[];
}

type GetCustomerProps = {
  children?: ReactNode | undefined;
}

const GetCustomerContext = createContext({} as GetCustomerType)

export const GetCustomerProvider = ({children}: GetCustomerProps) => {

  const [dataCustomer, setDataCustomer] = useState<Customer[]>([])

  const getSpecifyCustomer = async (id: string) => {
    await axios.get(`http://localhost:9090/customers/get/${id}`)
    .then(res => {
      setDataCustomer(res.data)
    })
    .catch(error => console.log(error))
  }

  return <GetCustomerContext.Provider value={{ getSpecifyCustomer, dataCustomer }}>{children}</GetCustomerContext.Provider>
}

export default GetCustomerContext;
