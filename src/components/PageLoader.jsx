"use client";
import { useEffect, useState } from "react";
import UiLoader from "./layer/UILoader";

const PageLoader = ({ isReady }) => {
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (isReady) {
      setHiding(true);
      const t = setTimeout(() => setHidden(true), 600);
      return () => clearTimeout(t);
    }
  }, [isReady]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white 
        ${hiding ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <UiLoader />
    </div>
  );
};

export default PageLoader;
