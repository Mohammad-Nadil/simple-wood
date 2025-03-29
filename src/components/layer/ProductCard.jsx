import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <Link className="group" href="/products/1">
    <div className=" flex flex-col sm:gap-3 ">
      <div className="img p-4 xl:p-11 overflow-hidden border-secondary border-2 hover:border-primary duration-300">
        <img
          src="/example.png"
          alt="image"
          className="w-full aspect-[213/262] group-hover:scale-110 duration-300"
        />
      </div>
      <div className="info flex flex-col ">
        <p className="name font-semibold text-sm sm:text-base">Chair</p>
        <p className="price font-bold text-sm sm:text-base">$44.00</p>
        <div className="review flex items-center gap-x-2 sm:gap-x-3 text-xs md:text-base">
          <div className="icon flex sm:gap-x-1 text-amber-300">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-400" />
            <FaStar className="text-gray-400" />
          </div>
          <p> (5) reviews</p>
        </div>
      </div>
    </div></Link>
  );
};

export default ProductCard;
