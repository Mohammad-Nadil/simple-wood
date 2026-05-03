"use client";

import React from "react";
import Container from "./Container";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

const Breadcrumb = ({ text, link }) => {
  return (
    <section>
      <div className="bg-[url('/bannerBg.png')] py-3 md:py-5 xl:py-9">
        <Container>
          {/* breadcrumb path */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-white/70 text-sm md:text-base"
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <FaAngleRight className="text-xs" />

            {link && (
              <>
                <Link href={`/${link}`} className="hover:text-white transition">
                  {link}
                </Link>
                <FaAngleRight className="text-xs" />
              </>
            )}

            <span className="text-white">{text}</span>
          </motion.div>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl text-white font-semibold mt-2"
          >
            {text}
          </motion.h1>
        </Container>
      </div>
    </section>
  );
};

export default Breadcrumb;
