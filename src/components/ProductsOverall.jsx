import React from "react";
import manufactureVideo from "../assets/home/manufacture_video.mp4";
import { MoveRight } from "lucide-react";

const ProductsOverall = () => {
  return (
    <div className="py-20">
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
        <div className="col-span-1 px-[4%] py-5 flex flex-col justify-between border group border-zinc-200 duration-300">
          <div className="flex justify-between items-center">
            <h2 className="duration-300 text-3xl text-zinc-800 group-hover:text-primary">
              Manufacturing
            </h2>
            <MoveRight
              strokeWidth={0.5}
              className="size-10 duration-300 group-hover:text-primary text-zinc-800"
            />
          </div>
          <div className="text-2xl flex flex-col gap-3 text-zinc-800/80">
            <p>Raw Material Selection</p>
            <p className="text-primary">Processing & Activation</p>
            <p>Quality Testing</p>
          </div>
          <p>By integrating modern technology with eco-conscious practices</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsOverall;
