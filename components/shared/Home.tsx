"use client"
import type { NextPage } from "next";
import HeroSection from "./HeroSection";
import PhotoGallery from "./GallerySection";
import ServicesSection from "./ServicesSection";
import Test from "./test";
import OffersSection from "./OffersSection";
import LatestPostsSection from "./LatestPostsSection";
import { PartnersSection } from "./partnersSection";

const Home: NextPage = () => {
  return (
    <>
     
      <HeroSection />
      <OffersSection/>
      <ServicesSection />
      <PhotoGallery />
      <LatestPostsSection/>
      <Test />
      <PartnersSection />
    </>
  );
};

export default Home;
