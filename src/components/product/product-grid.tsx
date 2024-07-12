import { IProduct } from "@/types/product-types";
import React from "react";
import ProductCard from "./product-card";

interface ProductGridProps {
  products: IProduct[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 mb-2 mt-7 gap-2">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
