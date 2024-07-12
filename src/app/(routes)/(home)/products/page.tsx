import ProductFilters from "@/components/filters/product-filters";
import Products from "@/components/product/products";
import Searchbar from "@/components/searchbar/searchbar";
import React from "react";

const ProductSPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-1 mt-3">
      <Searchbar />
      <ProductFilters />
      <Products />
      <div></div>
    </div>
  );
};

export default ProductSPage;
