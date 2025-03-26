import React from "react";
import Container from "./layer/Container";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import sofa from "../../public/sofa.png";
import cupboard from "../../public/cupboard.png";
import table from "../../public/table.png";
import bed from "../../public/bed.png";
import lamp from "../../public/lamp.png";
import drawer from "../../public/drawer.png";
import shelving from "../../public/shelving.png";

const Catalogue = () => {
  let items = [
    // { title: "sofa", img: sofa },
    { title: "cupboard", img: cupboard },
    // { title: "table", img: table },
    { title: "bed & mattress", img: bed },
    // { title: "Floor lamps & fixtures", img: lamp },
    { title: "drawer", img: drawer },
    { title: "shelving", img: shelving },
  ];
  let items2 = [
    { title: "sofa", img: sofa },
    // { title: "cupboard", img: cupboard },
    { title: "table", img: table },
    // { title: "bed & mattress", img: bed },
    { title: "Floor lamps & fixtures", img: lamp },
    // { title: "drawer", img: drawer },
    { title: "shelving", img: shelving },
  ];

  return (
    <section>
      <Container className="flex gap-x-5 py-5">
        <div className="left w-1/2 flex flex-col gap-5">
          {items.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-3 group">
              <div className="img md:px-6 xl:px-28 py-3 md:py-8 xl:py-16 border border-gray-300 group-hover:border-primary duration-300">
                <Image src={item.img} alt="Product img " />
              </div>
              <div className="title flex gap-2 md:text-xl items-center font-semibold">
                <FaPlus className="text-primary  rounded-full bg-primary/30 p-0.5" />
                <p className="capitalize group-hover:text-primary duration-300">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right w-1/2 flex flex-col gap-5">
          {items2.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-3 group ">
              <div className="img md:px-6 xl:px-28 py-2 md:py-4 xl:py-16 border border-gray-300 group-hover:border-primary duration-300">
                <Image src={item.img} alt="Product img " />
              </div>
              <div className="title flex gap-2 md:text-xl items-center font-semibold">
                <FaPlus className="text-primary  rounded-full bg-primary/30 p-0.5" />
                <p className="capitalize group-hover:text-primary duration-300">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Catalogue;
