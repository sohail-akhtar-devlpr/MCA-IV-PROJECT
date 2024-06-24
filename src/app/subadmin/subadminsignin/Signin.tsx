import React from 'react'
import Link from 'next/link'

function Signin() {
  return (
    <div className='grid grid-cols-12 border border-blue-400 mt-24'>
        <div className="col-span-4 col-start-5 border border-green-400 rounded-3xl shadow-2xl shadow-pink-400">
          <div className='border border-yellow-300 py-5'>
          <form className="space-y-6 px-6 pb-4">
            <h3 className='text-xl font-medium text-white'>Sign in as Sub-Admin</h3>
            <div>
              <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Your Email
              </label>
              <input type="email" name='email' id='email' className='
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='email@company.com' />
            </div>

            <div>
              <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Your Password
              </label>
              <input type="password" name='password' id='password' className='
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='********' />
            </div>

            <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center bg-orange-500 hover:bg-red-600'>
            Login
            </button>
            <div className='flex right-0 w-full justify-end  border-green-600'>
              <Link href="/subadmin/resetpassword" className="text-sm block text-orange-500 hover:underline w-28 text-left ">
              forgot password
              </Link>
            </div>
            <div className='text-sm font-medium text-gray-300'>
              Not Registered?
              <Link href="#" className='text-blue-700 hover:underline'>
                Create Account
              </Link>
            </div>
        </form>
          </div>
        </div>
      </div>
  )
}

export default Signin
