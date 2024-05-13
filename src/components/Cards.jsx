import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";

const Cards = () => {
  return (
    <div id="stack" className="w-full bg-violet-200">
        <div className="max-w-[1080px] bg-violet-200 flex mx-auto justify-evenly lg:flex-row flex-col  items-center lg:items-start gap-[3rem] lg:gap-0 py-5">
        <div className="cards md:h-[26rem] md:w-[24rem] h-[20rem] w-[18rem] bg-black shadow-purple-300 shadow-2xl rounded-2xl relative transform transition-transform duration-300 hover:scale-105 text-white">
                <div className="px-[3rem] py-[1rem]">
                <h1 className="md:text-3xl text-2xl font-bold text-left mt-[1em] text-purple-500">Frontend</h1>
                <div className="items-center text-left">
                <ul className="list-disc md:text-xl text-md md:mt-[2rem] mt-3">
                    <li>React.JS</li>
                    <li> Tailwind, Bootstrap</li>
                    <li>HTMX</li>
                    <li>Responzivita</li>
                    <li> Okrajově Svelte</li>
                    <li>Grafický design</li>


                </ul>
                
                
                </div>
            </div>
            </div>
            <div className="cards md:h-[26rem] md:w-[24rem] h-[20rem] w-[18rem] bg-black shadow-purple-300 shadow-2xl rounded-2xl relative transform transition-transform duration-300 hover:scale-105 text-white">
                <div className="px-[3rem] py-[1rem]">
                <h1 className="md:text-3xl text-2xl font-bold text-left mt-[1em] text-purple-500">Backend</h1>
                <ul className="list-disc md:text-xl text-md md:mt-[2rem] mt-3">
                    <li>Express.JS + EJS</li>
                    <li> Full authentication (JWT + cookies)</li>
                    <li>SQL (MysQL, PostgreSQL)</li>
                    <li> Hosting, deployment, DNS</li>
                    <li>ORM: Sequelize</li>
                    <li>Firebase</li>
                    <li>Routing, APIs</li>
                    <li>Základy GraphQL + Apollo</li>



                </ul>
            </div>
            </div>

            
        </div>

        

        

    </div>
  )
}

export default Cards