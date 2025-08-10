import React from "react";
import HeroSection from "../components/HeroSection";
import BrandIntro from "../components/BrandIntro";
import Header from "../components/Header";
import ProductsOverall from "../components/ProductsOverall";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandIntro />
      <ProductsOverall />
    </main>
  );
};

export default HomePage;
