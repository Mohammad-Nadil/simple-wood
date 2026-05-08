"use client";
import React, { useEffect, useRef, useState } from "react";
import placeholder from "../../public/placeholder.jpg";
import Container from "./layer/Container";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { categoryItems } from "@/store/temp";
import Link from "next/link";

// Left column-এর প্রথম + right column-এর প্রথম = 2 critical image
const CRITICAL_COUNT = 2;

const Catalogue = ({ onReady }) => {
  const category = categoryItems;
  const items = category.slice(0, 5);
  const items2 = category.slice(5, 10);

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
  const renderCard = (item, index, isCritical) => (
    <div
      key={index}
      className="border border-gray-200 hover:border-primary duration-300 relative group cursor-pointer"
    >
      <Link
        href={`/products?category=${item.title}`}
        className="w-full flex flex-col gap-3"
      >
        <div className="img md:px-6 xl:px-28 py-3 md:py-8 xl:py-16 overflow-hidden">
          <div className="w-full h-full relative aspect-square">
            {!loadedImages[item.title] && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse" />
            )}
            <Image
              src={item.img}
              alt="Product img"
              fill
              // critical image গুলো priority পাবে, বাকিগুলো lazy
              priority={isCritical}
              loading={isCritical ? undefined : "lazy"}
              onLoad={() => {
                if (isCritical) markLoaded(item.title); // ✅ শুধু critical গুলো count করবো
                setLoadedImages((prev) => ({ ...prev, [item.title]: true }));
              }}
              placeholder="blur"
              blurDataURL={placeholder.src}
              className="group-hover:scale-125 duration-500"
            />
          </div>
        </div>
        <div className="title flex gap-2 md:text-xl items-center font-semibold sm:absolute bottom-0 left-0 -translate-y-full translate-x-1/10">
          <FaPlus className="text-primary rounded-full bg-primary/30 p-0.5" />
          <p className="capitalize group-hover:text-primary duration-300">
            {item.title}
          </p>
        </div>
      </Link>
    </div>
  );

  return (
    <section className="overflow-x-clip">
      <Container className="flex gap-x-2 md:gap-x-5 py-5">
        <div className="left w-1/2 flex flex-col gap-2 md:gap-5">
          {items.map(
            (item, index) => renderCard(item, index, index === 0), // শুধু প্রথমটা critical
          )}
        </div>
        <div className="right w-1/2 flex flex-col gap-5">
          {items2.map(
            (item, index) => renderCard(item, index, index === 0), // শুধু প্রথমটা critical
          )}
        </div>
      </Container>
    </section>
  );
};

export default Catalogue;
