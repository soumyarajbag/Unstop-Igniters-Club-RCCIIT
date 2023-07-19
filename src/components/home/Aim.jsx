import React from 'react'
import AimCard from './AimCard'


const Aim = () => {
  return (
   
<div className='flex flex-col justify-center items-center bg-black'>
      <div className='text-center mt-10 mb-10'>
        <h1 className='font-bold text-3xl text-[#1a8fdd]'>Our Aim</h1>
      </div>
      <div className='flex flex-row items-center justify-evenly gap-10 mb-14'>
        <AimCard />
        <AimCard />
        <AimCard />
      </div>
    </div>
    
    
  )
}

export default Aim