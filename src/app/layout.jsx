"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactLenis } from "@/components/layer/SmoothScroll";
import MagicMouseCursor from "@/components/layer/MagicMouseCursor";

export default function RootLayout({ children }) {
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
          <ReactLenis root options={{ smooth: true, lerp: 0.08 }}>
            <body
              cz-shortcut-listen="true"
              className="flex flex-col min-h-screen justify-between "
            >
              {/* <MagicMouseCursor/> */}
              <Navbar />
              {children}
              <Footer />
            </body>
          </ReactLenis>
        </Provider>
      </html>
    </>
  );
}
