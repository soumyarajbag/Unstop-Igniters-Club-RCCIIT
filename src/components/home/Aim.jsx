import React from 'react'
import AimCard from './AimCard'
import {aims} from '../../data/aim'


const Aim = () => {
  return (
   
<div className='flex flex-col justify-center w-full items-center bg-black'>
      <div className='text-center mt-10 mb-10'>
        <h1 className='font-bold text-3xl text-[#1a8fdd]'>Our Aim</h1>
      </div>
      <div className='flex flex-col flex-wrap xl:flex-row  items-center justify-evenly gap-10 mb-14'>
        {aims.map((aim , index) => (
          <AimCard key={index} image={aim.image} name={aim.name} description={aim.description} />
        ))}
      </div>
    </div>
    
    
  )
}

export default Aim