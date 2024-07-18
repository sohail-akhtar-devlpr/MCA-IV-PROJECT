// {
    //   prizeRank: "First Rank",
    //   prizeName: "JetBrains All Products Pack",
    //   prizeDescription: "A license for professional software development tools.",
    //   prizeCategory: "Software Development",
    //   prizeValue: "1000"
    // },
    // {
    //   prizeRank: "Second Rank",
    //   prizeName: "JetBrains All Products Pack",
    //   prizeDescription: "A license for professional software development tools.",
    //   prizeCategory: "Software Development",
    //   prizeValue: "1000"
    // },
    // {
    //   prizeRank: "Third Rank",
    //   prizeName: "JetBrains All Products Pack",
    //   prizeDescription: "A license for professional software development tools.",
    //   prizeCategory: "Software Development",
    //   prizeValue: "1000"
    // }
     // {
    //   contestNumber: "2",
    //   organizerName: "Aligarh Muslim University",
    //   organizerType: "Educational Institute",
    //   contactIndividual: "Sohail Akhatr",
    //   mobileNumber: "8077659931",
    //   email:"sa4512225@gmail.com"
    // },
    // {
    //   contestNumber: "2",
    //   organizerName: "Aligarh Muslim University",
    //   organizerType: "Educational Institute",
    //   contactIndividual: "Sohail Akhatr",
    //   mobileNumber: "8077659931",
    //   email:"sa4512225@gmail.com"
    // },
"use client";
import React, { useState } from 'react';
import { MdAccessTime } from "react-icons/md";
import PrizeModal from '@/app/subadmindashboard/contests/createcontest/PrizeModal';
import OrganizerModal from '@/app/subadmindashboard/contests/createcontest/OrganizerModal';
import PrizeTable from '@/app/subadmindashboard/contests/createcontest/PrizeTable';
import OrganizerTable from '@/app/subadmindashboard/contests/createcontest/OrganizerTable';
import axios from 'axios';
import { useAuth } from '@/Security/AuthContext';
import showToast from '@/utils/Toast/showToast';

