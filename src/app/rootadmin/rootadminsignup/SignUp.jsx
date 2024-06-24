"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

function SignUp() {

  const[loading, setLoading] = useState(true);
  const router = useRouter();

//   useEffect( ()=>{
//     const checkAuth = ()=>{
//       axios.get("http://localhost:8080/api/auth/check",{
//         headers:{
//           "Authorization":localStorage.getItem("jwtToken")
//         }
//       })
//   .then(response => {
//     console.log("SIGNUP CONSOLE ", response);
//     if (response.status === 200) {
//       setLoading(false);
//     } else {
//       router.push("/rootadmin/rootadmin-token-auth");
//     }
//   })
//   .catch(error => {
//     console.error("Error checking auth", error);
//     router.push("/rootadmin/rootadmin-token-auth");
//   });
//     }
//     checkAuth();
//   },[router] )

//   if (loading) {
//     return <div>Loading...</div>;
// }

  return (
       <div className='grid grid-cols-12 border border-blue-400'>
        <div className="col-span-4 col-start-5  border-green-400 rounded-3xl shadow-2xl shadow-pink-400">
          <div className=' border-yellow-300 py-5'>
           <form className="space-y-6 px-6 pb-4 border border-red-500 mt-4">

              <h3 className='text-xl font-medium text-white mt-4'>Register as Root-Admin</h3>

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className='text-sm font-medium block mb-2 text-gray-300'>First Name
                </label>
                <input type="firstName" name='firstName' id='firstName' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='First Name' />
              </div>

              {/* Middle Name */}
              <div>
                <label htmlFor="middleName" className='text-sm font-medium block mb-2 text-gray-300'>Middle Name
                </label>
                <input type="middleName" name='middleName' id='middleName' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='Middle Name' />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className='text-sm font-medium block mb-2 text-gray-300'>Last Name
                </label>
                <input type="lastName" name='lastName' id='lastName' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='Last Name' />
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
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='Mobile Number' />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Email
                </label>
                <input type="email" name='email' id='email' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='email@company.com' />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Password
                </label>
                <input type="password" name='password' id='password' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='********' />
              </div>

              {/* Re-Enter Password */}
              <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Re-Enter Password
                </label>
                <input type="password" name='password' id='re-password' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' placeholder='********' />
              </div>

              {/* Register button */}
              <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center bg-orange-500 hover:bg-brand-orange-s'>
              Register
              </button>

              {/* Already have an  Account */}
              <div className='text-sm font-medium text-gray-300'>
                Already have an account?
                <Link href="/rootadmin/rootadminlogin" className='text-blue-700 hover:underline'>
                  Login
                </Link>
              </div>
              </form>
          </div>
        </div>
      </div>
  );
}

export default SignUp;

