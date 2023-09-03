import React, { useState } from "react";
import {FiLink} from 'react-icons/fi'
import {BiSolidPhotoAlbum} from 'react-icons/bi'
const Winner = ({winnermember , index}) => {
  
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-center justify-center gap-2">
          <h1 className="text-xl font-semibold">Winning Category : </h1>
          <h1 className="text-xl font-semibold">{winnermember.domain}</h1>
        </div>
        <div className="flex flex-col gap-5">
        {winnermember.win.map((win, index) => (
          <div  key={index} className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-5">
         {win.position===""?null: <h1 className="text-xl font-semibold tracking-wide">Position: {win.position}</h1>}
         {win.team===""?null:<h1 className="text-xl font-semibold tracking-wide">Team: {win.team}</h1>}
          </div>
            <div className="flex flex-col  gap-5 border-t border-b border-[#1a8fdd] p-4 rounded-lg">
            {win.members.map((member, subIndex) => (
              <div key={subIndex} className="flex flex-row items-center justify-evenly">
              <div  className="flex flex-row items-center justify-evenly w-[300px]">
                <img src={member.image} alt={member.name} className="w-[70px] h-[80px] object-cover rounded-full" />
                <h5 className="text-xl">{member.name}</h5>
                
              </div>
              <div className="flex flex-row items-center gap-3">
                {member.social===""?null:<a target="_blank" rel="noreferrer" className="border-2 border-blue-400 bg-blue-700 px-2 py-1 rounded-xl" href={member.social}><FiLink /></a>}
                {member.link===""?null:<a target="_blank" rel="noreferrer" href={member.link} className="border-2 border-blue-400 bg-blue-700 px-2 py-1 rounded-xl"><BiSolidPhotoAlbum /></a>}
              </div>
              </div>
            ))}
          </div>
        
          </div>
        
      ))}
        </div>
      </div>


    </>
  );
};

export default Winner;
