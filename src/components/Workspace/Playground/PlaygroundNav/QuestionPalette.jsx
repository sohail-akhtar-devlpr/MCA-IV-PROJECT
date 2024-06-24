import React from 'react'

function QuestionPalette({ data }) {
   return (
   <>
      <div className='overflow-y-auto shadow-md shadow-pink-500'>
      <div className="bg-dark-layer-2 p-2 border-gray-500 grid grid-cols-3 gap-2 rounded-lg ">
        {[...Array(data)].map((_, index) => (
          <div key={index} className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600 mx-1 shadow-sm shadow-white ">
            {index + 1}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default QuestionPalette;
