import React from 'react'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <div className='w-full'>
        <div className='text-center mt-10'>
            <h1 className='font-bold text-3xl text-[#1a8fdd]'>Our Features</h1>
        </div>
        <div className='flex flex-col items-center justify-evenly gap-16 mb-10'>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </div>
    </div>
  )
}

export default Featured