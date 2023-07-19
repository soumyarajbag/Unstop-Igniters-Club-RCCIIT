import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex flex-row justify-around items-center  h-24 w-full text-white p-[1rem]">
      <div>
            <img src={logo} className="h-[100px] brightness-100 mt-2 w-[120px] rounded-full" alt="" />
          </div>
          <div>
          <ul className="list-none hidden xl:flex flex-row justify-between space-x-10 font-semibold text-2xl items-center">
        <li className="p-4">
          <h1 className="hover:border-b border-spacing-4 hover:border-b-white cursor-pointer hover:text-blue-600">Home</h1>
        </li>
        <li className="p-4">
          <h1 className="hover:border-b border-spacing-4 hover:border-b-white cursor-pointer hover:text-blue-600">Events</h1>
        </li>
        <li className="p-4">
          <h1 className="hover:border-b border-spacing-4 hover:border-b-white cursor-pointer hover:text-blue-600">Team</h1>
        </li>
      </ul>
          </div>

          <div onClick={handleNav} className="block xl:hidden">
          {!nav ? <FaBars className="h-[25px] w-[25px] min-[1080px]:h-[40px] min-[1080px]:w-[40px] xl:h-[25px] xl:w-[25px]" /> : <FaTimes className="h-[25px] w-[25px] min-[1080px]:h-[40px] min-[1080px]:w-[40px] xl:h-[25px] xl:w-[25px]" />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000] min-[1080px]:text-5xl ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
            <img src={logo} className="h-[100px] brightness-100  mt-2 w-[120px] rounded-full" alt="" />
            <li className="p-4 min-[1080px]:p-10 border-b border-gray-600">Home</li>
            <li className="p-4 min-[1080px]:p-10 border-b border-gray-600">Events</li>
            <li className="p-4 min-[1080px]:p-10 border-b border-gray-600">Team</li>
          </ul>
     
    </div>
  );
};

export default Navbar;
