import Home from "./features/Home/Home"
import { Route, Routes } from 'react-router-dom'
import Random from "./features/Random/Random"
import Dog from "./features/Dog/Dog"
import Cat from "./features/Cat/Cat"
import Customers from "./features/Customers/Customers"

function App() {

  const user = window.localStorage.getItem('user')

  return (
    <Routes>
      <Route path='/' element={user === 'null' || !user ? <Home /> : <Random />} />
      <Route path='/random' element={user === 'null' || !user ? <Home /> : <Random />} />
      <Route path='/dog' element={user === 'null' || !user ? <Home /> : <Dog />} />
      <Route path='/cat' element={user === 'null' || !user ? <Home /> : <Cat />} />
      <Route path='/customers' element={user === 'null' || !user ? <Home /> : <Customers />} />
    </Routes>
  )
}

export default App
