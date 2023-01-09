import { createContext, useEffect, useState, ReactNode } from 'react'
import axios from 'axios'
import { Customer } from '../interfaces/typeCustomer';

type CustomerContextType = {
  allCustomers: Customer[];
  setAllCustomers: React.Dispatch<React.SetStateAction<Customer[]>>
}

type CustomerContextProps = {
  children?: ReactNode | undefined;
}

const CustomersContext = createContext({} as CustomerContextType)

export const CustomersProvider = ({children}: CustomerContextProps) => {

  const [allCustomers, setAllCustomers] = useState<Customer[]>([])

  useEffect(() => {
    axios.get('http://localhost:9090/customers/get')
    .then(res => {
      setAllCustomers(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return <CustomersContext.Provider value={{allCustomers, setAllCustomers}}>{children}</CustomersContext.Provider>
}

export default CustomersContext;
