import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Nut from "../../assets/nut.svg";
import Arrow from "../../assets/arrow.svg";

export default function Clients() {
  return (
    <section id="service" className=" min-h-screen  w-full flex flex-col">
      <Title />
      <Banner />
    </section>
  );
}

function Title() {
  return (
    <div className=" pt-20 mr-1 flex flex-col justify-center">
      <div className="flex  ml-0 md:pr-32 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black">
        <span>OUR</span>
        <span>CLIENTS</span>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="mt-[100px] w-[95%] h-[150px] md:h-[300px] flex flex-col overflow-hidden border-b border-t border-[#F0F0F0]">
      <div className="relative h-full  banner_bg p-10 md:p-[100px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee ">
          <div className="flex flex-row gap-10 md:gap-16 sm:gap-16  text-xl md:text-8xl lg:text-7xl text-[#F0F0F0] font-bold uppercase">
            <span>Home</span>
            <span>About</span>
            <span>Our services</span>
            <span>Our cases</span>
            <span>Contact US!</span>
            <span>Home</span>
            <span>About</span>
            <span>Our services</span>
            <span>Our cases</span>
            <span>Contact US!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
