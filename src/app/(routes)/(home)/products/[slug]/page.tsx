import { getProductBySlug, getRelatedProducts } from "@/actions/actions";
import Newsletter from "@/components/newsletter/newsletter";
import ProductPage from "@/components/product/product-page";
import { Category, IProduct } from "@/types/product-types";
import React from "react";

const Product = async ({ params }: { params: { slug: string } }) => {
  const product: IProduct = await getProductBySlug({ slug: params.slug });
  const category = product.category[0];
  // @ts-ignore
  const relatedProducts = await getRelatedProducts(category);
  return (
    <div>
      <ProductPage product={product} relatedProducts={relatedProducts} />
      <Newsletter />
    </div>
  );
};

export default Product;
