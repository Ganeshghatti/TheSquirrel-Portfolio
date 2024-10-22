// eslint-disable-next-line no-unused-vars
import React from "react";

const DISCRIPTION =
  "The Squirrel is a tech agency from India offering web, app development, and AI services. We create smart chatbots and digital solutions to boost efficiency and customer satisfaction. Stay ahead with our innovative, scalable technology. Contact us today!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className=" py-[100px]  w-full flex flex-col items-center justify-center"
    >
      <div className=" flex flex-col gap-14 bg-white rounded-[50px] p-16 w-[90%]">
        <Title />
        <Description />
        <Button />
      </div>
    </section>
  );
}

function Title() {
  return (
    <h1 className="text-9xl leading-10  tracking-widest text-black font-bold">
      About
    </h1>
  );
}

function Description() {
  return (
    <div className=" w-full max-w-[700px] text-black">
      <p className="text-3xl tracking-widest">{DISCRIPTION}</p>
    </div>
  );
}

function Button() {
  return (
    <button className=" bg-[#E8E8E8] flex flex-row items-center text-black w-full max-w-[700px]  border border-[#C8C8C8] rounded-full   px-5 py-2 gap-5">
      <span className=" size-[60px] bg-black rounded-full"></span>
      <span className="font-medium mb-2 text-7xl">CONTACT US!</span>
    </button>
  );
}
