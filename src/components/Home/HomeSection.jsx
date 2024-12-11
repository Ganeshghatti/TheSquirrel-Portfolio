import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import blob from "../../assets/blob.svg";

import Nut from "../../assets/nut.svg";

import { HOME_DESCRIPTION, HOME_EXPERIANCE, HOME_TITLE } from "../../db/static";
import React from "react";
import { desc, div } from "framer-motion/client";
import { Star } from "lucide-react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen h-full flex flex-col items-center w-full bg-[#000] overflow-hidden"
    >
      {/* Hero section gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[180%] sm:w-[130%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-gradient-radial from-[#0047FF]/60 via-[#0047FF]/30 to-black/90"
        />
      </div>

      <Title />
      <Description />
      <Expreance />
      <WorkImages />
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HOME_TITLE.pairs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-10 mt-36 w-full">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-12">
        We Intelligently Present <br /> Businesses
        <br />
      </h1>

      {/* Animated pairs in separate lines */}
      <div className="flex flex-col lg:pt-1 md:m-4 md:pt-10 space-y-8 text-xl md:text-5xl lg:text-6xl font-bold items-start">
        {/* First animated line */}
        <div className="flex items-center gap-2  m-1 relative w-full">
          <span className="m-2">Your</span>
          <div className="relative h-[1.7em] w-[130px] md:w-[250px] md:h-[1.5em] md:p-1 lg:w-[300px] overflow-hidden border border-[2.5px] border-white/1000  rounded-full  inline-block">
            {HOME_TITLE.pairs.map((pair, index) => (
              <motion.div
                key={`main-${pair.main}`}
                initial={{ y: "70%", opacity: 0 }}
                animate={{
                  y: index === currentIndex ? "0%" : "-70%",
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute w-full text-center whitespace-nowrap"
              >
                {pair.main}
              </motion.div>
            ))}
          </div>
          <span className="text-gray-500 ">&nbsp;via&nbsp;</span>
          <div className="relative h-[1.7em] w-[130px] md:w-[250px] md:h-[1.5em] md:p-1 lg:w-[300px] overflow-hidden border border-[2.5px] border-white/1000  rounded-full  inline-block">
            {HOME_TITLE.servicePairs.map((pair, index) => (
              <motion.div
                key={`main-${pair.main}`}
                initial={{ y: "70%", opacity: 0 }}
                animate={{
                  y: index === currentIndex ? "0%" : "-70%",
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute w-full text-center whitespace-nowrap"
              >
                {pair.main}
              </motion.div>
            ))}
          </div>
          {/* Bottom line */}
          {/* <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/20"></div> */}
        </div>

        {/* Second animated line */}
        <div className="flex items-center gap-4 relative w-full ml-3">
          {/* Top line */}
          <div className="absolute -top-4 w-full h-[1px] bg-white/20"></div>
          <span>For Enhance Your</span>
          <div className="relative h-[1.7em] lg:h-[1.5em] lg:text-center w-[190px] md:w-[300px] lg:w-[480px] overflow-hidden border border-[3px] border-white/1000 rounded-full inline-block">
            {HOME_TITLE.pairs.map((pair, index) => (
              <motion.div
                key={`value-${pair.value}`}
                initial={{ y: "70%", opacity: 0 }}
                animate={{
                  y: index === currentIndex ? "0%" : "-70%",
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute w-full text-center whitespace-nowrap"
              >
                {pair.value}
              </motion.div>
            ))}
          </div>
          {/* Bottom line */}
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/20"></div>
        </div>
      </div>
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
  const leftEmptyCardStyle =
    "linear-gradient(to right, #000000 0%, #071564 100%)";
  const rightEmptyCardStyle =
    "linear-gradient(to left, #000000 0%, #071564 100%)";

  return (
    <div className="z-10 mt-[370px] overflow-visible flex flex-col items-center md:flex-row gap-1 w-full mb-2">
      {/* Left empty card, hidden on small screens */}
      <div
        className="hidden md:block w-[150px] md:w-[200px] h-[270px] md:h-[400px] lg:h-[270px] transition-all duration-500"
        style={{ background: leftEmptyCardStyle }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#0000FF")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = leftEmptyCardStyle)
        }
      ></div>

      {HOME_EXPERIANCE.map((item, index) => {
        const gradientStyle =
          index === 0
            ? "linear-gradient(to right, #071564 0%, #071564 45%, #141DE8 100%)"
            : index === 1
              ? "linear-gradient(to right, #0F1AB6 0%, #141DE8 10%, #141DE8 90%, #0F1AB6 100%)"
              : "linear-gradient(to left, #071564 0%, #071564 45%, #141DE8 100%)";

        return (
          <div
            key={item.id}
            className="group md:hover:w-[40%] transition-all duration-500 ease-in-out flex items-center justify-center md:w-1/3 sm:w-[80%] w-[95%] h-[270px] md:h-[400px] lg:h-[270px] px-10 py-8"
            style={{ background: gradientStyle }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0000FF")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = gradientStyle)
            }
          >
            <div className="flex flex-col items-center text-center">
              <span className="font-days text-7xl sm:text-8xl mt-6 font-extrabold">
                {item.data}
              </span>
              <div className="h-[1px] mt-3 w-7 bg-white"></div>
              <span className="text-2xl font-light mt-2">{item.title}</span>
            </div>
          </div>
        );
      })}

      {/* Right empty card, hidden on small screens */}
      <div
        className="hidden md:block w-[150px] md:w-[200px] h-[270px] md:h-[400px] lg:h-[270px] transition-all duration-500"
        style={{ background: rightEmptyCardStyle }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#0000FF")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = rightEmptyCardStyle)
        }
      ></div>
    </div>
  );
}

function WorkImages() {
  const cardsData = [
    {
      productName: "Business Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      clientName: "RabbitMQ",
      rating: 4,
      url: "https://www.creativefabrica.com/wp-content/uploads/2023/08/18/Kawaii-Pastel-White-Bunny-Clipart-Graphics-77177868-1-1-580x387.jpg",
    },
    {
      productName: "Web Development",
      clientName: "Monkey D. Luffy",
      rating: 5,
      url: "https://th.bing.com/th/id/R.799e5d0e4d78c44e14ca96a811fadbef?rik=sXXSiqY1YzIS7A&riu=http%3a%2f%2fimg1.wikia.nocookie.net%2f__cb20130720205936%2fmangafox%2fimages%2f8%2f80%2fLuffy_D._Monkey.png&ehk=NXsmv6D8S1w1t%2f1T4PkVL1iAjANO%2f5r7oP%2fqheMrzY0%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      productName: "Web Design",
      clientName: "Naruto Uzumaki ",
      rating: 5,
      url: "https://th.bing.com/th/id/OIP.2b-SE3FWkWHQZ4wLlXEKQAHaFi?rs=1&pid=ImgDetMain",
    },
    {
      productName: "App Development",
      clientName: "Sailor Moon",
      rating: 3,
      url: "https://th.bing.com/th/id/OIP.IRcS7PyT2sRiVRpo-Ypz-AHaHa?rs=1&pid=ImgDetMain",
    },
  ];
  return <CardSlider cards={cardsData} />;
}

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [cards.length]);

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
    <div className="slider-container relative my-[200px] w-full h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="card absolute  left-1/2 right-1/2 w-[95%]  sm:w-[70%] h-fit lg:h-[530px] bg-white rounded-[50px] shadow-lg p-8 md:p-12 lg:p-16"
          variants={cardVariants}
          initial="hidden"
          animate={getCardStyle(index)}
          transition={{ duration: 0.5 }}
        >
          <div
            className="  h-full w-full flex flex-col"
            onClick={() => setIsHovered(!isHovered)}
          >
            <div className=" w-full flex flex-col lg:flex-row flex-1 gap-4 lg:gap-16">
              <div className="flex flex-col min-w-[138px] gap-5">
                <div className="h-[138px] hidden  w-full bg-[#D9D9D9] rounded-3xl lg:flex items-center justify-center overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={card.url}
                    alt=""
                  />
                </div>
                <div className="text-black overflow-hidden">
                  <h6 className="text-2xl text-ellipsis line-clamp-1 capitalize">
                    {card.clientName}
                  </h6>
                  <p className=" text-lg font-normal text-[#8A8A8A]  ">
                    {card.productName}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
              >
                <p className="text-2xl md:text-3xl font-normal tracking-widest text-black line-clamp-[6]">
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

            <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:justify-between sm:items-center mt-4 lg:mt-auto">
              <h6 className="text-2xl font-normal text-black capitalize ">
                {card.productName}
              </h6>
              <div className=" flex flex-row ">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    fill={index < card.rating ? "#37545C" : "#565656"}
                    className="w-6 h-6 md:w-9 md:h-9 "
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
