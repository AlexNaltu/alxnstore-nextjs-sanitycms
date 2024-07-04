"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { heroCarouselImages, heroCarouselImagesVideo } from "@/lib/constants";
import Image from "next/image";

// Hero carousel component
const HeroCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        swipeable={false}
        infiniteLoop={true}
        interval={6000}
        transitionTime={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="min-[470px]:hidden"
      >
        {heroCarouselImages.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={"/"}
            width={3000}
            height={1000}
            priority
          />
        ))}
      </Carousel>
      <Carousel
        autoPlay={true}
        swipeable={false}
        infiniteLoop={true}
        interval={6000}
        transitionTime={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="hidden min-[470px]:inline-flex"
      >
        {heroCarouselImagesVideo.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={"/"}
            width={3000}
            height={1000}
            priority
          />
        ))}
      </Carousel>
    </>
  );
};

export default HeroCarousel;
