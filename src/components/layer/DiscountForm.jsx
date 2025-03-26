import React from "react";
import Container from "./Container";
import { FaArrowRight } from "react-icons/fa6";

const DiscountForm = () => {
  return (
    <div className=" py-5 xl:py-16 px-3 xl:px-0 ">
      <Container className="py-11 px-6 xl:px-28 flex flex-col sm:flex-row items-center justify-between gap-y-3.5 bg-[#EBEFE5]">
        <div className="left sm:w-1/2 flex flex-col gap-y-5">
          <h2 className=" text-3xl md:text-4xl font-medium  text-center md:text-start">
            Get <span className="text-primary font-semibold">10 %</span>{" "}
            Discount
          </h2>
          <p className="text-gray-600 text-sm md:text-base  text-center md:text-start">
            Get 10% discount with notified about the latest news and updates, no
            spam, we protect your privacy
          </p>
        </div>
        <div className="right sm:w-1/2 flex justify-end xl:justify-center">
          <div className="lg:w-1/2 relative ">
            <input
              className="bg-white rounded-full px-5 py-2  w-full outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <div className="icon absolute right-2 top-1/2 -translate-y-1/2 text-primary"><FaArrowRight  /></div>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiscountForm;
