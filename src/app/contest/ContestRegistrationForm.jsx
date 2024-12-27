// ContestRegistrationForm.js

"use client";
import React, { useState, useEffect } from "react";
import showToast from '@/utils/Toast/showToast';
import axios from "axios";
import ContestantSuccessModal from '@/app/contest/ContestantSuccessModl';

function ContestRegistrationForm() { 
  const contestNumber = localStorage.getItem("contestId");
  const initialFormData = {
    contestNumber: contestNumber || " ",
    fullName: "",
    department: "",
    course: "",
    facultyNumber: "",
    enrollmentNumber: "",
    participationType: "Solo",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const contestNumber = localStorage.getItem("contestId");
    if (contestNumber) {
      setFormData((prevFormData) => ({ ...prevFormData, contestNumber }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/contestant/signup",
        formData
      )
      .then( (response)=>{
        console.log("Registration Form Response:", response.data);
        setFormData(initialFormData)
        setShowModal(true);
      } )
      .catch( (error)=>{
        if (error.response.status === 409) {
          showToast('error', 'Already Registered');
        }else {
          showToast('error','Error submitting the form. Please try again.');
        }
      } );
      
    } catch (error) {
      showToast('Something went wrong. Please try again.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log("FORM DATA::", formData);

  return (
    <div className="border-pink-500 flex justify-center py-4 items-center">
      <div className="flex justify-end">
        <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
          <h2 className="text-2xl font-serif font-bold pb-5">Contest Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="contestNumber" className="block mb-2 text-sm font-medium font-serif">
                  Contest Number:
                </label>
                <input
                  id="contestNumber"
                  name="contestNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.contestNumber}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium font-serif">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="department" className="block mb-2 text-sm font-medium font-serif">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="course" className="block mb-2 text-sm font-medium font-serif">
                  Course
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="facultyNumber" className="block mb-2 text-sm font-medium font-serif">
                  Faculty Number
                </label>
                <input
                  type="text"
                  id="facultyNumber"
                  name="facultyNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Faculty Number"
                  value={formData.facultyNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="enrollmentNumber" className="block mb-2 text-sm font-medium font-serif">
                  Enrollment Number
                </label>
                <input
                  type="text"
                  id="enrollmentNumber"
                  name="enrollmentNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enrollment Number"
                  value={formData.enrollmentNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="participationType" className="block mb-2 text-sm font-medium font-serif">
                  Participation Type
                </label>
                <select
                  id="participationType"
                  name="participationType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.participationType}
                  onChange={handleChange}
                  required
                >
                  <option value="Solo">Solo</option>
                  <option value="Duo">Duo</option>
                  <option value="Members(3-4)">Members (3-4)</option>
                  <option value="Group">Group</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto font-serif"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && <ContestantSuccessModal closeModal={closeModal} />}
    </div>
  );
}

export default ContestRegistrationForm;
