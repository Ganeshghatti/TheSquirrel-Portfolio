import React from 'react'
import blob from "../assets/blob.svg";

export default function Background() {
  return (
    <div className=" absolute left-0 overflow-hidden h-[200vh] w-full">
      <div className=" relative h-full w-full">
        <img
          src={blob}
          className=" absolute left-0 md:left-[35%] top-[4%]    blur-[200px] opacity-70"
          alt=""
        />
        <img
          src={blob}
          className=" absolute left-[20%] top-[15%] h-[200px] w-[200px] md:h-[376px] md:w-[376px]  blur-[200px] opacity-90  "
          alt=""
        />
        <img
          src={blob}
          className=" absolute left-0 md:left-[60%] top-[10 %] h-[200px] w-[200px] md:h-[376px] md:w-[376px]  shadow-2xl blur-[200px]  "
          alt=""
        />
      </div>
    </div>
  )
}
