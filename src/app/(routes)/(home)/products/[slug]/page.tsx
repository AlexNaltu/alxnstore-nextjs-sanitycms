import { getProductBySlug, getRelatedProducts } from "@/actions/actions";
import ProductPage from "@/components/product/product-page";
import { IProduct } from "@/types/product-types";
import React from "react";

const Product = async ({ params }: { params: { slug: string } }) => {
  const product: IProduct = await getProductBySlug({ slug: params.slug });
  const category = product.category;
  const relatedProducts = await getRelatedProducts(category);
  return (
    <div>
      <ProductPage product={product} relatedProducts={relatedProducts} />
    </div>
  );
};

export default Product;
