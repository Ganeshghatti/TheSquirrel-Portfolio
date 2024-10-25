import React, { useState } from "react";
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
    <div className=" pt-20 mr-1 flex flex-col justify-center">
      <div className="flex ml-auto md:pr-32 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black">
        <span>OUR</span>
        <span>SERVICES</span>
      </div>
    </div>
  );
}

const Cards = () => {
  const Data = [
    {
      id: '01',
      title: "Web Development",
      description: "Create modern, responsive websites using the latest technologies. Our web development services include front-end, back-end, and full-stack solutions tailored to your needs.",
      features: ["Responsive Design", "Custom CMS", "E-commerce Solutions", "SEO Optimization"]
    },
    {
      id: '02',
      title: "App Development",
      description: "Build native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Optimization"]
    },
    {
      id: '03',
      title: "AI Chatbot",
      description: "Implement intelligent conversational AI solutions to enhance customer service and automate interactions.",
      features: ["Natural Language Processing", "24/7 Support", "Multi-language", "Analytics"]
    },
    {
      id: '04',
      title: "PERSONALISED AI",
      description: "Custom AI solutions tailored to your specific business needs, leveraging cutting-edge machine learning technologies.",
      features: ["Custom Models", "Data Analysis", "Predictive Analytics", "AI Integration"]
    },
    {
      id: '05',
      title: "Business Automation",
      description: "Streamline your business processes with intelligent automation solutions that save time and reduce costs.",
      features: ["Workflow Automation", "Process Optimization", "Integration", "Analytics"]
    }
  ];

  return (
    <div className="relative w-full my-[200px] flex flex-col gap-[1px]">
      {Data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

function Card1({ id, title, description, features }) {

  return (
    <div key={id} className=" sticky transition-all duration-900 ease-in-out top-28 h-[245px] sm:h-[275px] group hover:lg:h-[500px] lg:h-[345px] w-full bg-[var(--primary-color)] flex flex-row items-center justify-center border border-black">
      <div className="relative h-full w-full flex flex-col ">
        <div className="   flex flex-row items-center gap-10">
          <div className="relative flex items-center justify-center h-[80px] w-[80px] lg:h-[124px] lg:w-[124px]">
            <img src={Nut} alt="" className=" absolute h-full w-full" />
            <span className="absolute text-4xl sm:text-6xl md:text-7xl flex items-center justify-center font-bold h-full w-full">
              {id}
            </span>

          </div>
          <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold uppercase">{title}</h1>
        </div>

        <div
          className={`transition-opacity duration-500 group:hover:oppacity-100 group-hover:lg:opacity-100  flex flex-col gap-3 mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-8`}
        >
          <p className="text-xl mb-6 max-w-2xl">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-2xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-lg"
              >
                <span className="w-2 h-2 bg-black rounded-full" />
                {feature}
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
const Card = ({ id, title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`sticky cursor-pointer transition-all duration-500 ease-in-out top-0 h-[245px] sm:h-[275px] ${isHovered ? 'lg:h-[650px]' : 'lg:h-[345px]'} w-full bg-[var(--primary-color)] flex flex-row items-center justify-center border border-black`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className=" h-full w-full p-8 flex flex-col items-center">
        {/* Top section with number and title */}
        <div className="flex flex-row items-center gap-10 mt-[70px]">
          <div className="relative flex items-center justify-center h-[80px] w-[80px] lg:h-[124px] lg:w-[124px]">
            <img src={Nut} alt="" className=" absolute h-full w-full" />
            <span className="absolute text-4xl sm:text-6xl md:text-7xl flex items-center justify-center font-bold h-full w-full">
              {id}
            </span>

          </div>
          <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold uppercase"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            
          >{title}</h1>
        </div>

        {/* Animated content section */}
        <div
          className={`transition-opacity pl-14 mt-[50px] mb-[70px] duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <p className="text-4xl mb-6 max-w-2xl">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-2xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-3xl font-semibold"
              >
                <span className=" text-xl sm:text-4xl md:text-5xl flex items-center justify-center font-bold text-slate-300 ">
                  {index + 1}.
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};