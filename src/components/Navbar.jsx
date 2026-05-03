import React from "react";
import Container from "./layer/Container";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import whiteLogo from "../../public/whiteLogo.png";
import Link from "next/link";

const Navbar = ({ bg }) => {
  return (
    <nav
      className="sticky bg-black top-0 left-0 right-0 z-99999999999 w-full"
    >
      <Container>
        <div
          className={`main flex justify-between items-center w-full py-0 ${bg}`}
        >
          <div
            className="menuBtn hidden sm:flex invisible"
          >
            <FaBarsStaggered />
          </div>
          <div className="logo magic-hover">
            <Link href="/">
              <div
                className="main flex w-40 pb-4 hover:scale-110 duration-300"
              >
                <Image src={whiteLogo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="btn text-white flex items-center gap-x-4 text-2xl">
            <div
              className="search cursor-pointer hidden"
            >
              <IoSearchOutline />
            </div>
            <Link href="/cart">
              <div
                className="cart cursor-pointer"
              >
                <FiShoppingBag />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
