import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import blob from "../../assets/blob.svg";

import Nut from "../../assets/nut.svg";

import { HOME_DESCRIPTION, HOME_EXPERIANCE, HOME_TITLE } from "../../db/static";
import React from "react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen h-full flex flex-col items-center   w-full"
    >
      <Title />
      <Description />
      <Expreance />
      <WorkImages />
      <Blob></Blob>
    </section>
  );
}

function Blob() {
  return (
    <div className=" absolute overflow-hidden h-screen w-full">
      <div className=" relative h-full w-full">
        <img
          src={blob}
          className=" absolute left-0 md:left-[29%] top-[13%]    blur-[200px] opacity-70"
          alt=""
        />
        <img
          src={blob}
          className=" absolute left-[20%] top-[29%] h-[200px] w-[200px] md:h-[376px] md:w-[376px]  blur-[200px] opacity-90  "
          alt=""
        />
        <img
          src={blob}
          className=" absolute left-0 md:left-[80%] top-[20%] h-[200px] w-[200px] md:h-[376px] md:w-[376px]  shadow-2xl blur-[200px]  "
          alt=""
        />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className=" z-10 mt-48 w-[80%] text-center">
      <h1 className=" transition-all duration-500 ease-in-out text-7xl md:text-8xl lg:text-9xl font-bold">
        {HOME_TITLE}
      </h1>
    </div>
  );
}

function Description() {
  return (
    <div className="z-10 mt-10 w-[70%] text-center ">
      <p className=" text-3xl md:text-4xl font-thin">{HOME_DESCRIPTION}</p>
    </div>
  );
}

function Expreance() {
  return (
    <div className=" z-10 mt-[650px] overflow-clip   flex flex-col items-center  md:flex-row  gap-1  w-full  mb-2">
      {HOME_EXPERIANCE.map((item) => {
        return (
          <div
            key={item.id}
            className="  group md:hover:w-[40%]  transition-all duration-500 ease-in-out flex lg:flex-row md:flex-col flex-row items-center md:w-1/3  sm:w-[80%] w-[90%] bg-[var(--primary-color)] h-[270px] md:h-[400px] lg:h-[270px] px-10 py-8 gap-5"
          >
            <div className="flex flex-col ">
              <span className="font-days text-7xl sm:text-8xl  mt-6 group-hover:mt-0 font-extrabold transition-all duration-500 ease-in-out group-hover:text-9xl">
                {item.data}
              </span>
              <div className="h-[1px] mt-3 w-7 bg-white transition-all duration-500 ease-in-out group-hover:w-9"></div>
              <span className="text-2xl font-light mt-2 transition-all duration-500 ease-in-out group-hover:text-3xl">
                {item.title}
              </span>
            </div>
            <div className="w-[40%] ml-auto md:w-full md:ml-0  lg:mt-0 full flex flex-row items-center justify-center lg:justify-end  lg:mr-6">
              <img
                src={Nut}
                alt=""
                className="transition-all h-[100px] w-[100px] sm:min-h-[123px] sm:min-w-[123px] duration-500 ease-in-out group-hover:scale-125"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function WorkImages() {
  const cardsData = [
    {
      productName: "Product Name 1",
      clientName: "Client Name 1",
      rating: "★★★★☆",
    },
    {
      productName: "Product Name 2",
      clientName: "Client Name 2",
      rating: "★★★★★",
    },
    {
      productName: "Product Name 3",
      clientName: "Client Name 3",
      rating: "★★★☆☆",
    },
    {
      productName: "Product Name 4",
      clientName: "Client Name 4",
      rating: "★★★★☆",
    },
  ];
  return <CardSlider cards={cardsData} />;
}

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, [cards.length]);

  const cardVariants = {
    center: { x: "-50%", opacity: 1, scale: 1, zIndex: 3 },
    left: { x: "-140%", opacity: 0.7, scale: 0.7, zIndex: 2 },
    right: { x: "40%", opacity: 0.7, scale: 0.7, zIndex: 2 },
    hidden: { x: "100%", opacity: 0, scale: 0.8, zIndex: 1 },
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -cards.length + 1) return "right";
    if (diff === -1 || diff === cards.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className="slider-container relative my-[550px] w-full h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="card absolute  left-1/2 right-1/2  w-[70%] h-fit lg:h-[530px] bg-white rounded-[50px] shadow-lg p-16"
          variants={cardVariants}
          initial="hidden"
          animate={getCardStyle(index)}
          transition={{ duration: 0.5 }}
        >
          <div className="  h-full w-full flex flex-col">
            <div className=" w-full flex flex-col lg:flex-row flex-1 gap-4 lg:gap-16">
              <div className="flex flex-col min-w-[138px] gap-5">
                <div className="h-[138px] hidden  w-full bg-[#D9D9D9] rounded-3xl lg:flex items-center justify-center overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="https://www.creativefabrica.com/wp-content/uploads/2023/08/18/Kawaii-Pastel-White-Bunny-Clipart-Graphics-77177868-1-1-580x387.jpg"
                    alt=""
                  />
                </div>
                <div className="text-black overflow-hidden">
                  <h6 className="text-2xl text-ellipsis line-clamp-1 capitalize">
                    White Rabbit
                  </h6>
                  <p className=" text-lg font-normal text-[#8A8A8A]  ">POSITION</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
              >
                <p className="text-3xl font-normal tracking-widest text-black line-clamp-[6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  assumenda molestiae velit dolorem quis maxime accusantium
                  dicta, repellat necessitatibus modi ducimus dolore minima.
                  Dolor ullam possimus non ipsum? Repellat, laborum Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Eius eum,
                  perspiciatis nemo quo assumenda adipisci officiis harum autem
                  earum distinctio! Quaerat, quidem! Debitis fugiat tempora
                  repellendus a dolorum aspernatur pariatur. Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Dolore harum adipisci
                  blanditiis illo eum enim perferendis sed. Eligendi natus
                  soluta minima ex dolor repellendus in dolorem velit, fuga
                  incidunt suscipit? Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Repudiandae officia deleniti voluptates a,
                  odio magnam neque quia voluptatibus sunt commodi eos,
                  perspiciatis temporibus ipsum quibusdam ab repellendus modi
                  suscipit deserunt..
                </p>
              </motion.div>
            </div>

            <div className="flex flex-row justify-between mt-4 lg:mt-auto">
              <h6 className="text-2xl font-normal text-black capitalize ">
                PRODUCT NAME
              </h6>
              <div>"★★★★☆"</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
