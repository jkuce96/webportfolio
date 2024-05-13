import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Scrollpanel from "./components/Scrollpanel"
import About from "./components/About"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Crypto from "./components/Crypto"
import { useState, useEffect, useRef } from "react"
import Cardcheck from "./components/Cardcheck"
import Timecheck from "./components/Timecheck"
import Randomcrypto from "./components/Randomcrypto"
import Weathercard from "./components/Weathercard"
import { Link, Element } from "react-scroll"

const App = () => {
  const [crypto, setCrypto] = useState(false);
  const [info, setInfo] = useState(false);
  const [time, setTime] = useState(false);
  const [randomCrypto, setRandomCrypto] = useState(false);
  const [weather, setWeather] = useState(false);



  


  return (
    <>
    <Navbar />
    <Hero />
    <Scrollpanel />
    <About />
   
    <Cards />
    <Projects setCrypto={setCrypto} setInfo={setInfo} setTime={setTime} setRandomCrypto={setRandomCrypto} setWeather={setWeather}/>

    {crypto && <Crypto crypto={crypto} />}
    {info && <Cardcheck info={info} />}
    {time && <Timecheck time={time}/>}
    {randomCrypto && <Randomcrypto randomCrypto={randomCrypto} />}
    {weather && <Weathercard weather={weather}/>}

    
   
    
    
    
    <Footer />
   

    

    </>
  )
}

export default App