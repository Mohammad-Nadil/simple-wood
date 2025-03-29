import React from "react";
import { motion } from "framer-motion";
import Container from "./layer/Container";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import whiteLogo from "../../public/whiteLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 w-full"
    >
      <Container>
        <div className="main flex justify-between items-center w-full py-0 ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="menuBtn hidden sm:flex invisible"
          >
            <FaBarsStaggered />
          </motion.div>
          <div className="logo">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="main flex w-40 pb-4 hover:scale-110 duration-300"
              >
                <Image src={whiteLogo} alt="logo" />
              </motion.div>
            </Link>
          </div>
          <div className="btn text-white flex items-center gap-x-4 text-2xl">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="search cursor-pointer"
            >
              <IoSearchOutline />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cart cursor-pointer"
            >
              <FiShoppingBag />
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
