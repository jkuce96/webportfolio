import React from 'react'
import {
    FaInstagramSquare,
    FaFacebookSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaReact,
    FaCss3Alt,
} from "react-icons/fa"
import { 
    IoLogoJavascript,
    IoLogoFirebase,

 } from "react-icons/io5";
import { 
    RiTailwindCssFill,
    RiSvelteFill,
 } from "react-icons/ri";
import { SiMysql } from "react-icons/si";




function Footer() {
  return (
    <div className="w-full bg-[#11071F]">
    <div className="max-w-[1080px] bg-[#11071F] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full text-3xl font-bold text-violet-500">Est. 1996</h1>
            <p className="py-4">
                Pravidelně se vzdělávám v nových technologiích. Rozvíjím se v oblasti fullstack Node.JS, primárně skrze kombinaci React/Tailwind. Aktuálně studuji Next.JS 
                </p>
            <div className="flex justify-between w-full my-6">
                <FaReact className="cursor-pointer hover:scale-105 hover:text-[#5ED3F3]" size={30}/>
                <IoLogoJavascript className="cursor-pointer hover:scale-105 hover:text-[#E9D44D]" size={30}/>
                <RiTailwindCssFill className="cursor-pointer hover:scale-105 hover:text-[#36B7F0]" size={30}/>
                <FaCss3Alt className="cursor-pointer hover:scale-105 hover:text-[#2862E9]" size={30}/>
                <SiMysql className="cursor-pointer hover:scale-105 hover:text-[#DD8800]" size={30}/>
                <IoLogoFirebase className="cursor-pointer hover:scale-105 hover:text-[#EE7F0D]" size={30}/>
                <RiSvelteFill className="cursor-pointer hover:scale-105 hover:text-[#F73C00]" size={30}/>
                


                
            </div>
        </div>

        
            <div className="lg:col-span-2 flex  justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Frontend</h6>
                    <ul>
                        <li className="py-2 text-sm hover:underline cursor-pointer">React.js</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">HTML + CSS</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Tailwind</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Vanilla JS</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Backend</h6>
                    <ul>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Express.js</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">MySQL / PostgreSQL</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">GraphQL</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">JWT + auth</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Networking</h6>
                    <ul>
                        <li className="py-2 text-sm hover:underline cursor-pointer">CS50</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Hosting / DNS</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Marketing</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Mailing</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">A liiittle</h6>
                    <ul>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Nest.js</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">Svelte</li>
                        <li className="py-2 text-sm hover:underline cursor-pointer">C / Go</li>

                    </ul>
                </div>
            </div>
        

        
    </div>
    </div>
  )
}

export default Footer