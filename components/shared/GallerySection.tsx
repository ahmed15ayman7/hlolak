"use client";
import { getAllGalleryItems } from "@/lib/actions/Gallery.actions";
import { IGalleryItem } from "@/lib/models/galleryItem.models";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardPost from "../cards/cardPost";



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

const PhotoGallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<IGalleryItem[]>([]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: galleryItems2.length< 4 && galleryItems2.length >1?galleryItems2.length-1:galleryItems2.length ==1?1:4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: galleryItems2.length< 3 && galleryItems2.length >1?galleryItems2.length-1:galleryItems2.length ==1?1:3,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: galleryItems2.length< 2 && galleryItems2.length >1?galleryItems2.length-1:galleryItems2.length ==1?1:2,
    },
  };
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const items = await getAllGalleryItems();
        setGalleryItems(items!);
      } catch (err) {
        console.error("Failed to fetch gallery items:", err);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <section className="blog text-gray-700 body-font flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-700">
            معرض الصور
          </h1>
          <Link href="/galleries">
            <h1 className="text-sm font-medium title-font text-gray-900 underline">
              عرض المزيد
            </h1>
          </Link>
        </div>
        <Carousel
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all .5 ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {galleryItems2.map((item: any) => (
            <div key={item.id} className="p-4">
              <CardPost
                title={item.title}
                img={item.imageUrl}
                time={item.date}
                link={`/gallery/${item.id}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoGallery;

const galleryItems2 = [
  {
    id: 1,
    title: "طاقم العمل",

    date: "2024/05/25",
    imageUrl:
      "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1FKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c7d865527b72178c57f62f40833c4ce2795942ee/fe302167-cd4e-45eb-87f2-a258bc9eb41a.jpg",
  },
  {
    id: 1,
    title: "طاقم العمل",

    date: "2024/05/25",
    imageUrl:
      "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1FKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c7d865527b72178c57f62f40833c4ce2795942ee/fe302167-cd4e-45eb-87f2-a258bc9eb41a.jpg",
  },
  {
    id: 1,
    title: "طاقم العمل",
    date: "2024/05/25",
    imageUrl:
      "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1FKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c7d865527b72178c57f62f40833c4ce2795942ee/fe302167-cd4e-45eb-87f2-a258bc9eb41a.jpg",
  },
  {
    id: 1,
    title: "طاقم العمل",
    date: "2024/05/25",
    imageUrl:
      "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1FKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c7d865527b72178c57f62f40833c4ce2795942ee/fe302167-cd4e-45eb-87f2-a258bc9eb41a.jpg",
  },
  {
    id: 2,
    title: "طاقم العمل",
    date: "2024/05/25",
    imageUrl:
      "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce96b54dc1074b50f8a0bede5c8b4ea995555a63/3.jpg",
  },
  {
    id: 3,
    title: "مقر العمل",
    date: "2024/05/25",
    imageUrl:
      "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2dKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a853e8e9d6134cdfd95f31d20740022e924b2f62/f56208ef-38e9-4b3e-9a16-01a8f9d723b6.jpg",
  },
];
