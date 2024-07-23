"use client"
import React, { useEffect, useState } from 'react';

function ContestTimer(
  { duration, 
    contestCountDownStartTimeExpired, 
    contestWholeDurationTime, 
    contestCountDownEndTimeExpired,
    isContestLive,
    isContestClosed,
   }) {
  const [time, setTime] = useState(duration);
  const [contestWholeDuration, setContestWholeDuration] = useState(contestWholeDurationTime);

  // console.log("CONTEST WHOLE DURATION:",contestWholeDurationTime);

  useEffect(() => {
    const endTime = localStorage.getItem('contestCountdownEndTime');
    console.log("END TIME OF CONTEST START,",endTime);
    if (endTime) {
      const currentTime = new Date().getTime();
      const remainingTime = Math.max(parseInt(endTime) - currentTime, 0);
      console.log("REMAINING TIME IN START:",remainingTime);
      setTime(remainingTime);
    } else {
      const newEndTime = new Date().getTime() + duration;
      localStorage.setItem('contestCountdownEndTime', newEndTime);
      setTime(duration);
    }
  }, [duration]);

  /*--------------------------------------------------------------*/
  useEffect(() => {
    const endTime = localStorage.getItem('contestDurationEndTime');
    console.log("END TIME OF WHOLE DURATION,",endTime);
    if (endTime) {
      const currentTime = new Date().getTime();
      const remainingTime = Math.max(parseInt(endTime) - currentTime, 0);
      console.log("REMAINING TIME IN END:",remainingTime);
      setContestWholeDuration(remainingTime);
    } else {
      const newEndTime = new Date().getTime() + contestWholeDurationTime;
      localStorage.setItem('contestDurationEndTime', newEndTime);
      setContestWholeDuration(contestWholeDurationTime);
    }
  }, [contestWholeDurationTime]);

  /*------------------------------------------------------------------*/

  useEffect(() => {
    if (time <= 0) {
      localStorage.removeItem('contestCountdownEndTime');
      if (contestCountDownStartTimeExpired) {
        contestCountDownStartTimeExpired(true);
        
      }
      return;
    }

    const interval = setInterval(() => {
      setTime(prevTime => {
        const updatedTime = prevTime - 1000;
        if (updatedTime <= 0) {
          clearInterval(interval);
          localStorage.removeItem('contestCountdownEndTime');
          if (contestCountDownStartTimeExpired) {
            contestCountDownStartTimeExpired(true);
          }
          return 0; // Ensure it sets to 0 and stops
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, contestCountDownStartTimeExpired]);

  /*-----------------------------------------------------*/
  useEffect(() => {
    if (contestWholeDuration <= 0) {
      localStorage.removeItem('contestDurationEndTime');
      if (contestCountDownEndTimeExpired) {
        contestCountDownEndTimeExpired(true);
        contestCountDownStartTimeExpired(false);
      }
      return;
    }

    const interval = setInterval(() => {
      setContestWholeDuration(prevTime => {
        const updatedTime = prevTime - 1000;
        if (updatedTime <= 0) {
          clearInterval(interval);
          localStorage.removeItem('contestDurationEndTime');
          if (contestCountDownEndTimeExpired) {
            contestCountDownEndTimeExpired(true);
          }
          return 0; // Ensure it sets to 0 and stops
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [contestWholeDuration, contestCountDownEndTimeExpired]);

  /*-------------------------------------------------*/

  const getFormattedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;

    return { days, hours, minutes, seconds };
  }

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
   
    !isContestLive  && !isContestClosed && (
      <div className='flex items-center justify-center text-white font-semibold space-x-4 p-4 rounded-lg shadow-lg'>
      <div className='flex flex-col items-center'>
        {days > 0 && (
          <div className='bg-gray-700 p-3 rounded-lg'>
            <h1 className='text-2xl'>
              {days < 10 ? "0" + days : days}
            </h1>
            <p className='text-sm uppercase'>Days</p>
          </div>
        )}
      </div>
      <div className='flex flex-col items-center'>
        <div className='bg-gray-700 p-3 rounded-lg'>
          <h1 className='text-2xl'>
            {hours < 10 ? "0" + hours : hours}
          </h1>
          <p className='text-sm uppercase'>Hours</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='bg-gray-700 p-3 rounded-lg'>
          <h1 className='text-2xl'>
            {minutes < 10 ? "0" + minutes : minutes}
          </h1>
          <p className='text-sm uppercase'>Minutes</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='bg-gray-700 p-3 rounded-lg'>
          <h1 className='text-2xl'>
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <p className='text-sm uppercase'>Seconds</p>
        </div>
      </div>
    </div>
    )
  );
}

export default ContestTimer;
