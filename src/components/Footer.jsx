import React from "react";
import Container from "./layer/Container";
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black py-7 md:py-9">
      <Container className="flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-14">
        <div className="main text-white flex flex-col md:flex-row items-center md:justify-between gap-y-5">
          <div className="policy flex items-center justify-center gap-x-5 xl:gap-10 text-sm md:text-base">
            {["Privacy Policy", "Terms & Conditions", "Help"].map(
              (item, index) => (
                <p key={index} className="hover:underline duration-300 text-nowrap ">
                  {item}
                </p>
              )
            )}
          </div>
          <div className="logo order-first md:order-none">
            <img src="/whiteLogo.png" alt="logo" />
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
                <div
                  key={index}
                  className="cursor-pointer hover:text-primary duration-300"
                >
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
