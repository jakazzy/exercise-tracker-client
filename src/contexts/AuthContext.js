import React, { useState, useEffect, createContext } from 'react'
import { checkStatus, getScheduleAndGoal, getUsersExercises } from '../api/api'

export const AuthContext = createContext()

const AuthContextProvider = props => {
  const [auth, setAuth] = useState({
    isAuthenticated: true,
    message: '',
    user: '',
    token: process.env.REACT_APP_TOKEN
  })

  const [schedule, setSchedule] = useState([])
  const [goal, setGoal] = useState([])
  const [chartData, setChartData] = useState([
    { label: 'Sunday', value: '20' },
    { label: 'Monday', value: '60' },
    { label: 'Tuesday', value: '100' },
    { label: 'Wednesday', value: '80' },
    { label: 'Thursday', value: '35' },
    { label: 'Friday', value: '15' },
    { label: 'Saturday', value: '85' }
  ])

  const [progressData, setProgressData] = useState({
    running: 40,
    skipping: 20,
    calorie: 60,
    diet: 80,
    heartrate: 71,
    distance: 300,
    calories: 300
  })

  const [navState, setNavState] = useState(false)

  const toggleNavState = () => {
    setNavState(!navState)
  }
  useEffect(() => {
    const userData = async () => {
      const status = await checkStatus()
      const { data } = await getScheduleAndGoal()
      const exerciseData = await getUsersExercises()

      console.log(data, 'isee schedule and goal')
      setAuth({ ...status.data })
      if (data) {
        setSchedule(data.schedule)
        setGoal(data.goal)
      }
      if (exerciseData.data && exerciseData.data.progressData) {
        setProgressData(exerciseData.data.progressData)
      }
      if (exerciseData.data && exerciseData.data.chartData) {
        setChartData(exerciseData.chartData)
      }
      // return status.data
    }
    userData()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        auth,
        goal,
        schedule,
        chartData,
        progressData,
        toggleNavState,
        navState
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
