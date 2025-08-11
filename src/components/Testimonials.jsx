import React from "react";
import logo1 from "../assets/home/logo_1.png";
import logo2 from "../assets/home/logo_2.png";
import logo3 from "../assets/home/logo_3.png";
import logo4 from "../assets/home/logo_4.png";
import logo5 from "../assets/home/logo_5.png";
import logo6 from "../assets/home/logo_6.png";

const Testimonials = () => {
  const imageList = [
    { id: 1, src: logo1 },
    { id: 2, src: logo2 },
    { id: 3, src: logo3 },
    { id: 4, src: logo4 },
    { id: 5, src: logo5 },
    { id: 6, src: logo6 },
  ];
  return (
    <div className="w-[95%] mx-auto pt-10">
      <div>
        <h4 className="text-center pt-10 font-semibold text-gray-500">
          Truted by fast-growing startups
        </h4>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 pt-10 ">
        {imageList.map((item) => (
          <div
            key={item.id}
            className="col-span-1 h-[150px] flex border border-gray-200 justify-center duration-300 grayscale hover:grayscale-0 hover:bg-surface items-center py-5"
          >
            <img src={item.src} className="w-[120px] " alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
