import ProductFilters from "@/components/filters/product-filters";
import Newsletter from "@/components/newsletter/newsletter";
import Products from "@/components/product/products";
import Searchbar from "@/components/searchbar/searchbar";
import React from "react";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const ProductSPage = ({ searchParams }: Props) => {
  return (
    <div className="max-w-[1400px] mx-auto px-1 mt-3">
      <Searchbar />
      <Products searchParams={searchParams} />
      <div className="my-6 px-2">
        <h1 className="tracking-tighter text-2xl min-[470px]:text-3xl font-black md:text-4xl lg:text-5xl">
          Shipping and Delivery
        </h1>
        <ul className="font-sans text-xs flex flex-col gap-1 mt-3 md:text-sm lg:text-lg">
          <li>Orders are processed within 1-2 business days</li>
          <li>
            Shipping costs are calculated based on the first item and any
            additional items in your order
          </li>
          <li>We deliver only in Europe</li>
          <li className="font-semibold">
            The average delivery time for orders is approximately 5-10 business
            days
          </li>
        </ul>
      </div>
      <Newsletter />
    </div>
  );
};

export default ProductSPage;
