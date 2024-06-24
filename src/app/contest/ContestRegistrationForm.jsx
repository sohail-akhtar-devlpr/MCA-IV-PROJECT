import React from 'react'
import Image from 'next/image'

function ContestRegistrationForm() {
  return (
    <div className=" border-pink-500 grid grid-cols-2 gap-x-4 justify-center py-4">
        <div className="flex justify-end">
        <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold pb-5">Contest Registration Form</h2>
            <form>
              <div className="flex flex-col gap-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block mb-2 text-sm font-medium">Department</label>
                  <input
                    type="text"
                    id="department"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Department"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block mb-2 text-sm font-medium">Course</label>
                  <input
                    type="text"
                    id="course"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Course"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="facultyNumber" className="block mb-2 text-sm font-medium">Faculty Number</label>
                  <input
                    type="text"
                    id="facultyNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Faculty Number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="enrollmentNumber" className="block mb-2 text-sm font-medium">Enrollment Number</label>
                  <input
                    type="text"
                    id="enrollmentNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enrollment Number"
                    required
                  />
                </div>

              <div>
                <label htmlFor="contestType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Participation Type</label>
                <select id="contestType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option>Solo</option>
                <option>Duo</option>
                <option>Members(3-4)</option>
                <option>Group</option>
                </select>    
              </div>
              </div>
              {/* <div class="mb-4">
                <label htmlFor="email" class="block mb-2 text-sm font-medium">Your email</label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="andrew@mail.com"
                  require
                />
              </div> */}
              {/* <div class="mb-4">
                <label htmlFor="password" class="block mb-2 text-sm font-medium">Your password</label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="*********"
                  require
                />
              </div> */}
              
              <div class="flex items-center justify-center mt-2">
                <button
                  type="submit"
                  class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                  Register
                </button>
              </div>
            </form>
        </div>
      </div>
      <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-lg h-[500px] border border-pink-600 m-auto'>
          <Image src="/public/images/circuit-board.jpg" alt='contest' layout='fill' className='object-cover rounded-full'/>
        </div>
    </div>
  )
}

export default ContestRegistrationForm
