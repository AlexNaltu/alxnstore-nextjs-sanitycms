import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Socials } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Newsletter = () => {
  return (
    <>
      <div className="tracking-tighter sm:my-10 text-white custom-bg pt-14 lg:pt-16 min-[1500px]:pt-24">
        <div className="max-w-[1600px] px-1 mx-auto">
          <h1 className="uppercase font-extrabold text-2xl min-[470px]:text-3xl sm:text-4xl">
            Newsletter
          </h1>
          <h2 className=" text-[17px] min-[470px]:text-base sm:text-lg">
            Stay Updated with Our Latest Products
          </h2>
          <form className="flex flex-col gap-2 min-[450px]:flex-row min-[450px]:items-center mt-3 max-w-[600px]">
            <Input
              placeholder="Enter your email"
              className="rounded-none  border-black max-w-[500px] text-black"
              type="email"
            />
            <Button className="text-black bg-white hover:text-white hover:bg-black hover:border-white border-2 transition-all ease-linear duration-200 uppercase tracking-tighter w-fit rounded-sm">
              Register
            </Button>
          </form>
          <div className="flex gap-1 items-center mt-2">
            {Socials.map((social, i) => (
              <Link href={social.href} key={i}>
                <i className={cn(`${social.className} w-7 h-7`)}>
                  {social.icon}
                </i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
