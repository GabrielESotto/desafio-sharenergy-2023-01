// Built-in
import { createContext, useMemo, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

// Externos

// Internos
import { useLocalStorage } from '../hooks/useLocalStorage'


type AuthContextProps = {
  children?: ReactNode | undefined;
}

type Data = {
  username: string;
  password: string;
}

type AuthContextType = {
  user: string | undefined;
  login: (data: Data) => void;
  logout: () => void
}

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({children}: AuthContextProps) => {

  // Using Local Storage
  const [user, setUser] = useLocalStorage('user', null)

  const navigate = useNavigate()

  // Login function
  const login = async (data: Data) => {
    await setUser(data)
    setTimeout(() => {
      navigate('/random')
      window.location.reload()
    })
  }

  // Logout function
  const logout = async () => {
    setUser(null)
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    })
  }

  // Values of context
  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;
