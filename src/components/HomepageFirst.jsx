import React from 'react';
import Image from 'next/image';
import HomepageImage from '../components/Project-Image/Code.png';

function HomepageFirst() {
  return (
    <div className='bg-white grid md:grid-cols-2 h-screen justify-center items-center relative opacity-90 gap-x-5'>
      <div className=' border-green-500 first-col items-center justify-center hidden md:flex relative z-10 m-10'>
        <div className=' border-red-600 w-full h-full transform -rotate-6'>
        
        <Image
          src={HomepageImage}
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
        </div>      
      </div>
      <div className='second-col flex items-center justify-center text-5xl text-black relative z-10 w-11/12 '>
        <div className='flex flex-col items-center justify-center p-10 bg-white bg-opacity-70 rounded-3xl shadow-2xl border-green-500'>
          <div className='font-bold text-teal-600 text-6xl mb-4'>You can't run away from CODES</div>
          <div className='font-semibold text-teal-500 text-5xl mb-4'>until you're a CODER</div>
          <p className='text-center text-gray-700 text-lg opacity-90 leading-relaxed'>
            CodAThon is the platform to help you compete with others, showcase your skills in coding, and expand your knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomepageFirst;
