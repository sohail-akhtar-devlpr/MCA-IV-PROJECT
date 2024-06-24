import React from 'react'
import DashboardStats from './dashboardhome/DashboardStats'
import ParticipationChart from './dashboardhome/ParticipationChart'

function DashboardHomepage() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStats />
      <ParticipationChart />
    </div>
  )
}

export default DashboardHomepage
