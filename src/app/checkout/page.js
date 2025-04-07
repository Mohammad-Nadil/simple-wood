"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Link from "next/link";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Card = () => {
  let [quantity, setQuantity] = useState(1);
  return (
    <div className=" card border-b border-[#bdbdbd]/50 grid grid-cols-5 gap-2 py-1.5 sm:py-3">
      <div className="image">
        <img
          src="/example.png"
          alt="Chair"
          className="w-full h-full aspect-square object-contain "
        />
      </div>
      <div className="info col-span-3 flex flex-col gap-y-1.5 md:gap-y-3 ">
        <p className="font-semibold text-sm ">Simple Wood Chair Collection</p>
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
      <p className=" price font-semibold">$ {quantity * 45}</p>
    </div>
  );
};

const page = () => {
  return (
    <section className="flex flex-col gap-y-1 md:gap-y-5 xl:gap-y-14">
      <Breadcrumb text="Checkout" />
      <Container className=" flex flex-col-reverse gap-5 sm:grid grid-cols-4  w-full py-5 xl:pb-14">
        <form className=" billingInfo col-span-2 px-2  flex flex-col gap-y-4">
          <h3 className="text-xl font-semibold border-b pb-2 border-[#bdbdbd]">
            Delivery Details
          </h3>
          <p className="text-gray-500">Estimate Shipping and Delivery</p>
          <input
            required
            type="text"
            placeholder="City *"
            className="border border-[#bdbdbd] placeholder:text-black p-2 w-full outline-none"
          />
          <input
            required
            type="text"
            placeholder="Town *"
            className="border border-[#bdbdbd] placeholder:text-black p-2 w-full outline-none"
          />
          <input
            required
            type="text"
            placeholder="street address * "
            className="border border-[#bdbdbd] placeholder:text-black p-2 w-full outline-none"
          />
          <input
            type="text"
            placeholder="Full Address "
            className="border border-[#bdbdbd] placeholder:text-black p-2 w-full outline-none"
          />
          <input
            required
            type="text"
            placeholder="Phone *"
            className="border border-[#bdbdbd] placeholder:text-black p-2 w-full outline-none"
          />
          <input
            type="email"
            placeholder="Email "
            className="border border-[#bdbdbd] placeholder:text-black p-2 w-full outline-none"
          />
          <div className="flex flex-col gap-y-1 text-lg">
            <label className="flex items-center gap-2">
              <input required type="radio" name="Delivery type" /> Standard
              Delivery $ 5.00
            </label>
            <label className="flex items-center gap-2">
              <input required type="radio" name="Delivery type" /> Express
              Delivery $ 15.00
            </label>
          </div>
          <div className="border-t border-b border-[#bdbdbd] text-lg flex flex-col py-2">
            <p>Subtotal: $45.00</p>
            <p>tax: $5.00</p>
          </div>
          <p className="font-semibold text-lg">Total: $50.00 </p>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="  py-3 px-5 border hover:border-primary border-transparent hover:scale-110 duration-300"
            >
              Back
            </button>
            <Link
              href="/confirm"
              className="bg-green-500 text-white  py-3 px-5 hover:bg-primary hover:scale-110 duration-300"
            >
              Next
            </Link>
          </div>
        </form>
        <div className=" orderSummary col-span-2 flex items-start justify-center">
          <div className=" xl:w-2/3 bg-secondary shadow-md rounded-lg py-4 px-3 lg:px-6 flex flex-col md:justify-center gap-y-1">
            <h3 className="text-xl font-semibold border-b pb-2 border-[#bdbdbd]">
              Order Summary
            </h3>
            <p className="text-gray-500 text-xs md:text-sm">
              {" "}
              3 items in your cart{" "}
            </p>
            <div className="flex flex-col gap-y-1">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
