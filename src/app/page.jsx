"use client";
import Banner from "@/components/Banner";
import Catalogue from "@/components/Catalogue";
import CanvasCursor from "@/components/layer/CanvasCursor";
import DiscountForm from "@/components/layer/DiscountForm";
import PageLoader from "@/components/PageLoader";
import { useState } from "react";
export default function Home() {
  const [bannerReady, setBannerReady] = useState(false);
  const [catalogueReady, setCatalogueReady] = useState(false);
  const allReady = bannerReady && catalogueReady;
  return (
    <div className="flex-1">
      {/* <CanvasCursor /> */}
      <PageLoader isReady={allReady} />
      <Banner onReady={() => setBannerReady(true)} />
      <Catalogue onReady={() => setCatalogueReady(true)} />
      <DiscountForm />
    </div>
  );
}
