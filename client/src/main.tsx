import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LoginProvider } from './contexts/LoginContext'
import { CustomersProvider } from './contexts/CustomersContext'
import { CreateCustomerProvider } from './contexts/CreateCustomerContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <LoginProvider>
        <CustomersProvider>
          <CreateCustomerProvider>
            <App />
          </CreateCustomerProvider>
        </CustomersProvider> 
      </LoginProvider>
    </AuthProvider>
  </BrowserRouter>
)
