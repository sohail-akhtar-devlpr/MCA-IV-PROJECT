import React from 'react'
import Link from 'next/link'
import { FaArrowCircleRight } from "react-icons/fa";

function AuthToken() {
  return (
    <div className='grid grid-cols-12  border-blue-400 mt-32'>
        <div className="col-span-4 col-start-5 border-green-400 rounded-3xl shadow-sm shadow-fuchsia-500">
          <div className=' border-yellow-300 py-5'>
          <div className='ml-5 mb-3'>
            <h3 className='text-xl font-serif font-medium text-orange-500 underline underline-offset-4 under '>Proceed for Next</h3>
          </div>

          <div className='flex items-center ml-5'>
            <div className='rounded-full h-5 w-5 flex items-center justify-center bg-sky-500 mr-2'>
              <FaArrowCircleRight />
            </div>
            <Link href="/subadmin/hasauthtoken/" className='text-white hover:underline'>
              Has Authentication Token Number !!
            </Link>
          </div>

          {/* <div className='flex items-center ml-5'>
            <div className='rounded-full h-5 w-5 flex items-center justify-center bg-sky-500 mr-2'>
              <FaArrowCircleRight />
            </div>
            <Link href="/subadmin/requestform" className='text-white hover:underline'>
              Request Form For Sub-Admin.
            </Link>
          </div> */}

          <div className='flex items-center ml-5 mb-10'>
            <div className='rounded-full h-5 w-5 flex items-center justify-center bg-sky-500 mr-2'>
              <FaArrowCircleRight />
            </div>
            <Link href="/subadmin/subadminsignin" className='text-white hover:underline'>
              Already Verified.
            </Link>
          </div>        
          </div>
        </div>
      </div>
  )
}

export default AuthToken
