import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/home/Intro";

import Aim from "../components/home/Aim";

import Featured from "../components/home/Featured";

import Cell from "../components/home/Cell";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Aim />
      <Featured />
      <Cell />
      <Footer />
      
    </div>
  );
};

export default HomePage;
