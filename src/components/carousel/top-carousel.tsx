"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { carouselItems } from "@/lib/constants";

const TopCarousel = () => {
  return (
    <div className="bg-primary py-2 text-center max-w-[1400px] min-[1400px]:mx-auto ">
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
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {carouselItems.map((item, i) => (
          <SwiperSlide
            key={i}
            className="text-white uppercase text-xs min-[470px]:text-sm"
          >
            {item.description}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCarousel;
