"use client";

import { getAllProducts } from "@/actions/actions";
import { Category, IProduct } from "@/types/product-types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const ProductsGrid = () => {
  // Get search parameters from the URL
  const params = useSearchParams();
  // Extract the 'category' parameter from the URL, if it exists
  const category = params.get("category") as Category | null;
  // Fetch all products using react-query
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getAllProducts();
      if (products.error) throw new Error(products.error);
      if (products.success) return products.success;
    },
  });

  console.log(data);
  // Memoize the filtered products list based on the selected category
  const filtered = useMemo(() => {
    if (category && data) {
      return data.filter((product: IProduct) =>
        product.category.includes(category)
      );
    }
    return data;
  }, [data, category]);

  if (error) return <div>{error.message}</div>;
  if (filtered && data)
    return (
      <div>
        {filtered.map((product: IProduct) => (
          <div key={product._id}>
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    );
};

export default ProductsGrid;
