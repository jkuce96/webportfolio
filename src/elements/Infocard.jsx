import React from 'react'
import { useState } from "react"
import { ReactTyped } from "react-typed"

const Infocard = (props) => {

  return (
    <div className="text-white">
        
        <div className=" w-full text-center flex flex-col pt-5 sm:pt-0">
            
        <ReactTyped
                className="md:text-5xl lg:text-7xl sm:text-4xl text-2xl font-bold md:py-6 text-yellow-300"
                strings={["&lt;Portfolio /&gt;"]}
                typeSpeed={40}
                backSpeed={40}
                loop
                />
            {/* <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 text-yellow-300">{`<Portfolio />`}</h1> */}
            <div className="flex justify-center items-center">
                <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">Node.js fullstack</p>
            </div>
            <div className="mx-auto  flex sm:gap-[5rem] gap-2 sm:mt-[2rem] mt-[1rem]">
                <button onClick={props.express} className="sm:py-3 sm:px-6 py-2 px-2 rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700">Express.JS</button>
                <button onClick={props.react} className="sm:py-3 sm:px-6 py-2 px-2 rounded-lg bg-[#5ED3F3] hover:bg-[#59beda] active:bg-[#53b2cc]">React.JS</button>
                

            </div>
                            
            </div>
    </div>
  )
}

export default Infocard