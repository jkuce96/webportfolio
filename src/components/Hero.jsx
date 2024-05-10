import React from 'react'
import { Terminal } from "../elements/Terminal"
import JSXcard from "../elements/JSXcard"
import Infocard from "../elements/Infocard"
import ExpressCard from "../elements/ExpressCard"
import { useState } from "react"
import { ReactTyped } from "react-typed";



const Hero = () => {
    const [clicked, setClicked] = useState("true")
    const express = () => {
        setClicked(false)
        console.log(clicked)
    }
    const react = () => {
        setClicked(true);
        console.log(clicked)

    }
  return (
    <div className="w-full bg-[#11071F]">
    <div className="max-w-[1080px] lg:h-[30rem] md:h-[44rem] h-[42rem] bg-[#11071F] mx-auto">
        <div className="flex lg:flex-row flex-col mx-auto justify-between pt-10 gap-[3rem] lg:gap-0 h-[25rem]">
            <div className="mx-auto w-1/2">
        <Infocard express={express} react={react} />
            </div>
            <div className="mx-auto">
        {clicked ? <JSXcard /> : <ExpressCard />}
        
        

            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero