import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import quote from "../../../assets/icons/quote.svg";
import { FaStar } from "react-icons/fa";

// import required modules
import { FreeMode } from "swiper";
const Feedback = () => {
  const [feedBacks, setFeedBacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/feedBack")
      .then((res) => res.json())
      .then((data) => setFeedBacks(data));
  }, []);
  console.log(feedBacks);
  return (
    <div className="mb-10">
      <div className="text-center mb-10">
        <p className="text-orange-600 font-bold mb-2">Testimonial</p>
        <h1 className="text-3xl font-bold mb-4">What Customer Says</h1>
        <p className="text-muted font-semibold mb-4">
          The majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {feedBacks.map((feedBack) => (
            <SwiperSlide key={feedBack._id}>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div>
                        <img
                          src={feedBack.img}
                          className="h-12 w-12 rounded-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-xl font-bold">{feedBack.name}</p>
                        <p className="text-xl font-bold">{feedBack.profession}</p>
                      </div>
                    </div>
                    <div>
                      <img src={quote} className="h-12" alt="" />
                    </div>
                  </div>
                  
                  <p>{feedBack.feedback}</p>
                  <p className="text-yellow-500 flex justify-center gap-4 font-bold text-xl">
                    {
                        [...Array(feedBack.rating)].map(str=> <FaStar></FaStar>)
                    }
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
