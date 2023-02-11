import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            priority
            width={1000}
            height={400}
            className="w-full h-full object-contain"
            src="/carousel-1.jpg"
            alt="audible"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            width={1500}
            height={400}
            className="w-full h-full object-contain"
            src="/carousel-2.jpg"
            alt="prime-video"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            width={1500}
            height={400}
            className="w-full h-full object-contain"
            src="/carousel-3.jpg"
            alt="amazon-music"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
