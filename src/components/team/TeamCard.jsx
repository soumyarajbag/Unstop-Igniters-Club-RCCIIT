import React from 'react'
import logo from '../../assets/logo.jpg'
import { BsDiscord, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
const TeamCard = ({name , role ,linkedin , instagram , github}) => {
  return (
    <div className='flex flex-col items-center justify-center border-t border-[#1a8fdd] rounded-lg hover:scale-105 shadow-md shadow-[#1a8fdd] duration-300 ease-in-out w-[300px] h-[450px] z-0 bg-black'>
<div className='flex flex-col items-center justify-center bg-[#0a2266] gap-5  w-[300px] h-[450px] rounded-tr-full z-10'>
        <div className='flex flex-col items-center gap-2'> 
            <img src={logo} className='h-[150px] w-[150px] rounded-full ' alt="" />
            <h1 className='text-3xl text-center text-white font-bold '>{name}</h1>
            <h1 className='text-xl text-slate-400 font-semibold text-center'>{role}</h1>
        </div>
       
       <div className='flex flex-row items-center gap-5'>
            <a href={instagram} target='_blank' rel='noreferrer'  className="px-4 py-2 rounded-full bg-[#6a45e4] font-bold text-xl text-white hover:bg-white hover:text-[#6a45e4] ">
              <BsInstagram className="h-[25px] w-[25px]" />
            </a>
            <a href={github} target='_blank' rel='noreferrer' className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]">
              <BsGithub className="h-[25px] w-[25px]" />
            </a>
            <a href={linkedin} target='_blank' rel='noreferrer' className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">
              <BsLinkedin className="h-[25px] w-[25px]" />
            </a>
       </div>
       <div className='flex flex-row items-center text-slate-400 font-semibold  hover:scale-105 ease-in-out duration-300 cursor-pointer hover:text-white gap-1'>
        <h1>Know More</h1>
        <AiOutlineArrowRight />
       </div>
    </div>
    </div>
    
  )
}

export default TeamCard