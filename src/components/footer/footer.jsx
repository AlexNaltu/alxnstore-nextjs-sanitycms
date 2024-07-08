import { footerLinks, legalDocs } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Footer component to display the footer of the site
const Footer = () => {
  return (
    <footer className="bg-primary site_footer">
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
            className="text-xs hover:text-secondary transition-all duration-300 ease-in-out "
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className=" flex flex-col px-4 text-sm tracking-tighter my-5 ">
        {legalDocs.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className="text-white hover:text-black transition-all duration-300 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <p className="text-white text-xs font-light text-center ">
        © AlxnStore 2024{" "}
      </p>
    </footer>
  );
};

export default Footer;
