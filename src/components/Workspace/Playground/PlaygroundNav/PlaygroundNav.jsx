import React, { useState } from 'react'
import { IoIosPlay } from "react-icons/io";
import {executeCode} from '@/app/api/CompileCodeApi'
import QuestionCarousels from '@/components/Workspace/Playground/PlaygroundNav/QuestionCarousels'

function PlaygroundNav({ language, onChangeLanguage, editorRef,setOutput }) {

  const runCode = async ()=>{
    const sourceCode = editorRef.current.getValue();
    // console.log("source code::",sourceCode);
    if(!sourceCode) return;
    try {
      const {run:result}= await executeCode(language, sourceCode)
      setOutput(result.output)
    } catch (error) {
      
    }
  }

  const totalNumberOfQuestions =8;

  return (
    <div className='flex items-center justify-around bg-dark-layer-2 h-11 w-full'>
      <div className=' border-pink-500 flex items-center'>

        <select className='px-3 py-1.5 text-sm font-medium items-center focus:outline-none bg-dark-layer-1 text-dark-label-2 rounded-lg  cursor-pointer'
        onChange={(e) => onChangeLanguage(e.target.value)}
        value={language}
        >
          <option value="java">java</option>
          <option value="python">python</option>
          <option value="javascript">javascript</option>
        </select>
      </div>

      {/* Run Button */}
      <div>
        <button className='px-3 py-1.5 text-sm font-medium items-center focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
        onClick={runCode}
        >
        Run
        <IoIosPlay className='ml-1' size={22}  />
        </button>
      </div>

      {/* Question Palette */}
      {/* <div className='flex'>
      <div className='text-white text-lg font-bold '>Questions:</div>
      <div className="border-green-600 shadow-sm shadow-pink-500  flex justify-center items-center gap-2 mt-0">
        <QuestionCarousels data={totalNumberOfQuestions} />
      </div>
      </div> */}

      <div className=''>
        <button className='px-3 py-1.5 font-bold items-center focus:outline-none inline-flex bg-dark-green-s hover:bg-green-600 rounded-lg'>
        Submit
        </button>
      </div>

      </div>
  )
}

export default PlaygroundNav