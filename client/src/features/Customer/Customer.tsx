import Global from "../../assets/styles/global"
import Header from "../../components/Header/Header"
import { useContext, useEffect} from 'react'
import GetCustomerContext from "../../contexts/GetCustomerContext"
import { Background, Container } from "../Dog/DogElements"
import { DivInfo, TextInfo, LabelInfo, Title, WrapItems } from './CustomerElements'

const Customer = () => {

  const { dataCustomer, getSpecifyCustomer } = useContext(GetCustomerContext)

  const atualUrl = window.location.href
  const sliceUrl = atualUrl.slice(32, )

  useEffect(() => {
    getSpecifyCustomer(sliceUrl)
  }, [])

  console.log(dataCustomer)

  return (
    <>
      <Global />
      <Background>
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
          </WrapItems>
        </Container>
      </Background>
    </>
  )
}

export default Customer
