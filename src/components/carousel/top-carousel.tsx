"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const carouselItems = [
  {
    name: "item1",
    description: "Use Code imnotalxn for 5% off",
  },
  {
    name: "item2",
    description: "Use Code imnotalxn for 5% off",
  },
  {
    name: "item2",
    description: "Use Code imnotalxn for 5% off",
  },
];

const TopCarousel = () => {
  return (
    <div className="bg-primary py-2 text-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={1500}
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.name}>
            <h1 className="uppercase text-xs text-white">{item.description}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCarousel;
