import React from 'react'
import DashboardNavbar from '../../components/dashboard-navbar/dashboard-navbar.component'
import ScheduleTable from '../../components/schedule-table/schedule-table.component'
import GoalTable from '../../components/goal-table/goal-table.component'
// import AuthContextProvider from '../../contexts/AuthContext'

const Schedule = () => {
  return (
    <div style={{ width: '70rem', margin: '2rem auto', overflowX: 'auto' }}>
      {/* <AuthContextProvider> */}
      <DashboardNavbar page="schedule" />
      <ScheduleTable />
      <GoalTable />
      {/* </AuthContextProvider> */}
    </div>
  )
}

export default Schedule
