import React from 'react'
import { useState } from "react"
import Loader from "../elements/Loader"



const Randomcrypto = () => {
    const [vybranyCoin, setVybranyCoin] = useState(null)
    const [loading, setLoading] = useState(false)

    const randomCoinFetch = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-sCAdtuujTcA5E6V5YjtTgd11")
            const data = await response.json();

            const coins = data.coins;

            const randomIndex = Math.floor(Math.random() * coins.length);
            const randomCoin = coins[randomIndex];

            const roundedCena = Number(randomCoin.item.data.price).toFixed(2);

            setTimeout(() => {
               setVybranyCoin({
                name: randomCoin.item.name,
                symbol: randomCoin.item.symbol,
                price: roundedCena

            })
            setLoading(false);
            console.log(vybranyCoin); 
            }, 1500);

            
        } catch (error) {
            console.error("Error při fetchování coinů", error);
            setLoading(false);
        }}


  return (
    <div className="w-full bg-[#11071F]">
        <div className="max-w-[1080px] mx-auto flex flex-col px-6 md:px-[5rem] lg:px-[18rem] py-5 text-w text-white">
            
            {loading ? (<div className="w-full bg-black shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105  duration-300 shadow-purple-700">
               
               <h2 className="text-2xl font-bold text-center py-8">fetchuji...</h2>
               
              <p className="text-center text-4xl font-bold">Symbol</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">vyčkej...</p>
                  {/* <p className="py-2 border-b mx-8">Test random </p> */}
                  <p className="py-2 border-b mx-8">fetchuji... </p>    
              </div>
              <button onClick={randomCoinFetch} className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] pointer-events-none opacity-50 cursor-not-allowed">fetchuji...</button>
              <Loader />
              </div>) : vybranyCoin ? (<div className="w-full bg-black shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105  duration-300 shadow-purple-700">
               
               <h2 className="text-2xl font-bold text-center py-8">Random crypto picker</h2>
               
              <p className="text-center text-4xl font-bold">Název: {vybranyCoin.name}</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">Ticker: {vybranyCoin.symbol}  </p>
                  <p className="py-2 border-b mx-8">Cena: {vybranyCoin.price} $ </p>
                  {/* <p className="py-2 border-b mx-8">Test random </p>     */}
              </div>
              <button onClick={randomCoinFetch} className="bg-white hover:bg-slate-200 active:bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Klikni pro další</button>
              {/* pre-render card */}
              </div>) : <div className="w-full bg-black shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105  duration-300 shadow-purple-700">
               
               <h2 className="text-2xl font-bold text-center py-8">Random crypto picker</h2>
               
              <p className="text-center text-4xl font-bold">Crypto Ticker</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">Symbol  </p>
                  <p className="py-2 border-b mx-8">Aktuální cena </p>
                  {/* <p className="py-2 border-b mx-8">Test random </p>     */}
              </div>
              <button onClick={randomCoinFetch} className="bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-slate-200 active:bg-white">Klikni pro fetch</button>
              </div>}

            
        </div>
    </div>
  )
}

export default Randomcrypto