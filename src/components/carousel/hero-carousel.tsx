"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { heroCarouselImages } from "@/lib/constants";
import Image from "next/image";

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
      >
        {heroCarouselImages.map((image, index) => (
          <Image
            key={index}
            src={image.image}
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
