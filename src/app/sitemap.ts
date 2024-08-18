import { getAllProducts } from "@/actions/actions";
import { IProduct } from "@/types/product-types";

export default async function sitemap() {
  const baseUrl = "https://alxnstore.shop";

  const fetchProducts = await getAllProducts();

  const products = fetchProducts.success.map((product: IProduct) => {
    return {
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: product.created_at,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...products,
  ];
}
