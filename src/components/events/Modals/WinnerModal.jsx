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
        <div className="flex w-[320px] h-[500px] overflow-y-scroll   bg-cyan-900 flex-col border-2 rounded-xl">
          <div className=" flex flex-row justify-between items-center  scroll-smooth   px-12 py-5  bg-violet-500 text-white">
            <div>
              <h1 className="font-bold text-2xl">Speaker Details</h1>
            </div>
            <div>
              <button onClick={closeSpeaker}>
                <GrClose size={25} />
              </button>
            </div>
          </div>
            <div className="flex flex-col items-center gap-2">
            {winnermembers.map((member, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex flex-row items-center gap-2">
                <h1 className=" font-bold text-lg">Winning Category : </h1>
                <h1 className="text-md font-semibold">{member.domain}</h1>
              </div>
              <div>
               {member.team===""? null : <h1 className="font-bold text-lg">Team Name : {member.team} </h1>}
              </div>
              <div>
                <Winner members={member.members} />
              </div>
            </div>
          ))}
            </div>
          
        </div>
      </div>
    </>
  );
};

export default WinnerModal;
