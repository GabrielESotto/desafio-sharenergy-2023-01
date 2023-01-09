import { createContext, useMemo, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const login = async (data: Data) => {
    await setUser(data)
    setTimeout(() => {
      navigate('/logged')
      window.location.reload()
    })
    
  }

  const logout = async () => {
    window.localStorage.clear()
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    })
  }

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
