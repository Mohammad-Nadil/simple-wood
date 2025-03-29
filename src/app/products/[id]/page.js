"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import { useState } from "react";
import { FaBars, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const page = () => {
  let [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Breadcrumb text="Product details" />
      <Container>
        <div className="main">
          <div className="top flex gap-x-8 items-center py-16">
            <div className="images w-3/5">
              <img src="/sliderExample.png" />
            </div>
            <div className="info w-2/5 flex flex-col gap-5">
              <h1 className="text-4xl font-light">Simple Wood Chair</h1>
              <div className="flex justify-between items-center">
                <div className="reviewIcon flex sm:gap-x-1 text-amber-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-500" />
                  <FaStar className="text-gray-500" />
                </div>
                <p> (5) reviews</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>As low as</p>
                  <p className="text-4xl font-medium">$44.00</p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2 font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <p> in stock</p>
                  </div>
                  <p>sku: 24-MB05</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="quantity flex items-center gap-x-5">
                <p>Quantity</p>
                <div className="flex items-center gap-x-4 border border-secondary  ">
                  <button
                    className="text-gray-500 text-xl cursor-pointer py-2 px-3"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="text-gray-500 text-xl cursor-pointer py-2 px-3"
                    onClick={() =>
                      setQuantity(quantity === 1 ? 1 : quantity - 1)
                    }
                  >
                    <FaMinus />
                  </button>
                </div>
              </div>
              <div className="add to cart btn">
                <button className="text-white bg-primary py-3 px-5 font-semibold hover:bg-primary/80 hover:scale-125 duration-300">
                  Add to cart
                </button>
              </div>
              <div className="more features text-gray-500 flex items-center gap-x-8">
                <a className="addToWishlist cursor-pointer  flex items-center gap-x-2 font-semibold">
                  <FaRegHeart />
                  <p>Add to wishlist</p>
                </a>
                <a className="addToCompare cursor-pointer  flex items-center gap-x-2 font-semibold">
                  <FaBars />
                  <p>Add to compare</p>
                </a>
                <a className="email cursor-pointer flex items-center gap-x-2">
                  <IoMail />
                  <p>Email</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
