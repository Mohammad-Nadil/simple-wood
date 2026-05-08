"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "./layer/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaArrowRight,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { bannerItems } from "@/store/temp";
import placeholder from "../../public/placeholder.jpg";
import Image from "next/image";
import Link from "next/link";

// First slide-এ মোট কতটা critical image আছে:
// bannerBg (1) + first slide img[0], img[1], img[2] (3) = 4
const CRITICAL_COUNT = 4;

const Banner = ({ onReady }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const loadedCount = useRef(0);
  const readyCalled = useRef(false);

  const markLoaded = (key) => {
    setLoadedImages((prev) => {
      if (prev[key]) return prev;

      loadedCount.current += 1;

      return { ...prev, [key]: true };
    });
  };

  useEffect(() => {
    if (loadedCount.current >= CRITICAL_COUNT && !readyCalled.current) {
      readyCalled.current = true;
      onReady();
    }
  }, [loadedImages, onReady]);

  return (
    <section className="bg-fixed bg-cover bg-center py-10 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bannerBg.png"
          fill
          priority
          alt="bg"
          className="object-cover"
          onLoad={() => markLoaded("bg")} // ✅ critical
        />
      </div>

      <Container>
        <Swiper
          modules={[Pagination]}
          loop={true}
          speed={600}
          className="w-full aspect-40/17"
        >
          {bannerItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <div className="flex items-center flex-col-reverse sm:flex-row w-full px-5 xl:px-10">
                  <div className="title w-full sm:w-7/12 flex flex-col gap-y-5 md:gap-y-10 py-5 items-center">
                    <div className="text-white flex flex-col gap-y-2 sm:gap-y-4 sm:w-2/3">
                      <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-start mb-3 sm:mb-0">
                        {item.title.map((line, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center sm:items-start"
                          >
                            {line}
                            {idx < item.title.length - 1 && <br />}
                          </div>
                        ))}
                      </h1>
                      <p className="text-sm lg:text-base xl:text-lg text-center sm:text-start w-5/6 mx-auto sm:mx-0 sm:w-full">
                        {item.des}
                      </p>
                    </div>
                    <div className="btn sm:w-2/3">
                      <Link href={`/products?category=${item.category}`}>
                        <button className="py-1 sm:py-2 lg:py-3 px-4 md:px-5 bg-primary hover:bg-primary/70 rounded flex items-center gap-x-3 duration-300 hover:scale-110">
                          Shop Now <FaArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="gallery w-full sm:w-5/12 grid grid-cols-5 grid-rows-2 gap-4 items-center">
                    {/* Image 0 */}
                    <div className="col-span-2 row-span-1 overflow-hidden border relative aspect-4/5">
                      {!loadedImages[`${index}-0`] && (
                        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                      )}
                      <Image
                        src={item.img[0]}
                        fill
                        priority={index === 0}
                        onLoad={() => {
                          if (index === 0) markLoaded("slide0-img0"); // ✅ critical (first slide only)
                          setLoadedImages((prev) => ({
                            ...prev,
                            [`${index}-0`]: true,
                          }));
                        }}
                        placeholder="blur"
                        blurDataURL={placeholder.src}
                        alt="banner image"
                        className="hover:scale-110 duration-500 bg-black"
                      />
                    </div>

                    {/* Image 1 */}
                    <div className="col-span-3 row-span-2 overflow-hidden relative aspect-4/5">
                      {!loadedImages[`${index}-1`] && (
                        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                      )}
                      <Image
                        src={item.img[1]}
                        alt="banner image"
                        fill
                        priority={index === 0}
                        onLoad={() => {
                          if (index === 0) markLoaded("slide0-img1"); // ✅ critical
                          setLoadedImages((prev) => ({
                            ...prev,
                            [`${index}-1`]: true,
                          }));
                        }}
                        placeholder="blur"
                        blurDataURL={placeholder.src}
                        className="hover:scale-110 duration-500 bg-neutral-500"
                      />
                    </div>

                    {/* Image 2 */}
                    <div className="col-span-2 row-span-1 overflow-hidden relative aspect-4/5">
                      {!loadedImages[`${index}-2`] && (
                        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                      )}
                      <Image
                        src={item.img[2]}
                        alt="banner image"
                        fill
                        priority={index === 0}
                        onLoad={() => {
                          if (index === 0) markLoaded("slide0-img2"); // ✅ critical
                          setLoadedImages((prev) => ({
                            ...prev,
                            [`${index}-2`]: true,
                          }));
                        }}
                        placeholder="blur"
                        blurDataURL={placeholder.src}
                        className="hover:scale-110 duration-500 bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute hidden sm:flex flex-col top-1/2 left-3 gap-y-5 -translate-y-1/2 text-gray-500 z-50">
          {[FaFacebookF, FaYoutube, FaTwitter, FaGoogle].map((Icon, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-primary hover:scale-110 duration-300"
            >
              <Icon />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
