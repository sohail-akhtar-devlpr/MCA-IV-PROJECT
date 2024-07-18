"use client"
import React,{useState,useEffect} from "react";
import { useAuth } from "@/Security/AuthContext";
import QuestionForm from '@/app/QuestionFields/QuestionForm/QuestionForm'
import showToast from '@/utils/Toast/showToast';
import axios from "axios";

function DesignQuestionPage() {

  const initialFormData = {
    contestNumber: '',
    questions:[
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

console.log("FORM DATA::",formData)

// Contest is live or not
const [isCreated, setCreated] = useState(false);

const [contestNumbers, setContestNumbers] = useState([]);
const [contestNumber, setContestNumber] = useState(" ");

// State for selected contest number
const [selectedContestNumber, setSelectedContestNumber] = useState("");

const [isFormOpen, setIsFormOpen] = useState(false);

const [isLoading, setLoading] = useState(true);

const [showContestDetail, setShowContestDetail] = useState(true);

const auth = useAuth();
const token = auth.token;
// console.log("AUTH TOKEN:",token);

try {
  useEffect(() => {
    // Fetch contests with status 'Created'
    axios.get('http://localhost:8080/contest/created',{
      headers:{
        Authorization: 'Bearer ' + `${token}`
      },
      withCredentials:true
    })
      .then(response => {
        console.log("RESPONSE::",response);
        if (response.data.length > 0) {
          setCreated(true);
          setContestNumbers(response.data.map(contest => contest.contestNumber))
          setContestNumber(response.data.contestNumber);//signle choosed contest
          setLoading(false);
        }
      })
      .catch(error => {
      });
  }, [token]);
} catch (error) {
  showToast('error', 'Error While uploading the contests');
}

const handleContestNumberClick = (contestNumber) => {
  setSelectedContestNumber(contestNumber);
  setIsFormOpen(true);
  setShowContestDetail(false);
};

//to display the selected contest  numbers
useEffect(() => {
  setFormData(prevFormData => ({
    ...prevFormData,
    contestNumber: selectedContestNumber,
  }));
}, [selectedContestNumber]);

return (
  isCreated ? (
    
    <div className="flex flex-col h-screen border-yellow-400">
    {
      showContestDetail && (
        <div className="text-center mt-0  border-green-500">
          <div className="text-lg text-white font-bold m-0">Following are the Created Contests:</div>
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
      )
    }
    {
      isFormOpen && (
        <QuestionForm token={token} formData={formData} setFormData={setFormData}/>
      )
    }
  </div>
  ):(
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

export default DesignQuestionPage;