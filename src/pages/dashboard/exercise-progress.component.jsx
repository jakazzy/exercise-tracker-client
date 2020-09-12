import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const ExerciseProgress = () => {
  return (
    <div>
      <p>Running</p>
      <ProgressBar animated variant="success" now={40} />
      <p>Skipping</p>
      <ProgressBar animated variant="info" now={20} />
      <p>Calorie</p>
      <ProgressBar animated variant="warning" now={60} />
      <p>Abs</p>
      <ProgressBar animated variant="danger" now={80} />
    </div>
  )
}

export default ExerciseProgress
