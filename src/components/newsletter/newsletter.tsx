import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <div className="my-8 tracking-tighter sm:my-10">
      <h1 className="uppercase font-extrabold text-2xl min-[470px]:text-3xl sm:text-4xl">
        Newsletter
      </h1>
      <h2 className="text-primary text-[17px] min-[470px]:text-base sm:text-lg">
        Stay Updated with Our Latest Products - <br /> Subscribe Now!
      </h2>
      <form className="flex flex-col gap-2 min-[450px]:flex-row min-[450px]:items-center mt-3 max-w-[600px]">
        <Input
          placeholder="Enter your email"
          className="rounded-none  border-black max-w-[500px]"
        />
        <Button className="text-white uppercase tracking-tighter w-fit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
