"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./layer/Container";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import sofa from "../../public/sofa.png";
import cupboard from "../../public/cupboard.png";
import table from "../../public/table.png";
import bed from "../../public/bed.png";
import lamp from "../../public/lamp.png";
import drawer from "../../public/drawer.png";
import shelving from "../../public/shelving.png";
import Link from "next/link";

const Catalogue = () => {
  let category = [
    "chair",
    "stool",
    "desk",
    "kitchen",
    "vanitory",
    "mirror",
    "wardrove",
    "tv table",
    "garden",
  ];

  let items = [
    { title: "mattress", img: bed },
    { title: "sofa", img: sofa },
    { title: "table", img: table },
    { title: "lamp", img: lamp },
  ];
  let items2 = [
    // { title: "shelving", img: shelving },
    // { title: "cupboard", img: cupboard },
    // { title: "drawer", img: drawer },
    // { title: "shelving", img: shelving },
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
              {/*href={`/products/category/${item.title}`}*/}
              <Link href={`/products`} className="w-full flex flex-col gap-3">
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
              <Link href="/products" className="w-full flex flex-col gap-3">
                <div className="img md:px-6 xl:px-28 py-2 md:py-4 xl:py-16 border border-gray-300 group-hover:border-primary duration-300 overflow-hidden">
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
      </Container>
    </section>
  );
};

export default Catalogue;
