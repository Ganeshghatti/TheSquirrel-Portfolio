// eslint-disable-next-line no-unused-vars
import React from "react";
import Arrow from '../../assets/arrow.svg'

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
    <h1 className=" text-6xl sm:text-7xl md:text-8xl  lg:text-9xl leading-10  tracking-widest text-black font-bold">
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
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button
      onClick={handleClick}
      className=" text-nowrap relative bg-[#E8E8E8] flex flex-row items-center text-black   w-fit md:w-full max-w-[700px]  border border-[#C8C8C8] rounded-full px-5  sm:px-[100px] py-2 sm:py-4 gap-5 group "
    >

      <img src={Arrow} className='hidden sm:block absolute left-5 group-hover:left-[calc(100%-75px)] transition-all duration-1000 ease-in-out group-hover:rotate-[400deg]' />
      <span className="w-fit font-medium mb-2 text-4xl md:text-7xl">CONTACT US!</span>
    </button>
  );
}
