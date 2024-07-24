"use client";
import { getProductBySlug, getRelatedProducts } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { detailedInformation, itemDescription } from "@/lib/constants";
import { formatPriceInEUR } from "@/lib/formatPrice";
import { IProduct, IVariants } from "@/types/product-types";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  product: IProduct;
  relatedProducts: IProduct[];
}

const ProductPage = ({ product, relatedProducts }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleVariantChange = (variant: IVariants) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };

  const dispatch = useDispatch();

  const item = {
    id: product?._id,
    name: product?.name,
    thumbnail: product?.thumbnail,
    quantity: quantity,
    price: selectedVariant?.price,
    url: `/products/${product?.slug}`,
    size: selectedVariant?.size,
    color: selectedColor,
  };

  //get color style
  function getColorStyle(color: string) {
    switch (color) {
      case "red":
        return "bg-red-500";
      case "blue":
        return "bg-blue-500";
      case "green":
        return "bg-green-500";

      default:
        return "bg-gray-500";
    }
  }

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
              <p className="sm:text-lg md:text-2xl flex items-center gap-2">
                <span className="font-sans text-xs  sm:text-sm">price</span>
                {!selectedVariant
                  ? formatPriceInEUR(product?.variants[0].price!)
                  : formatPriceInEUR(selectedVariant.price)}
              </p>
              <p className="font-sans text-xs underline md:text-base">
                Prices includes VAT,
                <br />
                not shipping fees
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex gap-2 md:gap-4">
              {product?.variants.map((variant, i) => (
                <div key={i}>
                  <Button
                    className="border-black border-2 h-10 bg-transparent"
                    onClick={() => handleVariantChange(variant)}
                  >
                    {variant.size}
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 md:gap-4">
              {product?.colors.map((color) => (
                <div
                  key={color}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    getColorStyle(color),
                    selectedColor === color
                      ? "border-4 border-black rounded-full w-7 h-7 cursor-pointer"
                      : "rounded-full w-7 h-7 cursor-pointer"
                  )}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label> Quantity</label>
            <Input
              type="number"
              min={"1"}
              max={"99"}
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
            <Button
              className="uppercase text-white rounded-sm flex items-center gap-4 bg-green-600 w-full"
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success("Product added to cart")
              }
            >
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
            <div className="mt-4 flex flex-col gap-3 max-w-sm">
              <p className="text-xl md:text-2xl">Description:</p>
              <p className="text-sm md:text-base">{product?.description}</p>
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

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          470: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {relatedProducts.map((product: IProduct) => (
          <SwiperSlide key={product._id}>
            <Card className="rounded-none border-none custom-shadow my-3">
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
                  <h1 className="text-sm lg:text-lg line-clamp-1">
                    {product.name}
                  </h1>
                  <div>
                    {product.variants.length > 0 && (
                      <div key={product.variants[0].variant_id}>
                        <p className="text-[6px]">
                          from
                          <span className="text-sm px-1">
                            {formatPriceInEUR(product.variants[0].price)}
                          </span>
                        </p>
                        <Link
                          href={`/product/${product.slug}`}
                          className="text-xs text-primary underline hover:text-black transition-all duration-300 ease-in-out lg:text-sm"
                        >
                          Choose options
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default ProductPage;

/**onClick={() => setSelectedColor(color)}
                  className={cn(
                    getColorStyle(color),
                    selectedColor === color
                      ? "border-4 border-black rounded-full w-7 h-7 cursor-pointer"
                      : "rounded-full w-7 h-7 cursor-pointer"
                  )} */
