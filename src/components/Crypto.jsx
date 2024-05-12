//crypto fetch coingecko api


import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactTyped } from "react-typed";
import axios from 'axios';

import Westie from "../../src/assets/westie3.png"


function Crypto() {
   
    const [bitcoinData, setBitcoinData] = useState(null);
    const mujKlic = "budu smutny, když mi někdo ten klíč yoinkne, toto portfolio je jen klientside bez serveru :(, takže pokud jsi se dostal/-a až sem, tak mi ho prosím nech tady v klídku a bezpečí "
    const APIKEY = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd&x_cg_demo_api_key=CG-sCAdtuujTcA5E6V5YjtTgd11"

    //nedělám si server pro portfolio, budu hodně smutný, jestli mi ten API klíč yoinknete :(, 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(APIKEY)
                setBitcoinData(response.data)
            } catch (error) {
                console.log("Error u fetchování dat", error)
            }
        };
        fetchData();
    }, []);

    const handleBtcClick = () => {
        setShowBTC(!showBTC)
        console.log("works")
        console.log(showBTC)
    }
    const handleEthClick = () => {
        setShowETH(!showETH)
        
    }
    const handleDogeClick = () => {
        setShowDOGE(!showDOGE);
    }



  return (
    <div className="text-white w-full bg-[#11071F]">
    <div className="max-w-[800px]  w-full pt-[4rem] pb-[15rem] mx-auto text-center flex flex-col justify-center">
                
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Ceny kryptoměn</h1>
        <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">Aktuální ceny pro </p>
            <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-pink-400 md:pl-4"
            strings={["BITCOIN", "ETHEREUM", "DOGECOIN"]}
            typeSpeed={50}
            backSpeed={40}
            loop
            />
            
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">Aktualizováno jednou za pět minut</p>
        
        {bitcoinData && (
        <div className="kryptosekce flex flex-col md:flex-row my-6">
            <div className="bg-purple-600 shadow-purple-600 shadow-xl hover:bg-purple-700 w-[200px] rounded-md font-medium my-3 mx-auto py-3 text-black relative cursor-pointer" onClick={handleBtcClick}>
                <h1 className="text-xl font-bold">BTC: {bitcoinData.bitcoin.usd} $</h1>
                
                
            </div>
            <div className="bg-purple-600 shadow-purple-600 shadow-xl hover:bg-purple-700 w-[200px] rounded-md font-medium my-3 mx-auto py-3 text-black relative cursor-pointer" onClick={handleEthClick}>
      <h1 className="text-xl font-bold">ETH: {bitcoinData.ethereum.usd} $</h1>
      
    </div>
            <div className="bg-purple-600 shadow-purple-600 shadow-xl hover:bg-purple-700 w-[200px] rounded-md font-medium my-3 mx-auto py-3 text-black relative cursor-pointer" onClick={handleDogeClick}>
                <h1 className="text-xl font-bold">DOGE: {bitcoinData.dogecoin.usd} $</h1>
                
            </div>
        </div>
        )}
       
    
        </div>
</div>
  )
}

export default Crypto