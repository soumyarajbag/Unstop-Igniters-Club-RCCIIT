import React from 'react'

const FeaturedCard = ({name , description , image}) => {
  return (
    <div className='flex flex-wrap flex-row items-center justify-evenly gap-10'>
        <div className='w-[300px] xl:w-[600px] flex flex-col gap-2'>
            <h1 className='text-3xl font-bold text-[#1a8fdd]'>{name}</h1>
            <p className='text-md xl:text-lg  text-white'>{description}</p>
        </div>
        <div>
            <img src={image} alt="" className='w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] rounded-full' />
        </div>
    </div>
  )
}

export default FeaturedCard