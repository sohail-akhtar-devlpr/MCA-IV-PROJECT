import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className='border border-yellow-400'>
      <div className='grid-cols-3 mx-auto grid lg:grid-cols-3 gap-[3rem] h-[100%] justify-center items-center border border-green-400'>
        <div className='col-span-2 border border-red-600 text-center'>
        <h1 className='text-[20px] md:text-[30px] text-white font-bold'>
            Department of Computer Science
          </h1>
          <h1 className='text-[20px] md:text-[30px] text-white font-bold'>
            Aligarh Muslim University
          </h1>
          <h1 className='text-[15px] md:text-[25px] text-white font-bold'>
            Organizing
          </h1>
          <h1 className='text-[20px] md:text-[30px] text-white font-bold'>
            AMU HACKS 3.0
          </h1>
          <h1 className='text-[15px] md:text-[20px] text-white font-bold'>
           27-28 April, 2024
           </h1>
           <h1 className='text-[15px] md:text-[15px] text-white font-bold'>
           10:00 AM to 12:00 PM
          </h1>
          <Link href="/contest" className='text-[15px] md:text-[25px] text-yellow-300 font-bold'>Register Now!!</Link>
          <div>
            {/* <h1 className='text-[15px] md:text-[15px] text-white text-left'>
            Eligibility
            </h1> */}
          </div>
        </div>
        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-lg h-[500px] border border-pink-600'>
          <Image src="/public/images/circuit-board.jpg" alt='contest' layout='fill' className='object-cover rounded-full'/>
        </div>
        <div className='border border-[#fcba03] col-span-2 flex justify-center'>
         <div className='border border-[#1403fc]'>
          <h1 className='text-center text-3xl text-[#f4fc03] font-bold'>Contest is Live</h1>
         <div className='text-center '>
          <Link href="/joincontest" className='text-2xl text-[#f4fc03] font-bold'>Join Now!!</Link> 
         </div> 
         </div>
        </div>

        <div className='border border-[#0388fc]'>
            <h1>hi there fellow</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
