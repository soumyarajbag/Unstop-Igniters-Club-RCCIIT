import React from "react";
import EventCard from "./EventCard"
const Events = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="">
        <h1 className="text-[#1a8fdd] text-center font-bold text-4xl mt-5">Our Events</h1>
      </div>

      <div className="flex flex-col items-center gap-20 mt-16">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
