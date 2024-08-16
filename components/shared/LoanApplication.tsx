"use client";
import ServiceForm from "../forms/ServiceForm"
const LoanApplication = ({NameService}:{NameService?:string}) => {


  return (
    <section className="blog text-gray-300 body-font flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">
            تقدم بطلبك الآن
          </h1>
        </div>
        <div
          className="flex flex-nowrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center items-center"
          data-aos="fade-down">
          <div className="w-full mx-auto sm:py-6 text-gray-300 sm:w-4/5 md:w-4/5 lg:w-11/12 xl:max-w-2xl mb-6">
            <ServiceForm NameService={NameService}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanApplication;
