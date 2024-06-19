"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./hero.css";
import { useRouter } from "next/navigation";

const HeroBanner = () => {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vh] relative mt-9 overflow-y-none">


      {/* <div className="opacity-50 z-10">
        {" "}
        <Image
          src={"/bg.png"}
          alt="haha"
          layout="fill"
          objectFit="cover"
          className="object-fill"
        />
      </div> */}

      <Image
        src={"/home.png"}
        alt="HeroBannerText"
        width={400}
        height={100}
        className="z-10 absolute left-0 right-0 top-[8em] mx-auto w-1/2  font-header text-white "
      />

      <Image
        src={"/here.png"}
        alt="HeroBannerText"
        width={400}
        height={100}
        className="z-10 absolute left-0 right-0 top-[15em] mx-auto w-1/2  font-header text-white "
      />

      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 top-[36em] p-9 mx-auto flex gap-9">
        <button
          className="button  font-extrabold "
          onClick={() => {
            router.push("/Create");
          }}
        >
          List Land NFT
        </button>

        <button
          className="button1   font-extrabold "
          onClick={() => {
            router.push("/marketplace");
          }}
        >
          Buy Land NFT
        </button>
      </div>

      <div className="w-5 h-5">
        <Image
          src={"/left-nft.webp"}
          alt="HeroBannerText"
          width={400}
          height={200}
          className="z-10 absolute left-[8em] top-[25em] mx-auto   font-header text-white w-[25em] h-[25em]"
        />
      </div>

      <Image
        src={"/right-nft.png"}
        alt="HeroBannerText"
        width={400}
        height={100}
        className="z-10 absolute right-[8em] top-[25em] mx-auto   font-header text-white w-[25em] h-[25em] "
      />
    </div>
  );
};

export default HeroBanner;
