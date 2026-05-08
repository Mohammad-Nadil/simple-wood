"use client";
import React from "react";
import Container from "./layer/Container";
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black pb-7 pt-5 md:py-9">
      <Container className="flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-14">
        <div className="main text-white flex  items-center justify-between gap-y-5">
          <div className="logo order-first md:order-none">
            <img src="/whiteLogo.png" alt="logo" className="w-32" />
          </div>

          <div className="socialLinks flex items-center gap-x-8">
            <p className="hidden xl:flex">Follow Us on Social</p>
            <div className="icons flex gap-5">
              {[
                <FaFacebookF />,
                <FaYoutube />,
                <FaTwitter />,
                <FaGoogle />,
              ].map((item, index) => (
                <div key={index} className="cursor-pointer duration-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="copyright text-gray-500 text-center text-xs md:text-base">
          <p>Copyright © {new Date().getFullYear()}. All right reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
