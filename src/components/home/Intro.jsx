import React from "react";
import logo from "../../assets/logo.jpg";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
 
  
  return (
    <div id="intro"  className="intro flex flex-col-reverse xl:flex-row justify-evenly   items-center gap-10 2xl:gap-[200px] mt-[60px] 2xl:mt-[30px] mb-[50px] h-[750px]">
      <div className="flex flex-col gap-8 w-[300px] lg:w-[700px]">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Unstop Igniters Club of RCCIIT",
            1000,
            "Entrepreneurship Club of RCCIIT",
            1000,
          ]}
          wrapper="span"
          speed={200}
          style={{ display: "inline-block" }}
          className="font-bold text-2xl lg:text-4xl w-[300px] lg:w-[700px]  text-[#0addf0]"
          repeat={Infinity}
        />
        {/* <h1 className=" font-bold text-4xl text-[#0addf0]">
          Unstop Igniters Club of RCCIIT
        </h1> */}

        <p className="text-white  font-semibold text-md lg:text-3xl 2xl:text-xl w-[300px] lg:w-[700px]">
          Unstop Igniters Club is a community program by Unstop (formerly
          Dare2Compete) that aims to foster a culture of competitiveness,
          learning, and growth among students. It provides a platform for
          students to showcase their talent and skills across different domains,
          such as coding, entrepreneurship, writing, and public speaking. The
          club also facilitates and collaborates with entities on-campus and
          off-campus to create opportunities for students.
          <div className="flex flex-wrap flex-row justify-center mt-10 w-[300px] lg:w-auto gap-10 items-center">
            <button className="p-2 xl:px-4 xl:py-2 rounded-full bg-[#1a8fdd] font-bold text-xl text-white hover:bg-white hover:text-[#1a8fdd]">
              Join Us
            </button>
            <button className="px-4 py-2 rounded-full bg-[#6a45e4] font-bold text-xl text-white hover:bg-white hover:text-[#6a45e4] ">
              <BsDiscord className="h-[40px] w-[40px]" />
            </button>
            <button className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]">
              <BsGithub className="h-[40px] w-[40px]" />
            </button>
            <button className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">
              <BsLinkedin className="h-[40px] w-[40px]" />
            </button>
          </div>
        </p>
      </div>

      <div>
        <img className="w-[200px] h-[200px]  lg:w-[300px] lg:h-[300px] rounded-full" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Intro;
