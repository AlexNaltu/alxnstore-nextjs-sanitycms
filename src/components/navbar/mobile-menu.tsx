import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { menuLinks, menuNavLinks } from "@/lib/constants";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const MobileMenu = () => {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger>
          <LuMenu size={33} />
        </DrawerTrigger>
        <DrawerContent className="px-3 font-sans font-medium text-base bg-primary text-white max-w-[370px]">
          <DrawerHeader>
            <DrawerClose className="ml-[13rem] min-[370px]:ml-[15.5rem]">
              <IoCloseSharp size={30} />
            </DrawerClose>
            <h1 className="uppercase text-red-800">Products</h1>
            <Separator className="w-full px-0" />
            <div className="flex flex-col">
              {menuLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-red-800 transition-all duration-200 ease-in-out flex items-center justify-between"
                  >
                    <p className="py-2">{link.title}</p>
                    <MdKeyboardArrowRight size={30} />
                  </Link>
                  <Separator />
                </div>
              ))}
            </div>
            <h1 className="uppercase text-red-800 mt-5 ">Links</h1>
            <Separator className="w-full px-0" />
            <div className="flex flex-col">
              {menuNavLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-red-800 transition-all duration-200 ease-in-out flex items-center justify-between"
                  >
                    <p className="py-2">{link.title}</p>
                    <MdKeyboardArrowRight size={30} />
                  </Link>
                  <Separator />
                </div>
              ))}
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <Image
              src="/banner-code.png"
              alt="logo"
              width={1000}
              height={1000}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
