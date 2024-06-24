"use client"
import React from 'react'
import Split from 'react-split'
import ProblemDescription from '@/workspace/Problemdescription/ProblemDescription'
import Playground from '@/workspace/Playground/Playground'
export default function Workspace() {
  return (
      <Split className="split split-bg" minSize={0}>
        <ProblemDescription/>
        <Playground/>
        {/* <div>problemdescription</div> */}
        {/* <div>playground</div> */}
    </Split>
   )
}
