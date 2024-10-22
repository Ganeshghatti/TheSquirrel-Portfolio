import React from 'react';
import Arrow from '../../assets/arrow.svg'
export default function ConnectSection() {
  return (
    <section
      id="contact"
      className=" py-[100px]  w-full flex flex-col items-center justify-center "
    >
      <Title />
      <Box />
      <Footer />
    </section>
  );
}

function Title() {
  return (
    <div className=" flex flex-col px-16 w-[90%]">
      <div className=" self-start py-20 w-1/2 flex flex-col justify-center">
      <div className="flex ml-auto md:pr-32 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black">
          <span>LET'S</span>
          <span>CONNECT</span>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <form className=" flex flex-col gap-14 bg-white rounded-[50px] p-16 w-[90%]">
      <h1 className=" w-full max-w-[700px] text-5xl lg:text-6xl  font-black tracking-wide text-black">
        Your Next Big Leap Starts Here.
      </h1>
      <div className=" w-full max-w-[700px] text-black">
        <div className="flex flex-col text-4xl font-light gap-4  ">
          <input
            className="outline-none border-b pb-4 hover:border-black hover:placeholder-black transition-all duration-500 ease-in-out"
            type="text"
            placeholder="Name"
          />
          <input
            className="outline-none border-b py-4 hover:border-black hover:placeholder-black transition-all duration-500 ease-in-out"
            type="email"
            placeholder="Email"
          />
          <input
            className="outline-none border-b pt-4 hover:border-black hover:placeholder-black transition-all duration-500 ease-in-out"
            type="number"
            placeholder="Contact Number"
          />
        </div>
      </div>
      {/* <button
        type="submit"
        className=" text-nowrap relative bg-[#E8E8E8] flex flex-row items-center text-black  w-full max-w-[700px]  border border-[#C8C8C8] rounded-full   px-[100px] py-5 md:py-2 gap-5 group "
      >
        
        <img src={Arrow} className=' absolute left-5 group-hover:left-[calc(100%-75px)] transition-all duration-500 ease-in-out group-hover:rotate-[400deg]'/>
        <span className="w-fit font-medium mb-2 text-5xl md:text-7xl">CONTACT US!</span>
      </button> */}

      
    </form>
  );
}

function Footer() {
  return (
    <div className=" mt-[450px] w-full  flex flex-row justify-center">
      <div className="flex flex-col flex-1 h-full mt-auto w-[50%]">
        <h6 className=" text-3xl font-light">
          The Squirrel, Copyright 2024-2025
        </h6>
      </div>

      <div className=" flex flex-col w-[50%] ml-auto ">
        <h4 className="font-bold text-5xl sm:text-6xl lg:text-7xl mb-10">The Squirrel</h4>
        <p className="font-normal text-3xl mb-16">
          Efficient, Intelligent, and Innovative. We're here to revolutionize
          the way you think about service. Experience the future with us today!
        </p>
        <div className=" w-full h-[180px] flex flex-row justify-between  text-3xl font-normal">
          <div className="flex flex-col gap-6">
            <Link href="about" title="About" />
            <Link href="service" title="Service" />
          </div>
          <div className=" text-end flex flex-col gap-6">
            <Link href="home" title="Home" />
            <Link href="contact" title="Contact" />
            <Link href="cases" title="Cases" />
          </div>
        </div>
      </div>
    </div>
  );
}
function Link({ href, title }) {
  const handleClick = (e, linkId) => {
    e.preventDefault();
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return <a   onClick={(e) => handleClick(e, href)} href={`#${href}`}>{title}</a>;
}
