import React from 'react'
import Link from 'next/link'

function AuthToken() {
  return (
    <div className='grid grid-cols-12 border border-blue-400 mt-32'>
        <div className="col-span-4 col-start-5 border border-green-400 rounded-3xl shadow-2xl shadow-pink-400">
          <div className=' border-yellow-300 py-5'>
          <div className='ml-5 mb-3'>
            <h3 className='text-xl font-medium text-white underline underline-offset-2 under '>Proceed for Next</h3>
          </div>

          <div className='ml-5'>
            <Link href="/subadmin/hasauthtoken/" className='text-white hover:underline'>
              Has Authentication Token Number !!
            </Link>
          </div>

          <div className='ml-5'>
            <Link href="/subadmin/requestform" className='text-white hover:underline'>
              Request Form For Sub-Admin.
            </Link>
          </div>

          <div className='ml-5 mb-10'>
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
