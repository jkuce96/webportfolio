//IPV4 vs IPV6 component 
//2scared2rename

import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"

function Cardcheck() {
    const [ip, setIp] = useState("");
    const [ipv6, setIpv6] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [hashCard, setHashCard] = useState();

    //zobrazit tooltip
    const zobrazitKartu = () => {
      setHashCard(!hashCard);
    };
    //fetchnout data od uživatele o IPv4 
    const IPdata = async () => {
        try {
            const response = await axios.get("https://api.ipify.org/?format=json");
            setIp(response.data.ip);
        } catch (error) {
            console.error("Error v IPV4:", error)
        }
    }
    //fetch za render
    useEffect(() => {
        IPdata();
    }, [])
    //fetch dat o ipv6
    const IPv6data = async () => {
        try {
            const response = await axios.get("https://api64.ipify.org/?format=json");
            setIpv6(response.data.ip);
        } catch (error) {
            console.error("Error v IPV6:", error)
        }
    }
    //fetch za render
    useEffect(() => {
        IPv6data();
    }, [])
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
    <div className="w-full bg-[#11071F]">
    <div className="max-w-[1080px] mx-auto text-white shadow-xl flex flex-col py-5 rounded-lg">
              
             <h2 className="text-2xl font-bold text-center py-8">Aktuální informace</h2>
            <p className="text-center text-2xl font-bold">Tvoje IPv4: <br /> <span className="text-violet-600">{ip}</span> </p>
            <div className="text-center text-lg">
                <p className=" text-center text-xl font-bold mt-5">Tvoje IPv6: <br /> <span className="text-violet-500">{ipv6}</span></p>
                  
            </div>
            
           
            
            </div>
            </div>
  )
}

export default Cardcheck