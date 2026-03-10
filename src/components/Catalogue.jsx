"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./layer/Container";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
// import sofa from "../../public/sofa.png";
// import cupboard from "../../public/cupboard.png";
// import table from "../../public/table.png";
// import bed from "../../public/bed.png";
// import lamp from "../../public/lamp.png";
// import drawer from "../../public/drawer.png";
// import shelving from "../../public/shelving.png";
import furniture from "../../public/sofa.png";
import homeDecoration from "../../public/home-decorations.webp";
import groceries from "../../public/groceries.webp";
import laptops from "../../public/laptops.webp";
import smartphones from "../../public/smartphones.webp";
import fragrances from "../../public/fragrances.webp";
import skincare from "../../public/skincare.jpg";
import mensShirts from "../../public/mens-shirts.webp";
import tops from "../../public/tops.webp";
import womensDresses from "../../public/womens-dresses.webp";
import Link from "next/link";

const CatalogueCard = ({ item, index }) => {
  return (
    <div
      className=" border border-gray-200 hover:border-primary duration-300 relative group cursor-pointer"
    >
      <Link
        href={`/products?category=${item.title}`}
        className="w-full flex flex-col gap-3"
      >
        <div className="img md:px-6 xl:px-28 py-3 md:py-8 xl:py-16  overflow-hidden">
          <Image
            src={item.img}
            alt="Product img "
            className="group-hover:scale-125 duration-500"
          />
        </div>
        <div className="title flex gap-2 md:text-xl items-center font-semibold sm:absolute bottom-0 left-0 -translate-y-full translate-x-1/10 ">
          <FaPlus className="text-primary rounded-full bg-primary/30 p-0.5" />
          <p className="capitalize group-hover:text-primary duration-300">
            {item.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

const Catalogue = () => {
  let category = [
    { title: "furniture", img: furniture },
    { title: "laptops", img: laptops },
    { title: "home-decor", img: homeDecoration },
    { title: "groceries", img: groceries },
    { title: "tops", img: tops },
    { title: "smartphones", img: smartphones },
    { title: "fragrances", img: fragrances },
    { title: "mens-shirts", img: mensShirts },
    { title: "womens-dress", img: womensDresses },
    { title: "skincare", img: skincare },
  ];

  let items = category.slice(0, 5);
  let items2 = category.slice(5, 10);

  return (
    <section className="overflow-x-clip">
      <Container className="flex gap-x-2 md:gap-x-5 py-5">
        <div className="left w-1/2 flex flex-col gap-2 md:gap-5">
          {items.map((item, index) => (
            <CatalogueCard item={item} index={index} key={index} />
          ))}
        </div>

        <div className="right w-1/2 flex flex-col gap-5">
          {items2.map((item, index) => (
            <CatalogueCard item={item} index={index} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Catalogue;
