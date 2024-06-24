import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import userimage from '../components/Project-Image/avatar.png'
import topbarLogo from '@/components/Project-Image/oblique shape.jpg'
import CountdownTimer from '@/components/Workspace/CountdownTimer'
import { DiVim } from 'react-icons/di'

function WorkspaceTopbar() {

  const contestDuration=11;

  return (
    <nav className=' border-green-600 relative flex h-[50px] w-full shrink-0 justify-between items-center  bg-dark-layer-1 text-dark-gray-7'>
      <div className="main-header border border-yellow-400 flex w-full items-center justify-between mx-auto">
        <div className='logo border-orange-500 flex gap-x-4 rounded-lg ml-10 shadow-md shadow-green-500'>
          <div className='image border-green-500 ml-5'>
            <Image className='' src={topbarLogo} width="30" height="30"/>
          </div>
          <div>
            <p className='title border-red-500 text-sm text-left font-medium text-white mr-5'>Computer Sceince Society</p>
            <p className='subtitle border-blue-500 text-sm text-center font-medium text-white mr-5'>Department of Computer Science, AMU</p>
          </div>
        </div>

        <CountdownTimer duration={contestDuration*60*1000}/>

        <div className='user-details border-pink-500 flex gap-x-1 mr-10 rounded-lg shadow-md shadow-pink-500'>
          <div className=' border-yellow-500'>
            <p className='text-sm text-white font-medium text-center'>SOHAIL AKHTAR</p>
            <p className='text-sm text-white font-medium text-center'>22CAMSA157</p>
          </div>
          <div className=' border-green-600'>
              <Image className='mt-1' src={userimage} width="32" height="32"/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default WorkspaceTopbar
