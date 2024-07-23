import React from 'react'
import { IoIosPlay } from "react-icons/io";
import QuestionCarousels from '@/components/Workspace/Playground/PlaygroundNav/QuestionCarousels'

function PlaygroundNav() {

  const totalNumberOfQuestions =8;

  return (
    <div className='flex items-center justify-around bg-dark-layer-2 h-11 w-full'>
      <div className=' border-pink-500 flex items-center'>
        {/* <button className=' border-green-500 flex cursor-pointer items-center rounded-lg focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 py-1.5 font-medium shadow-sm shadow-pink-500'>
          <div className=' border-orange-500 flex items-center px-1'>
            <div className=' border-red-500 text-sm text-label-2 dark:text-dark-label-2 px-3'>Javascript</div>
          </div>
        </button> */}
        <select className='px-3 py-1.5 text-sm font-medium items-center focus:outline-none bg-dark-layer-1 text-dark-label-2 rounded-lg  cursor-pointer' >
          <option value="javascript">javascript</option>
          <option value="java">java</option>
          <option value="python">python</option>
        </select>
      </div>

      {/* Run Button */}
      <div>
        <button className='px-3 py-1.5 text-sm font-medium items-center focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg  '>
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
