import React from "react";
import logo from "../assets/logo.jpg";

import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";

export const Links = [
  { name: "HOME", link: "/" },
  { name: "EVENTS", link: "/events" },
  { name: "TEAM", link: "/team" },
  
];
const Navbar = ({ isMenuOpen, toggleMenu }) => {
 
  return (
    <div className={`shadow-md w-full 2xl:fixed top-0 left-0  z-20 ${isMenuOpen ? 'relative' : ''}`}>
    <div className='md:flex items-center justify-around bg-[#0a2266] py-4 md:px-10 px-7'>

      <div className='font-bold text-2xl cursor-pointer flex items-center gap-2  '>
        
        <Link to="/"><img src={logo} className='w-14 h-14  text-blue-600 rounded-full' alt='UI Logo'/></Link>
        <div className='flex flex-col pr-4 xl:flex-row text-white'>
          <span>Unstop &nbsp;</span>
          <span>Igniters</span>
        </div>
      </div>
      
      <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-10 h-10'>
        {isMenuOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
      </div>
      
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#0a2266] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 scroll-smooth ease-in ${
          isMenuOpen ? 'top-20' : 'top-[-490px]'
        }`}
      >
        {Links.map((link) => (
          <Link to={link.link}><li className='md:ml-8 md:my-0 my-7 px-4 text-white font-semibold xl:text-xl' key={link.name}>
            <h1 className='hover:border-b border-spacing-4 hover:border-b-white cursor-pointer hover:text-[#0addf0]'>
              {link.name}
            </h1>
          </li></Link>
        ))}
       
      </ul>
      
    </div>
  </div>
  );
};

export default Navbar;
