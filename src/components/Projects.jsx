import React from 'react'
import reactLogo from "../assets/reactlogo.png"
import { FaHandPointer } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';



const Projects = ( { setCrypto, setInfo, setTime, setRandomCrypto, setWeather, setCrud } ) => {
    const toggleCrypto = () => {
        setCrypto(prevCrypto => {
            const newCryptoState = !prevCrypto;
            console.log(newCryptoState);
            return newCryptoState
        });
        setInfo(false)
        setTime(false)
        setRandomCrypto(false)
        setWeather(false)
        setCrud(false)
    };
    const toggleInfo = () => {
        setInfo(prevInfo => {
            const newInfoState = !prevInfo;
            console.log(newInfoState);
            return newInfoState
        })
        setCrypto(false)
        setTime(false)
        setRandomCrypto(false)
        setWeather(false)
        setCrud(false)

    };
    const toggleTime = () => {
        setTime(prevTime => {
            const newTimeState = !prevTime;
            console.log(newTimeState);
            return newTimeState
        })
        setCrypto(false)
        setInfo(false)
        setRandomCrypto(false)
        setWeather(false)
        setCrud(false)

    }
    const toggleRandomCrypto = () => {
        setRandomCrypto(prevRandomCrypto => {
            const newRandomCryptoState = !prevRandomCrypto;
            console.log(newRandomCryptoState)
            return newRandomCryptoState
        })
        setCrypto(false)
        setInfo(false)
        setTime(false)
        setWeather(false)
        setCrud(false)

    }
    const toggleWeather = () => {
        setWeather(prevWeather => {
            const newWeatherState =! prevWeather;
            console.log(newWeatherState)
            return newWeatherState
        })
        setCrypto(false)
        setInfo(false)
        setTime(false)
        setRandomCrypto(false)
        setCrud(false)
    }
    const toggleCrud = () => {
        setCrud(prevCrud => {
            const newCrudState =! prevCrud;
            console.log(newCrudState);
            return newCrudState
        })
        setCrypto(false)
        setInfo(false)
        setTime(false)
        setRandomCrypto(false)
        setWeather(false)
    }

  return (
    <div id="projekty" className="w-full bg-[#11071F] pt-[2rem] sm:pt-[5rem]">
        <div id="scroll" className="max-w-[1080px] mx-auto text-white h-full">
            <div>
            <h2 className="text-3xl text-yellow-400 italic text-center">{`Pár osobních`}</h2>

            <h1 className="text-center text-7xl w-full font-bold mt-1 mb-5">mini-projektů</h1>
            <div className="border-b-4 items-center mx-auto border-yellow-400 rounded-lg mb-[3rem]  w-3/4"></div>
            {/* <p className="text-center mt-5 text-2xl w-[20rem] sm:w-[40rem] mx-auto">ahoj</p> */}
                
            </div>
        <div className="cards grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-0 gap-0 mx-auto justify-center lg:h-[22rem] sm:h-[36rem] h-[48rem] relative px-[4rem] sm:px-[4rem]">
  <div className="w-full relative h-full flex-grow bg-gradient-to-br from-black to-black p-[1rem]">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold text-yellow-300">{`<Osobní projekty>`}</h1>
        
    </div>
    
  </div>
  <Link
            to="krypto"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
  <div onClick={toggleCrypto} className="w-full h-full flex-grow bg-gradient-to-br from-red-900 to-red-500 p-[1rem] relative cursor-pointer hover:from-red-900 to red-50 active:from-red-800">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold">Crypto price checker</h1>
        <FaHandPointer  className="absolute top-1/6 left-1/2"/>
        
    </div>
  </div>
  </Link>
  <Link
            to="krypto"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            
  <div  onClick={toggleInfo} className=" cursor-pointer w-full h-full flex-grow bg-gradient-to-br from-yellow-900 to-yellow-500 hover:from-yellow-900 to yellow-50 p-[1rem] relative active:from-yellow-500">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold">IP checker</h1>
        <FaHandPointer  className="absolute top-1/6 left-1/2"/>
        
    </div>
  </div>
          </Link>
          <Link
            to="krypto"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >

  <div onClick={toggleTime} className=" cursor-pointer w-full h-full flex-grow bg-gradient-to-br from-green-900 to-green-500 hover:from-green-900 to green-50 p-[1rem] relative active:from-green-800">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold">Time checker</h1>
        <FaHandPointer  className="absolute top-1/6 left-1/2"/>
        
    </div>
  </div>
          </Link>
          <Link
            to="krypto"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >

  <div onClick={toggleRandomCrypto} className="w-full h-full flex-grow bg-gradient-to-br from-black to-gray-800 hover:from-black to gray-50 p-[1rem] relative cursor-pointer">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold">Random crypto picker</h1>
        <FaHandPointer  className="absolute top-1/6 left-1/2"/>
        
    </div>
  </div>
          </Link>
          <Link
            to="krypto"
            spy={true}
            smooth={true}
            offset={-25}
            duration={500}
          >

  <div onClick={toggleWeather} className="w-full cursor-pointer relative h-full flex-grow bg-gradient-to-br from-purple-900 to-purple-500 hover:from-purple-900 active:from-purple-800 p-[1rem]">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold">Zkontrolovat počasí</h1>
        <FaHandPointer  className="absolute top-1/6 left-1/2"/>
        
    </div>
  </div>
          </Link>
          <Link
            to="scroll"
            spy={true}
            smooth={true}
            offset={500}
            duration={500}
          >

  <div onClick={toggleCrud} className=" cursor-pointer w-full h-full flex-grow bg-gradient-to-br from-orange-900 to-orange-500 hover:from-orange-800 active:from-orange-400 p-[1rem] relative">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold">Localhost CRUD</h1>
        <FaHandPointer  className="absolute top-1/6 left-1/2"/>
        
    </div>
  </div>
          </Link>
  <div className="w-full h-full flex-grow bg-gradient-to-br bg-black p-[1rem] relative">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-bold text-yellow-300">{`</Osobní projekty>`}</h1>
        
    </div>
  </div>
</div>








        </div>
    </div>
  )
}

export default Projects