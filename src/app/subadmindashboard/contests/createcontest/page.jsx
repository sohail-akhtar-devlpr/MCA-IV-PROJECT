"use client";
import React, { useState } from 'react';
import { MdAccessTime } from "react-icons/md";
import PrizeModal from '@/app/subadmindashboard/contests/createcontest/PrizeModal';
import OrganizerModal from '@/app/subadmindashboard/contests/createcontest/OrganizerModal';
import PrizeTable from '@/app/subadmindashboard/contests/createcontest/PrizeTable';
import OrganizerTable from '@/app/subadmindashboard/contests/createcontest/OrganizerTable';

function CreateContestpage() {
  //PRIZE
  const [rows, setRows] = useState([
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
  ]);

  //ORGANIZER
  const [organizerRows, setOrganizerRows] = useState([
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
  ]);

  //PRIZE
  const [prizeModalOpen, setPrizeModalOpen] = useState(false);
  const [rowtoEdit, setRowtoEdit] = useState(null);

  //ORGANIZER
  const [organizerModalOpen, setOrganizerModalOpen] = useState(false);
  const [organizerrowtoEdit, setOrganizerRowtoEdit] = useState(null);

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
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  //ORGANIZER
  const handleOrganizerDeleteRow = (targetIndex) => {
    setOrganizerRows(organizerRows.filter((_, idx) => idx !== targetIndex));
  };

  //PRIZE
  const handleAddMorePrizes = (newRow) => {
    if (rowtoEdit === null) {
      setRows([...rows, newRow]);
    } else {
      setRows(rows.map((currRow, idx) => {
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

  return (
    <div className="flex flex-col items-center justify-center w-full  border-yellow-400 border-solid">
      <div className="text-lg text-white p-4 font-bold">Fill all the required Contest Information.</div>
      <form className=" border-red-500 w-3/4 mt-4 mb-4 space-y-8 rounded-lg px-4 h-96 overflow-y-auto">
        {/* Existing form fields */}
        <div>
          <label htmlFor="contestNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Number</label>
          <input type="text" id="contestNumber" className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="contestName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Name</label>
          <input type="text" id="contestName" className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="contestType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Type</label>
          <select id="contestType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Solo</option>
            <option>Duo</option>
            <option>Members(3-4)</option>
            <option>Group</option>
          </select>
        </div>

        <div>
          <label htmlFor="contestDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Date</label>
          <input type='date' id="contestDate" className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div>
          <div className='flex items-center gap-x-1'>
            <label htmlFor="contestTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Time</label>
            <div className='relative top-[-4px]'><MdAccessTime /></div>
          </div>
          <input type='time' id="contestTime" className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="contestVenue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Venue</label>
          <textarea id="contestVenue" rows={4} className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Prizes (if any or add later if not decided yet)</label>
          <button type="button" onClick={() => setPrizeModalOpen(true)} className="dark:bg-gray-700 rounded-lg p-2 border border-gray-400 shadow-orange-500 shadow-sm hover:border-fuchsia-500">
            Add Prizes
          </button>
        </div>

        {/* PRIZE */}
        {/* Displaying the prize table based on condition */}
        {
          rows.length>0 && (
            // Prize table
            <div>
            <PrizeTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditButton} />
            
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
          <button type="button"  onClick={() => setOrganizerModalOpen(true)}   className="dark:bg-gray-700 rounded-lg p-2 border border-gray-400 shadow-orange-500 shadow-sm hover:border-fuchsia-500">
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
            
            {/* table add button */}
            <div className='flex justify-center items-center mt-2'>
            <button type='button'
              className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
              onClick={() => setOrganizerModalOpen(true)}>Add More Organizers</button>
           </div>
            </div>
          )
        }

        <div className="flex justify-center">
          <button type="button" className="w-30 dark:bg-gray-700 rounded-lg p-2 border border-gray-400 shadow-orange-500 shadow-sm hover:border-fuchsia-500">
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
            rowtoEdit !== null ? rows[rowtoEdit] : null
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
