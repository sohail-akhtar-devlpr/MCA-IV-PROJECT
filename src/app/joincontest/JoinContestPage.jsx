import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function JoinContestPage() {
  return (
    <div className="border border-red-500 grid grid-cols-2 gap-x-4 justify-center py-4 bg-transparent h-[88vh]">
        <div className="flex justify-end ">
        <div className="border border-yellow-400 w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <form>
              <div className="flex flex-col gap-y-4">
                
                <div>
                  <label htmlFor="facultyNumber" className="block mb-2 text-sm font-medium">Enter Your Faculty Number</label>
                  <input
                    type="text"
                    id="facultyNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Faculty Number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="enrollmentNumber" className="block mb-2 text-sm font-medium">Enter Your Enrollment Number</label>
                  <input
                    type="text"
                    id="enrollmentNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enrollment Number"
                    required
                  />
                </div>
              </div>
              <div class="flex items-center justify-center mt-2">
                <Link href="/editorworkspace"
                  // type="submit"
                  className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                  Join Now
                </Link>
              </div>
            </form>
        </div>
      </div>
      <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-lg h-[500px] border border-pink-600 mx-auto'>
          <h1 className='text-center text-3xl text-[#1403fc]'>Your are just a CLIK to enter the contes.Join to show your coding skill and win exciting Perks</h1>
        </div>
    </div>
  )
}

export default JoinContestPage
