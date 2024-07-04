import React from "react";
import { Input } from "../ui/input";

const Newsletter = () => {
  return (
    <div className="my-5 px-2 tracking-tighter">
      <h1 className="uppercase font-extrabold text-2xl">Newletter</h1>
      <h2 className="text-primary text-sm">
        Stay Updated with Our Latest Products - <br /> Subscribe Now!
      </h2>
      <Input
        placeholder="Enter your email"
        className="rounded-none mt-3 border-black"
      />
    </div>
  );
};

export default Newsletter;
