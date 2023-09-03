import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import CircleLoader from "react-spinners/CircleLoader";
import "react-multi-carousel/lib/styles.css";

import CarouselItem from "./CarouselItem";
const PhotoCarousel = ({ closeGallery, photos, index }) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => { setLoading(false);  }, 3000);
  return (
    <>
      <div
        id="container"
        className=" fixed  inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        
   
        <div className="flex w-[320px] md:w-[500px]   xl:w-[800px]   flex-col border-2 rounded-xl bg-[#01071c]   border-t  border-[#1a8fdd]">
          
          <div className=" flex flex-row justify-between items-center  scroll-smooth py-2 px-5   xl:px-12 xl:py-5   text-white">
            <div>
              <h1 className="font-bold text-md md:text-lg xl:text-2xl text-[#1a8fdd]">
                Event Photos
              </h1>
            </div>
            <div>
              <button onClick={closeGallery}>
                <GrClose className="bg-red-500 rounded-xl p-1 h-[20px] w-[20px] xl:h-[30px] xl:w-[30px] hover:bg-red-700" />
              </button>
            </div>
          </div>
          {loading ?<div className="flex flex-col items-center gap-5 justify-center h-[300px] md:h-[400px] xl:h-[600px]  w-[320px] md:w-[500px]   xl:w-[800px] "><CircleLoader
  color="#1a8fdd"
  size={100}
/>
<h1 className="text-md md:text-lg xl:text-2xl text-[#1a8fdd] font-bold">Loading Memories...</h1>
</div> :
          <div className="flex flex-row items-center justify-center">
           
            <CarouselItem>
              {photos.map((photo, index) => (
               
<img key={index} src={photo.url} alt="" className="xl:h-[600px]" />
               
                
              ))}
            </CarouselItem>
         
            
          </div>}
        </div>
      </div>
    </>
  );
};

export default PhotoCarousel;
