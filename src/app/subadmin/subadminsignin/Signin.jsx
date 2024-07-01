// "use client"
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import Link from 'next/link';
// import { toast, Zoom } from 'react-toastify';
// import showToast from '@/utils/Toast/showToast'
// import { useDispatch } from 'eact-redux';
// import { login } from '@/Redux/Features/authSlice';
// import { useSelector } from 'eact-redux';


// function Signin() {
//   // const [formData, setFormData] = useState({
//   //   email: '',
//   //   password: '',
//   // });

//   const dispatch = useDispatch();

//   const [errors, setErrors] = useState({});

//   const [username,  setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const router = useRouter();

//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   function handleUsernameChange(event){
//     console.log(event.target.value);
//     setUsername(event.target.value);
//   }

//   function handlePasswordChange(event){
//     console.log(event.target.value);
//     setPassword(event.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setErrors({});
//     axios
//       .post('http://localhost:8080/subadmin/signin', {email:username,password}, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true // This line is important
//       })
//       .then((response) => {
//         console.log('Response: ', response);
//         if (response.status === 202) {
//           showToast('success', 'Logged in successfully');
//           router.push('/subadmindashboard');
//         }
//       })
//       .catch((error) => {
//         if (error.response) {
//           if (error.response.status === 400 && error.response.data) {
//             setErrors(error.response.data);
//           }else if(error.response.status === 401){
//             showToast('error', 'Invalid Password');
//           } else if(error.response.status === 404){
//             showToast('error', 'No User Found with this Email');
//           } else {
//             showToast('error', 'Something went wrong, please try later!');
//           }
//         }
//       });

//     dispatch(login({ username, password }));
//   };

//   return (
//     <div className="grid grid-cols-12 border-red-600 mt-10 h-96">
//       <div className="col-span-4 col-start-5 border-green-400 rounded-3xl shadow-pink-400">
//         <div className="border-yellow-300 py-5">
//           <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
//             <h3 className="text-xl font-medium text-white">Sign in as Sub-Admin</h3>
//             <div>
//               <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="
//                   border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white
//                 "
//                 placeholder="email@company.com"
//                 // value={formData.email}
//                 value={username}
//                 onChange={handleUsernameChange}
//               />
//               {errors.email && <p className='text-red-500'>{errors.email}</p>}
//             </div>

//             <div>
//               <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-300">
//                 Your Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 className="
//                   border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white
//                 "
//                 placeholder="********"
//                 // value={formData.password}
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//               {errors.password && <p className='text-red-500'>{errors.password}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center bg-orange-500 hover:bg-red-600"
//             >
//               Login
//             </button>
//             <div className="flex right-0 w-full justify-end border-green-600">
//               <Link href="/subadmin/resetpassword" className="text-sm block text-orange-500 hover:underline w-28 text-left">
//                 forgot password
//               </Link>
//             </div>
//             <div className="text-sm font-medium text-gray-300">
//               Not Registered?
//               <Link href="/subadmin/hasauthtoken" className="text-blue-700 hover:underline">
//                 Create Account
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;


// Signin.js
"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '@/Redux/Features/authSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast, Zoom } from 'react-toastify';
import showToast from '@/utils/Toast/showToast';

function Signin() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({});

    axios
      .post('http://localhost:8080/subadmin/signin', { email: username, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // This line is important
      })
      .then((response) => {
        console.log('Response: ', response);
        if (response.status === 202) {
          showToast('success', 'Logged in successfully');
          dispatch(login({ username, password }));
          router.push('/subadmindashboard');
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400 && error.response.data) {
            setErrors(error.response.data);
          } else if (error.response.status === 401) {
            showToast('error', 'Invalid Password');
          } else if (error.response.status === 404) {
            showToast('error', 'No User Found with this Email');
          } else {
            showToast('error', 'Something went wrong, please try later!');
          }
        }
      });
  };

  if (isLoggedIn) {
    router.push('/subadmindashboard');
  }

  return (
    <div className="grid grid-cols-12 border-red-600 mt-10 h-96">
      <div className="col-span-4 col-start-5 border-green-400 rounded-3xl shadow-pink-400">
        <div className="border-yellow-300 py-5">
          <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-white">Sign in as Sub-Admin</h3>
            <div>
              <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="
                  border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white
                "
                placeholder="email@company.com"
                value={username}
                onChange={handleUsernameChange}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-300">
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="
                  border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white
                "
                placeholder="********"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center bg-orange-500 hover:bg-red-600"
            >
              Login
            </button>
            <div className="flex right-0 w-full justify-end border-green-600">
              <Link href="/subadmin/resetpassword" className="text-sm block text-orange-500 hover:underline w-28 text-left">
                forgot password
              </Link>
            </div>
            <div className="text-sm font-medium text-gray-300">
              Not Registered?
              <Link href="/subadmin/hasauthtoken" className="text-blue-700 hover:underline">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
