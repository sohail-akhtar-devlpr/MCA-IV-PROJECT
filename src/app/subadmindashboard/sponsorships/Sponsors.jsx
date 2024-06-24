"use client"
import React, { useState } from 'react'
import SponsorModal from '@/app/subadmindashboard/sponsorships/SponsorModal'
import SponsorsTable from '@/app/subadmindashboard/sponsorships/SponsorsTable'

function Sponsors() {

  const [sponsorRows, setSponsorRows] = useState([
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim UniversityAligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
    {
      contestNumber: "2",
      sponsorName: "Aligarh Muslim University",
      sponsorType: "Educational Institute",
      contactIndividual: "Sohail Akhatr",
      fee:"10000",
      mobileNumber: "8077659931",
      email:"sa4512225@gmail.com"
    },
  ]);

   //SPONSOR
   const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
   const [sponsorrowtoEdit, setSponsorRowtoEdit] = useState(null);
 

  //DELETE
  const handleSponsorDeleteRow = (targetIndex) => {
    setSponsorRows(sponsorRows.filter((_, idx) => idx !== targetIndex));
  };

  //ADD MORE SPONSORS
  const handleAddMoreSponsors = (newRow) => {
    if (sponsorrowtoEdit === null) {
      setSponsorRows([...sponsorRows, newRow]);
    } else {
      setSponsorRows(sponsorRows.map((currRow, idx) => {
        return idx === sponsorrowtoEdit ? newRow : currRow;
      }));
      setSponsorRowtoEdit(null); // Reset rowtoEdit after editing
    }
  };

  //UPDATE BUTTON
  const handleSponsorEditButton = (idx) => {
    setSponsorRowtoEdit(idx);
    setSponsorModalOpen(true);
  };

  return (
    <div className='border border-red-500 w-full h-full'>
      <label className="block mt-2 mb-2 text-lg font-medium text-gray-900 dark:text-white">Add Sponsors (if any or add later if not yet got the Sponsors)</label>
      <div className='flex items-center justify-center'>
          <button type="button"  onClick={() => setSponsorModalOpen(true)}   className="dark:bg-gray-700 rounded-lg p-2 border border-gray-400 shadow-orange-500 shadow-sm hover:border-fuchsia-500">
            Add Sponsors
          </button>
        </div>

        {/* SPONSOR */}
        {/* Displaying the sponsor table based on condition */}
        {
          sponsorRows.length>0 && (
            // sponsor table
            <div>
            <SponsorsTable rows={sponsorRows} deleteRow={handleSponsorDeleteRow} editRow={handleSponsorEditButton} />
            </div>
          )
        }

         {/* table add button */}
         <div className='flex justify-center items-center mt-2'>
              <button type='button'
                className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
                onClick={() => setSponsorModalOpen(true)}>Add More Sponsors
              </button>
           </div>

        {/* Conditional rendering of the Sponsor Modal */}
        {
          sponsorModalOpen &&
          <SponsorModal
            closeModal={() => {
              setSponsorModalOpen(false)
            }}
            addMoreSponsors={handleAddMoreSponsors}
            defaultValue={
              sponsorrowtoEdit !== null ? sponsorRows[sponsorrowtoEdit] : null
            } />
        }

    </div>
  )
}

export default Sponsors
