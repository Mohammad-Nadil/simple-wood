"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider, { ReactLenis } from "@/components/layer/LenisProvider";
import MagicMouseCursor from "@/components/layer/MagicMouseCursor";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UiLoader from "@/components/layer/UILoader";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
          <title>SIMPLE WOOD</title>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
        </head>
        <Provider store={store}>
          <LenisProvider>
            <body
              cz-shortcut-listen="true"
              className="flex flex-col min-h-screen justify-between "
            >
              {loading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
                  <UiLoader />
                </div>
              ) : (
                <>
                  <Navbar />
                  {children}
                  <Footer />
                </>
              )}
            </body>
          </LenisProvider>
        </Provider>
      </html>
    </>
  );
}
