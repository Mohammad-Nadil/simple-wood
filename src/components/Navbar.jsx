import React from "react";
import Container from "./layer/Container";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import favicon from "../../public/blackFavicon.png";
import whiteLogo from "../../public/whiteLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full -translate-y-1/6 sm:translate-y-0 " >
      <Container>
        <div className="main flex justify-between items-center w-full py-3 sm:py-0">
          <div className="menuBtn hidden sm:flex invisible">
            <FaBarsStaggered />
          </div>
          <div className="logo">
            <Link href="/">
              <div className="main flex w-40 pb-4">
                <Image className="" src={whiteLogo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="btn  text-white flex items-center gap-x-4 text-2xl">
            <div className="search">
              <IoSearchOutline />
            </div>
            <div className="cart">
              <FiShoppingBag />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
