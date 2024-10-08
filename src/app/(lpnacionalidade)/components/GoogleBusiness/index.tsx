"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import LogoGoogleReviews from "../../../../../public/assets/images/google.png";
import "./swiper.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import client1 from "../../../../../public/assets/images/client1.jpeg";
import client2 from "../../../../../public/assets/images/client2.jpeg";
import client3 from "../../../../../public/assets/images/client3.jpeg";
import client4 from "../../../../../public/assets/images/client4.jpeg";
import client5 from "../../../../../public/assets/images/client5.jpeg";

export function GoogleBusiness() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-sans text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              O que os clientes falam {""}
              <span className="bg-brandSecondary bg-clip-text font-sans font-black text-transparent">
                sobre a Dra. Jamile Gomes
              </span>
            </h1>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 xl:justify-center">
            <Image
              src={LogoGoogleReviews}
              alt="Imagem"
              width={300}
              height={300}
              rel="preload"
              className="h-28 w-28 drop-shadow-lg"
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                <Image
                  src={client1}
                  alt="Imagem 1"
                  rel="preload"
                  className="cursor-pointer rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </blockquote>
            </SwiperSlide>

            <SwiperSlide>
              <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                <Image
                  src={client2}
                  alt="Imagem 2"
                  rel="preload"
                  className="cursor-pointer rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </blockquote>
            </SwiperSlide>

            <SwiperSlide>
              <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                <Image
                  src={client3}
                  alt="Imagem 3"
                  rel="preload"
                  className="cursor-pointer rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </blockquote>
            </SwiperSlide>

            <SwiperSlide>
              <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                <Image
                  src={client4}
                  alt="Imagem 4"
                  rel="preload"
                  className="cursor-pointer rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </blockquote>
            </SwiperSlide>

            <SwiperSlide>
              <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                <Image
                  src={client5}
                  alt="Imagem 5"
                  rel="preload"
                  className="cursor-pointer rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </blockquote>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
