import React, { useState, useEffect, createContext } from 'react'
import { checkStatus } from '../api/api'

export const AuthContext = createContext()
const AuthContextProvider = props => {
  const [auth, setAuth] = useState({
    isAuthenticated: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAxMDMwNjM3LCJleHAiOjE2MDExMTcwMzd9.zqx9qxyptAa0gIO4jlnsi3LxRzifYvckuaShJ1ZrDFM'
  })

  useEffect(() => {
    const authStatus = async () => {
      const result = await checkStatus()
      // setAuth({ ...result.data })
      return result.data
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
