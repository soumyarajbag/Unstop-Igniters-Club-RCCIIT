import React from 'react'
import logo from '../../assets/logo.jpg'
const FeaturedCard = () => {
  return (
    <div className='flex flex-wrap flex-row items-center justify-evenly gap-10'>
        <div className='w-[300px] xl:w-[600px]'>
            <h1 className='text-3xl font-bold text-[#1a8fdd]'>Feature #1</h1>
            <p className='text-xl font-semibold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis nobis repellendus.</p>
        </div>
        <div>
            <img src={logo} alt="" className='w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] rounded-full' />
        </div>
    </div>
  )
}

export default FeaturedCard