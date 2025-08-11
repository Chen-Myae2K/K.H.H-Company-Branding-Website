import React from "react";
import manufactureVideo from "../assets/home/manufacture_video.mp4";
import { MoveRight } from "lucide-react";
import productionLine from "../assets/home/production_line.png";
import ConcentricCircles from "./ConcentricCircles";
import {
  BrickWallFire,
  SquareStack,
  VectorSquare,
} from "lucide-react";
const ProductsOverall = () => {
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
    <div className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <video
            src={manufactureVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[70vh] object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-1 max-lg:gap-10 bg-white hover:bg-surface duration-300 px-[4%] py-5 flex flex-col justify-between border group border-gray-200 ">
          <div className="flex justify-between items-center">
            <h2 className="duration-300 text-3xl text-gray-800 group-hover:text-royal">
              Manufacturing
            </h2>
            <MoveRight
              strokeWidth={0.5}
              className="size-10 duration-300 group-hover:text-royal text-gray-800"
            />
          </div>
          <div className="text-2xl flex flex-col gap-3 text-gray-800/80">
            <p>Raw Material Selection</p>
            <p className="text-royal">Processing & Activation</p>
            <p>Quality Testing</p>
          </div>
          <p>By integrating modern technology with eco-conscious practices</p>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1  hover:bg-surface duration-300 bg-white lg:grid-cols-3  ">
          {noteList.map((item) => (
            <div
              key={item.id}
              className="lg:col-span-1 bg-white group hover:bg-surface duration-300 border border-gray-200 px-[3%] lg:px-[7%] py-5 flex flex-col  "
            >
              <div className="text-gray-900/80 gap-5 justify-between py-5 flex flex-col  items-start">
                <div className="text-sm group-hover:text-royal font-semibold tracking-wide flex items-center uppercase space-x-2">
                  {item.icon}
                  <p>{item.title}</p>
                </div>
                <p>{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 bg-white hover:bg-surface duration-300 border border-zinc-100 flex items-center justify-center">
          <img src={productionLine} className="" alt="" />
        </div>
        <div className="col-span-1">
          <ConcentricCircles />
        </div>
      </div>
    </div>
  );
};

export default ProductsOverall;
