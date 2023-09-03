import React from 'react'
import FeaturedCard from './FeaturedCard'
import { features } from '../../data/aim'

const Featured = () => {
  return (
    <div className='w-full flex flex-col items-center gap-5'>
        <div className='text-center mt-10'>
            <h1 className='font-bold text-4xl text-[#1a8fdd]'>Our Features</h1>
        </div>
        <div className='flex flex-col items-center justify-evenly gap-16 mb-10'>
           {features.map((feature, index) => (
                <FeaturedCard key={index} name={feature.name} description={feature.description} image={feature.image} />
           ))}
        </div>
    </div>
  )
}

export default Featured