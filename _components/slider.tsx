"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import data from "@/_data/general-data.json";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  desktop?: boolean;
}

const Slider = ({ cssClasses, desktop }: Props) => {
  const { slider } = data;

  if (desktop) {
    return (
      <>
        <Swiper
          autoplay={{
            delay: 4000,
          }}
          spaceBetween={16}
          loop={true}
          speed={1500}
          effect="fade"
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className={cssClasses}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            dynamicBullets: true,
          }}
        >
          {slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide}
                alt={`Monks Medical ${index}`}
                priority={index === 0 ? true : false}
                width={1680}
                height={1050}
                className="rounded-none"
              />
            </SwiperSlide>
          ))}
          <button
            className="swiper-button-prev absolute top-1/2 z-10 left-10 cursor-pointer grid place-items-center p-2.5 rounded-full bg-white/[60%] hover:bg-white/75 ease-in-out duration-300"
            aria-label="Show previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
              className=" rotate-180 -translate-x-[1px]"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </button>
          <button
            className="swiper-button-next absolute top-1/2 z-10 right-10 cursor-pointer grid place-items-center p-2.5 rounded-full bg-white/[60%] hover:bg-white/75 ease-in-out duration-300"
            aria-label="Show next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </button>
        </Swiper>
      </>
    );
  } else {
    return (
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        spaceBetween={16}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        className={cssClasses}
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Monks Medical ${index}`}
              priority={index === 0 ? true : false}
              width={600}
              height={400}
              className="rounded-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default Slider;
