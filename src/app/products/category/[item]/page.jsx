"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import ProductCard from "@/components/layer/ProductCard";
import UiLoader from "@/components/layer/UILoader";
import api from "@/lib/api";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState(null);
  const [filter, setFilter] = useState(false);
  const filterRef = useRef(null);

  const { item } = useParams();

  // const  params = URLSearchParams(item);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchProducts()
  //     .then((res) => {
  //       setProducts(res);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/products?category=${item}`);
        setProducts(res.data.data);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <section className="flex flex-col gap-y-1 md:gap-y-5 xl:gap-y-14">
      <Toaster position="top-center" />
      <Breadcrumb text={"Products"} />
      <Container className="flex gap-x-7 overflow-hidden w-full">
        {/* Filter Section */}
        <div
          ref={filterRef}
          className={`filter absolute sm:static w-[80vw] sm:w-1/4 sm:flex flex-col  bg-white p-3 sm:py-0 rounded  border border-secondary sm:border-transparent ${
            filter ? "translate-x-0" : "translate-x-[-120%]"
          } transition-transform duration-500 ease-in-out sm:translate-x-0`}
        >
          <div className="flex justify-between items-center">
            {" "}
            <p className="text-lg font-semibold py-3">Filters</p>
            <div
              className="close sm:hidden text-2xl"
              onClick={() => setFilter(false)}
            >
              <IoMdClose />
            </div>
          </div>

          {/* Category Section */}
          <div>
            <p
              className="font-medium text-gray-700 cursor-pointer flex justify-between items-center border-t border-b border-secondary py-2"
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
              className="font-medium text-gray-700 cursor-pointer flex justify-between items-center border-t border-b border-secondary py-2"
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
              className="font-medium text-gray-700 cursor-pointer flex justify-between items-center border-t border-b border-secondary py-2"
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
        <div className=" products sm:!w-3/4 flex flex-col gap-y-5 py-3 md:py-0">
          <div className="sort  flex items-center justify-between gap-x-3 text-gray-700 text-sm md:text-base">
            <button
              className="cursor-pointer py-1.5 px-2 border border-gray-300 text-xl sm:invisible rounded"
              onClick={() => setFilter(!filter)}
            >
              Filter
            </button>
            <div className="flex gap-x-3 items-center">
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

          {loading ? (
            <div className="grid place-content-center  min-h-[30vh]">
              <UiLoader />
            </div>
          ) : (
            <div className="main w-full grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7">
              {products.map((item) => (
                <ProductCard
                  name={item.name}
                  image={item.image_path}
                  price={item.price}
                  key={item.id}
                  sku={item.sku}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default page;
