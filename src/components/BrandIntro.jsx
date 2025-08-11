import React from "react";
import Container from "./Container";
import logo1 from "../assets/home/logo_1.png";
import logo2 from "../assets/home/logo_2.png";
import logo3 from "../assets/home/logo_3.png";
import logo4 from "../assets/home/logo_4.png";
import logo5 from "../assets/home/logo_5.png";
import logo6 from "../assets/home/logo_6.png";
import {
  BrickWallFire,
  MoveRight,
  SquareStack,
  VectorSquare,
} from "lucide-react";

const BrandIntro = () => {
  const imageList = [
    { id: 1, src: logo1 },
    { id: 2, src: logo2 },
    { id: 3, src: logo3 },
    { id: 4, src: logo4 },
    { id: 5, src: logo5 },
    { id: 6, src: logo6 },
  ];

  const noteList = [
    {
      id: 1,
      icon: <BrickWallFire strokeWidth={1.5} />,
      title: "Material",
      context:
        "Granular form of silicon dioxide (SiO₂) with an exceptional ability to absorb and retain moisture. Made from natural minerals, it is chemically inert, non-toxic, and non-corrosive, making it a safe and effective desiccant for a wide variety of uses.",
    },
    {
      id: 2,
      icon: <VectorSquare strokeWidth={1.5} />,
      title: "Application",
      context:
        "KHH silica gel protects products from moisture damage across industries, including electronics, pharmaceuticals, food,textiles, logistics, and machinery. It prevents corrosion, mold, and spoilage in excellent condition during storage, shipping, and long-term preservation.",
    },
    {
      id: 3,
      icon: <SquareStack strokeWidth={1.5} />,
      title: "Story",
      context:
        "We serve a broad client base, from manufacturers and exporters to architects. At KHH, we believe that protecting products means protecting investments and the planet. That’s why we are committed to continuous  innovation and building lasting partnerships.",
    },
  ];
  return (
    <section>
      <div className="w-[95%] mx-auto">
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
        <div>
          <h4 className="text-center pt-10 font-semibold text-gray-500">
            Truted by fast-growing startups
          </h4>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 hover:bg-surface bg-white duration-300 lg:grid-cols-3  ">
          <div className="lg:col-span-2 group border border-gray-200 duration-300 flex flex-col justify-between px-[3%] lg:px-[4%] py-10">
            <div className="flex justify-between items-center">
              <h2 className="duration-300 text-3xl text-gray-800 group-hover:text-royal">
                Innovation
              </h2>
              <MoveRight
                strokeWidth={0.5}
                className="size-10 duration-300 group-hover:text-royal text-gray-800"
              />
            </div>
            <p className="text-gray-600 max-w-md">
              We develop the technologies of the future – to benefit both you
              and the planet!
            </p>
          </div>
          <div className="lg:col-span-1 border border-gray-200 bg-royal hover:bg-royal/95 duration-200 flex flex-col  ">
            <div className="text-white px-[3%] lg:px-[4%] py-10 flex flex-col gap-5 justify-between items-start">
              <div className="text-2xl">Desiccants</div>
              <p>
                Desiccants are moisture-absorbing agents that protect products
                from the damaging effects of humidity. At KHH, we manufacture
                premium silica gel and other moisture control solutions designed
                to safeguard goods during storage and transit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1  hover:bg-surface duration-300 bg-white lg:grid-cols-3  ">
          {noteList.map((item) => (
            <div key={item.id} className="lg:col-span-1 bg-white group hover:bg-surface duration-300 border border-gray-200 px-[3%] lg:px-[7%] py-5 flex flex-col  ">
              <div className="text-gray-900/80 gap-5 justify-between py-5 flex flex-col  items-start">
                <div className="text-sm group-hover:text-royal font-semibold tracking-wide flex items-center uppercase space-x-2">
                  {item.icon}
                  <p>{item.title}</p>
                </div>
                <p>
                  {item.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
