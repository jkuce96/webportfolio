//IPV4 vs IPV6 component 
//2scared2rename

import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"

function Cardcheck() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());


    //aktuální čas za render
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
    
        return () => {
          clearInterval(timerID);
        };
      }, []);
    
      const tick = () => {
        setCurrentTime(new Date());
      };

      useEffect(() => {
        const intervalID = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
    
        return () => {
          clearInterval(intervalID);
        };
      }, []);
    //formát na evropskej D/M/R
      const europeanDateFormatOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      };
    
      const formattedDate = currentDate.toLocaleDateString('en-GB', europeanDateFormatOptions);
    

  return (
        <div className="w-full  bg-[#11071F] pt-[5rem]">        
            <div className="max-w-[1080px] mx-auto text-white flex flex-col text-center">      
                <h1 className="text-5xl">Aktuální čas:</h1>
                <p className="text-6xl my-6 text-yellow-400">{currentTime.toLocaleTimeString('en-GB', { hour12: false })}</p>
                            
                <p className=" text-4xl">{formattedDate}</p>    
         </div>
        </div>

  )
}

export default Cardcheck