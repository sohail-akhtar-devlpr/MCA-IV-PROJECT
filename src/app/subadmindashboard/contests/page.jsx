import React from 'react'
import Link from 'next/link'
import { FaArrowCircleRight } from "react-icons/fa";

function Contestpage() {
  return (
    <div className='  border-blue-400 mt-1'>
    <div className="  border-green-400 rounded-3xl shadow-sm shadow-pink-400">
      <div className=' border-yellow-300 py-5'>
      <div className='ml-5 mb-3'>
      </div>

      <div className='flex items-center ml-5'>
        <div className='rounded-full h-5 w-5 flex items-center justify-center bg-sky-500'>
          <FaArrowCircleRight />
        </div>
        <Link href="/subadmindashboard/contests/createcontest" className='text-white text-lg font-semibold hover:underline pl-2'>
          Create Contest
        </Link>
      </div>

      <div className='flex items-center ml-5'>
        <div className='rounded-full h-5 w-5 flex items-center justify-center bg-sky-500'>
          <FaArrowCircleRight />
        </div>
        <Link href="/subadmindashboard/contests/designquestions" className='text-white text-lg font-semibold hover:underline pl-2'>
          Create Questions
        </Link>
      </div> 

      <div className='flex items-center ml-5'>
        <div className='rounded-full h-5 w-5 flex items-center justify-center bg-sky-500'>
          <FaArrowCircleRight />
        </div>
        <Link href="/subadmindashboard/contests/contestrules" className='text-white text-lg font-semibold hover:underline pl-2'>
          Contest Rules
        </Link>
      </div> 

      <div className='flex items-center ml-5'>
        <div className='rounded-full h-5 w-5 flex items-center justify-center bg-sky-500'>
          <FaArrowCircleRight />
        </div>
        <Link href="/subadmindashboard/postcontest" className='text-white text-lg font-semibold hover:underline pl-2'>
          Post Contest
        </Link>
      </div> 

      </div>
    </div>
  </div>
  )
}

export default Contestpage
