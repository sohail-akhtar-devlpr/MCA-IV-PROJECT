"use client"
import React, { useEffect, useState } from 'react';
import ContestTimer from '@/app/subadmindashboard/contesttimer/ContestTimer'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

function Hero() {
  const [contestData, setContestData] = useState(null);
  const [isPostAvailable, setIsPostAvailable] = useState(false);
  const [isContestLive, setIsContestLive] = useState(false);
  
  const [contestCountDownTime, setContestCountDownTime] = useState(0); // No initial duration

  const [isContestClosed, setIsContestClosed] = useState(false);
  const [contesWholetDuration, setContestWholeDuration] = useState(0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  // Helper function to convert date and time string to milliseconds duration
  const dateTimeToDuration = (dateStr, timeStr) => {
    const parseTime = (timeStr) => {
      const [time, modifier] = timeStr.split(/(AM|PM)/);
      let [hours, minutes] = time.split(':').map(Number);
      if (modifier === 'PM' && hours < 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;
      return { hours, minutes };
    };

    const { hours, minutes } = parseTime(timeStr);
    const contestDate = new Date(dateStr);
    contestDate.setHours(hours, minutes, 0, 0);

    const now = new Date().getTime();
    return contestDate.getTime() - now;
  };

  useEffect(() => {
    axios.get('http://localhost:8080/contest/posted').then(
      (response) => {
        console.log("Post Response:", response);
        localStorage.setItem("contestId",response.data.contestNumber)
        setContestData(response.data);
        setIsPostAvailable(true);

        // Extract and calculate duration based on date and the first part of the time range
        const contestDate = response.data?.contestDate; // e.g., "2024-07-30"
        const timeRange = response.data?.contestTime; // e.g., "10:00AM-11:00PM"
        if (contestDate && timeRange) {
          // const [startTime] = timeRange.split('-'); // Get the first part
          const [startTime, endTime] = timeRange.split('-')
          const contestCountdownStartDuration = dateTimeToDuration(contestDate, startTime);
          setContestCountDownTime(contestCountdownStartDuration);
          console.log("Contest Start Duration",contestCountdownStartDuration);
          // console.log("end time:",endTime)
          const contestCountdownEndDuration = dateTimeToDuration(contestDate, endTime);
          setContestWholeDuration(contestCountdownEndDuration);
          console.log("Contest End Duration",contestCountdownEndDuration);
        }
      }).catch((error) => {
        console.log("Error While Getting The Post", error);
      });
  }, []);

  const handleContestCountDownStartTimeExpired = (isExpired) => {
    setIsContestLive(isExpired); 
  };

  const handleContestCountDownEndTimeExpired = (isExpired) => {
    setIsContestClosed(isExpired); //IF TRUE MATLAB CONTEST IS CLOSED
  };

  console.log("Contest Data::", contestData);

  console.log("IS CONTEST LIVE",isContestLive);
  console.log("CONTEST COUNTDOWNTIME",contestCountDownTime);
  console.log("IS CONTEST CLOSED",isContestClosed);
  console.log("CONTEST WHOLE DURATION",contesWholetDuration);
  return (
    isPostAvailable && (
      <div className='bg-white flex flex-col justify-center items-center gap-y-4  border-purple-800 p-10 opacity-90'>
        {/* <div className='text-7xl'>
          <h1 className='border border-yellow-600 text-red-700 text-center font-bold'>ALIGARH MUSLIM UNIVERSITY</h1>
        </div> */}
        <div className='bg-white shadow-2xl flex justify-center items-center  border-green-400'>
          <div className='col-span-2  border-red-600 text-center rounded-lg'>
            <h1 className=' text-teal-600 text-[20px] md:text-[30px] font-bold'>
              Department of Computer Science
            </h1>
            <h1 className='text-[20px] md:text-[30px] text-teal-600 font-bold'>
              Aligarh Muslim University
            </h1>
            <h1 className='text-[15px] md:text-[25px] text-red-500 font-bold'>
              Organizing
            </h1>
            <h1 className='text-[20px] md:text-[30px] text-teal-400 font-bold'>
              {contestData?.contestName}
            </h1>
            <h1 className='text-[15px] md:text-[20px]  text-teal-600 font-bold'>
              {formatDate(contestData?.contestDate)}
            </h1>
            <h1 className='text-[15px] md:text-[15px] text-teal-600 font-bold'>
              {contestData?.contestTime}
            </h1>
            <h1 className='text-[15px] md:text-[15px] text-teal-600 font-bold'>
              contest ID:{contestData?.contestNumber}
            </h1>

            {isContestLive && (
              <>
                <ContestTimer 
                  duration={contestCountDownTime} 
                  contestCountDownStartTimeExpired={handleContestCountDownStartTimeExpired} contestWholeDurationTime = {contesWholetDuration} 
                  contestCountDownEndTimeExpired ={handleContestCountDownEndTimeExpired}
                  isContestLive = {isContestLive}
                  isContestClosed = {isContestClosed}/>
                <div className='border-[#fcba03] col-span-2 flex justify-center'>
                  <div className=' border-[#1403fc]'>
                    <h1 className='text-center text-3xl text-green-700 font-bold'>Contest is Live</h1>
                    <div className='text-center '>
                      <Link href="/joincontest" className='hover:bg-gray-200 text-2xl text-teal-600 font-bold rounded-lg'>Join Now!!</Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isContestClosed && (
              <>
              <div className=' border-[#fcba03] col-span-2 flex justify-center'>
                <div className=' border-[#1403fc]'>
                  <h1 className='text-center text-3xl text-red-700 font-bold'>Contest Closed</h1>
                </div>
              </div>
              </>
            )}

            {!isContestLive &&  !isContestClosed && contestCountDownTime !== 0 && ( // Check if contestDuration is set
              <>
                <div className=''>
                  <h1 className='text-white text-2xl font-bold'>
                    Go Live In
                  </h1>
                </div>

                <ContestTimer 
                  duration={contestCountDownTime} 
                  contestCountDownStartTimeExpired={handleContestCountDownStartTimeExpired} contestWholeDurationTime = {contesWholetDuration} 
                  contestCountDownEndTimeExpired ={handleContestCountDownEndTimeExpired}
                  isContestLive = {isContestLive}
                  isContestClosed = {isContestClosed}/>

                <Link href="/contest" className='text-[15px] md:text-[25px] text-orange-700 font-bold'>Register Now!!</Link>
              </>
            )}
          </div>
          {/* <div className='w-[300px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-lg h-[300px] border border-pink-600'>
            <Image src="/public/images/circuit-board.jpg" alt='contest' layout='fill' className='object-cover rounded-full' />
          </div> */}
          {/* <div className='border border-[#0388fc]'>
            <h1>hi there fellow</h1>
          </div> */}
        </div>
      </div>
    )
  );
}

export default Hero;
