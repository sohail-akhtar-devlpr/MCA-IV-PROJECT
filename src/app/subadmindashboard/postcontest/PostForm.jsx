import React from 'react'
import { useState, useEffect } from 'react';
import showToast from '@/utils/Toast/showToast';
import { useAuth } from "@/Security/AuthContext";
import { useRouter } from 'next/navigation';
import axios from 'axios';

function PostForm({contest, contestNumber, setIsFormOpen, setShowContestDetail }) {
  const [currentContest, setCurrentContest] = useState(null);

  console.log("CONTESTNUMBER::",contestNumber);

  const auth = useAuth();
  const token = auth.token;

  const router = useRouter();

  console.log("TOKEN::",token);

  useEffect(() => {
    // Find the contest object by contestNumber
    const foundContest = contest.find(item => item.contestNumber === contestNumber);
    setCurrentContest(foundContest);
  }, [contest, contestNumber]);

  const handleClose = () => {
    setIsFormOpen(false);
    setShowContestDetail(true);
  };

  function updateContestStatus(contestNumber){
    axios.put(`http://localhost:8080/subadmin/${contestNumber}/status`,{
      headers:{
        Authorization: 'Bearer ' + `${token}`
      },
      withCredentials: true
    })
        .then(response => {
            if(response.status===200){
              // setIsFormOpen(false);
              showToast('success', 'Successfully Posted');
              router.push('/subadmindashboard/contests');
            }
        })
        .catch((error) => {
          showToast('error', 'Something went wrong');
        });
};

  console.log("CURRENT  CONTEST::",currentContest);

  return (
    <div className='flex flex-col justify-center gap-y-2 '>
    <div className='text-center'>
      <h2 className="text-white text-lg font-bold">Contest Details</h2>
    </div>
    
      <div className="h-96 overflow-y-auto p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      
        <p><strong className='mr-2'>Contest ID:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.contestId}</span>
        </p>

        <p><strong className='mr-2'>Contest Number:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.contestNumber}</span>
        </p>

        <p><strong className='mr-2'>Contest Name:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.contestName}</span>
        </p>

        <p><strong className='mr-2'>Contest Type:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.contestType}</span>
        </p>

        <p><strong className='mr-2'>Date:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.contestDate}</span>
        </p>

        <p><strong className='mr-2'>Time:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.contesTime}</span>
        </p>

        <p><strong className='mr-2'>Venue:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.contestVenue}</span>
        </p>

        <p><strong className='mr-2'>Status:</strong> 
          <span className='text-green-500 font-semibold'>{currentContest?.status}</span>
        </p>

        <div><strong className='mr-2'>Organizer(s):</strong> 
          {currentContest?.contestOrganizer?.map((organizer, index) => (
            <div key={index} className="ml-4">

              <p><strong className='mr-2'>Organizer ID:</strong>
                <span className='text-green-500 font-semibold'>{organizer.organizerId}</span>
              </p>
              <p><strong className='mr-2'>Organizer Name:</strong>
                <span className='text-green-500 font-semibold'>{organizer.organizerName}</span>
              </p>
              <p><strong className='mr-2'>Organizer Type:</strong>
                <span className='text-green-500 font-semibold'>{organizer.organizerType}</span>
              </p>
              <p><strong className='mr-2'>Contact Individual:</strong>
                <span className='text-green-500 font-semibold'>{organizer.contactIndividual}</span>
              </p>
            </div>
          ))}
        </div>

        <div><strong className='mr-2'>Prize(s):</strong> 
        {currentContest?.prize?.map((prize, index) => (
            <div key={index} className="ml-4">
              <p><strong className='mr-2'>PrizeID:</strong>
                <span className='text-green-500 font-semibold'>{prize.prizeId}</span>
              </p>
              <p><strong className='mr-2'>Prize Name:</strong>
                <span className='text-green-500 font-semibold'>{prize.prizeName}</span>
              </p>
              <p><strong className='mr-2'>Prize Rank:</strong>
                <span className='text-green-500 font-semibold'>{prize.prizeRank}</span>
              </p>
              <p><strong className='mr-2'>Prize Category:</strong>
                <span className='text-green-500 font-semibold'>{prize.prizeCategory}</span>
              </p>
              <p><strong className='mr-2'>Prize Description:</strong>
                <span className='text-green-500 font-semibold'>{prize.prizeDescription}</span>
              </p>
              <p><strong className='mr-2'>Prize value:</strong>
                <span className='text-green-500 font-semibold'>{prize.prizeValue}</span>
              </p>
            </div>
          ))}
        </div>

      </div>
    
    <div className='text-center space-x-2'>
      <button type="button" className="border-none p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-xl shadow-gray-500 w-16" onClick={handleClose}>Close</button>
      <button type="button" className="border-none p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-xl shadow-gray-500 w-16" onClick={() => updateContestStatus(contestNumber)}>Post</button>
    </div>
  </div>
  )
}

export default PostForm
