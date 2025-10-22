"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import ProductCard from "@/components/layer/ProductCard";
import UiLoader from "@/components/layer/UILoader";
import api from "@/lib/api";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState(true);
  const [woodTypeFilter, setWoodTypeFilter] = useState(true);
  const [finishFilter, setFinishFilter] = useState(true);
  const [filter, setFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const limitOption = [6, 9, 12, 15, 18, 21, 24, 27, 30];

  const [categoryFromUrl, setCategoryFromUrl] = useState(null);
  // const searchParams = useSearchParams();
  // const categoryFromUrl = searchParams.get("category");

  const [selectedFilter, setSelectedFilter] = useState({
    category: categoryFromUrl || null,
    wood_type: null,
    price: null,
    finish: null,
    sort: null,
    offset: 0,
  });
  const filterRef = useRef(null);

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
  let sort = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "name_asc", label: "Name: A → Z" },
    { value: "name_desc", label: "Name: Z → A" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = {};

        if (selectedFilter.category) {
          params.category = selectedFilter.category;
        }
        if (selectedFilter.wood_type) {
          params.wood_type = selectedFilter.wood_type;
        }
        if (selectedFilter.price) {
          params.price = selectedFilter.price;
        }
        if (selectedFilter.finish) {
          params.finish = selectedFilter.finish;
        }
        if (selectedFilter.sort) {
          params.sort = selectedFilter.sort;
        }

        params.limit = limit;
        params.offset = (page - 1) * limit;

        const res = await api.get(`/products`, { params });
        setProducts(res.data.data);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedFilter, page, limit]);

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


useEffect(() => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    setCategoryFromUrl(params.get("category"));
  }
}, []);

useEffect(() => {
  if (categoryFromUrl) {
    setSelectedFilter((prev) => ({ ...prev, category: categoryFromUrl }));
  }
}, [categoryFromUrl]);
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
              onClick={() => setCategoryFilter(!categoryFilter)}
            >
              Category
              <span>{categoryFilter ? <FaAngleUp /> : <FaAngleDown />}</span>
            </p>
            <ul
              className={`text-sm transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                categoryFilter ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              {category.map((cat, index) => (
                <li key={index} className="flex items-center gap-x-2 text-lg">
                  <input
                    type="radio"
                    id={`category-${index}`}
                    name="category"
                    className="accent-primary"
                    onChange={() =>
                      setSelectedFilter((prev) => ({ ...prev, category: cat }))
                    }
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
              onClick={() => setWoodTypeFilter(!woodTypeFilter)}
            >
              Wood Type
              <span>{woodTypeFilter ? <FaAngleUp /> : <FaAngleDown />}</span>
            </p>
            <ul
              className={`text-sm transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                woodTypeFilter ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              {wood_type.map((wood, index) => (
                <li key={index} className="flex items-center gap-x-2 text-lg">
                  <input
                    type="radio"
                    className="accent-primary"
                    name="woodType"
                    id={`wood-${index}`}
                    onChange={() =>
                      setSelectedFilter((prev) => ({
                        ...prev,
                        wood_type: wood,
                      }))
                    }
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
              onClick={() => setFinishFilter(!finishFilter)}
            >
              Finish
              <span>{finishFilter ? <FaAngleUp /> : <FaAngleDown />}</span>
            </p>
            <ul
              className={`text-sm transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                finishFilter ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              {finish.map((fin, index) => (
                <li key={index} className="flex items-center gap-x-2 text-lg">
                  <input
                    type="radio"
                    className="accent-primary"
                    name="finish"
                    id={`finish-${index}`}
                    onChange={() =>
                      setSelectedFilter((prev) => ({ ...prev, finish: fin }))
                    }
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
        <div className=" products !w-full sm:!w-3/4 flex flex-col gap-y-5 py-3 ">
          <div className="sort  flex items-center justify-between gap-x-3 text-gray-700 text-sm md:text-base">
            <button
              className="cursor-pointer py-1.5 px-2 border border-gray-300 text-xl sm:invisible rounded"
              onClick={() => setFilter(!filter)}
            >
              Filter
            </button>
            <div className="flex flex-col md:flex-row items-center gap-x-3 sm:gap-x-5">
              <div className="flex gap-x-3 items-center">
                <p className="font-medium">Sort by:</p>
                <select
                  onChange={(e) =>
                    setSelectedFilter((prev) => ({
                      ...prev,
                      sort: e.target.value,
                    }))
                  }
                  className="border border-gray-300 rounded-md px-1.5 sm:px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  {sort.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" hidden md:flex items-center gap-x-2 ">
                <p className="font-medium">Show:</p>
                <select
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1); // reset to first page when limit changes
                  }}
                  className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {limitOption.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid place-content-center  min-h-[30vh]">
              <UiLoader />
            </div>
          ) : (
            <>
              <div className="main w-full grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 md:gap-x-5 md:gap-y-7 xl:gap-x-8">
                {products.map((item) => (
                  <ProductCard
                    name={item.name}
                    image={item.image_path}
                    price={item.price}
                    key={item.id}
                    sku={item.sku}
                  />
                ))}
              </div>{" "}
              <div className="flex justify-center items-center gap-3 flex-wrap">
                {/* Previous Button */}
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className={`flex items-center gap-1 px-4 py-2 rounded-md border duration-300 
      ${
        page === 1
          ? "border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100"
          : "border-gray-300 text-gray-700 hover:bg-primary hover:text-white"
      }`}
                >
                  <FaAngleLeft /> Previous
                </button>

                {/* Current Page */}
                <span className="px-4 py-2 rounded-md border border-primary  font-medium">
                  {page}
                </span>

                {/* Next Button */}
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="flex items-center gap-1 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-primary hover:text-white duration-300"
                >
                  Next <FaAngleRight />
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default page;
