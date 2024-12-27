import React from 'react'
import QuestionCarousels from '../Playground/PlaygroundNav/QuestionCarousels'
import QuestionPalette from '@/components/Workspace/Playground/PlaygroundNav/QuestionPalette'
import { useAuth } from "@/Security/AuthContext";
import showToast from '@/utils/Toast/showToast'
import axios from 'axios'

function ProblemDescription() {

  
  // const auth = useAuth();
  // console.log("Authcontext:",auth)
  // const token = auth.token;

  // const totalNumberOfQuestions=4
  const questionsNumber=1
  const auth = useAuth();
  console.log("auth:",auth);
  

  // const contestNumber =  localStorage.getItem("contestId")
  // const token = localStorage.getItem("jwtToken")
  // console.log("contestNumber::",contestNumber);
  // // console.log("token number::",token);
  
  // const useAuth = useAuth();
  // useAuth.getQuestionDetails(contestNumber, token);
  // try {
  //   axios.get(`http://localhost:8080/subadmin/contest-question-set?contestNumber=${contestNumber}`,{
  //     headers:{
  //       Authorization: 'Bearer ' + `${token}`
  //     },
  //     withCredentials: true,
  //   })
  //   .then((response)=>{
  //     console.log("RESPONSE OF QUESTIONS::",response);
      
  //   })
  //   .catch((error)=>{
  //     console.log("Error",error);
      
  //   })
    
  // } catch (error) {
  //   showToast("error","Something went wrong in loading the question..Refresh the page")
  // }



  return (
    <div className=' border-yellow-400 bg-dark-layer-1'>

      {/* TABS */}
      {/* <div className=' border-indigo-700 flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white'>
        <div className=' border-blue-400 bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs'>
        Description
        </div>
      </div> */}

      <div className=' border-green-500 flex flex-col px-0 py-4 h-[calc(100vh-96px)] overflow-y-auto'>
      {/* <div className='flex  fixed w-1/2 z-10  border-green-500 mt-[-16px]'>
        <div className=' text-white text-center ml-2 w-[200px] h-[200px] border border-red-500'>CAMERA</div>
        <div className='ml-2 w-[200px] h-[200px] border border-red-500 grid grid-cols-3'> <QuestionCarousels data={totalNumberOfQuestions} /></div>
        <div className='flex flex-col items-center justify-center ml-2 w-[200px] h-[200px] border-red-500'> 
          <h1 className='text-lg font-bold text-white'>Questions:</h1>
          <QuestionPalette data={totalNumberOfQuestions}/>
        </div>
      </div> */}

        {/* Content Section */}
        <div className=' border-pink-500 px-5'>
        
          {/* Problem Heading */}
            <div className=' border-orange-500 w-full'>
              <div className=' border-red-600 flex space-x-4 items-center justify-center'>
                <div className=' border-violet-600 mr-2 text-lg text-white font-medium'>Two Sum</div>
              </div>
              <div className=' border-red-600 flex space-x-4'>
                <div className=' border-violet-600 flex-1 mr-2 text-lg text-white font-medium'>Question {questionsNumber}</div>
              </div>
              <div className=' border-indigo-600 flex items-center mt-3'>

              </div>
              {/* Problem Statements */}
              <div className=' border-yellow-400 text-white text-sm'>
                  <p className='mt-3'>
                      Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                      <em>indices of the two numbers such that they add up to</em> <code>target</code>.
                  </p>
                  <p className='mt-3'>
                      You may assume that each input would have <strong>exactly one solution</strong>, and you
                      may not use thesame element twice.
                  </p>
                  <p className='mt-3'>You can return the answer in any order.</p>
                </div>

                {/* Example */}
                <div className='mt-4'>
                  {/* Example 1 */}
                  <div>
                      <p className='font-medium text-white '>Example 1: </p>
                      <div className='example-card'>
                          <pre>
                              <strong className='text-white'>Input: </strong> nums = [2,7,11,15], target = 9{" "}
                              <br />
                              <strong>Output:</strong> [0,1] <br />
                              <strong>Explanation:</strong>Because nums[0] + nums[1] == 9, we return [0, 1].
                          </pre>
                      </div>
                  </div>

                  {/* Example 2 */}
                  <div>
                      <p className='font-medium text-white '>Example 2: </p>
                      <div className='example-card'>
                          <pre>
                              <strong className='text-white'>Input: </strong> nums = [3,2,4], target = 6{" "}
                              <br />
                              <strong>Output:</strong> [1,2] <br />
                              <strong>Explanation:</strong>Because nums[1] + nums[2] == 6, we return [1, 2].
                          </pre>
                      </div>
                  </div>
                  {/* Example 3 */}
                  <div>
                      <p className='font-medium text-white '>Example 3: </p>
                      <div className='example-card'>
                          <pre>
                              <strong className='text-white'>Input: </strong> nums = [3,3], target = 6
                              <br />
                              <strong>Output:</strong> [0,1] <br />
                          </pre>
                      </div>
                  </div>
              </div>

              {/* Constraints */}
              <div className='my-5'>
                <div className='text-white text-sm font-medium'>Constraints:</div>
                  <ul className='text-white ml-5 list-disc'>
                      <li className='mt-2'>
                          <code>2 ≤ nums.length ≤ 10</code>
                      </li>

                      <li className='mt-2'>
                          <code>-10 ≤ nums[i] ≤ 10</code>
                      </li>
                      <li className='mt-2'>
                          <code>-10 ≤ target ≤ 10</code>
                      </li>
                      <li className='mt-2 text-sm'>
                          <strong>Only one valid answer exists.</strong>
                      </li>
                  </ul>
              </div>

            </div>
        </div>
      </div>

    </div>
  )
}

export default ProblemDescription