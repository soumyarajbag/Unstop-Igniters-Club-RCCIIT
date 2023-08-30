import React from "react";
import logo from "../../assets/logo.jpg";
const EventCard = () => {
  return (
    <div className="text-white flex  flex-col-reverse  xl:flex-row p-4 border-t border-b border-[#1a8fdd] rounded-xl justify-around  gap-2 hover:scale-105 duration-500">
      <div className="w-[300px]  xl:w-[700px]">
        <div className="flex flex-col gap-2 justify-start">
          <h1 className="text-[#1a8fdd] font-bold text-3xl tracking-wide">Event Name</h1>
          <div className="flex flex-wrap flex-row justify-between">
            <h1 className="font-semibold text-slate-400 text-xl">Date : 23rd July 2023 </h1>
            <h1 className="font-semibold text-slate-400 text-xl">Venue : Online</h1>
          </div>
          
        </div>

        <div className="tracking-wider box-content mt-5">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            recusandae consectetur qui consequuntur explicabo impedit maiores
            possimus, dolorum facilis earum molestias reprehenderit aut iste vel
            rem necessitatibus culpa quod sint voluptatem? Beatae voluptatibus
            nesciunt atque, blanditiis aliquam optio accusantium quas sed
            dignissimos, soluta maxime assumenda, tenetur excepturi ullam nulla
            illo ratione? Veritatis id culpa sint ullam quos. Odit asperiores
            quo earum incidunt labore dignissimos.
          </p>
        </div>
      </div>
      <div className="flex items-end">
        <img className="w-[280px] h-[200px] xl:h-[350px] xl:w-[500px]" src={logo} alt="" />
      </div>
      
    </div>
  );
};

export default EventCard;
