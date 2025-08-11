import React from "react";
import HeroSection from "../components/HeroSection";
import BrandIntro from "../components/BrandIntro";
import Header from "../components/Header";
import ProductsOverall from "../components/ProductsOverall";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandIntro />
      <ProductsOverall />
      <Faq />
      <Footer />
    </main>
  );
};

export default HomePage;
