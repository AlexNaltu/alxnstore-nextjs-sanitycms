import { getProductBySlug, getRelatedProducts } from "@/actions/actions";
import Newsletter from "@/components/newsletter/newsletter";
import ProductPage from "@/components/product/product-page";
import { getQueryClient } from "@/lib/query";
import { Category, IProduct } from "@/types/product-types";
import { HydrationBoundary } from "@tanstack/react-query";
import React from "react";

const Product = async ({ params }: { params: { slug: string } }) => {
  const product: IProduct = await getProductBySlug({ slug: params.slug });

  // prefetch related products
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({
    queryKey: ["relatedProduct"],
    queryFn: async () => {
      //@ts-ignore
      const relatedProducts = await getRelatedProducts();
      return relatedProducts;
    },
  });

  return (
    <div>
      <HydrationBoundary>
        <ProductPage product={product} />
      </HydrationBoundary>
      <Newsletter />
    </div>
  );
};

export default Product;
