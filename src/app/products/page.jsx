"use client";
import UiLoader from "@/components/layer/UILoader";
import ProductClient from "@/components/ProductClient";
import api from "@/lib/api";
import React, { Suspense } from "react";

const page = () => {
  // const products = api
  // console.log(products);
  return (
    <Suspense fallback={<UiLoader />}>
      <ProductClient />
    </Suspense>
  );
};

export default page;
