"use client"
import React, { useState, useEffect } from "react";
import { useAuth } from "@/Security/AuthContext";
import QuestionForm from '@/app/QuestionFields/QuestionForm/QuestionForm';
import showToast from '@/utils/Toast/showToast';
import axios from "axios";

function DesignQuestionPage() {

  const initialFormData = {
    contestNumber: '',
    questions: [
      {
        questionNumber: '',
        questionTitle: '',
        questionDescription: '',
        image: '',
        examples: [],
        constraints: [],
      }
    ]
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isCreated, setCreated] = useState(false);
  const [contestData, setContestData] = useState([]);
  const [selectedContestNumber, setSelectedContestNumber] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [showContestDetail, setShowContestDetail] = useState(true);

  const auth = useAuth();
  const token = auth.token;

  useEffect(() => {
    axios.get('http://localhost:8080/contest/created', {
      headers: {
        Authorization: 'Bearer ' + `${token}`
      },
      withCredentials: true
    })
      .then(response => {
        if (response.data.length > 0) {
          setCreated(true);
          setContestData(response.data.map(contest => ({
            contestNumber: contest.contestNumber,
            contestDate: contest.contestDate
          })));
          setLoading(false);
        }
      })
      .catch(error => {
        showToast('error', 'Error while fetching the contests');
      });
  }, [token]);

  const handleContestNumberClick = (contestNumber) => {
    setSelectedContestNumber(contestNumber);
    setIsFormOpen(true);
    setShowContestDetail(false);
  };

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      contestNumber: selectedContestNumber,
    }));
  }, [selectedContestNumber]);

  console.log("SELECTED CONTEST NUMBER:",selectedContestNumber);
  

  return (
    isCreated ? (
      <div className="flex flex-col h-screen border-yellow-400">
        {
          showContestDetail && (
            <div className="text-center mt-4">
              <div className="text-3xl text-teal-300 font-serif font-semiboldbold mb-4">Following are the Created/Posted Contests:</div>
              <div className="grid grid-cols-2 gap-8">
                <div >
                  <div className="text-right text-xl text-teal-200 font-serif font-bold mb-4">Contest Numbers</div>
                  {contestData.map((contest, index) => (
                    <div className="flex items-center justify-end">
                      <div
                      key={index}
                      className="text-left text-sky-200 font-serif text-lg w-24 cursor-pointer hover:underline"
                      onClick={() => handleContestNumberClick(contest.contestNumber)}
                    >
                      {contest.contestNumber}
                    </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xl text-left text-teal-200 font-serif font-bold mb-4">Contest Created at</div>
                  {contestData.map((contest, index) => (
                    <div key={index}
                    className="text-left text-lg font-serif pl-10 text-cyan-200"
                    >
                      {contest.contestDate}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        }
        {
          isFormOpen && (
            <QuestionForm token={token} formData={formData} setFormData={setFormData} />
          )
        }
      </div>
    ) : (
      <>
        {
          isLoading ? (
            <div className="text-lg text-white font-bold">LOADING.......</div>
          ) : (
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

export default DesignQuestionPage;
