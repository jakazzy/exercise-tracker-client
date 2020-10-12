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
      <p>Running</p>
      <ProgressBar animated variant="success" now={data.running} />
      <p>Skipping</p>
      <ProgressBar animated variant="info" now={data.skipping} />
      <p>Calorie</p>
      <ProgressBar animated variant="warning" now={data.calorie} />
      <p>Diet</p>
      <ProgressBar animated variant="danger" now={data.diet} />
    </div>
  )
}

export default ExerciseProgress
