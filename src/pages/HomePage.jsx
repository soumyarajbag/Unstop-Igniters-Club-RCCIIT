import React, { useEffect, useRef, useState } from "react";
import NET from 'vanta/dist/vanta.net.min'
import Intro from "../components/home/Intro";
import logo from "../assets/logo.jpg";
import Aim from "../components/home/Aim";
import CircleLoader from "react-spinners/CircleLoader";
import Featured from "../components/home/Featured";

import Cell from "../components/home/Cell";
import Slider from "../components/home/Slider";
import { BeatLoader } from "react-spinners";


const HomePage = ({isMenuOpen}) => {
  const [loading, setLoading] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: "#01071c",
  color: "#0addf0",
  maxDistance: 19.00,
  spacing: 20.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  setTimeout(() => { setLoading(false);  }, 3000);
  return (
    <>
    
    <div ref={myRef} className={`${isMenuOpen ? 'pt-56' : '2xl:pt-[80px]'} flex   overflow-x-hidden flex-col items-center justify-center xl:gap-0 gap-20`}>
    {loading ?<div className="flex flex-col items-center gap-20 justify-center h-screen ">
      <div className="loading-logo">
      <img id="rotating-frame" src={logo} alt="" className="h-[200px] w-[200px] rounded-full " />
      </div>
      <div className="flex flex-col items-center justify-center">

<BeatLoader color="#1a8fdd"
  size={20} />
<h1 className=" text-2xl text-[#1a8fdd] font-bold">Unstop Igniters Club RCCIIT</h1>
      </div>
      
</div> :
<div className="w-full"><Intro />
      <Aim />
      <Featured />
      <Cell />
      <Slider />
      </div>}
    </div>
    </>
  );
};

export default HomePage;
