import React, { useEffect, useState } from "react";
import EventCard from "./EventCard"
import { events } from "../../data/events";
import CircleLoader from "react-spinners/CircleLoader";
import axios from "axios";
const Events = ({isMenuOpen}) => {
  const [events , setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    axios
      .get("https://unstop-igniters-rcciit-server.vercel.app/events")
      .then((res) => {
        setEvents(res.data.events);
        // console.log(res.data.events)
      }).catch((err) => { console.log(err) } ); 
     
    }, []);
    setTimeout(() => { setLoading(false);  }, 3000);
  return (
    <>
    {loading ?<div className="flex flex-col items-center gap-5 justify-center h-screen "><CircleLoader
  color="#1a8fdd"
  size={100}
/>
<h1 className=" text-2xl text-[#1a8fdd] font-bold">Loading Unstops...</h1>
</div> :<div className={`${isMenuOpen ? 'pt-60' : 'pt-[20px] 2xl:pt-[100px]'} flex   overflow-x-hidden flex-col items-center justify-center xl:gap-0 gap-12`}>
      <div className="" onClick={()=>{console.log(events[0].winnermembers)}}>
        <h1 className="text-[#1a8fdd] text-center font-bold text-4xl xl:mt-5">Our Events</h1>
      </div>

      <div className="flex flex-col items-center gap-20 xl:mt-16 mb-10">
       {
          events.map((event ,index) => (
            <EventCard key={index} photos={event.gallery} view={event.view} index={index} name={event.name} date={event.date} venue={event.venue} count={event.count} image={event.image} coordinator={event.coordinator} description={event.description} winners={event.winners} winnermembers={event.winnermembers}  />
          ))
       }
      </div>
    </div>}
    </>
  );
};

export default Events;

