import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const ProductFilters = () => {
  return (
    <div className="flex justify-between px-1 mt-3 gap-3">
      <Select>
        <SelectTrigger className="rounded-none w-[170px] border-0">
          Clothing
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="T-Shirts">
            <Link href={"/products/T-Shirts"}>T-Shirts </Link>
          </SelectItem>
          <SelectItem value="Sweatshirts">
            <Link href={"/products/Sweatshirts"}>Sweatshirts</Link>
          </SelectItem>
          <SelectItem value="Hoodies">
            <Link href={"/products/Hoodies"}>Hoodies</Link>
          </SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="rounded-none w-[170px]">
          Filter By
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="T-Shirts">
            <Link href={"/products/T-Shirts"}>Price: Low-High </Link>
          </SelectItem>
          <SelectItem value="Sweatshirts">
            <Link href={"/products/Sweatshirts"}>Price: High-Low</Link>
          </SelectItem>
          <SelectItem value="Hoodies">
            <Link href={"/products/Hoodies"}>Ascending Order</Link>
          </SelectItem>
          <SelectItem value="Hoodies">
            <Link href={"/products/Hoodies"}>Descending Order</Link>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductFilters;
