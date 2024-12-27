"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch } from "@/Redux/hooks";
import { useAuth } from "@/Security/AuthContext";
import showToast from '@/utils/Toast/showToast';

function Signin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const authContext = useAuth();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log("BUTTON CLICKED");
    setErrors({})
    event.preventDefault();
    try {
      const response = await authContext.login(username, password);
      console.log("RESPONSE", response);
      if (response) {
        showToast('success', 'Logged In Successfully Redirecting to Dashboard!!');
        router.push("/subadmindashboard");
      }else {
        setErrors({ general: 'Login failed. Please try again.' });
    }
    } catch (error) {    
      // console.error("Error during handleSubmit:", error);
      // console.log("ERROR::",error.data);
      setErrors(error.data);
    }
  };

  return (
    <div className="grid grid-cols-12 mt-10 h-96">
      <div className="col-span-4 col-start-5 border-green-400 rounded-3xl shadow-sm shadow-fuchsia-500">
        <div className="border-yellow-300 py-5">
          <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-white">
              Sign in as Sub-Admin
            </h3>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium block mb-2 text-gray-300"
              >
                Your Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white"
                placeholder="email@company.com"
                value={username}
                onChange={handleUsernameChange}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium block mb-2 text-gray-300"
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-gray-600 border-gray-500 placeholder-gray-500 text-white"
                placeholder="********"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center bg-orange-500 hover:bg-red-600"
            >
              Login
            </button>
            <div className="flex right-0 w-full justify-end border-green-600">
              <Link
                href="/subadmin/resetpassword"
                className="text-sm block text-orange-500 hover:underline w-28 text-left"
              >
                forgot password
              </Link>
            </div>
            <div className="text-sm font-medium text-gray-300">
              Not Registered?
              <Link
                href="/subadmin/hasauthtoken"
                className="text-blue-700 hover:underline"
              >
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
