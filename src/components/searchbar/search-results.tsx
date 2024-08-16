import { IProduct } from "@/types/product-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatPriceInEUR } from "@/lib/formatPrice";

interface ResultsProps {
  result: IProduct;
}

const SearchResults = ({ result }: ResultsProps) => {
  return (
    <div className="w-full bg-white hover:bg-secondary transition-all duration-500 ease-in-out">
      <Link
        href={`/products/${result.slug}`}
        className="flex items-center justify-between"
      >
        <Image src={result.thumbnail} alt="/" width={150} height={150} />
        <div className="flex flex-col items-end px-2">
          <h1 className="text-sm lg:text-lg line-clamp-1">{result.name}</h1>
          <div>
            {result.variants.length > 0 && (
              <div key={result.variants[0].variant_id}>
                <p className="text-[6px]">
                  from
                  <span className="text-sm px-1">
                    {formatPriceInEUR(result.variants[0].price)}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchResults;
