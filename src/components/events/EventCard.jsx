import React from "react";

const EventCard = ({key , name , date , description , image , count , winners , mode , coordinator}) => {
  return (
    <div className="text-white flex  flex-col-reverse  xl:flex-row p-4 border-t border-b border-[#1a8fdd] rounded-xl justify-around  gap-2 hover:scale-105 duration-500">
      <div className="w-[300px]  xl:w-[700px]">
        <div className="flex flex-col gap-2 justify-start">
          <h1 className="text-[#1a8fdd] font-bold text-3xl tracking-wide">{name}</h1>
          <div className="flex flex-wrap flex-row justify-between">
            <h1 className="font-semibold text-slate-400 text-xl">Date : {date} </h1>
            <h1 className="font-semibold text-slate-400 text-xl">Venue : {mode}</h1>
          </div>
          
        </div>

        <div className="tracking-wider box-content mt-5">
          <p className="text-xl">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-end">
        <img className="w-[280px] h-[200px] xl:h-[400px] xl:w-[350px]" src={image} alt="" />
      </div>
      
    </div>
  );
};

export default EventCard;
