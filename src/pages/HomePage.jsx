import React from "react";

import Intro from "../components/home/Intro";

import Aim from "../components/home/Aim";

import Featured from "../components/home/Featured";

import Cell from "../components/home/Cell";


const HomePage = ({isMenuOpen}) => {
  return (
    <div className={`${isMenuOpen ? 'pt-56' : '2xl:pt-[80px]'} flex   overflow-x-hidden flex-col items-center justify-center xl:gap-0 gap-20`}>
      <Intro />
      <Aim />
      <Featured />
      <Cell />
    </div>
  );
};

export default HomePage;
