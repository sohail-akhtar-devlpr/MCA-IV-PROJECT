"use client"
import React from 'react'
import Split from 'react-split'
import ProblemDescription from '@/components/Workspace/ProblemDescription/ProblemDescription'
import Playground from '@/components/Workspace/Playground/Playground'
import { useEffect } from 'react'
import { useAuth } from "@/Security/AuthContext";

function Workspace() {

  const contestNumber =  localStorage.getItem("contestId")
  const token = localStorage.getItem("jwtToken")
  
  const { getQuestionDetails} = useAuth();

   useEffect(() => {
    if (contestNumber && token) {
      getQuestionDetails(contestNumber, token);
    }
  }, [contestNumber, token]);

  return (
      <Split className='split' minSize={0} snapOffset={0}>
        <ProblemDescription />
        <Playground />
      </Split > 
  )
}

export default Workspace
