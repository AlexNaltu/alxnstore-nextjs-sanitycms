import { getAllProducts } from "@/actions/actions";
import Newsletter from "@/components/newsletter/newsletter";
import ProductCategories from "@/components/filters/product-categories";
import ProductsGrid from "@/components/product/products-grid";
import Searchbar from "@/components/searchbar/searchbar";
import { getQueryClient } from "@/lib/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

export default async function ProductSPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getAllProducts();
      if (products.error) throw new Error(products.error);
      if (products.success) return products.success;
    },
  });

  return (
    <div className="max-w-[1400px] mx-auto px-1 mt-3">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="lg:hidden">
          <Searchbar />
        </div>
        <div className="lg:flex gap-3 min-[1100px]:gap-10">
          <ProductCategories />
          <ProductsGrid />
        </div>
      </HydrationBoundary>
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
}
