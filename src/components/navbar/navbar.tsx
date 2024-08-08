import Image from "next/image";
import React from "react";
import { ImCart } from "react-icons/im";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import Searchbar from "../searchbar/searchbar";
import User from "./user";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white flex justify-between px-1 lg:px-3 w-full mx-auto">
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
        <div className="text-black flex gap-2 justify-center items-center">
          <User />
          <Link href="/cart">
            <ImCart size={28} />
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
