"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const CodeBanner = () => {
  return (
    <Fade triggerOnce={true} direction="up" duration={1000}>
      <div>
        <Image src="/banner-code.png" alt="banner" width={1000} height={1000} />
      </div>
    </Fade>
  );
};

export default CodeBanner;
