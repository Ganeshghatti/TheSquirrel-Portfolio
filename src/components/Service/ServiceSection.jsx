import React from "react";

export default function ServiceSection() {
  return (
    <section id="service" className=" min-h-screen  w-full flex flex-col">
      <Title />
      <Cards />
    </section>
  );
}

function Title() {
  return (
      <div className=" py-20 mr-1 flex flex-col justify-center">
        <div className="flex ml-auto pr-32 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black">
          <span>OUR</span>
          <span>SERVICES</span>
        </div>
      </div>
  );
}

function Cards() {
  return (
    <div className=" relative w-full my-[200px] flex flex-col">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="sticky top-0 h-[345px] w-full bg-[var(--primary-color)] flex flex-col items-center justify-center border border-black">
      <div>
        <h1 className="text-8xl font-semibold">WEB DEVELOPMENT</h1>
      </div>
    </div>
  );
}
