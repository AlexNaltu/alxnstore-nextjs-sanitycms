"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { IProduct } from "@/types/product-types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatPriceInEUR } from "@/lib/formatPrice";

const RandomProductsCarousel = ({ products }: any) => {
  return (
    <>
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
        {products.map((product: IProduct) => (
          <SwiperSlide key={product._id}>
            <Card className="rounded-none border-none custom-shadow mb-2">
              <CardHeader>
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="object-cover "
                />
              </CardHeader>
              <CardContent className="tracking-tighter font-bold px-1 bg-black ">
                <div>
                  <h1 className="text-base text-white lg:text-lg line-clamp-1">
                    {product.name}
                  </h1>
                  <div>
                    {product.variants.length > 0 && (
                      <div key={product.variants[0].variant_id}>
                        <p className="text-xs font-light text-gray-500">
                          from
                          <span className="text-base text-white px-1">
                            {formatPriceInEUR(product.variants[0].price)}
                          </span>
                        </p>
                        <Link
                          href={`/products/${product.slug}`}
                          className="text-base text-primary underline hover:text-black transition-all duration-300 ease-in-out lg:text-sm"
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
    </>
  );
};

export default RandomProductsCarousel;
