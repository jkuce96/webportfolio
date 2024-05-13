//CRUD diff
import React, { useState, useEffect } from 'react';

function Crud() {

  //react asynchronně => po reloadu bere empty array state, takže pro load číst napřímo
  //z localstorage, namísto setování todolist state hodnoty
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || []
  });
  const [inputValue, setInputValue] = useState('');


//uložit na item add render do localstsorage hodnotu listu
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  
  const pridatPredmet = () => {
    if (inputValue != '') {
      const newItem = {
        id: Date.now(),
        text: inputValue.trim()
      };
      //spread all prev items z useState hooku
      setItems(prevItems => [...prevItems, newItem]);
      setInputValue('');
    }
  };

  const smazatPredmet = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };


  const smazatLocalStor = () => {
    localStorage.removeItem("items");
    setItems([]);

  }
//odpocitavat od 1++ 
  let pocetPolozek = 1;

  return (
    <div className="w-full bg-[#11071F]">
    <div className="max-w-lg mx-auto p-4 px-[2rem]">
      <ul id="messages" className="p-4 rounded bg-white hover:bg-slate-100 shadow-lg mb-4 h-full min-h-[15rem]">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <span className="font-bold text-violet-500">{pocetPolozek ++}.</span>
            <span>{item.text}</span>
            <button onClick={() => smazatPredmet(item.id)} className="text-red-600 hover:text-red-800">
              X
            </button>
          </li>
        ))}
      </ul>

      <form
        onSubmit={e => {
          e.preventDefault();
          pridatPredmet();
        }}
        className="flex sm:flex-row flex-col gap-2 justify-between items-center bg-white p-4 rounded shadow"
      >
        <input
          id="input"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          autoComplete="off"
          className="flex-grow border-gray-300 border p-2 rounded"
        />
        <div className="buttons flex flex-row gap-4 max-auto">
        <button type="submit" className="bg-purple-600 text-white w-[6rem] py-2 rounded hover:bg-purple-700 active:bg-purple-600">
          Uložit
        </button>
        <button onClick={smazatLocalStor} className="bg-red-600 hover:bg-red-700 active:bg-red-600 text-white w-[6rem] py-2 rounded ">
          Smazat
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Crud;
