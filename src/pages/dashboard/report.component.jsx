import React from 'react'
import DashboardNavbar from '../../components/dashboard-navbar/dashboard-navbar.component'
import Workout from '../../components/workout-log/workout-log.component'

const Report = () => {
  return (
    <div>
      <DashboardNavbar page="workout" />
      <Workout />
    </div>
  )
}

export default Report
