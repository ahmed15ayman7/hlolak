"use client"
import type { NextPage } from "next";
import HeroSection from "./HeroSection";
import PhotoGallery from "./GallerySection";
import ServicesSection from "./ServicesSection";
import LoanApplication from "./LoanApplication";
import Test from "./test";

const Home: NextPage = () => {
  return (
    <>
     
      <HeroSection />
      <ServicesSection />
      <LoanApplication />
      <PhotoGallery />
      <Test />
    </>
  );
};

export default Home;
