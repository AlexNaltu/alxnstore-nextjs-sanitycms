import { footerLinks, legalDocs } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Footer component to display the footer of the site
const Footer = () => {
  return (
    <footer className="bg-black mt-10 lg:mt-20 site_footer w-full">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </Link>
      <div className="flex justify-center gap-1 font-light">
        {footerLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-xs text-slate-300 hover:text-white transition-all duration-300 ease-in-out lg:text-sm "
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className=" flex flex-col px-4 text-sm tracking-tighter my-5 sm:flex-row sm:gap-1 md:gap-3 sm:justify-center sm:mb-10 lg:text-lg sm:text-center ">
        {legalDocs.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className="text-white hover:text-primary transition-all duration-300 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <p className="text-white text-xs font-light text-center sm:my-10 lg:text-sm ">
        © AlxnStore 2024{" "}
      </p>
    </footer>
  );
};

export default Footer;
