"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UiLoader from "@/components/layer/UILoader";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <UiLoader />
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-screen relative max-w-screen overflow-x-clip">
      {children}
    </div>
  );
}
