import React from "react";
import logo from "../../assets/logo.jpg";
import AliceCarousel from "react-alice-carousel";

const items = [
    <img src={logo} alt="" /> ,
    <img src={logo} alt="" />,
    <img src={logo} alt="" />,
    <img src={logo} alt="" />,
    <img src={logo} alt="" />
]
const Slider = () => {
    
  <div className="bg-black">
    <AliceCarousel
      autoPlay
      reverse
      autoPlayInterval={1000}
      infinite
      items={items.length}
      disableButtonsControls
      disableDotsControls
      mouseTracking
      itemsInSlide={2}
      responsive={{
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
      }}
    >
    {items}
    

    </AliceCarousel>
  </div>;
};

export default Slider;
