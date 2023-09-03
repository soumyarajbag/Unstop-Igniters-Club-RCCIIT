import React, { useState } from 'react'
import logo from '../../assets/logo.jpg';
import CellModal from './Modals/CellModal';
const CellCard = ({ name , description , members , image}) => {
  
  return (
    <div className='hover:scale-105 ease-in-out duration-300  h-[320px]  gap-20 xl:w-[450px] xl:h-[450px] '>
 <div className='w-[320px] h-[500px]  gap-20 md:w-[380px] xl:w-[480px] xl:h-[450px]  border-t duration-150  hover:border-[#1a8fdd] bg-black z-0 rounded-lg'>
  {/* <h1 className='relative left-[65%] top-[5%] md:left-[75%] text-[#1a8fdd] font-bold text-lg hover:text-opacity-60 cursor-pointer' onClick={openModal}>View Team</h1> */}
<div className='w-[320px] md:w-[380px]  xl:w-[450px] xl:h-[450px]  border-0 p-8 rounded-tr-full z-10 bg-[#0a2266] flex flex-col items-center'>
    <div className='flex flex-col items-center gap-5'>
        <div className='flex flex-col items-center justify-center'>
            <img className='h-[150px] w-[150px] rounded-full'  src={image} alt="" />
            <h1 className=' text-2xl mt-4 font-bold text-[#1a8fdd]'>{name}</h1>
            <h1 className='text-white font-semibold text-md'>Members : {members}</h1>
        </div>
        <div className=' w-[300px] md:w-[350px]  '>
            <p className='text-white tracking-wider'>{description}</p>
        </div>
    </div>
    </div>
    
    </div>

     
    </div>
   
    
  )
}

export default CellCard