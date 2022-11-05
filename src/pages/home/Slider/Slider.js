import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Sliders.css";

const Slider = ({ sliderItem }) => {
  const { img, id, prev, next } = sliderItem;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="sliderGradient">
        <img src={img} className="w-full h-full" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-20 lg:top-1/4 top-1/4 left-5">
        <h2 className="font-bold text-white lg:text-3xl text-2xl">
          Affordable <br /> Price For Car <br /> Servicing
        </h2>
      </div>
      <div className="absolute transform -translate-y-1/2 lg:left-20 lg:top-2/4 md:left-5 md:top-1/2 left-5 top-1/2">
        <p className="text-white">
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-20 lg:top-3/4 top-3/4 left-5">
        <button className="btn btn-outline hover:bg-orange-600 hover:border-orange-600 text-white mr-4">
          Discover More
        </button>
        <button className="btn btn-outline hover:bg-orange-600 hover:border-orange-600 text-white">
          Latest Project
        </button>
      </div>

      <div className="absolute flex gap-3 transform -translate-y-1/2 md:top-3/4 md:right-10 top-3/4 right-2">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle hover:bg-orange-600 hover:border-orange-600"
        >
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle hover:bg-orange-600 hover:border-orange-600"
        >
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </a>
      </div>
    </div>
  );
};

export default Slider;
