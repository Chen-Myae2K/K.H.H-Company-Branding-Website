import React from "react";
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
  const { scrollYProgress } = useScroll();

  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y1 = useTransform(smoothYProgress, [0, 0.2], ["0%", "-100%"]);
  const y2 = useTransform(smoothYProgress, [0.1, 0.25], ["0%", "-100%"]);
  const y3 = useTransform(smoothYProgress, [0.2, 0.3], ["0%", "-100%"]);

  return (
    <>
      <section className="relative h-[300dvh] w-full ">
        <div className="relative h-[70dvh] w-full overflow-hidden">
          <div className="absolute inset-0 flex h-full w-full">
            <ImageColumn src={hero1} alt="Stationary background image 1" />
            <ImageColumn src={hero2} alt="Stationary background image 2" />
            <ImageColumn src={hero3} alt="Stationary background image 3" />
          </div>
          <div className="absolute inset-0 flex h-full w-full">
            <motion.div
              style={{ y: y1 }}
              className="h-[101%] w-1/3 will-change-transform"
            >
              <ImageColumn src={quoteCard} alt="Parallax quote card" />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="h-[101%] w-1/3 will-change-transform"
            >
              <ImageColumn
                src="https://images.unsplash.com/photo-1627313064075-e36672e33450?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Parallax cargo ship"
              />
            </motion.div>
            <motion.div
              style={{ y: y3 }}
              className="h-[101%] w-1/3 will-change-transform"
            >
              <ImageColumn
                src="https://images.unsplash.com/photo-1740816132666-95577ee2c504?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Parallax cargo container"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Navigation Bar */}
      {/* This section has a height of 30dvh and IS sticky. It will stick to the top when you scroll. */}
      <div className="sticky top-0 z-10 flex h-[30dvh] w-full flex-col justify-between bg-white text-zinc-900">
        <div className="mx-auto flex h-full w-[95%] justify-between">
          <div className="flex flex-col justify-between py-4">
            <div>
              <p className="font-bold">KHH SECCO</p>
            </div>
            <p className="text-zinc-500">welcome to KHH SECCO-SORB</p>
          </div>
          <div className="flex items-start py-4">
            <nav className="flex space-x-6">
              <a href="#" className="hover:underline">
                about
              </a>
              <a href="#" className="hover:underline">
                products
              </a>
              <a href="#" className="hover:underline">
                track order
              </a>
              <a href="#" className="hover:underline">
                contact ↗
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-end justify-between py-4 text-right">
            <div>
              <a href="#" className="hover:underline">
                dark / <span className="font-semibold">light</span>
              </a>
            </div>
            <p className="text-zinc-500">
              delivers innovative, high-quality solutions that bring projects to
              life ↓
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Page Content */}
      {/* Added placeholder content to create a scrollable area to demonstrate the sticky effect. */}
      <div className="h-[200vh] w-full bg-gray-50 p-10">
        <h2 className="text-2xl font-bold">Page Content</h2>
        <p className="mt-4">
          This is the rest of your page content. As you can see, the navigation
          bar now correctly sticks to the top as you scroll down.
        </p>
      </div>
    </>
  );
};

export default HeroLayout;
