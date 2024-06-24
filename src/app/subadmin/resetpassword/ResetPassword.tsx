import React from 'react'
import Link from 'next/link'

function ResetPassword() {
  return (
    <div className='grid grid-cols-12 border border-blue-400 mt-24'>
        <div className="col-span-4 col-start-5 border border-green-400 rounded-3xl shadow-2xl shadow-pink-400">
          <div className=' border-yellow-300 py-5'>
          <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
            <h3 className='text-xl font-medium  text-white'>Reset Password</h3>
            <p className='text-sm text-white '>
              Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
              to reset it.
            </p>
            <div>
              <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                placeholder='name@company.com'
              />
            </div>

            <button
              type='submit'
              className="w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
             bg-orange-500 hover:bg-red-500"
            >
              Reset Password
            </button>
         </form>
        </div>
        </div>
      </div>
  )
}

export default ResetPassword
