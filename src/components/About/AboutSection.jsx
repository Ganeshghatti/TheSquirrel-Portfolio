// eslint-disable-next-line no-unused-vars
import React from "react";
import Arrow from "../../assets/arrow.svg";

const DISCRIPTION =
  "Cohesive Visual - Intelligent Solutions - Swift Delivery \n\n We are a premier tech-agency based out of India specializing in solution that your business needs. We combine our knowledge of Aesthetics with Technology to Intelligently Present your Business via Websites/App/Designs.";
export default function AboutSection() {
  return (
    <section
      id="about"
      className=" py-[100px]  w-[100%] flex flex-col items-center justify-center"
    >
      <div className=" flex flex-col gap-10 md:gap-10 bg-[#f7f7f7] rounded-[50px] p-8 md:p-12 lg:p-16 w-[95%] md:w-[95%]">
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
    <div className=" w-full max-w-[750px] text-black">
      <p className="text-2xl md:text-3xl font-thin md:tracking-widest">
        {DISCRIPTION}
      </p>
    </div>
  );
}

function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={handleClick}
      className="text-nowrap relative bg-[#E8E8E8] flex flex-row items-center justify-center text-black w-fit md:w-full max-w-[550px] border border-[#C8C8C8] rounded-full px-[50px] md:px-[100px] py-0 gap-5 group"
    >
      <img
        src={Arrow}
        className="h-[30px] md:h-fit absolute left-3 sm:group-hover:left-[calc(100%-75px)] transition-all duration-1000 ease-in-out group-hover:rotate-[400deg]"
      />
      <span className="w-fit font-medium mb-2 lg:text-6xl md:text-7xl text-center">
        CONTACT US!
      </span>
    </button>
  );
}
