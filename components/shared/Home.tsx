"use client"
import type { NextPage } from "next";
import HeroSection from "./HeroSection";
import PhotoGallery from "./GallerySection";
import ServicesSection from "./ServicesSection";
import Test from "./test";

const Home: NextPage = () => {
  return (
    <>
     
      <HeroSection />
      <ServicesSection />
      <PhotoGallery />
      <Test />
    </>
  );
};

export default Home;
