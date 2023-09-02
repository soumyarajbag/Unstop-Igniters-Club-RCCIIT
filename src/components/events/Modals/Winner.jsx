import React, { useState } from "react";
import logo from '../../../assets/logo.jpg'
const Winner = ({members}) => {
  
  return (
    <>
      {<div className="flex flex-col  gap-5">
        {members.map((member , index) => (
            <div key={index} className="flex flex-row gap-10   items-center">
          <img
            src={member.image}
            className="h-[70px] w-[70px] rounded-full object-cover"
            alt=""
          />
          <h1>{member.name}</h1>
        </div>
        ))
            }
    
      </div>}
    </>
  );
};

export default Winner;
