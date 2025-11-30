"use client";
import UiLoader from "@/components/layer/UILoader";
import ProductClient from "@/components/ProductClient";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<UiLoader />}>
      <ProductClient />
    </Suspense>
  );
};

export default page;
