import React from "react";


const AimCard = ({name , description , image}) => {
  return (
    <div className="bg-[#0a2266] w-[300px] lg:w-[450px]  h-[380px] xl:h-[340px] flex flex-col items-center  p-4 rounded-lg hover:scale-105 ease-in-out duration-300">
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt="" className="rounded-full h-[150px] w-[150px]" />
        <h1 className="text-[#1a8fdd] font-bold text-xl lg:text-3xl 2xl:text-xl mt-2">{name}</h1>
      </div>
      <div className="text-center mt-5">
        <p className="text-white text-lg 2xl:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AimCard;
