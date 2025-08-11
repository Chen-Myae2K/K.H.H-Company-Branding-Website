import React from "react";
import {
  BrickWallFire,
  MoveRight,
  SquareStack,
  VectorSquare,
} from "lucide-react";
import companyImg from "../assets/home/khh_company.png";
const FinalHomeSection = () => {
  return (
    <div className="grid grid-cols-1 mt-20 hover:bg-surface duration-300 bg-white md:grid-cols-4  ">
      <div className="md:col-span-1 bg-white">
        <img
          src={companyImg}
          className="w-full aspect-square object-cover"
          alt=""
        />
      </div>
      <div className="md:col-span-2 bg-white group hover:bg-surface duration-300 border border-gray-100 px-[3%] md:px-[5%] py-5 flex flex-col  ">
        <div className="text-gray-900/80 gap-5 justify-between  flex flex-col  items-start h-full">
          <div className="flex w-full justify-between items-center">
            <h2 className="duration-300 text-3xl text-gray-800 group-hover:text-royal">
              This is KHH
            </h2>
            <MoveRight
              strokeWidth={0.5}
              className="size-10 duration-300 group-hover:text-royal text-gray-800"
            />
          </div>
          <p>
            KHH has proudly served the industry for over 30 years — here, you
            can discover our full story and journey of growth, innovation, and
            commitment.
          </p>
        </div>
      </div>
      <div className="md:col-span-1 bg-white group duration-300 border border-gray-100 px-[3%] md:px-[7%] py-5 flex flex-col  ">
        <div className="text-gray-900/80 gap-5 justify-between py-5 flex flex-col  items-start">
          <div className="text-sm group-hover:text-royal font-semibold tracking-wide flex items-center uppercase space-x-2">
            <p>df</p>
          </div>
          <p>f</p>
        </div>
      </div>
    </div>
  );
};

export default FinalHomeSection;
