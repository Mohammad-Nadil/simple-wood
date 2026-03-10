"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./layer/ProductCard";
import Breadcrumb from "./layer/Breadcrumb";
import Container from "./layer/Container";
import UiLoader from "./layer/UILoader";
import toast, { Toaster } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import api from "@/lib/api";

const ProductClient = () => {
  const searchParams = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState(true);
  const limitOption = [9, 12, 15, 18, 21, 24, 27, 30];
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(false);
  const [limit, setLimit] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedFilter, setSelectedFilter] = useState({
    category: searchParams?.get("category") || null,
    sort: searchParams?.get("sort") || null,
  });

  const filterRef = useRef(null);

  // Category groups
  const categoryGroups = [
    {
      name: "Beauty & Personal Care",
      categories: ["beauty", "fragrances", "skin-care"],
    },
    {
      name: "Furniture & Home",
      categories: ["furniture", "home-decoration", "kitchen-accessories"],
    },
    {
      name: "Electronics & Gadgets",
      categories: ["laptops", "smartphones", "tablets", "mobile-accessories"],
    },
    {
      name: "Men's Fashion",
      categories: ["mens-shirts", "mens-shoes", "mens-watches"],
    },
    {
      name: "Women's Fashion",
      categories: [
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches",
        "tops",
      ],
    },
    {
      name: "Miscellaneous",
      categories: [
        "groceries",
        "motorcycle",
        "sports-accessories",
        "sunglasses",
        "vehicle",
      ],
    },
  ];

  // Open and close sections
  const [openSections, setOpenSections] = useState(
    categoryGroups.reduce((acc, sec) => ({ ...acc, [sec.name]: false }), {}),
  );

  // Toggle section
  const toggleSection = (sectionName) => {
    setOpenSections((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = key === sectionName ? !prev[key] : false;
      });
      return newState;
    });
  };

  // Set active section
  useEffect(() => {
    if (selectedFilter.category) {
      const activeGroup = categoryGroups.find((group) =>
        group.categories.includes(selectedFilter.category),
      );

      if (activeGroup) {
        setOpenSections((prev) => {
          const newState = {};
          Object.keys(prev).forEach((key) => {
            newState[key] = key === activeGroup.name;
          });
          return newState;
        });
      }
    }
  }, [selectedFilter.category]);

  const sort = [
    { value: "newest", label: "Newest" },
    // { value: "oldest", label: "Oldest" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "name_asc", label: "Name: A → Z" },
    { value: "name_desc", label: "Name: Z → A" },
  ];

  // Sort function including newest/oldest
  const sortProducts = (productsArray, sortType) => {
    let sorted = [...productsArray];
    switch (sortType) {
      case "price_asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name_asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name_desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
        sorted.sort(
          (a, b) =>
            new Date(b.meta?.createdAt || b.meta?.updatedAt) -
            new Date(a.meta?.createdAt || a.meta?.updatedAt),
        );
        break;
      default:
        break;
    }
    return sorted;
  };

  // Fetch data
  const fetchData = async () => {
    try {
      setLoading(true);
      const skip = (currentPage - 1) * limit;
      let endpoint = "/products";

      if (selectedFilter.category) {
        endpoint = `/products/category/${selectedFilter.category}`;
      }

      const res = await api.get(endpoint, { params: { limit, skip } });
      let fetchedProducts = res.data.products;
      let total = res.data.total;

      // Apply sort frontend
      if (selectedFilter.sort) {
        fetchedProducts = sortProducts(fetchedProducts, selectedFilter.sort);
      }

      setProducts(fetchedProducts);
      setTotalProducts(total); // ✅ total update
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Clear filters
  const handleClearFilters = () => {
    setSelectedFilter({ category: null, sort: null });
    setCurrentPage(1);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.search = "";
      window.history.replaceState({}, "", url);
    }

    const radios = document.querySelectorAll("input[type=radio]");
    radios.forEach((radio) => (radio.checked = false));

    fetchData();
  };

  // Pagination
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => prev + 1);

  // Fetch on filter/page/limit change
  useEffect(() => {
    fetchData();
  }, [selectedFilter, currentPage, limit]);

  // Update URL params
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      Object.entries(selectedFilter).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
        else url.searchParams.delete(key);
      });
      window.history.replaceState({}, "", url);
    }
  }, [selectedFilter]);

  // Close filter on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilter(false);
      }
    };
    if (filter) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filter]);

  return (
    <section className="flex flex-col  md:gap-y-5 xl:gap-y-14">
      <Toaster position="top-center" />
      <Breadcrumb text={"Products"} />
      <Container className="flex gap-x-7 overflow-hidden w-full">
        {/* Filter Section */}
        <div
          ref={filterRef}
          className={`filter absolute sm:static w-[75vw] sm:w-1/4 sm:flex flex-col bg-white p-3 sm:py-0 rounded border border-secondary sm:border-transparent  z-40 ${
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

          {categoryGroups.map((group, index) => (
            <div key={index} className="py-3 ">
              <p
                className="font-medium text-gray-700 cursor-pointer flex justify-between items-center border-t  border-secondary py-2"
                onClick={() => toggleSection(group.name)}
              >
                {group.name}
                <span>
                  {openSections[group.name] ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </p>
              <ul
                className={`text-sm transition-[max-height] duration-500 ease-in-out overflow-hidden ${openSections[group.name] ? "max-h-50" : "max-h-0"}`}
              >
                {group.categories.map((cat, i) => (
                  <li key={i} className="flex items-center gap-x-2 text-lg">
                    <input
                      type="radio"
                      id={`category-${index}-${i}`}
                      name="category"
                      className="accent-primary"
                      checked={selectedFilter.category === cat}
                      onChange={() => {
                        setSelectedFilter((prev) => ({
                          ...prev,
                          category: cat,
                        }));
                        setCurrentPage(1);
                      }}
                    />
                    <label
                      htmlFor={`category-${index}-${i}`}
                      className="cursor-pointer text-gray-600"
                    >
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Clear button */}
          <div className="grid gap-x-3 mt-4">
            <button
              className="border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 duration-300"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="products !w-full sm:!w-3/4 flex flex-col gap-y-5 py-3 ">
          <div
            onClick={() => setFilter(false)}
            className={`absolute z-20 h-full w-full bg-black/50 top-0 left-0  ${filter ? "block" : "hidden"}`}
          ></div>
          {/* Sort & Limit */}
          <div className="sort flex items-center justify-between gap-x-3 text-gray-700 text-sm md:text-base">
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
                  onChange={(e) => {
                    setSelectedFilter((prev) => ({
                      ...prev,
                      sort: e.target.value,
                    }));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-md px-1.5 sm:px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  value={selectedFilter.sort || ""}
                >
                  {sort.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden md:flex items-center gap-x-2">
                <p className="font-medium">Show:</p>
                <select
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setCurrentPage(1);
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

          {/* Product Grid */}
          {loading ? (
            <div className="grid place-content-center min-h-[30vh]">
              <UiLoader />
            </div>
          ) : products.length === 0 ? (
            <div className="grid place-content-center min-h-[30vh] text-center text-gray-500">
              <p className="text-lg font-medium">
                No products found. Coming Soon!
              </p>
            </div>
          ) : (
            <>
              <div className="main w-full grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 md:gap-x-5 md:gap-y-7 xl:gap-x-8">
                {products.map((item) => (
                  <ProductCard
                    name={item.title}
                    image={item.images?.[0]}
                    price={item.price}
                    key={item.id}
                    id={item.id}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-3 flex-wrap">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1 px-4 py-2 rounded-md border duration-300 ${
                    currentPage === 1
                      ? "border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100"
                      : "border-gray-300 text-gray-700 hover:bg-primary hover:text-white"
                  }`}
                >
                  <FaAngleLeft /> Previous
                </button>

                <span className="px-4 py-2 rounded-md border border-primary font-medium">
                  {currentPage}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage * limit >= totalProducts}
                  className={`flex items-center gap-1 px-4 py-2 rounded-md border duration-300 ${
                    currentPage * limit >= totalProducts
                      ? "border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100"
                      : "border-gray-300 text-gray-700 hover:bg-primary hover:text-white"
                  }`}
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

export default ProductClient;
