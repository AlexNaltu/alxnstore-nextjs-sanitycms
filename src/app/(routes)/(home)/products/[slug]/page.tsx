import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/actions/actions";
import Newsletter from "@/components/newsletter/newsletter";
const ProductPage = dynamic(() => import("@/components/product/product-page"));
import { getQueryClient } from "@/lib/query";
import { IProduct } from "@/types/product-types";
import { HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// product metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const product = await getProductBySlug({ slug: params.slug });

    return {
      title: product.name,
      keywords: product.name,
      openGraph: {
        images: [
          {
            url: product.thumbnail,
            width: 800,
            height: 600,
            alt: product.name,
          },
        ],
      },
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// array of object that contains the slug of each product
export async function generateStaticParams() {
  try {
    const products = await getAllProducts();

    if (!products.success) {
      throw new Error("Failed to fetch products");
    }

    return products.success.map((product: IProduct) => ({
      slug: product.slug,
    }));
  } catch (error: any) {
    throw new Error(error.message);
  }
}

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
