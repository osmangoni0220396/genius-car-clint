import React from "react";
import Carousel from "react-grid-carousel";

const TeamMember = ({ teamMember }) => {
    const {img, name, designation} = teamMember
  return (
    <Carousel.Item>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-60" />
        </figure>
        <div className="card-body">
          
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="flex justify-between items-center">
            <p className="text-orange-600 font-bold text-xl">
              {designation}
            </p>
            <button className="btn bg-transparent hover:bg-slate-200 border-0 text-orange-600 hover:text-orange-300">
              {/* <FaArrowRight></FaArrowRight> */}
            </button>
          </div>
        </div>
      </div>
    </Carousel.Item>
  );
};

export default TeamMember;
