import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const ConcentricCircles = () => {
  const circles = [
    { radius: 30 },
    { radius: 45 },
    { radius: 60 },
    { radius: 75 },
    { radius: 90 },
  ];

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className="flex flex-col justify-between bg-royal p-5 h-full max-lg:h-[400px]">
      <div className="flex justify-between items-center">
        <h2 className="duration-300 text-3xl text-white ">
          Product & Services
        </h2>
        <MoveRight
          strokeWidth={0.5}
          className="size-10 duration-300  text-white"
        />
      </div>

      <div className="flex justify-center">
        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="transform -rotate-90"
        >
          {circles.map((circle, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r={circle.radius}
              stroke="#ffffff"
              strokeWidth="2"
              fill="transparent"
              variants={draw}
              custom={i}
            />
          ))}
        </motion.svg>
      </div>
      <p className="text-white ">Discover our portfolio.</p>
    </div>
  );
};

export default ConcentricCircles;
