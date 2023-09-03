import React from 'react'
import {GrClose} from 'react-icons/gr'
import logo from '../../../assets/logo.jpg'
const JoinModal = ({closeJoinModal}) => {
  return (
    <>
      <div
        id="container"
        className=" fixed  inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        <div className="flex flex-col w-[300px]  xl:w-[520px] h-[440px] xl:h-[660px] xl:gap-5   bg-[#01071c]  border-t border-b border-[#1a8fdd] rounded-xl">
          <div className=" flex flex-row  justify-between   items-center  scroll-smooth   px-12 py-5  text-white">
            <div>
              <h1 className="font-bold  text-2xl text-[#1a8fdd]">Join Today</h1>
            </div>
            <div>
              <button onClick={closeJoinModal} >
                <GrClose size={25} className="bg-red-500 rounded-xl p-1 hover:bg-red-700"  />
              </button>
            </div>
          </div>
            <div className='flex flex-col items-center justify-center gap-3'>
            <div className='flex items-center'>
            <img src={logo} alt="" className='' />
          </div>
          <div>
            <a href='https://chat.whatsapp.com/DqHw7qdtqXBCZg1qgZMvao' rel='noreferrer' target='_blank' className='p-2 xl:px-4 xl:py-2 rounded-full bg-[#1a8fdd] font-bold text-xl text-white hover:bg-white hover:text-[#1a8fdd]'>Join Directly</a>
          </div>
            </div>
          
          </div>
          </div>
          </>
  )
}

export default JoinModal