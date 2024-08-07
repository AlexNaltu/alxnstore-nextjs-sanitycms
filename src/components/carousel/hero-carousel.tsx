"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  heroCarouselImages,
  heroCarouselImagesLg,
  heroCarouselImagesVideo,
} from "@/lib/constants";
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
        className="hidden min-[470px]:inline-flex min-[850px]:hidden"
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
      <Carousel
        autoPlay={true}
        swipeable={false}
        infiniteLoop={true}
        interval={6000}
        transitionTime={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="hidden min-[850px]:inline-flex lg:max-w-[860px] min-[1050px]:max-w-[900px] min-[1100px]:max-w-[950px] min-[1170px]:max-w-[1000px] min-[1250px]:max-w-[1090px] min-[1300px]:max-w-[1140px] min-[1380px]:max-w-[1400px]"
      >
        {heroCarouselImagesLg.map((item, index) => (
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
