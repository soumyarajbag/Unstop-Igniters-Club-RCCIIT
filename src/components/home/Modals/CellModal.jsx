import React from 'react'
import { GrClose } from 'react-icons/gr'

const CellModal = ({closeModal , celldetails , selectedCell}) => {
  return (
    <>
      <div
        id="container"
        className=" fixed  inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        <div className="flex flex-col w-[300px]  xl:w-[520px] h-[440px] xl:h-[650px] xl:gap-5   bg-[#01071c]  border-t border-b border-[#1a8fdd] rounded-xl">
          <div className=" flex flex-row  justify-between   items-center  scroll-smooth   px-12 py-5  text-white">
            <div>
              <h1 className="font-bold  text-2xl text-[#1a8fdd]">Join Today</h1>
            </div>
            <div>
              <button onClick={closeModal} >
                <GrClose size={25} className="bg-red-500 rounded-xl p-1 hover:bg-red-700"  />
              </button>
            </div>
          </div>
            
          <div className='flex flex-col'>
      {celldetails.map((cell, index) => (
        <div key={index}>
          <h2>Cell {index + 1} Details</h2>
          <ul>
            {cell.duty.map((duty, i) => (
              <li key={i} className='text-white text-xl'>{duty}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
            

       
          </div>
          </div>
          </>
  )
}

export default CellModal