"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';

function TokenAuthentication() {

    const [token,setToken]=useState("");
    // const [tokenPassword,setTokenPassword]=useState("");
    const [error,setError]=useState("");
    const [attemptedCount,setAttemptedCount]=useState(0);
    const [disabled,setDisabled]=useState(false);
    const router= useRouter();

    const handleAuth =(e) => {
      e.preventDefault();
      axios.post('http://localhost:8080/api/auth/validate',null, { 
        params: { 
          token,
          role:"rootadmin"
         },
        withCredentials: true // This line is important
      })
      .then(response => {
        console.log("PAGE KA RESPONSE",response);
        if (response.data.status === "CREATED" && response.data.jwtToken !== null ) {
          router.push("/rootadmin/rootadminsignup");
        } else {
          setError("Wrong Token Number");
          setAttemptedCount(attemptedCount + 1);
          setToken("");
          const timeoutId = setTimeout(() => {
            setError("");
          }, 1000);
          if (attemptedCount >= 2) {
            setDisabled(true);
            setError("Maximum Limit of wrong attempts reached. Try after sometime..");
          }
        }
        // middleware(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError("An error occurred while authenticating. Please try again after sometime.");
        const timeoutId = setTimeout(() => {
          setError("");
        }, 2000); // Change the error message timeout to 2 seconds
      });
  };


    // const targetval=(e)=>{
    //   const t=e.target.value
    //   console.log(t);
    // }

  return (
    <div className='grid grid-cols-12 border border-blue-400 mt-32'>
        <div className="col-span-4 col-start-5 border border-green-400 rounded-3xl shadow-2xl shadow-pink-400">
          <div className=' border-yellow-300 py-5'>
           <form 
              className="space-y-6 px-6 pb-4 pt-4 border border-red-500 "
              onSubmit={(e)=>handleAuth(e)}
              >

              <h3 className='text-lg font-medium text-white  border-purple-500'>Registering for the First time as a Root Admin?</h3>
              <h3 className='text-lg text-wrap text-white border border-yellow-400'>You need to authenticate using the Authentication Token Number</h3>

              {/* Authentication Token */}
              <div>
                <label htmlFor="auth-Token" className='text-sm font-medium block mb-2 text-gray-300'>Enter the Token
                </label>
                <input
                  type="auth-Token" 
                  name='token' 
                  id='token' 
                  className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white ' 
                  placeholder='Enter Token'
                  value={token}
                  onChange={(e)=>setToken(e.target.value)} 
                  disabled={disabled}
                  required/>
              </div>

              {/* Authenticate button */}
              <button 
              type='submit' 
              className={`w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center ${disabled ? 'bg-gray-400' : 'bg-orange-500 hover:bg-brand-orange-s'}`}
              disabled={disabled}
              >
              Authenticate
              </button>

              {
                error && <p className='text-red-500'>{error}</p>
              }

              <div className='text-lg font-medium text-gray-300'>
                if already authenticated then?
                <Link href="/rootadmin/rootadminlogin" className='text-red-500 hover:underline text-lg'>
                   Signin
                </Link>
              </div>
              </form>
          </div>
        </div>
      </div>
  )
}

export default TokenAuthentication
