import React from "react";
import { GrClose } from "react-icons/gr";
import Winner from "./Winner";

const WinnerModal = ({ closeSpeaker, winnermembers, index }) => {
  
  return (
    <>
      <div
        id="container"
        className=" fixed  inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        <div className="flex w-[520px] h-[600px] overflow-y-scroll  bg-[#01071c] flex-col  border-t border-b border-[#1a8fdd] rounded-xl">
          <div className=" flex flex-row justify-between items-center  scroll-smooth   px-12 py-5  text-white">
            <div>
              <h1 className="font-bold text-2xl text-[#1a8fdd]">Winners Details</h1>
            </div>
            <div>
              <button onClick={closeSpeaker}>
                <GrClose size={25} className="bg-red-500 rounded-xl p-1 hover:bg-red-700"  />
              </button>
            </div>
          </div>
          <div className="pb-10 flex flex-col items-center gap-5">
          {winnermembers.map((winnermember, index) => (
        <Winner key={index} index={index} winnermember={winnermember} />
      ))}
          
          </div>
       
        </div>
      </div>
    </>
  );
};

export default WinnerModal;
