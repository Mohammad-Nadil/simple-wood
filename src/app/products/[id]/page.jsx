"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaStar,
} from "react-icons/fa6";
import ProductCard from "@/components/layer/ProductCard";
import Slider from "react-slick";
import Link from "next/link";
import { useParams } from "next/navigation";
import UiLoader from "@/components/layer/UILoader";
import { IoMail } from "react-icons/io5";
import api from "@/lib/api";

function SampleNextArrow(props) {
  const { className, onClick } = props;
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
  const { className, onClick } = props;
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
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-4 cursor-pointer py-4 px-3 font-semibold text-lg"
      >
        <FaPlus className={`duration-300 ${open ? "rotate-45" : ""}`} />
        <p>{title}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-40 py-3 px-10" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm lg:text-base">{children}</p>
      </div>
    </div>
  );
};

const page = () => {
  const { id } = useParams();

  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  let [active, setActive] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await api.get(`/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [id]);

  let settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="w-full flex items-center justify-center ">
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
        className={`bg-primary text-transparent my-3 w-3 h-3 rounded-full ${
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
  if (!product) {
    return (
      <div className=" ">
        <Breadcrumb text="Product details" />
        <div className="h-full ">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <UiLoader />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Breadcrumb text="Product details" />
      <Container className=" py-5 2xl:py-20">
        <div className="main px-1.5 lg:px-0">
          <div className="top flex flex-col lg:flex-row gap-x-8 gap-y-12 items-center py-0 ">
            <div className="images w-full lg:w-7/12 xl:w-3/5 aspect-video   xl:p-8 slider-container relative ">
              <Slider {...settings}>
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    className="w-full  object-contain aspect-square lg:aspect-20/8 scale-x-[-1]  "
                    src={img}
                    fill
                    alt="product image"
                  />
                ))}
              </Slider>
            </div>
            <div className="info w-full lg:w-5/12 xl:w-2/5 flex flex-col gap-3 xl:gap-5 ">
              <h1 className=" text-3xl sm:text-4xl font-light">
                {product.title}
              </h1>
              <div className=" rating flex  gap-4 items-center">
                <div className="reviewIcon flex sm:gap-x-1 text-amber-300">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < Math.round(product.rating)
                          ? "text-amber-300"
                          : "text-gray-400"
                      }
                    />
                  ))}
                </div>
                <p> ({product.reviews.length}) reviews</p>
              </div>
              <div className=" price flex justify-between items-center">
                <div>
                  <p>As low as</p>
                  <p className=" text-3xl sm:text-4xl font-medium">
                    ${product.price}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2 font-bold text-sm">
                    {product.stock > 0 ? (
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    )}
                    <p>{product.stock > 0 ? "In stock" : "Out of stock"}</p>
                  </div>
                  {/* <p>sku: {product.sku}</p> */}
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
              <div className="addToCart btn flex gap-x-7">
                <Link
                  href="/checkout"
                  className="text-white rounded-sm sm:rounded-md bg-primary py-2 md:py-3 px-3.5 md:px-5 font-semibold hover:bg-primary/80 hover:scale-105 duration-300"
                >
                  Buy now
                </Link>
                <Link
                  href="/cart"
                  className=" bg-secondary rounded-sm sm:rounded-md py-2 md:py-3 px-3.5 md:px-5 font-semibold hover:bg-secondary/80 hover:scale-105 duration-300"
                >
                  Add to cart
                </Link>
              </div>
              {/* <div className="more features text-gray-500 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-y-2 xl:gap-x-8 ">
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
              </div> */}
            </div>
          </div>
          <div className="accordions mt-10">
            <Accordion title="Description">{product.description}</Accordion>

            <Accordion title="Product Dimensions">
              Width: {product.dimensions.width} inches, Height:{" "}
              {product.dimensions.height} inches, Depth:{" "}
              {product.dimensions.depth} inches.
            </Accordion>

            <Accordion title="Product Information">
              Brand: {product.brand} <br />
              Category: {product.category} <br />
              Weight: {product.weight} oz
            </Accordion>

            <Accordion title="Warranty Information">
              {product.warrantyInformation}
            </Accordion>

            <Accordion title="Shipping Information">
              {product.shippingInformation}
            </Accordion>

            <Accordion title="Return Policy">{product.returnPolicy}</Accordion>

            <Accordion title="Availability">
              {product.availabilityStatus} — {product.stock} items available
            </Accordion>
          </div>
        </div>
        {/* <div className="related products pt-14 flex flex-col gap-7 px-1.5 lg:px-0">
          <h1 className="font-light text-3xl sm:text-4xl text-center">
            Related Products
          </h1>
          <div className="main grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default page;
