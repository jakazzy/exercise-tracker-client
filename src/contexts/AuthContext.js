import React, { useState, useEffect, createContext } from 'react'
import { checkStatus } from '../api/api'

export const AuthContext = createContext()
const AuthContextProvider = props => {
  const [auth, setAuth] = useState({ isAuthenticated: true, token: 'ijuytr' })

  useEffect(() => {
    const authStatus = async () => {
      const result = await checkStatus()
      setAuth({ ...result.data })
    }
    authStatus()
  }, [auth])
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
