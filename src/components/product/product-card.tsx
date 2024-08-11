import { formatPriceInEUR } from "@/lib/formatPrice";
import { IProduct } from "@/types/product-types";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <Card className="rounded-none border-none custom-shadow mb-2">
        <CardHeader>
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={1000}
              height={1000}
              className="object-cover "
            />
          </Link>
        </CardHeader>
        <CardContent className="tracking-tighter font-bold px-1">
          <div>
            <h1 className="text-base lg:text-lg line-clamp-1 md:text-xl">
              {product.name}
            </h1>
            <div>
              {product.variants.length > 0 && (
                <div key={product.variants[0].variant_id}>
                  <p className="text-xs md:text-sm font-light text-gray-500">
                    from
                    <span className="text-base text-black px-1 md:text-lg">
                      {formatPriceInEUR(product.variants[0].price)}
                    </span>
                  </p>
                  <div className="pb-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-base text-primary underline hover:text-black transition-all duration-300 ease-in-out lg:text-lg"
                    >
                      Choose options
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
