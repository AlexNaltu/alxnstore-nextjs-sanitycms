"use client";
import { Button } from "@/components/ui/button";
import { detailedInformation, itemDescription } from "@/lib/constants";
import { formatPriceInEUR } from "@/lib/formatPrice";
import { IColors, IProduct, IVariants } from "@/types/product-types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoShirt } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { getRelatedProducts } from "@/actions/actions";

interface Props {
  product: IProduct;
}

const ProductPage = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { data, error, isLoading } = useQuery({
    queryKey: ["relatedProduct"],
    queryFn: async () => {
      //@ts-ignore
      const relatedProduct = await getRelatedProducts(product.category[0]);
      return relatedProduct;
    },
  });

  const handleVariantChange = (variant: IVariants) => {
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (value: string) => {
    setQuantity(Number(value));
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
    color_: selectedColor.color,
    color_Id: selectedColor.colorId,
    variant_id: selectedVariant?.variant_id,
  };

  //get color style
  function getColorStyle(color: IColors) {
    switch (color.color) {
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
    <div className="tracking-tighter px-2 max-w-[1400px] mx-auto text-white lg:mt-6">
      <div className="lg:flex justify-center gap-2 xl:gap-4">
        <div className="sm:flex sm:flex-row-reverse gap-2 md:max-w-[700px]">
          <div className="max-w-[500px]  mx-auto">
            <Image
              src={selectedImage}
              alt="/"
              width={1000}
              height={1000}
              className="mx-auto my-3 lg:my-6 aspect-square object-cover rounded-sm"
            />
          </div>
          <div className="flex justify-center gap-1 min-[470px]:gap-4 min-[470px]:max-w-sm sm:flex-col sm:max-w-[150px] lg:self-start lg:pt-7 mx-auto">
            {product?.images.map((image, i) => (
              <div key={i}>
                <Image
                  src={image}
                  alt="/"
                  width={300}
                  height={300}
                  onClick={() => setSelectedImage(image)}
                  className="cursor-pointer border-2 border-black rounded-sm p-1 aspect-square object-cover bg-white"
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
                  {selectedVariant === variant ? (
                    <Button
                      className="border-white border-2 h-10 bg-black text-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease-in"
                      onClick={() => handleVariantChange(variant)}
                    >
                      {variant.size}
                    </Button>
                  ) : (
                    <Button
                      className="border-black border-2 h-10 bg-white text-black hover:text-white hover:border-black transition-all duration-300 ease-in"
                      onClick={() => handleVariantChange(variant)}
                    >
                      {variant.size}
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-2 md:gap-4">
              {product.colors.map((color) => (
                <div key={color.colorId}>
                  <button
                    className={cn(
                      "h-8 w-8 rounded-full",
                      getColorStyle(color),
                      selectedColor.colorId === color.colorId
                        ? "border-2 border-black"
                        : ""
                    )}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-black">
            <Select onValueChange={handleQuantityChange} defaultValue="1">
              <SelectTrigger className="w-[180px] border-2 border-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3 max-w-sm">
            <Button
              className="uppercase text-white rounded-sm flex items-center gap-4 bg-green-600 w-full hover:bg-green-900"
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success(`${product.name} added to cart!`)
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
          <AccordionTrigger className="decoration-0 text-lg min-[470px]:text-xl sm:text-2xl md:text-4xl">
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
      <h2 className="uppercase font-black mt-5 sm:text-2xl md:text-4xl lg:my-5">
        More From This Category
      </h2>

      {data && (
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
          {data.map((product: IProduct) => (
            <SwiperSlide key={product._id}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Toaster position="bottom-right" />
    </div>
  );
};

export default ProductPage;
