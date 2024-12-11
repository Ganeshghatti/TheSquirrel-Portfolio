import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Nut from "../../assets/nut.svg";
import Arrow from "../../assets/arrow.svg";

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
  const [openDescriptionId, setOpenDescriptionId] = useState("");
  const Data = [
    {
      id: "01",
      title: "Signature Websites",
      description:
        "We help clients boost sales and enhance user experience, with responsive, high-performance websites that are built with the latest frameworks and technologies, optimized for speed, security, and seamless user experience.",
      features: [
        "Responsive Design",
        "Custom CMS",
        "E-commerce Solutions",
        "SEO Optimization",
      ],
    },
    {
      id: "02",
      title: "UI/UX Design & Visual Branding",
      description:
        "Elevate your brand with our design team. We create visuals that are cohesive of your brand identity, are visually appealing to your clients, and prioritize user engagement and retention.",
      features: [
        "iOS & Android",
        "Cross-platform",
        "UI/UX Design",
        "App Store Optimization",
      ],
    },
    {
      id: "03",
      title: "App Development",
      description:
        "Get a reliable and functional team of developers to develop robust, cross-platform applications designed for scalability and excellent performance. Options between mobile and web-based apps to align with your business vision.",
      features: [
        "Natural Language Processing",
        "24/7 Support",
        "Multi-language",
        "Analytics",
      ],
    },
    {
      id: "04",
      title: "Personalized AI Chatbots",
      description:
        "Your vision deserves a custom solution. Our bespoke AI services include implementing advanced AI-powered chatbots to enhance customer service, automate responses, improve user satisfaction, and reduce operational cost for your business.",
      features: [
        "Custom Models",
        "Data Analysis",
        "Predictive Analytics",
        "AI Integration",
      ],
    },
    {
      id: "05",
      title: "Business Automation",
      description:
        "Your business needs your time, we employ automation tools and AI-driven workflows to reduce repetitive tasks, optimize efficiency, improve productivity across your organization all while reducing business cost and saving time.",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Integration",
        "Analytics",
      ],
    },
  ];

  return (
    <div className="relative w-full my-[200px] flex flex-col gap-[1px]">
      {Data.map((item) => (
        <Card
          key={item.id}
          {...item}
          isOpen={openDescriptionId === item.id}
          toggleDescription={() => {
            setOpenDescriptionId((currentId) =>
              currentId === item.id ? "" : item.id
            );
          }}
        />
      ))}
    </div>
  );
};

const Card = ({
  id,
  title,
  description,
  features,
  isOpen,
  toggleDescription,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  const isOdd = parseInt(id) % 2 !== 0;

  return (
    <div
      key={id}
      className={`sticky cursor-pointer transition-all duration-500 ease-in-out ${
        isOpen ? "" : "top-0"
      } h-fit w-full flex flex-col items-start justify-center border border-black`}
    >
      <motion.div
        className="relative transition-all duration-500 ease-in-out h-[240px] sm:h-[240px] lg:h-[240px] w-full py-8 px-8 sm:p-8 flex flex-col items-start justify-center"
        style={{
          background: isOdd
            ? "linear-gradient(to right, #557FED 0%, #304987 100%)"
            : "linear-gradient(to right, #6B90F0 0%, #3D538A 100%)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={toggleDescription}
      >
        <div className="flex flex-row items-center gap-3 sm:gap-10 ml-0 sm:ml-10 md:ml-20 lg:ml-32">
          <div className="relative flex items-center justify-center h-[80px] w-[80px] lg:h-[124px] lg:w-[124px]">
            <img
              src={Nut}
              alt=""
              className="absolute h-[60px] w-[60px] sm:h-full sm:w-full"
            />
            <span className="absolute text-4xl sm:text-5xl md:text-5xl lg:text-7xl flex items-center justify-center font-bold h-full w-full">
              {id}
            </span>
          </div>
          <div className="flex-1 max-w-[70%]">
            <h1 className="whitespace-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase">
              {title}
            </h1>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x - 600,
                y: mousePosition.y - 200,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.2 },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="absolute hidden sm:block p-6 w-[200px] h-[200px] bg-white rounded-xl shadow-lg"
              style={{
                pointerEvents: "none",
                zIndex: 20,
              }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-black">{id}</h1>
                <div className="w-full h-2 bg-gray-200 rounded" />
                <div className="w-3/4 h-2 bg-gray-200 rounded" />
                <div className="w-1/2 h-2 bg-gray-200 rounded" />
                <div className="mt-4 w-12 h-12 bg-gray-200 rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence initial={false}>
        <motion.div
          key="content"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0.5,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-full bg-teal-600 overflow-hidden"
        >
          <div className="flex flex-col my-10 items-center gap-14 justify-center px-8 sm:px-10 md:px-20 lg:px-52 h-fit">
            <p
              onClick={toggleDescription}
              className=" text-xl sm:text-3xl md:text-4xl"
            >
              {description}
            </p>
            <Button />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

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
