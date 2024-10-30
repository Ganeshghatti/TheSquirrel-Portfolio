import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Nut from '../../assets/nut.svg';
import Arrow from '../../assets/arrow.svg'

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
        <Card
          key={item.id} {...item}
          isOpen={openDescriptionId === item.id}
          toggleDescription={() => {
            setOpenDescriptionId(currentId =>
              currentId === item.id ? "" : item.id
            )
          }} />
      ))}
    </div>
  );
};

// function Card1({ id, title, description, features }) {

//   return (
//     <div key={id} className=" sticky transition-all duration-900 ease-in-out top-28 h-[245px] sm:h-[275px] group hover:lg:h-[500px] lg:h-[345px] w-full bg-[var(--primary-color)] flex flex-row items-center justify-center border border-black">
//       <div className="relative h-full w-full flex flex-col ">
//         <div className="   flex flex-row items-center gap-10">
//           <div className="relative flex items-center justify-center h-[80px] w-[80px] lg:h-[124px] lg:w-[124px]">
//             <img src={Nut} alt="" className=" absolute h-full w-full" />
//             <span className="absolute text-4xl sm:text-6xl md:text-7xl flex items-center justify-center font-bold h-full w-full">
//               {id}
//             </span>

//           </div>
//           <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold uppercase">{title}</h1>
//         </div>

//         <div
//           className={`transition-opacity duration-500 group:hover:oppacity-100 group-hover:lg:opacity-100  flex flex-col gap-3 mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-8`}
//         >
//           <p className="text-xl mb-6 max-w-2xl">
//             {description}
//           </p>

//           <div className="grid grid-cols-2 gap-4 max-w-2xl">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 text-lg"
//               >
//                 <span className="w-2 h-2 bg-black rounded-full" />
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// }
// const Card2 = ({ id, title, description, features }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`sticky cursor-pointer transition-all duration-500 ease-in-out top-0  ${isHovered ? 'lg:h-[650px]' : 'lg:h-[345px]'}
//       ${isHovered ? 'sm:h-[650px]' : 'sm:h-[275px]'}
//       ${isHovered ? 'h-fit' : 'h-[245px]'}

//        w-full bg-[var(--primary-color)] flex flex-row items-center justify-center border border-black`}
//       onClick={() => setIsHovered(!isHovered)}
//     >
//       <div className=" h-full w-full py-8 px-8 sm:p-8 flex flex-col items-center">
//         {/* Top section with number and title */}
//         <div className="flex flex-row items-center gap-3 sm:gap-10 mt-[50px] sm:mt-[60px] lg:mt-[70px]">
//           <div className="relative flex items-center justify-center h-[80px] w-[80px] lg:h-[124px] lg:w-[124px]">
//             <img src={Nut} alt="" className=" absolute h-[60px] w-[60px] sm:h-full sm:w-full" />
//             <span className="absolute text-4xl sm:text-5xl md:text-5xl lg:text-7xl flex items-center justify-center font-bold h-full w-full">
//               {id}
//             </span>

//           </div>
//           <h1 className="text-nowrap text-3xl sm:text-5xl w-fit text-center md:text-6xl lg:text-8xl font-semibold uppercase"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}

//           >{title}</h1>
//         </div>

//         {/* Animated content section */}
//         <div
//           className={`transition-opacity sm:pl-14 mt-[50px] mb-[70px] duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
//             }`}
//         >
//           <p className="text-3xl sm:text-4xl mb-6 max-w-2xl font-medium">
//             {description}
//           </p>

//           <div className="grid sm:grid-cols-2 sm:gap-4 max-w-2xl text-nowrap ">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 text-2xl sm:text-3xl font-semibold"
//               >
//                 <span className=" text-2xl sm:text-4xl md:text-5xl flex items-center justify-center font-bold text-slate-300 ">
//                   {index + 1}.
//                 </span>
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Card = ({ id, title, description, features, isOpen,
  toggleDescription }) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  // const [isDesOpen, setIsDesOpen] = useState(false);
  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - bounds.left, // Subtract half the card width
      y: e.clientY - bounds.top   // Subtract half the card height
    });
  };

  return (
    <div
      key={id}
      className={`sticky cursor-pointer  transition-all duration-500 ease-in-out ${isOpen ? '' : 'top-0'}   h-fit  
       w-full  flex flex-col items-center justify-center border border-black`}
       onClick={toggleDescription}
    >
      <div className=" relative  border  bg-[var(--primary-color)] h-[245px] sm:h-[275px] lg:h-[345px] w-full py-8 px-8 sm:p-8 flex flex-col items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="flex flex-row items-center gap-3 sm:gap-10 ">
          <div className="relative flex items-center justify-center h-[80px] w-[80px] lg:h-[124px] lg:w-[124px]">
            <img src={Nut} alt="" className=" absolute h-[60px] w-[60px] sm:h-full sm:w-full" />
            <span className="absolute text-4xl sm:text-5xl md:text-5xl lg:text-7xl flex items-center justify-center font-bold h-full w-full">
              {id}
            </span>

          </div>
          <h1 className="text-nowrap text-3xl sm:text-5xl w-fit text-center md:text-6xl lg:text-8xl font-semibold uppercase"
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}

          >{title}</h1>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x - 600,
                y: mousePosition.y - 200
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.2 }
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className="absolute p-6 w-[200px] h-[200px] bg-white rounded-xl shadow-lg"
              style={{
                pointerEvents: "none",
                zIndex: 20
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




      </div>
      <AnimatePresence initial={false}>
        <motion.div
          key="content"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0.5
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="w-full bg-teal-600 overflow-hidden"
        >
          <div className="flex flex-col my-10 items-center gap-14 justify-center px-8 sm:px-10 md:px-20 lg:px-52 h-fit">
            <p className="text-4xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione animi nobis sequi corrupti praesentium laudantium. Mollitia error molestias eos beatae dolore praesentium consequatur quo quidem, dignissimos, neque adipisci voluptate nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia ea obcaecati quia porro eius, animi minima aut, autem soluta eaque. Ad, cupiditate vero repudiandae corporis neque saepe adipisci atque.</p>
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button
      onClick={handleClick}
      className=" self-start text-nowrap relative bg-[#E8E8E8] flex flex-row items-center text-black   w-fit md:w-full max-w-[700px]  border border-[#C8C8C8] rounded-full px-[50px]  md:px-[100px] py-0  gap-5 group "
    >

      <img src={Arrow} className=' h-[30px] md:h-fit absolute left-3 group-hover:left-[calc(100%-75px)] transition-all duration-1000 ease-in-out group-hover:rotate-[400deg]' />
      <span className="w-fit font-medium mb-2 text-4xl md:text-7xl">CONTACT US!</span>
    </button>
  );
}