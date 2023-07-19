import React from "react";
import logo from "../../assets/logo.jpg";
import { BsDiscord, BsGithub ,  BsLinkedin } from "react-icons/bs";
const Intro = () => {
  return (
    <div className="flex flex-row justify-evenly items-center mt-[150px] mb-[50px]">
      <div className="flex flex-col gap-8">
        <h1 className=" font-bold text-4xl text-[#0addf0]">
          Unstop Igniters Club of RCCIIT
        </h1>
        
        <p className="text-white  font-semibold text-xl w-[450px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          repellat nihil itaque ipsam tempore atque ipsa eius amet nisi non,
          consequatur natus! Provident, mollitia repellat. Aspernatur architecto
          neque vitae id reprehenderit repudiandae.
          <div className="flex flex-row justify-center mt-10 space-x-10 items-center">
          <button className="px-4 py-4 rounded-full bg-[#1a8fdd] font-bold text-xl text-white hover:bg-white hover:text-[#1a8fdd]">
            Join Us
          </button>
          <button className="px-4 py-2 rounded-full bg-[#6a45e4] font-bold text-xl text-white hover:bg-white hover:text-[#6a45e4] ">
            <BsDiscord className="h-[40px] w-[40px]" />
          </button>
          <button className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]">
            <BsGithub className="h-[40px] w-[40px]" />
          </button>
          <button className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">
            <BsLinkedin className="h-[40px] w-[40px]" />
          </button>
        </div>
        </p>
        
      </div>

      <div>
        <img className="w-[300px] h-[300px] rounded-full" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Intro;
