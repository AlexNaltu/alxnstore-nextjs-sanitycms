"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const CodeBanner = () => {
  return (
    <Fade triggerOnce={true} direction="up" duration={1000}>
      <div>
        <Image
          src="/banner-code.png"
          alt="banner"
          width={1000}
          height={1000}
          className="min-[470px]:aspect-video sm:hidden object-cover object-center"
        />
        <Image
          src="/banner-code2.png"
          alt="banner"
          width={2000}
          height={2000}
          className="hidden sm:block object-cover object-center "
        />
      </div>
    </Fade>
  );
};

export default CodeBanner;
