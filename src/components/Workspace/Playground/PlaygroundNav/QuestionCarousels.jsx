// import React, { useState } from 'react'
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

// function QuestionCarousels({ data }) {
//   const [slide, setSlide] = useState(0);

//   const nextSlide = () => {
//     if (slide < data - 3) {
//       setSlide(slide + 1);
//     }
//   }

//   const prevSlide = () => {
//     if (slide > 0) {
//       setSlide(slide - 1);
//     }
//   }

//   return (
//     <div className="flex items-center space-x-2">
//       <BsArrowLeftCircleFill
//         className='w-6 h-6 text-white hover:cursor-pointer'
//         onClick={prevSlide}
//       />
//       {[...Array(data)].slice(slide, slide + 3).map((_, index) => (
//         <div key={index + slide} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600">
//           {index + 1 + slide}
//         </div>
//       ))}
//       <BsArrowRightCircleFill
//         className='w-6 h-6 text-white hover:cursor-pointer'
//         onClick={nextSlide}
//       />
//     </div>
//   );
// }

// export default QuestionCarousels;



import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function QuestionCarousels({ data }) {
  // console.log("total number of questions:", data);

  const [slide, setSlide] =useState(0);

  const nextSlide = () => {
    if (slide < data - 3) {
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
      {data > 0 && data <= 3 ? (
        [...Array(data)].map((_, index) => (
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
          <div className="flex items-center justify-center transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${slide * 100 / data}%)` }}>
            {[...Array(data)].map((_, index) => (
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


// import React, { useState } from 'react'
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

// function QuestionCarousels({ data }) {
//   // console.log("total number of questions:", data);

//   const [slide, setSlide] =useState(0);

//   const nextSlide=()=>{
//     setSlide(slide+1);
//     console.log("SLIDE =:",slide);
//     console.log("RIGHT ARROW BUTTON CLICKED");
//   }

//   const prevSlide=()=>{
//     setSlide(slide-1);
//     console.log("SLIDE =:",slide);
//     console.log("LEFT ARROW BUTTON CLICKED");
//   }

//   return (
//     <>
//       {data > 0 && data <= 3 ? (
//         [...Array(data)].map((_, index) => (
//           <div key={index} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600">
//             {index + 1}
//           </div>
//         ))
//       ): (
//          <>
//           <div className="flex items-center space-x-1">
//       <BsArrowLeftCircleFill
//         className='w-6 h-6 text-white hover:cursor-pointer'
//         onClick={prevSlide}
//       />
//       <div className="flex items-center overflow-hidden w-28">
//         <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${slide * 100 / data}%)` }}>
//           {[...Array(data)].map((_, index) => (
//             <div key={index} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600 mx-1">
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//       <BsArrowRightCircleFill
//         className='w-6 h-6 text-white hover:cursor-pointer'
//         onClick={nextSlide}
//       />
//     </div>
//          </>
//       ) }
//     </>
//   );
// }

// export default QuestionCarousels;


// import React, { useState } from 'react'
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

// function QuestionCarousels({ data }) {
//   const [slide, setSlide] = useState(0);

//   const nextSlide = () => {
//     if (slide < data - 3) {
//       setSlide(slide + 1);
//     }
//   }

//   const prevSlide = () => {
//     if (slide > 0) {
//       setSlide(slide - 1);
//     }
//   }

//   return (
//     <div className="flex items-center space-x-1">
//       <BsArrowLeftCircleFill
//         className='w-6 h-6 text-white hover:cursor-pointer'
//         onClick={prevSlide}
//       />
//       <div className="flex items-center overflow-hidden w-28">
//         <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${slide * 100 / data}%)` }}>
//           {[...Array(data)].map((_, index) => (
//             <div key={index} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600 mx-1">
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//       <BsArrowRightCircleFill
//         className='w-6 h-6 text-white hover:cursor-pointer'
//         onClick={nextSlide}
//       />
//     </div>
//   );
// }

// export default QuestionCarousels;
