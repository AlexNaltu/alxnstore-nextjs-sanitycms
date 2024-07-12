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
      <Card className="rounded-none border-none custom-shadow">
        <CardHeader>
          <Link href={`/products/${product._id}`}>
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={1000}
              height={1000}
              className="object-cover"
            />
          </Link>
        </CardHeader>
        <CardContent className="tracking-tighter font-bold px-1 ">
          <div>
            <h1 className="text-sm lg:text-lg line-clamp-1">{product.name}</h1>
            <div>
              {product.sizes.length > 0 && (
                <div key={product.sizes[0]._key}>
                  <p className="text-[6px]">
                    from
                    <span className="text-sm px-1">
                      {formatPriceInEUR(product.sizes[0].price)}
                    </span>
                  </p>
                  <Button className="rounded-none w-full my-2 text-white">
                    <Link href="/">Add To Cart</Link>
                  </Button>
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
