import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: `url('/assets/preview.jpg')`,
      }}>
      <div className="overlay-background-image">
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-2xl text-center">
            <h1
              className="text-3xl sm:text-5xl lg:text-7xl text-white font-bold"
              data-aos="fade-up-left">
              حلول الامكان العقاريه
            </h1>
            <p className="mt-6 lg:text-3xl text-white" data-aos="fade-up-left">
            معنا تجد الحلول العقارية التي تناسب احتياجاتك

            </p>
            <p className="mt-6 lg:text-3xl text-white" data-aos="fade-up-left">
            نحن دليلك لتحقيق حلم المنزل المثالي

            </p>
            <div
              className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0"
              data-aos="fade-up-right">
              <Link href="/about_us">
                <p className="btn-blue p-5">نبذه عنا</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
