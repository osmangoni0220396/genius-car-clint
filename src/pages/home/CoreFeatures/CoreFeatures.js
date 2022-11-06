import React from "react";
import img1 from "./../../../assets/icons/check.svg";
import img2 from "./../../../assets/icons/deliveryt.svg";
import img3 from "./../../../assets/icons/Group 38729.svg";
import img4 from "./../../../assets/icons/person.svg";
import img5 from "./../../../assets/icons/Wrench.svg";
import img6 from "./../../../assets/icons/group.svg";

const CoreFeatures = () => {
  return (
    <div className="mb-10">
      <div className="text-center mb-10">
        <p className="text-orange-600 font-bold mb-2">Core Features</p>
        <h1 className="text-3xl font-bold mb-4">Why Choose Us</h1>
        <p className="text-muted font-semibold mb-4">
          The majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="bg-slate-400 lg:flex p-10 justify-around rounded-lg">
        <div className="flex flex-col justify-center items-center p-5 hover:bg-orange-600 hover:text-white rounded-lg">
          <img src={img6} alt="" />
          <p className="text-xl font-bold">Expert Team</p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 hover:bg-orange-600 hover:text-white rounded-lg">
          <img src={img3} alt="" />
          <p className="text-xl font-bold">Timely Delivery</p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 hover:bg-orange-600 hover:text-white rounded-lg">
          <img src={img4} alt="" />
          <p className="text-xl font-bold">24/7 Support</p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 hover:bg-orange-600 hover:text-white rounded-lg">
          <img src={img5} alt="" />
          <p className="text-xl font-bold">Best Equipment</p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 hover:bg-orange-600 hover:text-white rounded-lg">
          <img src={img1} alt="" />
          <p className="text-xl font-bold">100% Guarantee</p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 hover:bg-orange-600 hover:text-white rounded-lg">
          <img src={img2} alt="" />
          <p className="text-xl font-bold">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
