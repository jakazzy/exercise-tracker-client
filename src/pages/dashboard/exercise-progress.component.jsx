import React, { useContext } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext'

const ExerciseProgress = () => {
  const { progressData } = useContext(AuthContext)
  return (
    <div>
      <p>Running</p>
      <ProgressBar animated variant="success" now={progressData.running} />
      <p>Skipping</p>
      <ProgressBar animated variant="info" now={progressData.skipping} />
      <p>Calorie</p>
      <ProgressBar animated variant="warning" now={progressData.calorie} />
      <p>Diet</p>
      <ProgressBar animated variant="danger" now={progressData.diet} />
    </div>
  )
}

export default ExerciseProgress
