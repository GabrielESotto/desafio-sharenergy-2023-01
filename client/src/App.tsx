import Home from "./pages/Home/Home"
import { Route, Routes } from 'react-router-dom'
import Random from "./pages/Random/Random"
import Dog from "./pages/Dog/Dog"
import Cat from "./pages/Cat/Cat"
import Customers from "./pages/Customers/Customers"
import Customer from "./pages/Customer/Customer"

function App() {

  // Get info from Local Storage
  const user = window.localStorage.getItem('user')

  return (
    <Routes>
      <Route 
        path='/' 
        element={user === 'null' || !user ? <Home /> : <Random />} 
      />
      <Route 
        path='/random' 
        element={user === 'null' || !user ? <Home /> : <Random />} 
      />
      <Route 
        path='/dog' 
        element={user === 'null' || !user ? <Home /> : <Dog />} 
      />
      <Route 
        path='/cat' 
        element={user === 'null' || !user ? <Home /> : <Cat />} 
      />
      <Route 
        path='/customers' 
        element={user === 'null' || !user ? <Home /> : <Customers />} 
      />
      <Route 
        path='/customers/:id' 
        element={user === 'null' || !user ? <Home /> : <Customer />} 
      />
    </Routes>
  )
}

export default App
