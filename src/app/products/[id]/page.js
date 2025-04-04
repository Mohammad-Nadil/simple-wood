"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaStar,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import img from "../../../../public/productDetail.png";
import ProductCard from "@/components/layer/ProductCard";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={` bg-secondary absolute z-50 rounded-full   right-0 top-1/2 -translate-y-1/2 p-2 lg:text-2xl ${className}`}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={` bg-secondary absolute z-50 rounded-full  left-0 top-1/2 -translate-y-1/2 p-2 lg:text-2xl ${className}`}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

const Accordion = ({ title, children }) => {
  let [open, setOpen] = useState(false);
  return (
    <div className="main  ">
      <div
        onClick={() => setOpen(!open)}
        className={`title font-semibold flex items-center gap-x-5 text-lg  py-3 md:py-5 px-2 md:px-5 cursor-pointer border-secondary ${
          open ? "bg-[#f0f0f0]" : " border-t border-b "
        } `}
      >
        <FaPlus
          className={` duration-300 ${open ? "rotate-45" : "rotate-0"} `}
        />
        <p className=" text-lg lg:text-xl ">{title}</p>
      </div>
      <div
        className={`content font-light text-sm lg:text-base transition-all  duration-500  px-12 ${
          open ? "py-4 max-h-80" : " max-h-0 overflow-hidden"
        } `}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};

const page = () => {
  let [quantity, setQuantity] = useState(1);
  let [active, setActive] = useState(0);

  let exampleData = {
    id: "4775af1e-553e-40aa-a418-587e8417d3ad",
    name: "Elegant Desk Lamp",
    category: "lamp",
    description:
      "This elegant desk lamp features a modern design with a sleek metal finish, providing a stylish addition to any workspace or study. It offers adjustable brightness and a flexible neck for optimal lighting.",
    wood_type: "walnut",
    finish: "dark",
    dimensions: {
      depth: 5,
      width: 10,
      height: 15,
    },
    price: 89.99,
    weight: 2.5,
    image_path:
      "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/09ff3d60-6fe9-4d74-a2c8-6973af33ab4f.jpeg",
    stock: 1000,
    sku: "50114a20-c6e8-4276-b875-0e0132e546ab",
    status: "active",
    created_at: "2024-11-10T15:00:43.110899+00:00",
    updated_at: "2025-01-28T08:00:00.506818+00:00",
    featured: true,
    discount_price: 87,
    tags: null,
  };

  let settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="w-full flex items-center justify-center">
        <ul
          className="w-full flex items-center gap-x-2 justify-center"
          style={{ margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`bg-primary text-transparent w-3 h-3 rounded-full ${
          active === i ? "bg-primary" : "bg-primary/30"
        }`}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };

  return (
    <div>
      <Breadcrumb text="Product details" />
      <Container className=" py-5 2xl:py-20">
        <div className="main px-1.5 lg:px-0">
          <div className="top flex flex-col lg:flex-row gap-x-8 gap-y-12 items-center py-5 lg:py-10 xl:py-12 2xl:py-16">
            <div className="images w-full lg:w-7/12 xl:w-3/5 aspect-video border border-secondary p-2 xl:p-8 slider-container relative">
              <Slider {...settings}>
                <Image
                  className="w-full h-full object-contain"
                  width={""}
                  height={""}
                  src={img}
                />
                <Image
                  className="w-full h-full object-contain scale-x-[-1]  "
                  width={""}
                  height={""}
                  src={img}
                />
                <Image
                  className="w-full h-full object-contain"
                  width={""}
                  height={""}
                  src={img}
                />
                <Image
                  className="w-full h-full object-contain scale-x-[-1] "
                  width={""}
                  height={""}
                  src={img}
                />
              </Slider>
            </div>
            <div className="info w-full lg:w-5/12 xl:w-2/5 flex flex-col gap-3 xl:gap-5 ">
              <h1 className=" text-3xl sm:text-4xl font-light">
                {exampleData.name}
              </h1>
              <div className=" rating flex justify-between items-center">
                <div className="reviewIcon flex sm:gap-x-1 text-amber-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-500" />
                  <FaStar className="text-gray-500" />
                </div>
                <p> (5) reviews</p>
              </div>
              <div className=" price flex justify-between items-center">
                <div>
                  <p>As low as</p>
                  <p className=" text-3xl sm:text-4xl font-medium">
                    ${exampleData.price}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2 font-bold text-sm">
                    {exampleData.stock > 0 ? (
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    )}
                    <p>{exampleData.stock > 0 ? "In stock" : "Out of stock"}</p>
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
                <button className="text-white bg-primary py-2 md:py-3 px-3.5 md:px-5 font-semibold hover:bg-primary/80 hover:scale-125 duration-300">
                  Add to cart
                </button>
              </div>
              <div className="more features text-gray-500 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-y-2 xl:gap-x-8 ">
                <a className="addToWishlist cursor-pointer  flex items-center gap-x-2 font-semibold hover:scale-110 duration-300">
                  <FaRegHeart />
                  <p>Add to wishlist</p>
                </a>
                <a className="addToCompare cursor-pointer  flex items-center gap-x-2 font-semibold hover:scale-110 duration-300">
                  <FaBars />
                  <p>Add to compare</p>
                </a>
                <a className="email cursor-pointer flex items-center gap-x-2 hover:scale-110 duration-300">
                  <IoMail />
                  <p>Email</p>
                </a>
              </div>
            </div>
          </div>
          <div className="accordions">
            <Accordion title="Description" children={exampleData.description} />
            <Accordion
              title="Product Dimensions"
              children={`Depth: ${exampleData.dimensions.depth} inches, Width: ${exampleData.dimensions.width} inches, Height: ${exampleData.dimensions.height} inches.`}
            />
            <Accordion
              title="Care instructions"
              children="Wipe clean with a dry or slightly damp cloth. Avoid using harsh chemicals or abrasive materials to prevent damage to the finish."
            />
            <Accordion
              title="Quality and information"
              children={`Made from high-quality ${exampleData.wood_type} wood with a ${exampleData.finish} finish. Designed for durability and long-lasting use.`}
            />
            <Accordion
              title="Packing Information"
              children="The product is securely packed in a recyclable cardboard box with protective foam layers to prevent damage during shipping."
            />
            <Accordion
              title="Instructions and Documents"
              children="Comes with an easy-to-follow assembly manual and warranty card. Additional documents can be downloaded from our website."
            />
            <Accordion
              title="Product Availability"
              children={`Currently ${exampleData.stock} units in stock. Available for immediate shipping.`}
            />
          </div>
        </div>
        <div className="related products pt-14 flex flex-col gap-7 px-1.5 lg:px-0">
          <h1 className="font-light text-3xl sm:text-4xl text-center">
            Related Products
          </h1>
          <div className="main grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
