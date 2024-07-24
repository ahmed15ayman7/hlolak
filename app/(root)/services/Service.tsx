"use client";
import LoanApplication from "@/components/shared/LoanApplication";
import Services from "@/components/shared/Services";
import ServicesSection from "@/components/shared/ServicesSection";
import { servicesArray } from "@/constant/services";
import { useSearchParams } from "next/navigation";
import React from "react";

const Service = () => {
  const searchParams = useSearchParams();
  let NameService = searchParams.get("s");
  return NameService !== undefined && NameService !== null ? (
    <LoanApplication NameService={NameService} />
  ) : (
    <div className=" flex flex-col items-center">
      {/* <ServicesSection /> */}
      {servicesArray.map((service) => (
        <Services
          key={service.img}
          img={service.img}
          title={service.title}
          subTitle={service.subTitle}
          link={service.link}
          desc={service.desc}
        />
      ))}
    </div>
  );
};

export default Service;
