import React from 'react';
import Image from 'next/image';
import CodeEditorImage from '../components/Project-Image/CodeEdiorImage.png';


function HomepageSecond() {
  return (
    <div className='grid md:grid-cols-2 h-screen justify-center items-center relative gap-x-5'>
      <div className=' border-green-500 first-col items-center justify-center hidden md:flex relative z-10 m-10'>
        <div className=' border-red-600 w-full h-full '>
        
        <Image
          src={CodeEditorImage}
          className="w-full h-full object-cover rounded-3xl shadow-md shadow-dark-label-2"
          />
        </div>      
      </div>
      <div className='second-col flex items-center justify-center relative z-10 w-11/12 '>
        <div className='flex flex-col items-center justify-center p-10 bg-white bg-opacity-90 rounded-3xl shadow-2xl shadow-olive border-green-500'>
          <div className='font-bold text-purple-800 text-6xl mb-4'>Dedicated Code Editor..</div>
          <div className='font-bold text-coral-600 text-4xl mb-4'>code freely</div>
          <div className='font-bold text-coral-600 text-4xl mb-4'>compile instantly</div>
          <div className='font-bold text-coral-600 text-4xl mb-4'>execute effortlessly</div>
        </div>
    </div>
    </div>
  );
}

export default HomepageSecond;
