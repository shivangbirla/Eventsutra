"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Images imported from local folder
import h3 from "../../public/assets/images/h-3.jpg";
import h4 from "../../public/assets/images/h-4.jpg";
import h5 from "../../public/assets/images/h-5.jpg";
import h6 from "../../public/assets/images/h-6.jpg";

export const images = [
  { src: h6, alt: "First" },
  { src: h5, alt: "Second" },
  { src: h3, alt: "Third" },
  { src: h4, alt: "Fourth" },
];

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mt-2"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={1000} // Set explicit dimensions
              height={500}
              className="block h-[30%] w-full object-cover rounded-[40px]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
