import { getAllProducts } from "@/actions/actions";
import ProductFilters from "@/components/filters/product-filters";
import ProductGrid from "@/components/product/product-grid";
import Searchbar from "@/components/searchbar/searchbar";
import React from "react";

const ProductSPage = async () => {
  const products = await getAllProducts();
  return (
    <div className="max-w-[1400px] mx-auto px-1 mt-3">
      <Searchbar />
      <ProductFilters />
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductSPage;
