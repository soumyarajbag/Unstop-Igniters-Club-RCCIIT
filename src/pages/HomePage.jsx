import React from "react";

import Intro from "../components/home/Intro";

import Aim from "../components/home/Aim";

import Featured from "../components/home/Featured";

import Cell from "../components/home/Cell";


const HomePage = () => {
  return (
    <div>
      <Intro />

      <Aim />
      <Featured />
      <Cell />
    </div>
  );
};

export default HomePage;
