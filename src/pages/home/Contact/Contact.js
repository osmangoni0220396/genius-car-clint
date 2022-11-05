import React from "react";
import { FcPlanner } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white bg-black grid lg:grid-cols-3 gap-5 justify-around rounded-lg p-12 lg:py-12 mb-10">
      <div className="flex gap-2 items-center">
        <div>
          <FcPlanner className="h-16 w-16"></FcPlanner>
        </div>
        <div>
          <p className="text-xl">We are open monday-friday</p>
          <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <FiPhoneCall className="h-16 w-16 text-orange-600"></FiPhoneCall>
        </div>
        <div>
          <p className="text-xl">Have a question?</p>
          <p className="font-bold text-2xl">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-orange-600">
          <FaMapMarkerAlt className="h-16 w-16 "></FaMapMarkerAlt>
        </div>
        <div>
          <p className="text-xl">Need a repair? our address</p>
          <p className="font-bold text-2xl">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
