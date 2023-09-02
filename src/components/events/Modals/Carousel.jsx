import React from "react";
import { GrClose } from "react-icons/gr";

import "react-multi-carousel/lib/styles.css";

import CarouselItem from "./CarouselItem";
const PhotoCarousel = ({ closeGallery, photos }) => {
  
  return (
    <>
      <div
        id="container"
        className=" fixed  inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        <div className="flex w-[300px] h-[350px] md:w-[500px] md:h-[600px]  xl:w-[600px] xl:h-[650px] overflow-y-scroll    flex-col border-2 rounded-xl">
          <div className=" flex flex-row justify-between items-center  scroll-smooth   px-12 py-5  bg-violet-500 text-white">
            <div>
              <h1 className="font-bold text-2xl">Event Photos</h1>
            </div>
            <div>
              <button onClick={closeGallery}>
                <GrClose size={25} />
              </button>
            </div>
          </div>

          <CarouselItem>
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt=""
                className="xl:h-[600px] xl:w-[600px]  md:w-[500px] md:h-[600px] w-[300px] object-cover"
              />
            ))}
          </CarouselItem>
        </div>
      </div>
    </>
  );
};

export default PhotoCarousel;
