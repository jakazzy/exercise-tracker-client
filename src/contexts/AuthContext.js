import React, { useState, useEffect, createContext } from 'react'
import { checkStatus, getScheduleAndGoal } from '../api/api'

export const AuthContext = createContext()
const AuthContextProvider = props => {
  const [auth, setAuth] = useState({
    isAuthenticated: true,
    message: '',
    user: '',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAxMDMwNjM3LCJleHAiOjE2MDExMTcwMzd9.zqx9qxyptAa0gIO4jlnsi3LxRzifYvckuaShJ1ZrDFM'
  })

  const [schedule, setSchedule] = useState([])
  const [goal, setGoal] = useState([])

  useEffect(() => {
    const userData = async () => {
      const status = await checkStatus()
      const { data } = await getScheduleAndGoal()
      console.log(data, 'isee schedule and goal')
      setAuth({ ...status.data })
      if (data) {
        setSchedule(data.schedule)
        setGoal(data.goal)
      }
      // return status.data
    }
    userData()
  }, [])
  return (
    <AuthContext.Provider value={{ auth, goal, schedule }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
