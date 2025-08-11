import React from "react";
import HeroSection from "../components/HeroSection";
import BrandIntro from "../components/BrandIntro";
import Header from "../components/Header";
import ProductsOverall from "../components/ProductsOverall";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CertificateDisplay from "@/components/CertificateDisplay";
import Testimonials from "@/components/Testimonials";
import FinalHomeSection from "@/components/FinalHomeSection";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandIntro />
      <ProductsOverall />
      <CertificateDisplay />
      <Faq />
      <Testimonials />
      <FinalHomeSection />
      <Footer />
    </main>
  );
};

export default HomePage;
