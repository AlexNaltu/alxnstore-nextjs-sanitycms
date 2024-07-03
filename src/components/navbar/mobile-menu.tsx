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
import { Button } from "../ui/button";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../ui/input";
import Link from "next/link";
import { menuLinks } from "@/lib/constants";
import Image from "next/image";

const MobileMenu = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <LuMenu size={25} />
        </DrawerTrigger>
        <DrawerContent className="px-3">
          <DrawerHeader>
            <DrawerClose className="flex items-center gap-1">
              <IoCloseSharp size={30} />
              <p>Close</p>
            </DrawerClose>
            <Input placeholder="Search Products..." className="rounded-none" />
            <div className="flex flex-col text-2xl mt-5">
              {menuLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="hover:text-primary transition-all duration-200 ease-in-out"
                >
                  {link.title}
                </Link>
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
