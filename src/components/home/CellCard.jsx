import React from 'react'
import logo from '../../assets/logo.jpg';
const CellCard = () => {
  return (
    <div className='hover:scale-105 ease-in-out duration-300'>
 <div className='w-[450px] h-[450px] border-t border-[#1a8fdd] bg-black z-0 rounded-lg'>
  <h1 className='relative top-[5%] left-[75%] text-[#1a8fdd] font-bold text-lg hover:text-opacity-60 cursor-pointer'>View Team</h1>
<div className='w-[450px] h-[450px] border-0 p-8 rounded-tr-full z-10 bg-[#0a2266] '>
    <div className='flex flex-col items-center gap-5'>
        <div className='flex flex-col items-center justify-center'>
            <img className='h-[150px] w-[150px] rounded-full'  src={logo} alt="" />
            <h1 className=' text-2xl mt-4 font-bold text-[#1a8fdd]'>Example Cell</h1>
            <h1 className='text-white font-semibold text-md'>Members : 30+</h1>
        </div>
        <div className='w-[350px] '>
            <p className='text-white tracking-wider'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quae dolores? Adipisci.</p>
        </div>
    </div>
    </div>
    
    </div>
    </div>
   
    
  )
}

export default CellCard