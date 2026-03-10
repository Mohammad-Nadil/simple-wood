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

const Catalogue = () => {
  let category = [
    "furniture",
    "home-decoration",
    "groceries",
    "laptops",
    "smartphones",
    "fragrances",
    "skincare",
    "mens-shirts",
    "tops",
    "womens-dresses",
  ];

  let items = [
    { title: "furniture", img: furniture },
    { title: "laptops", img: laptops },
    { title: "home-decoration", img: homeDecoration },
    { title: "groceries", img: groceries },
    { title: "tops", img: tops },
  ];
  let items2 = [
    { title: "smartphones", img: smartphones },
    { title: "fragrances", img: fragrances },
    { title: "mens-shirts", img: mensShirts },
    { title: "womens-dresses", img: womensDresses },
    { title: "skincare", img: skincare },
  ];

  return (
    <section>
      <Container className="flex gap-x-2.5 md:gap-x-5 py-5">
        <div className="left w-1/2 flex flex-col gap-2 md:gap-5">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className=" group"
            >
              <Link
                href={`/products?category=${item.title}`}
                className="w-full flex flex-col gap-3"
              >
                <div className="img md:px-6 xl:px-28 py-3 md:py-8 xl:py-16 border border-gray-300 group-hover:border-primary duration-300 overflow-hidden">
                  <Image
                    src={item.img}
                    alt="Product img "
                    className="group-hover:scale-125 duration-500"
                  />
                </div>
                <div className="title flex gap-2 md:text-xl items-center font-semibold">
                  <FaPlus className="text-primary rounded-full bg-primary/30 p-0.5" />
                  <p className="capitalize group-hover:text-primary duration-300">
                    {item.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="right w-1/2 flex flex-col gap-5">
          {items2.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className=" group"
            >
              <Link
                href={`/products?category=${item.title}`}
                className="w-full flex flex-col gap-3"
              >
                <div className="img md:px-6 xl:px-28 py-2 md:py-4 xl:py-16 border border-gray-300 group-hover:border-primary duration-300 overflow-hidden object-center">
                  <Image
                    src={item.img}
                    alt="Product img "
                    className="group-hover:scale-125 object-center duration-500"
                  />
                </div>
                <div className="title flex gap-2 md:text-xl items-center font-semibold">
                  <FaPlus className="text-primary rounded-full bg-primary/30 p-0.5" />
                  <p className="capitalize group-hover:text-primary duration-300">
                    {item.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Catalogue;
