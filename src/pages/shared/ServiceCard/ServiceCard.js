import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="h-60"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex justify-between items-center">
            <p className="text-orange-600 font-bold text-xl">Price: $<span>{price}</span></p>
            <button className="btn bg-transparent hover:bg-slate-200 border-0 text-orange-600 hover:text-orange-300"><FaArrowRight></FaArrowRight></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
