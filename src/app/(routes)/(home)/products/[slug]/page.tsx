"use client";
import { getProductBySlug } from "@/actions/actions";
import { IProduct } from "@/types/product-types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<IProduct>();
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductBySlug({ slug: params.slug });
      setProduct(product);
    };

    fetchProduct();
  }, [params.slug]);

  useEffect(() => {
    if (product?.images.length! > 0) {
      setSelectedImage(product?.images[0]!);
    }
  }, [product]);

  return (
    <div className="tracking-tighters">
      <Image
        src={selectedImage}
        alt="/"
        width={300}
        height={300}
        className="mx-auto my-3"
      />
      <div className="flex justify-center gap-1">
        {product?.images.map((image, i) => (
          <div key={i}>
            <Image
              src={image}
              alt="/"
              width={300}
              height={300}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer border-2 border-black rounded-sm p-1"
            />
          </div>
        ))}
      </div>
      <div>
        <div>
          <h1 className="font-bold uppercase text-xl">{product?.name}</h1>
          <Link href="/cart" className="font-sans text-sm underline">
            More product details{" "}
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductPage;
