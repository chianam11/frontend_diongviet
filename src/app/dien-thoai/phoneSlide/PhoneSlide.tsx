"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import ChevronLeft from "@/components/chevronIcon/ChevronLeft";
import ChevronRight from "@/components/chevronIcon/ChevronRight";
import OtherPhoneInfo from "../productDetails/OtherPhoneIf";

type PhoneSlideProps = {
  image_arr: { image_url: string }[];
};

const PhoneSlide = ({ image_arr }: PhoneSlideProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isReady, setIsReady] = useState(false);

  const hasMultipleSlides = image_arr.length > 1;

  useEffect(() => {
    if (hasMultipleSlides && prevRef.current && nextRef.current) {
      setIsReady(true);
    } else {
      setIsReady(true); // vẫn cho phép render Swiper kể cả khi không có navigation
    }
  }, [hasMultipleSlides]);

  return (
    <div className="relative w-full h-[300px] lg:w-[700px]">
      {/* Nút Prev chỉ hiển thị khi đủ ảnh */}
      {hasMultipleSlides && (
        <button
          ref={prevRef}
          className="hidden absolute top-1/2 left-3 -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full
                   lg:flex items-center justify-center hover:bg-opacity-80 transition"
        >
          <span className="text-xl font-bold select-none">
            <ChevronLeft className="size-6" />
          </span>
        </button>
      )}

      {/* Swiper */}
      {isReady && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={hasMultipleSlides}
          autoplay={
            hasMultipleSlides
              ? {
                  delay: 5000,
                  disableOnInteraction: false,
                }
              : false
          }
          pagination={hasMultipleSlides ? { clickable: true } : false}
          navigation={
            hasMultipleSlides
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : undefined
          }
          onBeforeInit={(swiper) => {
            if (
              hasMultipleSlides &&
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="w-full h-full"
        >
          {image_arr.map(({ image_url }, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full p-2 bg-white rounded-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/products/${image_url}`}
                  alt={`Phone Image ${index}`}
                  width={250}
                  height={250}
                  sizes="250px"
                  priority
                  className="object-cover  h-auto rounded-lg "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Nút Next chỉ hiển thị khi đủ ảnh */}
      {hasMultipleSlides && (
        <button
          ref={nextRef}
          className="hidden absolute top-1/2 right-3 -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full
                   lg:flex items-center justify-center hover:bg-opacity-80 transition"
        >
          <span className="text-xl font-bold select-none">
            <ChevronRight />
          </span>
        </button>
      )}
      <div className="hidden lg:block">
        <OtherPhoneInfo />
      </div>
    </div>
  );
};

export default PhoneSlide;
