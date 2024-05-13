import React, { useState, useEffect, useRef } from 'react';
import Logo from "../assets/logo4.png";
import PersonalCard from "../elements/PersonalCard";
import { PiHamburger } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll';




const Navbar = () => {
  const [card, setCard] = useState(false);
  const menuRef = useRef();
  const [nav, setNav] = useState(false)
  const navRef = useRef();



  const toggleNav = () => {
    setNav(prevNav => !prevNav);
  }

  const togglePersonalCard = () => {

    setCard(prevCard => !prevCard);
  }

  const handleClickOutside = (event) => {
    if (!menuRef.current.contains(event.target)) {
      setCard(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutsideNav = (event) => {
    if (!navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNav);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNav);
    };
  }, []);


  return (
    <nav className="w-full h-24 bg-[#150825]">
      <div className="flex justify-between items-center max-w-[1080px] mx-auto px-4 lg:px-8 h-full">
        <img src={Logo} alt="logo" className="w-24 cursor-pointer" />
        <ul className="hidden lg:flex flex-grow justify-evenly gap-[1rem] overflow-hidden mx-5">
          <li className="text-white py-5 px-7 cursor-pointer hover:text-yellow-300">Domů</li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
             // Add this onClick handler for troubleshooting
          >
          <li  className="text-white py-5 px-7 cursor-pointer hover:text-yellow-300">
            O mně
          </li>
          </Link>
          <Link
            to="stack"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
             // Add this onClick handler for troubleshooting
          >
          <li className="text-white py-5 px-7 cursor-pointer hover:text-yellow-300">
            Stack
          </li>
          </Link>
          <Link
            to="projekty"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
             // Add this onClick handler for troubleshooting
          >
          <li className="text-white py-5 px-7 cursor-pointer hover:text-yellow-300">
            Projekty
          </li>
          </Link>
        </ul>
        <div className="relative" ref={navRef}>
      <button onClick={toggleNav} className="text-white font-bold text-lg block lg:hidden relative">
        {nav ? <IoMdCloseCircleOutline /> : <PiHamburger />}
      </button>
        {nav && (  <ul className="lg:hidden z-50 flex flex-col mx-auto absolute bg-white left-1/2 transform -translate-x-1/2 top-full w-[15rem] md:w-[20rem] rounded-xl mt-[1rem] shadow-white shadow-2xl">
            <li className="text-black py-5 px-7 cursor-pointer text-center hover:border-2 hover:bg-slate-200 hover:font-bold text-lg rounded-xl active:bg-white">Domů</li>
            <Link
            to="about"
            spy={true}
            smooth={true}
            offset={1}
            duration={500}
             // Add this onClick handler for troubleshooting
          >
            <li className="text-black py-5 px-7 cursor-pointer text-center hover:border-2 hover:bg-slate-200 hover:font-bold text-lg active:bg-white">
            O mně
            </li>
          </Link>
            <Link
            to="stack"
            spy={true}
            smooth={true}
            offset={1}
            duration={500}
             // Add this onClick handler for troubleshooting
          >
            <li className="text-black py-5 px-7 cursor-pointer text-center hover:border-2 hover:bg-slate-200 hover:font-bold text-lg active:bg-white">
            Stack
            </li>
          </Link>
            <Link
            to="projekty"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
             // Add this onClick handler for troubleshooting
          >
            <li className="text-black py-5 px-7 cursor-pointer text-center hover:border-2 hover:bg-slate-200 hover:font-bold text-lg rounded-xl active:bg-white">
            Projekty
            </li>
          </Link>
          </ul>)}
        
      
      </div>
        <div ref={menuRef} className="relative">
        <button onClick={togglePersonalCard}   className="text-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-400 py-2 px-4 rounded-lg relative">
          Kontakt
        </button>
          {card && <PersonalCard/>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
