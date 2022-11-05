import React, { useEffect, useState } from "react";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";

const OurServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-10">
      <div className="text-center mb-10">
        <p className="text-orange-600 font-bold mb-2">Services</p>
        <h1 className="text-3xl font-bold mb-4">Our Service Area</h1>
        <p className="text-muted font-semibold mb-4">
          The majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 justify-center lg:grid-cols-3 my-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn bg-orange-600 text-white border-orange-600 hover:bg-orange-400">
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurServices;
