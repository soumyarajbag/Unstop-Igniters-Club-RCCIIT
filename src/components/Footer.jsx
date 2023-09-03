import React from 'react'
import logo from '../assets/logo.jpg'
import {BsGithub , BsLinkedin , BsDiscord} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-[#0a2266]'>
 <div className='pt-2 pb-5'>
<div className='flex flex-row flex-wrap  justify-evenly mb-1'>
        <div className='flex flex-col items-center text-white'>
            <h1 className='text-slate-400 font-semibold text-2xl'>Quick Links</h1>
            <div className='mt-5 flex flex-wrap flex-row justify-center items-center gap-7 '>
              <h1 className='text-lg'>Meet Our Team</h1>
              <h1 className='text-lg'>Check Our Events</h1>
              {/* <h1 className='text-lg'>Our Projects</h1> */}
            </div>
        </div>
        <div className='flex flex-row xl:flex-col pt-2 xl:pt-0 items-center justify-center gap-2'>
            <img className='h-[100px] w-[100px] xl:h-[180px] xl:w-[180px] rounded-full' src={logo} alt="" />
            <h1 className='text-[#0addf0] font-bold text-md xl:text-xl'>Unstop Igniters Club <span className='text-white font-semibold text-lg'>RCCIIT</span></h1>
           
        </div>
        <div className='flex flex-col  items-center text-white gap-2 xl:gap-5'>
            <h1 className='text-slate-400 font-semibold text-lg  xl:text-2xl'>Contact Us :</h1>
            <div className='flex flex-wrap justify-center items-center flex-row gap-2 text-md xl:text-xl font-semibold'>
              <h1>Shrayanendra Nath Mandal : </h1>
             <a href='' className='hover:text-slate-500 cursor-pointer'>8337045160</a>
              </div>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-slate-400 font-semibold text-lg  xl:text-2xl'>Socialize with Us </h1>
                <div className='flex flex-row gap-10 flex-wrap'>
                <button className="p-2 xl:px-4 xl:py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">
              <BsLinkedin className="h-[20px] w-[20px] xl:h-[40px] xl:w-[40px]" />
            </button>
            <button className="p-2 xl:px-4 xl:py-2  rounded-full bg-[#6a45e4] font-bold text-xl text-white hover:bg-white hover:text-[#6a45e4] ">
              <BsDiscord className="h-[20px] w-[20px] xl:h-[40px] xl:w-[40px]" />
            </button>
            <button className="p-2 xl:px-4 xl:py-2  rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]">
              <BsGithub className="h-[20px] w-[20px] xl:h-[40px] xl:w-[40px]" />
            </button>
                </div>
            </div>
        </div>
    </div>

    <div className='text-white'>
    <div className='flex flex-row flex-wrap justify-evenly '>
             <div className='flex flex-row gap-2 text-lg'>
             © by<h1 className='text-[#0addf0] font-semibold'>Unstop Igniters Club of RCCIIT 2023</h1>
             </div>
             <div className='flex flex-row flex-wrap items-center justify-center gap-2 text-lg'>
               <h1>Made with ❤️ by</h1> 
                <h1 className='text-[#0addf0] font-semibold'>Soumyaraj Bag</h1>
             </div>
        </div>
    </div>
    </div>
    </div>
   
    
  )
}

export default Footer