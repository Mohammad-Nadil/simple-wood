"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./layer/Container";
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black py-7 md:py-9"
    >
      <Container className="flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-14">
        <div className="main text-white flex flex-col md:flex-row items-center md:justify-between gap-y-5">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="policy flex items-center justify-center gap-x-5 xl:gap-10 text-sm md:text-base"
          >
            {["Privacy Policy", "Terms & Conditions", "Help"].map(
              (item, index) => (
                <motion.p
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="hover:underline duration-300 text-nowrap cursor-pointer"
                >
                  {item}
                </motion.p>
              )
            )}
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="logo order-first md:order-none"
          >
            <img src="/whiteLogo.png" alt="logo" className="w-24 md:w-32" />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="socialLinks flex items-center gap-x-8"
          >
            <p className="hidden xl:flex">Follow Us on Social</p>
            <div className="icons flex gap-5">
              {[
                <FaFacebookF />, <FaYoutube />, <FaTwitter />, <FaGoogle />,
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, color: "#FACC15" }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer duration-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="copyright text-gray-500 text-center text-xs md:text-base"
        >
          <p>Copyright © {new Date().getFullYear()}. All right reserved.</p>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
