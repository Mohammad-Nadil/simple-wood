import React from "react";
import Container from "./Container";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const Breadcrumb = ({ text, link }) => {
  return (
    <section className="">
      <div className="bg-[url('/bannerBg.png')] py-3 md:py-5 xl:py-9">
        <Container>
          <div className="flex items-center gap-2 text-white/70 text-sm md:text-base">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <FaAngleRight className="text-xs" />

            {link ? (
              <>
                <Link href={`/${link}`} className="hover:text-white transition">
                  {link}
                </Link>
                <FaAngleRight className="text-xs" />
              </>
            ) : null}

            <span className="text-white">{text}</span>
          </div>

          <h1 className="text-2xl md:text-4xl text-white font-semibold mt-2">
            {text}
          </h1>
        </Container>
      </div>
    </section>
  );
};

export default Breadcrumb;
