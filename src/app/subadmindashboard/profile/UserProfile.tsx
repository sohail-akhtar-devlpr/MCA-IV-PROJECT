import React from 'react'

function UserProfile() {
  return (
    <div className='flex items-center justify-center'>
        <div className=" w-3/4  border-green-400 rounded-3xl ">
          <div className=' border-yellow-300 py-5'>
          <form className="space-y-6 px-6 pb-4 h-96 overflow-y-auto">

            <h3 className='text-xl font-medium text-white text-center'>Personal Information</h3>

            {/* First Name */}
            <div>
              <label htmlFor="fullName" className='text-sm font-medium block mb-2 text-gray-300'>Your Name</label>

              <input type="fullName" name='fullName' id='fullName' className='
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='Full Name' />
            </div>

            {/* Gender */}
            <div>
              <p className='text-sm font-medium block mb-2 text-gray-300'>Gender</p>
              <label htmlFor="male" className='inline-block mr-2  text-sm font-medium text-gray-300'>
                <input type="radio" id="male" name="gender" value="male" className="mr-1" />
                Male
              </label>
              <label htmlFor="female" className='inline-block  text-sm font-medium text-gray-300'>
                <input type="radio" id="female" name="gender" value="female" className="mr-1" />
                Female
              </label>
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className='text-sm font-medium block mb-2 text-gray-300'>Mobile Number
              </label>
              <input type="tel" name='mobile' id='mobile' className='
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='Mobile Number' />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Email
              </label>
              <input type="email" name='email' id='email' className='
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='email@company.com' />
            </div>

            {/* Desgignation */}
            <div>
              <label htmlFor="designation" className='text-sm font-medium block mb-2 text-gray-300'>Designation
              </label>
              <input type="designation" name='designation' id='designation' className='
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='Designation' />
            </div>

            {/* Submit button */}
            <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center bg-orange-500 hover:bg-brand-orange-s'>
            Save Changes
            </button>
          </form>
          </div>
        </div>
    </div>
  )
}

export default UserProfile
