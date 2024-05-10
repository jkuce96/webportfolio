import React from 'react';
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-24 bg-[#150825]">
      <div className="flex justify-between items-center max-w-[1080px] mx-auto px-4 lg:px-8 h-full">
        <img src={Logo} alt="logo" className="w-24" />
        <ul className="hidden lg:flex flex-grow justify-evenly gap-[1rem] overflow-hidden mx-5">
          <li className="text-white py-5 px-7 cursor-pointer">Domů</li>
          <li className="text-white py-5 px-7 cursor-pointer">Stack</li>
          <li className="text-white py-5 px-7 cursor-pointer">Informace</li>
          <li className="text-white py-5 px-7 cursor-pointer">Projekty</li>
        </ul>
        <button className="text-lg bg-blue-400 py-2 px-4 rounded-lg">
          Kontakt
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
