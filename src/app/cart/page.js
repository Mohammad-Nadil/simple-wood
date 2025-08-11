"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Link from "next/link";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Card = () => {
  let [quantity, setQuantity] = useState(1);
  return (
    <div className=" mainCard w-full text-left border-b border-[#e5e5e5]">
      <div className="head hidden sm:grid grid-cols-6 gap-x-4 text-xl">
        <p className="font-semibold col-span-3">Product</p>
        <p className="font-semibold">Price</p>
        <p className="font-semibold">Quantity</p>
        <p className="font-semibold">Total</p>
      </div>
      <div className="body grid grid-cols-3 sm:grid-cols-6 gap-x-3 xl:gap-x-4 relative">
        <div className="absolute top-0 translate-y-full right-0 bg-red-300 text-white p-0.5 hover:bg-red-500 text-lg hover:text-xl duration-300 ">
          <IoClose />
        </div>
        <div className="py-4 flex  gap-4  col-span-3 ">
          <img
            src="/example.png"
            alt="Chair"
            className="w-1/4 aspect-square object-contain rounded"
          />
          <div>
            <p className="font-semibold text-lg">
              Simple Wood Chair Collection
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">Wood type :</span> oak
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">Finish :</span> medium
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-y-1">
          <p className="sm:hidden font-semibold text-sm sm:text-base ">Price</p>
          <p>$45.00</p>
        </div>
        <div className="py-4 flex flex-col gap-y-1 items-start ">
          <p className="sm:hidden font-semibold text-sm sm:text-base ">
            Quantity
          </p>
          <div className="flex items-center gap-x-2 sm:gap-x-4 sm:px-2  w-full ">
            <button
              className="text-gray-500 text-xl cursor-pointer "
              onClick={() => setQuantity(quantity + 1)}
            >
              <FaPlus />
            </button>

            <p>{quantity}</p>
            <button
              className="text-gray-500 text-xl cursor-pointer "
              onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
            >
              <FaMinus />
            </button>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-y-1">
          <p className="sm:hidden font-semibold text-sm sm:text-base ">Total</p>
          <p>$45.00</p>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <section className="flex-grow">
      <Breadcrumb text="Shopping Cart" />
      <Container className=" py-5 md:py-10 xl:py-20 flex flex-col  lg:grid grid-cols-3 gap-6">
        <div className=" cartProducts md:col-span-2 flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold ">Shopping Cart</h2>
          <div className="bg-white cart shadow-md rounded-lg px-3 sm:p-4 flex flex-col gap-y-3 md:gap-y-4">
            <Card />
            <Card />
          </div>
          <div className="couponCode flex gap-2 sm:gap-4 text-sm sm:text-base text-nowrap">
            <input
              type="text"
              placeholder="Discount Code"
              className="border p-1 sm:p-2 w-2/3 sm:w-1/3 outline-none"
            />
            <button className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-800 hover:scale-110 duration-300 ">
              Apply Discount
            </button>
          </div>
        </div>

        <div className=" billingInfo flex flex-col justify-center  it ">
          <div className="bg-secondary shadow-md rounded-lg py-4 px-6 flex flex-col md:justify-center gap-y-4">
            <h3 className="text-xl font-semibold border-b pb-2 border-[#bdbdbd]">
              Summary
            </h3>
            <div className=" border-b border-[#bdbdbd] text-lg flex flex-col pb-2">
              <p>Subtotal: $45.00</p>
              <p>tax: $5.00</p>
            </div>
            <div> <p className="font-semibold text-lg">Discount: $5.00</p>
            <p className="font-semibold text-lg">Total: $45.00 + Delivery</p></div>
           
            <Link href="/checkout" >
              <button className="bg-green-500 text-white w-full py-2 hover:bg-primary hover:scale-110 duration-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
