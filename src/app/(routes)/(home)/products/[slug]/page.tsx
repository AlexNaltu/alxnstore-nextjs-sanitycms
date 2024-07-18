"use client";
import { getProductBySlug } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { detailedInformation, itemDescription } from "@/lib/constants";
import { formatPriceInEUR } from "@/lib/formatPrice";
import { IProduct, ISize } from "@/types/product-types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoShirt } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Newsletter from "@/components/newsletter/newsletter";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<IProduct>();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ISize>();

  const handleProductChange = (variant: ISize) => {
    setSelectedProduct(variant);
    setQuantity(1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductBySlug({ slug: params.slug });
      setProduct(product);
    };

    if (product?.images.length! > 0) {
      setSelectedImage(product?.images[0]!);
    }

    fetchProduct();
  }, [params.slug]);

  useEffect(() => {
    if (product?.images.length! > 0) {
      setSelectedImage(product?.images[0]!);
    }

    if (product) {
      setSelectedProduct(product.sizes[0]);
    }
  }, [product]);

  const item = {
    id: product?._id,
    name: product?.name,
    thumbnail: product?.thumbnail,
    price: selectedProduct?.price,
    quantity: quantity,
    url: `/products/${product?.slug}`,
    images: product?.images,
    size: selectedProduct?.size,
  };

  return (
    <div className="tracking-tighter px-2 max-w-[1400px] mx-auto">
      <div className="lg:flex justify-center">
        <div className="sm:flex sm:flex-row-reverse">
          <div className="max-w-[500px] mx-auto">
            <Image
              src={selectedImage}
              alt="/"
              width={1000}
              height={1000}
              className="mx-auto my-3"
            />
          </div>
          <div className="flex justify-center gap-1 min-[470px]:gap-4 min-[470px]:max-w-sm sm:flex-col sm:max-w-[150px] lg:self-start lg:pt-7">
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
        </div>
        <div className="flex flex-col gap-3 mt-4 sm:gap-5">
          <div className="min-[470px]:flex justify-between lg:flex-col gap-24">
            <div>
              <h1 className="font-bold uppercase text-xl sm:text-2xl md:text-4xl ">
                {product?.name}
              </h1>
              <Link
                href="/cart"
                className="font-sans text-sm underline md:text-base"
              >
                More product details{" "}
              </Link>
            </div>
            <div>
              <p className="sm:text-lg md:text-2xl">
                <span className="font-sans text-xs  sm:text-sm">price</span>{" "}
                {formatPriceInEUR(selectedProduct?.price!)}
              </p>
              <p className="font-sans text-xs underline md:text-base">
                Prices includes VAT,
                <br />
                not shipping fees
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4">
            {product?.sizes.map((size, i) => (
              <Button
                key={i}
                className="border-black border-2 h-10 bg-transparent"
                onClick={() => handleProductChange(size)}
              >
                {size.size}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label> Quantity</label>
            <Input
              type="number"
              min={"1"}
              max={"2"}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-fit"
            />
          </div>
          <div className="flex items-center gap-3 max-w-sm">
            <MdFavorite
              size={38}
              className="border-2 border-black rounded-sm text-red-700 h-8 w-10"
            />
            <Button className="uppercase text-white rounded-sm flex items-center gap-4 bg-green-600 w-full">
              <FaShoppingCart size={20} /> Add to Cart
            </Button>
          </div>
          <div>
            <div className="flex items-end gap-2 mt-6">
              <IoShirt size={35} />
              <p className="md:text-lg ">Item Description</p>
            </div>
            <div>
              {itemDescription.map((item) => (
                <div key={item.name}>
                  <p className="font-sans text-sm">
                    {item.name}: {""} {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="my-4">
          <AccordionTrigger className="decoration-0 sm:text-xl md:text-3xl">
            Detailed Information
          </AccordionTrigger>
          <AccordionContent>
            {detailedInformation.map((item, i) => (
              <div key={i}>
                <h2 className="text-lg uppercase font-bold sm:text-xl lg:text-2xl">
                  {item.name}
                </h2>
                <div className="font-sans pl-1 md:text-lg lg:text-xl">
                  <p>{item.details.item1}</p>
                  <p>{item.details.item2}</p>
                  <p>{item.details.item3}</p>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h2 className="uppercase font-black mt-5 sm:text-2xl md:text-4xl">
        More From This Category
      </h2>
      <Newsletter />
    </div>
  );
};

export default ProductPage;
