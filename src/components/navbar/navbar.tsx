import Image from "next/image";
import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { ImCart } from "react-icons/im";
import { LuMenu } from "react-icons/lu";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import Searchbar from "../searchbar/searchbar";
import ShoppingCart from "../cart/ShoppingCart";

const Navbar = () => {
  return (
    <>
      <nav className="bg-secondary flex justify-between px-1 lg:px-3  w-full max-w-[1400px] mx-auto">
        <div className="flex gap-4 lg:py-3 items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={200}
              height={150}
              className="max-w-[150px] lg:max-w-[200px]"
            />
          </Link>

          <div className="hidden lg:inline-flex">
            <Searchbar />
          </div>
        </div>
        <div className="text-black flex gap-2 items-center">
          <IoPersonCircleOutline size={35} />
          <ImCart size={28} />
          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
