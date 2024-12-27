"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import showToast from '@/utils/Toast/showToast';
import axios from 'axios';

function JoinContestPage() {
  const [facultyNumber, setFacultyNumber] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [errorMessaages, setErrorMessages] = useState({});

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('Faculty Number:', facultyNumber);
    // console.log('Enrollment Number:', enrollmentNumber);

    try {
      axios.post('http://localhost:8080/contestant/join-contest', {
        facultyNumber: facultyNumber,
        enrollmentNumber: enrollmentNumber,
      },)
      .then( (response)=>{
        // console.log("Login response:",response);
        localStorage.setItem("jwtToken",response.data.jwt);
        showToast('success', 'Entering into the Contest');
        router.push('/editorworkspace')
      } )
      .catch( (error)=>{
        if(error?.response?.status===400){
          // console.log("ERROR::",error.response.data);
          setErrorMessages(error.response.data);
          setFacultyNumber('')
          setEnrollmentNumber('')
        }else if(error?.response?.status===404){
          showToast('error', 'It seems like you are not registered..');
        }else if(error?.response?.status===401){
          showToast('error', 'Invalid Password..');
        }else{
          showToast('error', 'No response from the server. Please try again later.');
        }
      } );
    } catch (error) {
      console.log("SOMETHING WENT WRONG.PLEASE TRY AGAIN");
    }
  };

  return (
    <div className="mt-4  border-red-500 grid grid-cols-2 gap-x-4 justify-center py-4">
      <div className="flex justify-end">
        <div className=" border-yellow-400 w-96 h-72 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="facultyNumber" className="block mb-2 text-sm font-medium">Enter Your Faculty Number</label>
                <input
                  type="text"
                  id="facultyNumber"
                  value={facultyNumber}
                  onChange={(e) => setFacultyNumber(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Faculty Number"
                />
                {
                  errorMessaages.facultyNumber && (
                    <p className="text-red-500">{errorMessaages.facultyNumber}</p>
                  )
                }
              </div>

              <div>
                <label htmlFor="enrollmentNumber" className="block mb-2 text-sm font-medium">Enter Your Enrollment Number</label>
                <input
                  type="text"
                  id="enrollmentNumber"
                  value={enrollmentNumber}
                  onChange={(e) => setEnrollmentNumber(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enrollment Number"
                />
                {
                  errorMessaages.enrollmentNumber && (
                    <p className="text-red-500">{errorMessaages.enrollmentNumber}</p>
                  )
                }
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-lg h-[500px] border border-pink-600 mx-auto'>
        <h1 className='text-center text-3xl text-[#1403fc]'>You are just a click away from joining the contest. Join to show your coding skills and win exciting perks!</h1>
      </div> */}
    </div>
  );
}

export default JoinContestPage;
