"use client";
import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardPost from "../cards/cardPost";
import { getAllTestimonials } from "@/lib/actions/testimonials.actions";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  _id: string;
  text: string;
  author: string;
  date: string;
}


const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className="custom-arrow custom-left" onClick={onClick}>
      <ChevronLeft color="#ffffff" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className="custom-arrow custom-right" onClick={onClick}>
      <ChevronRight color="#ffffff" />
    </button>
  );
};

const Test: React.FC = () => {
  let path = usePathname();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: testimonials2.length< 4 && testimonials2.length >1?testimonials2.length-1:testimonials2.length ==1?1:4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: testimonials2.length< 3 && testimonials2.length >1?testimonials2.length-1:testimonials2.length ==1?1:3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: testimonials2.length< 4 && testimonials2.length >1?testimonials2.length-1:testimonials2.length ==1?1:2,
    },
  };

  useEffect(() => {
    const getItems = async () => {
      const items = await getAllTestimonials();
      setTestimonials(items!);
    };
    getItems();
  }, []);

  return (
    <div className="blog text-gray-700 body-font flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            أراء من عملائنا
          </h1>
        </div>
        <Carousel
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {testimonials2.map((item) => (
            <div key={item?.text} className="p-4">
              <CardPost
                disc={item.text}
                title={item.author}
                time={item.date}
                link={"/opinion"}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const testimonials2 = [
  {
    text: "تجربة ممتازة وموظفين في قمة الاخلاق وحريصين على ارضاء العميل",
    author: "فؤاد العتيبي",
    date: "2024-05-08",
  },
  {
    text: "مؤسسة حلولك العقارية متميزة وراقية في التعامل بصدق وامانه وإنجاز",
    author: "سعيد القحطاني",
    date: "2024-04-20",
  },
  {
    text: "تجربة ممتازة وموظفين في قمة الاخلاق وحريصين على ارضاء العميل",
    author: "فؤاد العتيبي",
    date: "2024-05-08",
  },
  {
    text: "مؤسسة حلولك العقارية متميزة وراقية في التعامل بصدق وامانه وإنجاز",
    author: "سعيد القحطاني",
    date: "2024-04-20",
  },
];

export default Test;
