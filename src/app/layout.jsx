"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider, { ReactLenis } from "@/components/layer/LenisProvider";
import MagicMouseCursor from "@/components/layer/MagicMouseCursor";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
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
              {/* <MagicMouseCursor/> */}
              <Navbar />
              {children}
              <Footer />
            </body>
          </LenisProvider>
        </Provider>
      </html>
    </>
  );
}
