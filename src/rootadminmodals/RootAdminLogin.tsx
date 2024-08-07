"use client"
import React from 'react'
import Link from 'next/link';

function RootAdminLogin() {
  return (
    <form className="space-y-6 px-6 pb-4">
    <h3 className='text-xl font-medium text-white'>Sign in as Root-Admin</h3>
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

    <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-0.25 text-center bg-brand-orange hover:bg-brand-orange-s'>
    Login
    </button>
    <button className='flex w-full justify-end'>
      <Link href={"#"} className="text-sm block text-brand-orange hover:underline w-full text-right">
      forgot password
      </Link>
    </button>
    <div className='text-sm font-medium text-gray-300'>
      Not Registered?
      <Link href={"#"} className='text-blue-700 hover:underline'>
        Create Account
      </Link>
    </div>
 </form>
  )
}

export default RootAdminLogin
