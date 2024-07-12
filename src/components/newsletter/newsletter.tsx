import React from "react";
import { Input } from "../ui/input";

const Newsletter = () => {
  return (
    <div className="my-5 px-2 tracking-tighter sm:my-10">
      <h1 className="uppercase font-extrabold text-2xl min-[470px]:text-3xl sm:text-4xl">
        Newletter
      </h1>
      <h2 className="text-primary text-sm min-[470px]:text-base sm:text-lg">
        Stay Updated with Our Latest Products - <br /> Subscribe Now!
      </h2>
      <Input
        placeholder="Enter your email"
        className="rounded-none mt-3 border-black max-w-[500px]"
      />
    </div>
  );
};

export default Newsletter;
