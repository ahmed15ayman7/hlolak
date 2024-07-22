"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { row1, row2, row3 } from "@/constant/partners";

export const PartnersSection = () => {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="blog text-gray-700 body-font flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-700">
            شركائنا{" "}
          </h1>
        </div>
        <div className="flex justify-between flex-wrap" >
        {[row1, row2, row3].map((e, i) => 
            e.map((item: any) => (
              <div key={item.id} className="p-4 max-md:p-2 max-sm:p-0 max-sm:w-1/2">
                <Image src={item.src} alt={item.title} width={200} height={100} />
              </div>
            )))
            
          }
          </div>
        
      </div>
    </section>
  );
};


