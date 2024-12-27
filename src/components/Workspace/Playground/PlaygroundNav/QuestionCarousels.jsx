"use client"
import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function QuestionCarousels({ totalNumberOfQuestions }) {
  // console.log("total number of questions:", data);

  const [slide, setSlide] =useState(0);

  const nextSlide = () => {
    if (slide < totalNumberOfQuestions - 3) {
      setSlide(slide + 1);
    }
  }

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  }

  return (
   <>
      {totalNumberOfQuestions > 0 && totalNumberOfQuestions <= 3 ? (
        [...Array(totalNumberOfQuestions)].map((_, index) => (
          <div key={index} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600">
            {index + 1}
          </div>
        )) 
      ): (
        <div className="flex items-center justify-between">
        <BsArrowLeftCircleFill
          className='w-5 h-5 text-white font-bold hover:cursor-pointer'
          onClick={prevSlide}
        />
        <div className="flex overflow-hidden w-28">
          <div className="flex items-center justify-center transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${slide * 100 / totalNumberOfQuestions}%)` }}>
            {[...Array(totalNumberOfQuestions)].map((_, index) => (
              <div key={index} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600 mx-1">
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        <BsArrowRightCircleFill
          className='w-5 h-5 text-white hover:cursor-pointer'
          onClick={nextSlide}
        />
      </div>
      ) }
    </>
  );
}

export default QuestionCarousels;