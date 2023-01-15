import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LoginProvider } from './contexts/LoginContext'
import { CustomersProvider } from './contexts/CustomersContext'
import { CreateCustomerProvider } from './contexts/CreateCustomerContext'
import { UpdateCustomerProvider } from './contexts/UpdateCustomerContext'
import { DeleteCustomerProvider } from './contexts/DeleteCustomerContext'
import { GetCustomerProvider } from './contexts/GetCustomerContext'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <CookiesProvider>
      <AuthProvider>
        <LoginProvider>
          <CustomersProvider>
            <CreateCustomerProvider>
              <UpdateCustomerProvider>
                <DeleteCustomerProvider>
                  <GetCustomerProvider>
                    <App />
                  </GetCustomerProvider>
                </DeleteCustomerProvider>
              </UpdateCustomerProvider>
            </CreateCustomerProvider>
          </CustomersProvider> 
        </LoginProvider>
      </AuthProvider>
    </CookiesProvider>
  </BrowserRouter>
)
