"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Zoom, toast } from 'react-toastify';

function RequestForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    mobileNumber: '',
    designation: '',
    email: '',
    password: '',
    rePassword: ''
  });

  const [errors, setErrors] = useState({});

  const router = useRouter();  // Use the useRouter hook

//instead of creating different handleChange create just one.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    axios.post('http://localhost:8080/subadmin/signup', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status === 201) {
        toast.success('Registered Successfully', {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        });
        router.push("/subadmin/subadminsignin");  // Redirect using useRouter
      }
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 400 && error.response.data) {
          setErrors(error.response.data);
        } else if (error.response.status === 409 && error.response.data) {
          console.log('User Already Exists with this Email');
    
          toast.info("User Already Exists with this Email", {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
            });

        } else {
          console.error('Something went wrong, please try later:', error);
          toast.error('Something went wrong, please try later!', {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
          });
        }
      }
    });
};


  return (
    <div className='grid grid-cols-12 border border-blue-400'>
      <div className="col-span-4 col-start-5 border-green-400 rounded-3xl shadow-2xl shadow-pink-400">
        <div className='border-yellow-300 py-5'>
          <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>

            <h3 className='text-xl font-medium text-white'>Request Form for Sub-Admin</h3>

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className='text-sm font-medium block mb-2 text-gray-300'>First Name</label>
              <input
                type="text"
                name='firstName'
                id='firstName'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange} />
              {errors.firstName && <p className='text-red-500'>{errors.firstName}</p>}
            </div>

            {/* Middle Name */}
            <div>
              <label htmlFor="middleName" className='text-sm font-medium block mb-2 text-gray-300'>Middle Name</label>
              <input
                type="text"
                name='middleName'
                id='middleName'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='Middle Name'
                value={formData.middleName}
                onChange={handleChange} />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className='text-sm font-medium block mb-2 text-gray-300'>Last Name</label>
              <input
                type="text"
                name='lastName'
                id='lastName'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange} />
            </div>

            {/* Gender */}
            <div>
              <p className='text-sm font-medium block mb-2 text-gray-300'>Gender</p>
              <label htmlFor="male" className='inline-block mr-2 text-sm font-medium text-gray-300'>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-1" />
                Male
              </label>
              <label htmlFor="female" className='inline-block text-sm font-medium text-gray-300'>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-1" />
                Female
              </label>
              {errors.gender && <p className='text-red-500'>{errors.gender}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className='text-sm font-medium block mb-2 text-gray-300'>Mobile Number</label>
              <input
                type="tel"
                name='mobileNumber'
                id='mobileNumber'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='Mobile Number'
                value={formData.mobileNumber}
                onChange={handleChange} />
              {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber}</p>}
            </div>

            {/* Designation */}
            <div>
              <label htmlFor="designation" className='text-sm font-medium block mb-2 text-gray-300'>Designation</label>
              <input
                type="designation"
                name='designation'
                id='designation'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='Designation'
                value={formData.designation}
                onChange={handleChange} />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Email</label>
              <input
                type="email"
                name='email'
                id='email'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='email@company.com'
                value={formData.email}
                onChange={handleChange} />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Password</label>
              <input
                type="password"
                name='password'
                id='password'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='********'
                value={formData.password}
                onChange={handleChange} />
              {errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>

            {/* Re-Enter Password */}
            <div>
              <label htmlFor="rePassword" className='text-sm font-medium block mb-2 text-gray-300'>Confirm Password</label>
              <input
                type="password"
                name='rePassword'
                id='re-password'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                placeholder='********'
                value={formData.rePassword}
                onChange={handleChange} />
              {errors.rePassword && <p className='text-red-500'>{errors.rePassword}</p>}
            </div>

            {/* Submit button */}
            <button 
            type='submit' 
            className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center bg-orange-500 hover:bg-brand-orange-s'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RequestForm;