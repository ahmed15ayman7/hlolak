"use client"
import React, { useEffect, useState } from "react";
import CardPost from "../cards/cardPost";
import { BlogItem, getAllBlogs } from "@/lib/actions/Blog.actions";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { SkeletonCard } from "../cards/CardLoad";
import { Button } from "../ui/button";

const LatestPostsSection = ({isPage}:{isPage?:boolean}) => {
  const navigation = useRouter();
  const [showMore, setShowMore] = useState(false);
  const [blog_posts, setBlogs] = useState<BlogItem[]>([]);
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const items = await getAllBlogs();
        setBlogs(items!);
      } catch (err) {
        console.error("Failed to fetch gallery items:", err);
      }
    };

    fetchGalleryItems();
  }, []);
  // let blog_posts = [
  //   {
  //     title: "نصيحة عقارية",
  //     imageUrl:
  //       "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb01KIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d03ad87bc3f437b66ea62a326d6d24cfeb138d48/69913712-23a1-4597-b7c8-4974bed5e327.jpg",
  //     date: "2024/05/25",
  //     disc: "Lorem ipsum dolor sit amet, consectetur adip",
  //   },
  //   {
  //     title: "نصيحة عقارية",
  //     imageUrl:
  //       "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb0lKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ac40b9758910715295369215c5b9025080f60c38/WhatsApp%20Image%202024-05-25%20at%205.33.41%20PM.jpeg",
  //     date: "2024/05/25",
  //     disc: "Lorem ipsum dolor sit amet, consectetur adip",
  //   },
  //   {
  //     title: "الصفقة العقارية الناجحة",
  //     imageUrl:
  //       "https://holoolak.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb0VKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cfcd293d5d5fe124616ad636acad88e69e31c0eb/bb627dc8-7a29-4aee-a9db-95bc874d6629.jpg",
  //     date: "2024/05/25",
  //     disc: "Lorem ipsum dolor sit amet, consectetur adip",
  //   },
  // ];
  return (
    <section className="blog text-gray-700 body-font mb-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">
            اخر التدوينات
          </h1>
          <Button
              variant={"link"}
              onClick={() => {
                if (isPage) {
                  setShowMore(!showMore);
                } else {
                  navigation.push("/blog_posts");
                }
              }}>
              <h3 className="text-sm font-medium title-font text-gray-400 underline">
                عرض {showMore ? "أقل" : "المزيد"}
              </h3>
            </Button>
        </div>

            {blog_posts.length === 0 ? (
              <div className="flex justify-center gap-[5%] max-sm:gap-[1%] max-md:gap-[3%] flex-wrap">
                {[1, 2, 3].map((e) => (
                  <div
                    key={e}
                    className="w-[23%] max-md:w-[40%] max-sm:w-[47%] max-lg:w-1/4">
                    <SkeletonCard />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center gap-[2%] max-sm:gap-[1%] max-md:gap-[3%] flex-wrap">
                {blog_posts.map((item: any) => (
                  <div
                    key={item}
                    className="w-[23%] max-md:w-[40%] max-sm:w-[47%] max-lg:w-1/4">
                    <CardPost
                      title={item.title}
                      img={item.imageUrl}
                      time={format(item.date, "d/M/yyyy")}
                      link={`/blog_posts?id=${item._id}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

    </section>
  );
};

export default LatestPostsSection;
