import React from "react";
import banner1 from "./../../../assets/images/banner/1.jpg";
import banner2 from "./../../../assets/images/banner/2.jpg";
import banner3 from "./../../../assets/images/banner/3.jpg";
import banner4 from "./../../../assets/images/banner/4.jpg";
import banner5 from "./../../../assets/images/banner/5.jpg";
import banner6 from "./../../../assets/images/banner/6.jpg";
import Slider from "./Slider";

const Sliders = () => {
    const slidersItem = [
        {
          id: 1,
          img: banner1,
          next: 2,
          prev: 6
        },
        {
          id: 2,
          img: banner2,
          next: 3,
          prev: 1
        },
        {
          id: 3,
          img: banner3,
          next: 4,
          prev: 2
        },
        {
          id: 4,
          img: banner4,
          next: 5,
          prev: 3
        },
        {
          id: 5,
          img: banner5,
          next: 6,
          prev: 4
        },
        {
          id: 6,
          img: banner6,
          next: 1,
          prev: 5
        },
      ];
  return (
    <div>
      <div className="carousel w-full rounded-xl mt-4 h-96">
        {slidersItem.map((sliderItem) => (
          <Slider key={sliderItem.id} sliderItem={sliderItem}></Slider>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
