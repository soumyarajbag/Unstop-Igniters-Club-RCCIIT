import React from "react";
import EventCard from "./EventCard"
const Events = ({isMenuOpen}) => {
  return (
    <div className={`${isMenuOpen ? 'pt-60' : 'pt-[20px] 2xl:pt-[100px]'} flex   overflow-x-hidden flex-col items-center justify-center xl:gap-0 gap-12`}>
      <div className="">
        <h1 className="text-[#1a8fdd] text-center font-bold text-4xl xl:mt-5">Our Events</h1>
      </div>

      <div className="flex flex-col items-center gap-20 xl:mt-16 mb-10">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
