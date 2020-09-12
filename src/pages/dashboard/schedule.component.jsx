import React from 'react'
import DashboardNavbar from '../../components/dashboard-navbar/dashboard-navbar.component'
import ScheduleTable from '../../components/schedule-table/schedule-table.component'
import GoalTable from '../../components/goal-table/goal-table.component'

const Schedule = () => {
  return (
    <div style={{ width: '70rem', margin: '2rem auto' }}>
      <DashboardNavbar page="schedule" />
      <ScheduleTable />
      <GoalTable />
    </div>
  )
}

export default Schedule
