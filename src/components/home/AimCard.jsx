import React from "react";
import logo from "../../assets/logo.jpg";

const AimCard = () => {
  return (
    <div className="bg-[#0a2266] w-[450px] h-[350px] flex flex-col items-center  p-4 rounded-lg hover:scale-105 ease-in-out duration-300">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="" className="rounded-full h-[150px] w-[150px]" />
        <h1 className="text-[#1a8fdd] font-bold text-xl mt-2">Aim #1</h1>
      </div>
      <div className="text-center mt-5">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
          tempore labore. Distinctio vel libero quaerat consequuntur incidunt?
          A, obcaecati soluta?
        </p>
      </div>
    </div>
  );
};

export default AimCard;
