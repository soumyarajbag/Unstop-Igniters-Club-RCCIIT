import React, { useEffect, useRef, useState } from "react";
import NET from 'vanta/dist/vanta.net.min'
import Intro from "../components/home/Intro";

import Aim from "../components/home/Aim";

import Featured from "../components/home/Featured";

import Cell from "../components/home/Cell";
import Slider from "../components/home/Slider";


const HomePage = ({isMenuOpen}) => {
  
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
  return (
    <div ref={myRef} className={`${isMenuOpen ? 'pt-56' : '2xl:pt-[80px]'} flex   overflow-x-hidden flex-col items-center justify-center xl:gap-0 gap-20`}>
      <Intro />
      <Aim />
      <Featured />
      <Cell />
      <Slider />
    </div>
  );
};

export default HomePage;
