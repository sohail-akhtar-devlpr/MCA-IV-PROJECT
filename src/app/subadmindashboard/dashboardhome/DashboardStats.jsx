import React from 'react'
import { FaBroadcastTower } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";




function DashboardStats() {
  return (
    <div className='flex gap-4 w-full'>
      <BoxWrapper >
        <div  className='rounded-full h-9 w-9 flex items-center justify-center bg-sky-500'>
          <FaBroadcastTower className='text-2xl text-white'/>
        </div>
        <div className='pl-2'>
          <span className='text-xl text-gray-700 font-semibold'>Contest is Live</span>
          {/* <div className='flex items-center justify-center'>
            <strong>123</strong>
          </div> */}
        </div>
      </BoxWrapper>
      <BoxWrapper >
        <div  className='rounded-full h-9 w-9 flex items-center justify-center bg-sky-500'>
          <FaUserCheck className='text-2xl text-white'/>
        </div>
        <div className='pl-2'>
          <span className='text-gray-700 font-semibold'>Total Live Contestant</span>
          <div className='flex items-center justify-center'>
            <strong className='text-xl text-gray-700 font-semibold'>123</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper >
        <div  className='rounded-full h-9 w-9 flex items-center justify-center bg-sky-500'>
          <FaUsersViewfinder className='text-2xl text-white'/>
        </div>
        <div className='pl-2'>
          <span className='text-gray-700 font-semibold'>All Contestant</span>
          <div className='flex items-center justify-center'>
            <strong className='text-xl text-gray-700 font-semibold'>123</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper >
        <div  className='rounded-full h-9 w-9 flex items-center justify-center bg-sky-500'>
          <FaRegBuilding className='text-2xl text-white'/>
        </div>
        <div className='pl-2'>
          <span className='text-gray-700 font-semibold'>Sponsor/Organizer</span>
          <div className='flex items-center justify-center'>
            <strong className='flex overflow-hidden text-ellipsis text-sm text-gray-700 font-bold'>Dept. of Computer Science,AMU</strong>
          </div>
        </div>
      </BoxWrapper>
      
    </div>
  )
}

export default DashboardStats

function BoxWrapper({children}){
  return <div className='bg-white rounded-sm p-1 flex-1 border-gray-200 flex items-center'>{children}</div>
}
