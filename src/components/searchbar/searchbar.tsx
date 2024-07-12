import React from "react";
import { Input } from "../ui/input";

const Searchbar = () => {
  return (
    <div>
      <Input
        placeholder="Search Products..."
        className="rounded-none w-full lg:min-w-[500px]"
      />
    </div>
  );
};

export default Searchbar;
