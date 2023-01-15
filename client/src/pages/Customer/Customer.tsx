// Built-in
import { useContext, useEffect} from 'react'

// Externos
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Internos
import GetCustomerContext from "../../contexts/GetCustomerContext"
import Global from "../../assets/styles/global"
import Header from "../../components/Header/Header"
import DivLoading from "../../components/DivLoading/DivLoading"
import { Container } from "../Dog/DogElements"
import { 
  DivInfo, 
  TextInfo, 
  LabelInfo, 
  Title, 
  WrapItems, 
  WrapArrow 
} from './CustomerElements'


const Customer = () => {

  // States and Function to Specify Customer
  const { dataCustomer, getSpecifyCustomer, loading } = useContext(GetCustomerContext)

  // Consts to get current URL
  const currentUrl = window.location.href
  const sliceUrl = currentUrl.slice(32, )

  // Request API to get a specify customer
  useEffect(() => {
    getSpecifyCustomer(sliceUrl)
  }, [])

  // Function to redirect to previous page
  const goBackOnePage = () => {
      window.history.back()
  }

  // Render loading gif
  if(loading) {
    return <DivLoading />
  }

  return (
    <>
      <Global />
        <Header />
        <Container>
          <WrapItems>
            <Title>Customer: {dataCustomer.map((customer) => customer.name)}</Title>
            {dataCustomer.map((eachCustomer) => (
              <>
                <DivInfo>
                  <LabelInfo>ID:</LabelInfo>
                  <TextInfo>{eachCustomer._id}</TextInfo>
                </DivInfo>
                <DivInfo>
                  <LabelInfo>Nome:</LabelInfo>
                  <TextInfo>{eachCustomer.name}</TextInfo>
                </DivInfo>
                <DivInfo>
                  <LabelInfo>Email:</LabelInfo>
                  <TextInfo>{eachCustomer.email}</TextInfo>
                </DivInfo>
                <DivInfo>
                  <LabelInfo>Phone Number:</LabelInfo>
                  <TextInfo>{eachCustomer.phone}</TextInfo>
                </DivInfo>
                <DivInfo>
                  <LabelInfo>Adress:</LabelInfo>
                  <TextInfo>{eachCustomer.adress}</TextInfo>
                </DivInfo>
                <DivInfo>
                  <LabelInfo>CPF:</LabelInfo>
                  <TextInfo>{eachCustomer.cpf}</TextInfo>
                </DivInfo>
              </>
            ))}
            <WrapArrow>
              <ArrowBackIcon 
                onClick={goBackOnePage} 
                sx={{
                  marginBottom: '10px', 
                  cursor: 'pointer',
                  '&:hover': {color: 'grey', transition: '0.2s ease-in'}
                }} />
            </WrapArrow>
          </WrapItems>
        </Container>
        <br></br>
    </>
  )
}

export default Customer
