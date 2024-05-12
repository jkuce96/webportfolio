import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Scrollpanel from "./components/Scrollpanel"
import About from "./components/About"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Crypto from "./components/Crypto"
import { useState } from "react"
import Cardcheck from "./components/Cardcheck"
import Timecheck from "./components/Timecheck"

const App = () => {
  const [crypto, setCrypto] = useState(false);
  const [info, setInfo] = useState(false);
  const [time, setTime] = useState(false);


  return (
    <>
    <Navbar />
    <Hero />
    <Scrollpanel />
    <About />

    <Cards />
    <Projects setCrypto={setCrypto} setInfo={setInfo} setTime={setTime}/>

    {crypto && <Crypto crypto={crypto} />}
    {info && <Cardcheck info={info} />}
    {time && <Timecheck time={time}/>}
    
    
    
    <Footer />
   

    

    </>
  )
}

export default App