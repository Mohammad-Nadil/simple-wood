"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import ProductCard from "@/components/layer/ProductCard";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const page = () => {
  const [openSection, setOpenSection] = useState(null);
  const [filter, setFilter] = useState(false);
  const filterRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilter(false);
      }
    };

    if (filter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filter]);

  let items = new Array(12).fill(0);
  let category = [
    "sofa",
    "chair",
    "stool",
    "table",
    "desk",
    "kitchen",
    "vanitory",
    "matress",
    "mirror",
    "wardrove",
    "lamp",
    "tv table",
    "garden",
  ];
  let wood_type = [
    "walnut",
    "maple",
    "oak",
    "pine",
    "eucalyptus",
    "bamboo",
    "teak",
    "cedar",
  ];
  let finish = ["dark", "medium", "light", "natural"];
  return (
    <div className="flex flex-col gap-y-1 md:gap-y-5 xl:gap-y-14">
      <Breadcrumb text={"Products"} />
      <Container className="flex gap-x-7 overflow-hidden">
        {/* Filter Section */}
        <div
          ref={filterRef}
          className={`filter absolute sm:static w-[80vw] sm:w-1/4 sm:flex flex-col gap-3 bg-green-200 sm:bg-white p-3 sm:p-0 rounded ${
            filter ? "translate-x-0" : "translate-x-[-120%]"
          } transition-transform duration-500 ease-in-out sm:translate-x-0`}
        >
          <p className="text-lg font-semibold">Filters</p>

          {/* Category Section */}
          <div>
            <p
              className="font-medium text-gray-700 cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection("category")}
            >
              Category
              <span>
                {openSection === "category" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </p>
            <ul
              className={`text-sm transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openSection === "category" ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              {category.map((cat, index) => (
                <li key={index} className="flex items-center gap-x-2 text-lg">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    id={`category-${index}`}
                  />
                  <label
                    htmlFor={`category-${index}`}
                    className="cursor-pointer text-gray-600"
                  >
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Wood Type Section */}
          <div>
            <p
              className="font-medium text-gray-700 cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection("wood")}
            >
              Wood Type
              <span>
                {openSection === "wood" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </p>
            <ul
              className={`text-sm transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openSection === "wood" ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              {wood_type.map((wood, index) => (
                <li key={index} className="flex items-center gap-x-2 text-lg">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    id={`wood-${index}`}
                  />
                  <label
                    htmlFor={`wood-${index}`}
                    className="cursor-pointer text-gray-600"
                  >
                    {wood}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Finish Section */}
          <div>
            <p
              className="font-medium text-gray-700 cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection("finish")}
            >
              Finish
              <span>
                {openSection === "finish" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </p>
            <ul
              className={`text-sm transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openSection === "finish" ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              {finish.map((fin, index) => (
                <li key={index} className="flex items-center gap-x-2 text-lg">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    id={`finish-${index}`}
                  />
                  <label
                    htmlFor={`finish-${index}`}
                    className="cursor-pointer text-gray-600"
                  >
                    {fin}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sm:w-3/4 flex flex-col gap-y-5 py-3 md:py-0">
          <div className="sort flex items-center justify-between gap-x-3 text-gray-700 text-sm md:text-base">
            <button
              className="cursor-pointer py-1.5 px-2 border border-gray-300 text-xl sm:invisible"
              onClick={() => setFilter(!filter)}
            >
              Filter
            </button>
            <div className="flex gap-x-3 items-center" >
              <p className="font-medium">Sort by:</p>
              <select className="border border-gray-300 rounded-md px-1.5 sm:px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition">
                <option>Default sorting</option>
                <option>Price ( high to low )</option>
                <option>Price ( low to high )</option>
                <option>Name ( A - Z )</option>
                <option>Name ( Z - A )</option>
                <option>Oldest</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="main w-full grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7">
            {items.map((item, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
