import React from 'react'
import CellCard from './CellCard'

const Cell = () => {
  return (
    <>
    <div className='flex flex-col w-full justify-center items-center pb-20 bg-black overflow-hidden'>
      <div className='text-center mt-10 mb-10'>
        <h1 className='font-bold text-3xl text-[#1a8fdd]'>Our Cells</h1>
      </div>
      <div className='flex flex-wrap flex-row items-center justify-around mb-14 gap-[150px]'>
        <CellCard />
        <CellCard />
        <CellCard />
      </div>
    </div>
    </>
  )
}

export default Cell