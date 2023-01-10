import { createContext, useEffect, useState, ReactNode } from 'react'
import axios from 'axios'
import { Customer } from '../interfaces/typeCustomer';

type CustomerContextType = {
  allCustomers: Customer[];
  setAllCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
  loading: boolean;
}

type CustomerContextProps = {
  children?: ReactNode | undefined;
}

const CustomersContext = createContext({} as CustomerContextType)

export const CustomersProvider = ({children}: CustomerContextProps) => {

  const [allCustomers, setAllCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true)
      const res = await axios.get('http://localhost:9090/customers/get')
      setAllCustomers(res.data)
      setLoading(false)
    }

    fetchCustomers()
  }, [])

  return <CustomersContext.Provider value={{allCustomers, setAllCustomers, loading}}>{children}</CustomersContext.Provider>
}

export default CustomersContext;
