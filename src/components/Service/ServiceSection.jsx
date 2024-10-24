import React from "react";
import Nut from '../../assets/nut.svg';

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
        <div className="flex ml-auto md:pr-32 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black">
          <span>OUR</span>
          <span>SERVICES</span>
        </div>
      </div>
  );
}

function Cards() {
  const Data = [
    {
      id: '01',
      title: "Web Development",
    },
    {
      id: '02',
      title: "App Development",
    },
    {
      id: '03',
      title: "AI Chatbot",
    },
    {
      id: '04',
      title: "PERSONALISED AI",
    },
    {
      id: '05',
      title: "Business Automation",
    }
  ]
  return (
    <div className=" relative w-full my-[200px] flex flex-col">
    {
      Data.map((item) => {
        return (
          <Card key={item.id} id={item.id} title={item.title} />
        )
      })
    }
    </div>
  );
}

function Card({ key, id, title }) {
  
  return (
    <div key={key} className="sticky top-28 h-[245px] sm:h-[275px] lg:h-[345px] w-full bg-[var(--primary-color)] flex flex-row items-center justify-center border border-black">
      <div className="flex flex-row items-center gap-10">
        <div className="relative flex items-center justify-center h-[80px] w-[80px] lg:h-[124px] lg:w-[124px]">
        <img src={Nut} alt="" className=" absolute h-full w-full" />
          <span className="absolute text-4xl sm:text-6xl md:text-7xl flex items-center justify-center font-bold h-full w-full">
            {id}
          </span>
          
        </div>
        <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold uppercase">{title}</h1>
      </div>
    </div>
  );
}
