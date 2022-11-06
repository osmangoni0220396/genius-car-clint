import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <div className="mb-10">
      <div className="text-center mb-10">
        <p className="text-orange-600 font-bold mb-2">Team</p>
        <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-muted font-semibold mb-4">
          The majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div>
        <Carousel cols={3} rows={1} gap={2} loop>
          {teamMembers.map((teamMember) => (
            <Carousel.Item key={teamMember._id}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={teamMember.img} alt="Shoes" className="h-60" />
                </figure>
                <div>
                  <h2 className="text-2xl text-center font-bold">{teamMember.name}</h2>
                  <p className="text-orange-600 font-bold text-xl text-center my-2">
                    {teamMember.designation}
                  </p>
                </div>
                <div>
                    <ul className="flex justify-center gap-5">
                    <a href={teamMember.facebook} className="btn btn-ghost btn-circle bg-blue-900 text-white text-2xl"><li ><FaFacebookF></FaFacebookF></li></a>
                    <a href={teamMember.twitter} className="btn btn-ghost btn-circle bg-blue-400 text-white text-2xl"><li ><FaTwitter></FaTwitter></li></a>
                    <a href={teamMember.linkedin} className="btn btn-ghost btn-circle bg-blue-900 text-white text-2xl"><li ><FaLinkedin></FaLinkedin></li></a>
                    <a href={teamMember.instagram} className="btn btn-ghost btn-circle bg-blue-900 text-white text-2xl"><li ><FaInstagram></FaInstagram></li></a>
                    </ul>
                    
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurTeam;