function CreateContestpage() {

  const [errors, setErrors] = useState({});
   //PRIZE

   const [prizeRows, setPrizeRows] = useState([]);
  //  console.log("Prize Rows::",prizeRows)

   //ORGANIZER
  const [organizerRows, setOrganizerRows] = useState([]);
  // console.log("Organizer Rows::",organizerRows)
  
  //PRIZE
  const [prizeModalOpen, setPrizeModalOpen] = useState(false);
  const [rowtoEdit, setRowtoEdit] = useState(null);

  //ORGANIZER
  const [organizerModalOpen, setOrganizerModalOpen] = useState(false);
  const [organizerrowtoEdit, setOrganizerRowtoEdit] = useState(null);

  //useState for handling the form data
  const initialFormData = {
    contestNumber: '',
    contestName: '',
    contestType: '',
    contestDate: '',
    contestTime: '',
    contestVenue: '',
    status: "created",
    contestOrganizer: [],
    prize: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  //instead of creating different handleChange create just one.
  const handleChange = (e)=>{
    const {name, value} = e.target;
    // console.log("NAME::",name)
    setFormData({...formData, [name]:value});
  }


  //PRIZE
  const handleEditButton = (idx) => {
    setRowtoEdit(idx);
    setPrizeModalOpen(true);
  };

  //ORGANIZER
  const handleOrganizerEditButton = (idx) => {
    setOrganizerRowtoEdit(idx);
    setOrganizerModalOpen(true);
  };

  //PRIZE
  const handleDeleteRow = (targetIndex) => {
    setPrizeRows(prizeRows.filter((_, idx) => idx !== targetIndex));
  };

  //ORGANIZER
  const handleOrganizerDeleteRow = (targetIndex) => {
    setOrganizerRows(organizerRows.filter((_, idx) => idx !== targetIndex));
  };

  //PRIZE
  const handleAddMorePrizes = (newRow) => {
    if (rowtoEdit === null) {
      setPrizeRows([...prizeRows, newRow]);
    } else {
      setPrizeRows(prizeRows.map((currRow, idx) => {
        return idx === rowtoEdit ? newRow : currRow;
      }));
      setRowtoEdit(null); // Reset rowtoEdit after editing
    }
  };

  //ORGANIZER
  const handleAddMoreOrganizers = (newRow) => {
    if (organizerrowtoEdit === null) {
      setOrganizerRows([...organizerRows, newRow]);
    } else {
      setOrganizerRows(organizerRows.map((currRow, idx) => {
        return idx === organizerrowtoEdit ? newRow : currRow;
      }));
      setOrganizerRowtoEdit(null); // Reset rowtoEdit after editing
    }
  };

 //AuthContext to get the token
 const auth = useAuth();
 const token = auth.token;
//  console.log("token in the create contest page::",token)

  const handleCreateContestSubmit = (e)=>{
    e.preventDefault();
    setErrors({});

    const formDataToSubmit = {
      ...formData,
      prize: prizeRows,
      contestOrganizer: organizerRows,
  };
  console.log("FORM DATA::",formDataToSubmit);
    axios.post('http://localhost:8080/subadmin/create/contest', formDataToSubmit, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + `${token}`
    },
    withCredentials:true
  })
  .then(response => {

    if (response.status === 201) {
      showToast('success', 'Contest Created Successfully');
      setFormData(initialFormData);
      setPrizeRows([]); // Clear prize rows
      setOrganizerRows([]); // Clear organizer rows
    }
  })
  .catch(error => {

    if (error.response) {
      if (error.response.status === 400 && error.response.data) {
        setErrors(error.response.data);
        showToast('error', 'Some fields are mandatory to fill Look the form');

      } else if (error.response.status === 409) {
        showToast('error', 'This Contest Number Already Exist');x
      } else {
        showToast('error', 'Something went wrong while creating the contest, Please try again.');
      }
    }
  });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full  border-yellow-400 border-solid">
      <div className="text-lg text-white p-4 font-bold">Fill all the required Contest Information.</div>
      <form className=" border-red-500 w-3/4 mt-4 mb-4 space-y-8 rounded-lg px-4 h-96 overflow-y-auto" onSubmit={handleCreateContestSubmit }>
        {/* Existing form fields */}
        <div>
          <label htmlFor="contestNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Number</label>
          <input 
            type="text" 
            id="contestNumber" 
            name='contestNumber'
            className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formData.contestNumber} 
            onChange={handleChange} />
            {errors.contestNumber && <p className='text-red-500'>{errors.contestNumber}</p>}
        </div>

        <div>
          <label htmlFor="contestName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Name</label>
          <input
            type="text" 
            id="contestName"
            name='contestName' 
            className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formData.contestName} 
            onChange={handleChange}/>
            {errors.contestName && <p className='text-red-500'>{errors.contestName}</p>}
        </div>

        <div>
          <label htmlFor="contestType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Type</label>
          <select 
            id="contestType"
            name='contestType' 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formData.contestType} 
            onChange={handleChange}>
            <option value="" disabled>Select a type</option>
            <option value="Solo">Solo</option>
            <option value="Duo">Duo</option>
            <option value="Members(3-4)">Members(3-4)</option>
            <option value="Group">Group</option>
          </select>
          {errors.contestType && <p className='text-red-500'>{errors.contestType}</p>}
        </div>

        <div>
          <label htmlFor="contestDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Date <span>(Or add later in contest rules segment)</span></label>
          <input 
            type='date' 
            id="contestDate"
            name='contestDate' 
            className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formData.contestDate} 
            onChange={handleChange}/>
        </div>

        <div>
          <div className='flex items-center gap-x-1'>
            <label htmlFor="contestTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Time <span>(Or add later in contest rules segment)</span></label>
            <div className='relative top-[-4px]'><MdAccessTime /></div>
          </div>
          <input 
            type='time' 
            id="contestTime" 
            name='contestTime'
            className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formData.contestTime} 
            onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="contestVenue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Venue <span>(Or add later in contest rules segment)</span></label>
          <textarea 
            id="contestVenue" 
            name='contestVenue'
            rows={4} 
            className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formData.contestVenue} 
            onChange={handleChange}/>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Prizes (if any or add later if not decided yet)</label>
          <button type="button" onClick={() => setPrizeModalOpen(true)} className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500">
            Add Prizes
          </button>
        </div>

        {/* PRIZE */}
        {/* Displaying the prize table based on condition */}
        {
          prizeRows.length>0 && (
            // Prize table
            <div>
            <PrizeTable rows={prizeRows} deleteRow={handleDeleteRow} editRow={handleEditButton} />
            
            {/* table add button */}
            <div className='flex justify-center items-center mt-2'>
            <button type='button'
              className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
              onClick={() => setPrizeModalOpen(true)}>Add More Prizes</button>
           </div>
            </div>
          )
        }
       
       <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Oganizer (if any or add later if not yet got the Sponsors)</label>
          <button type="button"  onClick={() => setOrganizerModalOpen(true)}   className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500">
            Add Organizers
          </button>
        </div>

        {/* ORGANIZER */}
        {/* Displaying the organizer table based on condition */}
        {
          organizerRows.length>0 && (
            // organizer table
            <div>
            <OrganizerTable rows={organizerRows} deleteRow={handleOrganizerDeleteRow} editRow={handleOrganizerEditButton} />
            
            {/* Organizer add button */}
            <div className='flex justify-center items-center mt-2'>
            <button type='button'
              className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
              onClick={() => setOrganizerModalOpen(true)}>Add More Organizers</button>
           </div>
            </div>
          )
        }

        <div className="flex justify-center">
          <button type="submit" className="border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500">
            Create Contest
          </button>
        </div>
      </form>

      {/* Conditional rendering of the Prize Modal */}
      {
        prizeModalOpen &&
        <PrizeModal
          closeModal={() => {
            setPrizeModalOpen(false)
          }}
          addMorePrizes={handleAddMorePrizes}
          defaultValue={
            rowtoEdit !== null ? prizeRows[rowtoEdit] : null
          } />
      }

      {/* Conditional rendering of the Organizer Modal */}
      {
        organizerModalOpen &&
        <OrganizerModal
          closeModal={() => {
            setOrganizerModalOpen(false)
          }}
          addMoreOrganizers={handleAddMoreOrganizers}
          defaultValue={
            organizerrowtoEdit !== null ? organizerRows[organizerrowtoEdit] : null
          } />
      }

    </div>
  );
}

export default CreateContestpage;