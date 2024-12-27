"use client"
import React, { useEffect, useState } from 'react'

function CountdownTimer({duration}) {

  const [time, setTime]= useState(duration);
  
  // Import piece of code, dont delete it because the time will drip with this code.
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime= (milliseconds)=>{
    const totalSeconds = parseInt(Math.floor(milliseconds/1000));
    const totalMinutes = parseInt(Math.floor(totalSeconds/60));
    const totalHours = parseInt(Math.floor(totalMinutes/60));
    const days = parseInt(Math.floor(totalHours/60));

    const seconds = parseInt(totalSeconds%60)
    const minutes = parseInt(totalMinutes%60)
    const hours = parseInt(totalHours%24)

    // return `${days}:${hours}:${minutes}:${seconds}`
    return { days, hours, minutes, seconds };
  }

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    // <div className='flex items-center border border-orange-600 text-sm font-bold'>
    //     <div className="">
    //       <h1>{days < 10 ? "0"+days: days} D:</h1>
    //       {/* <span className='text'>Days</span> */}
    //     </div>
    //     <div className="">
    //       <h1>{hours < 10 ? "0"+hours: hours} H:</h1>
    //       {/* <span className='text'>Hours</span> */}
    //     </div>
    //     <div className="">
    //       <h1>{minutes < 10 ? "0"+minutes: minutes} M:</h1>
    //       {/* <span className='text'>Minutes</span> */}
    //     </div>
    //     <div className="">
    //       <h1>{seconds < 10 ? "0"+seconds: seconds} S</h1>
    //       {/* <span className='text'Seconds></span> */}
    //     </div>
    // </div>

    // <div>
    //   {getFormattedTime(time)}
    // </div>

    <div className='flex items-center text-lg font-semibold text-white'>
      <div className='mr-3'>
        <h1>Ends in:</h1>
      </div>
      
      <div className='flex items-center w-10'>
      <div>
      {days > 0 && (
        <div>
          <h1>{days < 10 ? "0" + days : days} D:</h1>
        </div>
      )}
      </div>
      <div>
        <h1>{hours < 10 ? "0" + hours : hours}:</h1>
      </div>
      <div>
        <h1>{minutes < 10 ? "0" + minutes : minutes}:</h1>
      </div>
      <div>
        <h1>{seconds < 10 ? "0" + seconds : seconds}</h1>
      </div>

      </div>

    </div>
  )
}

export default CountdownTimer
