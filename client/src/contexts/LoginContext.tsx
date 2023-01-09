import { createContext, useState, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import axios from "axios";

type LoginContextType = {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  navigateLoggedPage?: () => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

type LoginContextProps = {
  children?: ReactNode | undefined;
}

const LoginContext = createContext({} as LoginContextType)

export const LoginProvider = ({children}: LoginContextProps) => {
  const {login} = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const navigateLoggedPage = () => {
    navigate('/logged')
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    axios.post('http://localhost:9090/users/login', {
      username: username,
      password: password
    })
    .then(res => {
      if(res.status === 200) {
        login(res.data)
        navigateLoggedPage()
      }
    })
    .catch(error => {
      console.log(error.response.data)
    }) 
  }

  return <LoginContext.Provider value={{handleSubmit, username, password, setUsername, setPassword}}>{children}</LoginContext.Provider>
}

export default LoginContext;
