"use client"
import React from 'react'
import Split from 'react-split'
import ProblemDescription from '@/components/Workspace/ProblemDescription/ProblemDescription'
import Playground from '@/components/Workspace/Playground/Playground'

function Workspace() {
  return (
      <Split className='split' minSize={0} snapOffset={0}>
        <ProblemDescription />
        <Playground />
      </Split > 
  )
}

export default Workspace
