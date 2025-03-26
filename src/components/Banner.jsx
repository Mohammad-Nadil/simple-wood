"use client";
import React, { useState } from "react";
import Container from "./layer/Container";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import img1 from "../../public/banner1.png";
import img2 from "../../public/banner2.png";
import img3 from "../../public/banner3.png";
import Image from "next/image";

const Banner = () => {
  let [active, setActive] = useState(0);
  let items = ["1st banner", "2nd banner", "3rd banner", "4th banner"];

  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul
          className="flex gap-x-2.5 items-center  sm:w-1/4 justify-center"
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` text-transparent duration-300 aspect-square rounded-full w-4 h-4 ${
          active == i ? "   bg-primary " : "  bg-gray-400 "
        }`}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };
  return (
    <section className="bg-[url('/bannerBg.png')] bg-cover bg-center py-14 pt-20 md:pt-32">
      <Container>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="w-full">
              <div className=" flex  items-center flex-col-reverse sm:flex-row w-full px-5 xl:px-10">
                <div className="title w-full sm:w-1/2  flex flex-col gap-y-5 md:gap-y-10 py-5 items-center">
                  <div className="text-white flex flex-col gap-y-2 sm:gap-y-4 sm:w-2/3">
                    <h1 className="  text-2xl md:text-4xl font-bold text-center sm:text-start">
                      SimpleWood <br /> Chair Collection
                    </h1>
                    <p className="text-sm md:text-base text-center sm:text-start">
                      Find hand-curated collections that fit your style, space,
                      and budget.
                    </p>
                  </div>
                  <div className="btn sm:w-2/3 ">
                    <button className="py-2 md:py-3 px-4 md:px-5 bg-primary hover:scale-110 duration-300 hover:bg-primary/70 rounded flex items-center gap-x-3">
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="gallery w-full sm:w-1/2  grid grid-cols-5 grid-rows-2 gap-4  items-center">
                  <div className="col-span-2 row-span-1">
                    <Image
                      src={img1}
                      alt="banner image"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="col-span-3 row-span-2">
                    <Image
                      src={img2}
                      alt="banner image"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="col-span-2 row-span-1">
                    <Image
                      src={img3}
                      alt="banner image"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute hidden sm:flex flex-col top-1/2 left-3 gap-y-5 -translate-y-1/2  text-gray-500">
          {[<FaFacebookF />, <FaYoutube />, <FaTwitter />, <FaGoogle />].map(
            (item, index) => (
              <div
                key={index}
                className="cursor-pointer hover:text-primary duration-300"
              >
                {item}
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
