"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { IProduct } from "@/types/product-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const FeaturedCarousel = ({ products }: any) => {
  return (
    <>
      <Swiper slidesPerView={2} spaceBetween={10} loop={true}>
        {products.map((product: IProduct) => (
          <SwiperSlide key={product._id}>
            <Link href={`/products/${product._id}`}>
              <Card className="rounded-none border-none custom-shadow">
                <CardHeader>
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="object-cover "
                  />
                </CardHeader>
                <CardContent className="tracking-tighter font-bold px-2">
                  <div>
                    <h1 className="text-xs ">{product.name}</h1>
                    <div>
                      {product.sizes.length > 0 && (
                        <div key={product.sizes[0]._key}>
                          <p>from {product.sizes[0].price}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedCarousel;
