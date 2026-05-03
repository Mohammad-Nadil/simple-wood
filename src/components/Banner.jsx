"use client";
import React, { useState } from "react";
import Container from "./layer/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
import laptops from "../../public/laptops.webp";
import smartphones from "../../public/banner/phone.jpg";
import mensShirts from "../../public/mens-shirts.webp";
import tops from "../../public/tops.webp";
import womenDresses from "../../public/womens-dresses.webp";
import car1 from "../../public/banner/car1.jpg";
import car2 from "../../public/banner/car2.jpg";
import car3 from "../../public/banner/car.webp";
import shoes1 from "../../public/banner/shoes1.jpg";
import shoes2 from "../../public/banner/shoes2.jpg";
import shoes3 from "../../public/banner/shoes3.jpg";
import watches from "../../public/banner/watches.jpg";
import watches2 from "../../public/banner/watches2.jpg";
import gadgets1 from "../../public/banner/electronic1.jpg";
import jwellery from "../../public/banner/jwellery.webp";
import bag from "../../public/banner/bags.webp";
import gadgets2 from "../../public/banner/electronic2.jpg";
import mens1 from "../../public/banner/mens1.jpg";
import mens2 from "../../public/banner/mens2.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {

  const items = [
    {
      title: ["Furniture & Home", "Collection"],
      des: "Upgrade your home with our hand-picked furniture and decoration items.",
      img: [img1, img2, img3],
      category: "furniture",
    },
    {
      title: ["Electronics & Gadgets", "Collection"],
      des: "Explore the latest tech gadgets and electronics for work and play.",
      img: [laptops, gadgets1, smartphones],
      category: "laptops",
    },
    {
      title: ["Men's Fashion", "Collection"],
      des: "Stay stylish with our premium selection of shirts, shoes, and watches.",
      img: [mensShirts, mens1, mens2],
      category: "mens-shirts",
    },
    {
      title: ["Women's Fashion", "Collection"],
      des: "Discover elegant dresses, bags, shoes, and more for every occasion.",
      img: [bag, womenDresses, tops],
      category: "womens-dresses",
    },
    {
      title: ["Shoes & Accessories", ""],
      des: "Step out in style with our exclusive shoes, sunglasses, and more.",
      img: [shoes1, watches, shoes2],
      category: "mens-shoes",
    },
    {
      title: ["Jewelry & Watches", ""],
      des: "Add sparkle to your look with our fine jewelry and stylish watches.",
      img: [watches, watches2, jwellery],
      category: "womens-jewellery",
    },
    {
      title: ["Vehicle & Miscellaneous", ""],
      des: "From sports accessories to vehicle essentials, find it all here.",
      img: [car1, car2, car3],
      category: "vehicle",
    },
  ];

  const item = {
    title: ["Furniture & Home", "Collection"],
    des: "Upgrade your home with our hand-picked furniture and decoration items.",
    img: [img1, img2, img3],
  };

  return (
    <section className="bg-[url('/bannerBg.png')] bg-fixed bg-cover bg-center py-10  ">
      <Container className="">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full  "
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className=" ">
              <div className="w-full">
                <div className="flex items-center flex-col-reverse sm:flex-row w-full px-5 xl:px-10">
                  <div className="title w-full sm:w-7/12 flex flex-col gap-y-5 md:gap-y-10 py-5 items-center text">
                    <div className="text-white flex flex-col gap-y-2 sm:gap-y-4 sm:w-2/3">
                      <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-start mb-3 sm:mb-0 ">
                        {item.title.map((line, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center sm:items-start "
                          >
                            {line}
                            {idx < item.title.length - 1 && <br />}
                          </div>
                        ))}
                      </h1>
                      <p className="text-sm lg:text-base xl:text-lg text-center sm:text-start w-5/6 mx-auto sm:mx-0 sm:w-full">
                        {item.des}
                      </p>
                    </div>
                    <div className="btn sm:w-2/3">
                      <Link
                        href={`/products?category=${item.category}`}
                      >
                        <button className=" py-1 sm:py-2 lg:py-3 px-4 md:px-5 bg-primary hover:bg-primary/70 rounded flex items-center gap-x-3 duration-300 hover:scale-110">
                          Shop Now <FaArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="gallery w-full sm:w-5/12  grid grid-cols-5 grid-rows-2 gap-4  items-center">
                    <div className="col-span-2 row-span-1 overflow-hidden">
                      <Image
                        src={item.img[0]}
                        alt="banner image"
                        className="w-full h-full object-cover hover:scale-110 duration-500 bg-black"
                      />
                    </div>
                    <div className="col-span-3 row-span-2 overflow-hidden">
                      <Image
                        src={item.img[1]}
                        alt="banner image"
                        className="w-full h-full object-cover hover:scale-110 duration-500 bg-neutral-500"
                      />
                    </div>
                    <div className="col-span-2 row-span-1 overflow-hidden">
                      <Image
                        src={item.img[2]}
                        alt="banner image"
                        className="w-full h-full object-cover hover:scale-110 duration-500 bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute hidden sm:flex flex-col top-1/2 left-3 gap-y-5 -translate-y-1/2 text-gray-500 z-50 ">
          {[FaFacebookF, FaYoutube, FaTwitter, FaGoogle].map((Icon, index) => (
            <div
              key={index}
              transition={{ duration: 0.3 }}
              className="cursor-pointer hover:text-primary  hover:scale-110 duration-300 "
            >
              <Icon />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
