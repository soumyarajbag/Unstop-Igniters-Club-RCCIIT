import React, { useState } from "react";
import WinnerModal from "./Modals/WinnerModal";

import PhotoCarousel from "./Modals/Carousel";

const EventCard = ({ index , name , photos , date , description , image , view , count , winners , venue , coordinator , winnermembers}) => {
 
  const [winner , setWinner] = useState(false);
  const [gallery , setGallery] = useState(false);
  const openGallery = () => {
    setGallery(true);
  }
  const closeGallery = () => {
    setGallery(false);
  }
  const openModal = () => {
    setWinner(true);
  }
  const closeModal = () => {
    setWinner(false);
  }
  

  return (
    <div className={`text-white ${winner || gallery ? "" : "hover:scale-105 duration-500"}  flex  flex-col-reverse  xl:flex-row p-4 border-t border-b border-[#1a8fdd] rounded-xl justify-around  gap-2 `}>
      <div className="w-[300px]  xl:w-[700px]">
        <div className="flex flex-col gap-2 justify-start">
          <h1 className="text-[#1a8fdd] font-bold text-3xl tracking-wide">{name}</h1>
          <div className="flex flex-wrap flex-row justify-between">
            <h1 className="font-semibold text-slate-400 text-xl">Date : {date} </h1>
            <h1 className="font-semibold text-slate-400 text-xl">Venue : {venue}</h1>
          </div>
          <h1 className="font-semibold text-slate-400 text-xl">Participants : {count} </h1>
          <h1 className="font-semibold text-slate-400 text-xl">Coordinators : {coordinator} </h1>
          <div className="flex flex-col gap-3 xl:gap-10 xl:flex-row items-center">
          {(winners=="")? null:<h1 className="font-semibold text-slate-400 text-xl">Winners : {winners} </h1>}
         {(winnermembers.length===0)?null: <button onClick={openModal} className="bg-blue-500 text-white px-2 py-1 rounded-xl">View Winners</button>}
          </div>
          <div>
          {(photos=="")?
            <a href={view}  className="px-3 py-2 text-lg bg-blue text-white rounded-xl bg-blue-500">View</a>
            :
            <button onClick={openGallery} className="px-2 py-1 bg-blue text-white rounded-xl bg-blue-500">View Gallery</button>
          }
          </div>
        </div>

        <div className="tracking-wider box-content mt-5 flex flex-col gap-1">
          <h1 className="font-semibold text-slate-400 text-xl" >Description : </h1>
          <p className="text-xl">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-end">
        <img className="w-[280px] h-[400px] object-cover xl:h-[400px] xl:w-[350px]" src={image} alt="" />
      </div>
      {winner ? <WinnerModal closeSpeaker={closeModal} winnermembers={winnermembers} index={index} /> : null}
      {gallery ? <PhotoCarousel photos={photos} index={index} closeGallery={closeGallery}  /> : null}
    </div>
  );
};

export default EventCard;
