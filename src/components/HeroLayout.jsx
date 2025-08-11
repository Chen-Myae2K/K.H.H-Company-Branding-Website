import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import quoteCard from "../assets/home/quotes_card.png";
import hero1 from "../assets/home/hero_1.jpg";
import hero2 from "../assets/home/hero_2.jpg";
import hero3 from "../assets/home/hero_3.jpg";

const ImageColumn = ({ src, alt }) => (
  <div className="h-full w-full overflow-hidden">
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </div>
);

const HeroLayout = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y1 = useTransform(smoothYProgress, [0, 0.6], ["0%", "-100%"]);
  const y2 = useTransform(smoothYProgress, [0.1, 0.8], ["0%", "-100%"]);
  const y3 = useTransform(smoothYProgress, [0.2, 1.0], ["0%", "-100%"]);

  return (
    <section ref={scrollRef} className="relative h-[300vh] w-full">
      <div className="sticky top-14  flex h-screen w-full flex-col">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 flex h-full w-full">
            <ImageColumn src={hero1} alt="khh photo" />
            <ImageColumn src={hero2} alt="khh photo" />
            <ImageColumn src={hero3} alt="khh photo" />
          </div>

          <div className="absolute inset-0 flex h-full w-full">
            <motion.div
              style={{ y: y1 }}
              className="h-[101%] w-1/3 will-change-transform"
            >
              <ImageColumn src={quoteCard} alt="khh quote card" />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="h-[101%] w-1/3 will-change-transform"
            >
              <ImageColumn
                src="https://images.unsplash.com/photo-1627313064075-e36672e33450?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cargo ship"
              />
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="h-[101%] w-1/3 will-change-transform"
            >
              <ImageColumn
                src="https://images.unsplash.com/photo-1740816132666-95577ee2c504?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cargo container"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex h-[20vh] w-[95%]  mx-auto pt-5 flex-col justify-between bg-white text-gray-800">
          <div className="flex h-full w-full justify-between">
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-bold text-royal">K.H.H Company Limited</p>
              </div>
              <p className="text-gray-500">Welcome to KHH SECCO-SORB</p>
            </div>

            <div className="flex flex-col items-end  justify-between text-right">
              <div className="">
                <a href="#" className="hover:underline">
                  dark / <span className="font-semibold">light</span>
                </a>
              </div>
              <p className="text-gray-500">
                delivers innovative, high-quality solutions that bring projects
                to life ↓
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
