import React, { useContext, useEffect, useRef } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext'

const ExerciseProgress = () => {
  const { progressData } = useContext(AuthContext)
  const data = useRef({})

  useEffect(() => {
    data.current = progressData
  }, [progressData])
  return (
    <div>
      <p>Run</p>
      <ProgressBar animated variant="success" now={data.current.running} />
      <p>Skip</p>
      <ProgressBar animated variant="info" now={data.current.skipping} />
      <p>Calorie</p>
      <ProgressBar animated variant="warning" now={data.current.calorie} />
      <p>Diet</p>
      <ProgressBar animated variant="danger" now={data.current.diet} />
    </div>
  )
}

export default ExerciseProgress
