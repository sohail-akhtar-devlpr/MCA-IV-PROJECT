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

  const [timeFrom, setTimeFrom] = useState("")
  const [timeTo, setTimeFTo] = useState("")
  const [amPmFrom, setAmPmFrom] = useState('PM');
  const [amPmTo, setAmPmTo] = useState('PM');

  const handleTimeChange = (e)=>{
    const {name, value} = e.target
    console.log("name:",name);
    console.log("value:",value);
    if (name === 'contestTimeFrom') {
      setTimeFrom(value);
    } else if (name === 'contestTimeTo') {
      setTimeFTo(value);
    }
  }

  // You can now use contestTimeFrom and contestTimeTo variables
  console.log("contestTimeFrom:", timeFrom);
  console.log("contestTimeTo:", timeTo);

  // const combinedTime = `${timeFrom}-${timeTo}`;
  // console.log("combine time:",combinedTime);

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

  console.log("FORM DATA::",formData);
  
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
      contestTime:`${timeFrom}${amPmFrom}-${timeTo}${amPmTo}`,
      prize: prizeRows,
      contestOrganizer: organizerRows,
  };
  console.log("Form Data To be submit::",formDataToSubmit);
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
        showToast('error', 'This Contest Number Already Exist');
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

        <div className="space-y-4">
          <div className='flex items-center gap-x-1'>
            <label htmlFor="contestTimeFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-1">
              Contest Time
              <span>(Or add later in contest rules segment)</span>
            </label>
            <div className='relative top-[-4px]'>
              <MdAccessTime />
            </div>
          </div>
          
          <div className="flex gap-x-4">
            <div className="flex-1">
              <label htmlFor="contestTimeFrom" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">From</label>
              <div className='flex items-center gap-x-2'>
              <input
                type="time"
                id="contestTimeFrom"
                name="contestTimeFrom"
                className="block p-2 w-24 text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={timeFrom}
                onChange={handleTimeChange}
              />
              <select
                id="contestTimeFromAmPm"
                name="contestTimeFromAmPm"
                className="block text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={amPmFrom}
                onChange={(e) => setAmPmFrom(e.target.value)}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="contestTimeTo" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">To</label>
              <div className='flex items-center gap-x-2'>
              <input
                type="time"
                id="contestTimeTo"
                name="contestTimeTo"
                className="block p-2 w-24 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={timeTo}
                onChange={handleTimeChange}
              />
              <select
                id="contestTimeToAmPm"
                name="contestTimeToAmPm"
                className="block text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={amPmTo}
                onChange={(e) => setAmPmTo(e.target.value)}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
              </div>
            </div>
          </div>
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