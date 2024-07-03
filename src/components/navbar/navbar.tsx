import Image from "next/image";
import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { ImCart } from "react-icons/im";
import { LuMenu } from "react-icons/lu";
import MobileMenu from "./mobile-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-secondary flex justify-between px-1  w-full">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </Link>
        <div className="text-black flex gap-2 items-center">
          <IoPersonCircleOutline size={25} />
          <ImCart />
          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
