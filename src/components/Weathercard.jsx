import React from 'react'
import { useState } from "react"
import Skeleton from "../elements/Skeleton"


function Weathercard() {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)

    const apiKEY = "c622bfb7fa4c707e27782cf2dfca0152"
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`;

    const fetchPocasi = async () => {
        setLoading (true);

        try {
            const response = await fetch(apiURL);
            const data = await response.json();

            if (data.cod === 200) {
               const celsius = data.main.temp - 273.15;
               const roundedCelsius = celsius.toFixed(2);

               const newData = { ...data, main: { ...data.main, temp: roundedCelsius } }
               
                setWeatherData(newData);
                console.log(weatherData)
                
                
            } else {
                console.error("error fetchování počasí:", data.message)
                alert("Toto město neexistuje, zadej reálné")
            }
        } catch (error) {
            console.error("Error při fetchování 2:", error);
        }
        setTimeout(() => {
            
            setLoading(false)
        }, 1500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetchPocasi();
    }

  return (
    <div className="text-white w-full bg-[#11071F] pt-[3rem]">
        
        <div className="max-w-[1080px] mx-auto flex flex-col md:px-[5rem] lg:px-[18rem] py-5 text-w text-white">
                
             {loading ? (<Skeleton />) : weatherData ? (<div>
             {/* <h2 className="text-2xl font-bold text-center py-8"></h2> */}
             
             <p className="text-center text-4xl font-bold w-1/3 pb-4 border-b-4 border-yellow-500 items-center mx-auto">{weatherData.name}</p>

            <div className="text-left text-4xl font-medium flex flex-col">
                <p className="py-2  mx-8 mt-8  flex justify-between">Teplota: <span className="text-green-400">{weatherData.main.temp} °C</span> </p>
                <p className="py-2  mx-8 flex justify-between">Vlhkost: <span className="text-red-300">{weatherData.main.humidity} %</span></p>
                <p className="py-2  mx-8 flex justify-between">Tlak: <span className="text-blue-300">{weatherData.main.pressure} hPa</span></p>    
            </div>
            </div>) : (<div>
             <p className="text-center text-4xl font-bold">Zadej město:</p>
            <div className="text-center font-medium hidden">
                <p className="py-2  mx-8 mt-8">Teplota</p>
                <p className="py-2  mx-8">Vlhkost</p>
                <p className="py-2  mx-8">Tlak</p>    
            </div>
            </div>)}
            <form onSubmit={handleSubmit} className="flex flex-row items-center gap-4 px-4 mt-auto  mx-auto">
                <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Zadej město"
                className="text-center text-black w-[10rem] py-3 border border-teal-200 rounded-lg font-bold"
                />
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-400 w-[10rem] rounded-md font-medium my-6 mx-auto py-3 text-black">Zjistit počasí
            </button>
            </form>

            </div>
            </div>
  )
}

export default Weathercard