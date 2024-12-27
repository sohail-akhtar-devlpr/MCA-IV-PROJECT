import React from 'react'
import DashboardStats from './dashboardhome/DashboardStats'
import ParticipationChart from './dashboardhome/ParticipationChart'
import {getToken} from '@/app/api/CookieInfo/route'


function DashboardHomepage() {
//   const jwtToken = getToken();
//   console.log("jwt token in SUBADMINDASHBOARD HOMEPAGE::",jwtToken);
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStats />
      {/* <ParticipationChart /> */}
    </div>
  )
}

export default DashboardHomepage
