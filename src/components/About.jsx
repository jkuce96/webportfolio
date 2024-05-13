import React from 'react'
import { useRef } from "react";

const About = () => {

  const onButtonClick = () => {
    const docxUrl = "/assets/CV.docx";
    const link = document.createElement("a");
    link.href = docxUrl;
    link.download = "CV.docx"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  
  return (

    <div id="about" className="mx-auto w-full h-[16rem] flex justify-center bg-[#11071F] text-white pb-[25rem] pt-[6rem]">
        <div className="flex flex-row">
            <div className=" mt-[10rem] items-center flex flex-col justify-center">
                <h2 className="text-3xl text-yellow-400 italic">{`Pár informací`}</h2>
                <h1 className="text-center text-7xl w-full font-bold mt-1 mb-4">O mně</h1>
                <div className="border-b-4 border-yellow-400 rounded-lg  w-[10rem]
                "></div>
                <p className="sm:w-[40rem] w-[20rem] text-center mt-5 text-2xl">Zaměřuji se primárně na vývoj <span className="text-yellow-400 font-bold">JavaScript</span> aplikací. Mezi můj základní stack patří Vanilla JS, CSS3, HTML5 a Tailwind. Věnuji se backendovému i frontendovému vývoji webových stránek skrze <span className="text-[#59BEDA] font-bold">React.JS</span> a <span className="text-purple-400 font-bold">Express.JS</span></p>
            <button onClick={onButtonClick} className="mt-[2rem] bg-yellow-400 active:bg-yellow-400 rounded-lg py-4 px-5 text-lg font-bold text-black hover:bg-yellow-500">Stáhnout životopis</button>
            </div>
        </div>
        
        
    </div>

  )
}

export default About