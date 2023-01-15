// Built-in
import { createContext, useState, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Externos
import axios from "axios";

// Internos
import AuthContext from "./AuthContext";
import { LoginContextProps } from "../interfaces/types";

type LoginContextType = {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  navigateLoggedPage?: () => void;
  handleSubmit: () => void;
  catchMessage: string;
}

const LoginContext = createContext({} as LoginContextType)

export const LoginProvider = ({children}: LoginContextProps) => {
  // Function login authorization and redirect logged page
  const {login} = useContext(AuthContext)

  // State for this context
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [catchMessage, setCatchMessage] = useState<string>('')

  const navigate = useNavigate()

  // Redirect to logged page
  const navigateLoggedPage = () => {
    navigate('/random')
  }

  // Request API to login user
  const handleSubmit = async () => {
    await axios.post('http://localhost:9090/users/login', {
      username: username,
      password: password
    })
    .then(res => {
      if(res.status === 200) {
        login(res.data)
        navigateLoggedPage()
        setCatchMessage('Login realizado com sucesso')
      }
    })
    .catch(error => {
      setCatchMessage(error.response.data)
    }) 
  }

  return <LoginContext.Provider value={{handleSubmit, catchMessage, username, password, setUsername, setPassword}}>{children}</LoginContext.Provider>
}

export default LoginContext;
