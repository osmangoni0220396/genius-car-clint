import React from "react";
import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";

const AboutUS = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid lg:grid-cols-2 h-auto">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-32 lg:mb-0 lg:gap-2 mx-auto lg:mx-0">
          <div>
            <img src={img1} className="rounded h-full" alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 w-5/6 p-2 bg-white rounded">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-orange-600 font-bold">About Us</p>
          <h1 className="text-3xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-outline hover:bg-orange-600 hover:border-orange-600 text-black">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
