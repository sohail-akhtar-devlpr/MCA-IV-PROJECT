"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import showToast from '@/utils/Toast/showToast';
import { useAuth } from "@/Security/AuthContext";
import PostForm from './PostForm'

function PostContestpage() {
  const [isCreated, setCreated] = useState(false);
  const [contestNumbers, setContestNumbers] = useState([]);
  // const [contestNumber, setContestNumber] = useState(" ");
  const [selectedContestNumber, setSelectedContestNumber] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [showContestDetail, setShowContestDetail] = useState(true);
  const [selectedContest, setSelectedContest] = useState(null);

  const auth = useAuth();
  const token = auth.token;

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/contest/created', {
          headers: {
            Authorization: 'Bearer ' + `${token}`
          },
          withCredentials: true
        });
        console.log("RESPONSE IN POST::", response.data);
        if (response.data.length > 0) {
          setCreated(true);
          setContestNumbers(response.data.map(contest => contest.contestNumber));
          setSelectedContest(response.data);
          // setContestNumber(response.data[0]?.contestNumber || ""); // Single chosen contest, ensure data exists
          setLoading(false);
        }
      } catch (error) {
        // showToast('error', 'Error in fetching Contest Details');
      }
    };

    fetchContests();
  }, [token]);

  const handleContestNumberClick = (contestNumber) => {
    setSelectedContestNumber(contestNumber);
    setIsFormOpen(true);
    setShowContestDetail(false);
  };

  return (
    isCreated ? (
      <div className="flex flex-col h-screen border-yellow-400">
        {showContestDetail && (
          <div className="text-center mt-0 border-green-500">
            <div className="text-xl font-bold m-0 text-green-500">Available Contests:</div>
            {contestNumbers.map((contestNumber, index) => (
              <div
                key={index}
                className="text-lg text-white font-bold"
                onClick={() => handleContestNumberClick(contestNumber)}
              >
                <span className="cursor-pointer hover:underline">
                  Contest Number: {contestNumber}
                </span>
              </div>
            ))}
          </div>
        )}
        {isFormOpen &&
         <PostForm 
         contest={selectedContest} 
         contestNumber={selectedContestNumber}
         setIsFormOpen={setIsFormOpen} 
         setShowContestDetail={setShowContestDetail}/>}
      </div>
    ) : (
      <>
      {
        isLoading ? (
          <div className="text-lg text-white font-bold">LOADING.......</div>
        ):(
          <div className="text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <strong className="text-red-500 text-lg font-bold">No contest is currently live.</strong>
          <span className="text-white font-semibold block sm:inline"> Kindly create a contest before proceeding.</span>
          <span className="text-yellow-500 font-semibold block sm:inline"> Note: You cannot create questions until a contest is live.</span>
        </div>
        )
      }
    </>
    )
  );
}

export default PostContestpage;
