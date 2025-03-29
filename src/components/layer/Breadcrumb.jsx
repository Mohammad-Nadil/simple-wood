import React from "react";
import Container from "./Container";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrumb = ({ text }) => {
  return (
    <>
      <section className="pt-16  bg-[#212121]">
        <div className=" bg-[url('/bannerBg.png')] py-3 md:py-5 xl:py-9">
          <Container>
            <div className="top">
              <a href="/" className="text-white/70 flex gap-x-1.5 md:gap-x-3 items-center">
                Home <FaAngleRight /> {text}
              </a>
            </div>
            <div className="head text-2xl md:text-4xl text-white font-semibold">
              {" "}
              {text}
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
