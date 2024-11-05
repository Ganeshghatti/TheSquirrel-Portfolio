import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';



export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [indicatorStyles, setIndicatorStyles] = useState({});
  const navRef = useRef(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'service', label: 'Service' },
    { id: 'cases', label: 'Cases' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    updateIndicatorPosition(activeLink);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = links.map(link => document.getElementById(link.id));
      const currentSection = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        return section.offsetTop <= scrollPosition + 50 &&
          (!nextSection || nextSection.offsetTop > scrollPosition + 50);
      });
      if (currentSection) {
        setActiveLink(currentSection.id);
        updateIndicatorPosition(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  const updateIndicatorPosition = (linkId) => {
    const linkElement = navRef.current.querySelector(`[data-link="${linkId}"]`);
    if (linkElement) {
      const { offsetLeft, offsetWidth } = linkElement;
      setIndicatorStyles({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  };

  const handleClick = (e, linkId) => {
    e.preventDefault();
    // setActiveLink(linkId);
    // updateIndicatorPosition(linkId);

    if(linkId === 'contact'){
      console.log("contact click");
      const element = document.getElementById("form");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      return
    }
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Scroll event handler
    const handleScroll = () => {
      // Adjust this value as needed - how much scroll before navbar changes
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Format time for Indian Standard Time (IST)
  const formatTimeForIndia = () => {
    return currentTime.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };



  return <AnimatePresence mode="wait"> {isMenuOpen ? (

    <motion.nav
      key="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 bottom-0 right-0 z-50 h-[102lvh] flex items-center bg-[var(--primary-color)] p-1 pt-3"
      ref={navRef}
    >
      <div className="h-full w-full flex flex-col">
        <div className="sm:hidden mt-2 h-10 w-full px-4 flex flex-row items-center justify-between">
        <Logo />
          <motion.div
            className="h-full w-fit flex flex-row items-center justify-center py-1 px-1 gap-3 rounded-full"
            initial={{ backgroundColor: 'transparent', opacity: 0.7 }}
            animate={{ backgroundColor: 'var(--navbar-bg-color)', opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              key="time"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="ml-2"
            >
              {formatTimeForIndia()}
            </motion.div>

            <div
              onClick={() => setisMenuOpen(false)}
              className="h-full w-fit flex flex-row gap-1 items-center justify-center rounded-full border border-white p-1"
            >
              <div className="ml-2 mb-1">Close</div>
              <motion.div
                className="h-6 w-6 p-1 flex items-center justify-center overflow-hidden rounded-full border border-white"
                whileTap={{ scale: 0.95 }}
              >
                <Menu />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}

          className=' h-full w-full flex flex-col gap-4 items-center justify-center text-black text-6xl font-semibold'>
          {links.map(({ id, label }) => (

            <a
              key={id}
              onClick={(e) => { handleClick(e, id); setisMenuOpen(false) }}
              data-link={id}
              href={`#${id}`}
              className={`${activeLink === id ? 'text-white' : 'text-gray-900 hover:text-white'
                }`}
            >{label}</a>
          ))}
        </motion.div>


      </div>
    </motion.nav>

  )
    : (
      <motion.nav
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut"
        }}

        className="fixed sm:w-fit sm:mx-auto top-0 sm:top-10 left-0 right-0 z-50 flex items-center sm:border border-white sm:px-1 sm:bg-[var(--navbar-bg-color)] text-[var(--navbar-link-color)] rounded-full" ref={navRef}>
        <ul className="hidden sm:flex relative items-center w-full justify-around h-full">
          <div
            className="absolute rounded-full bg-[var(--navbar-link-active-bg-color)] top-1 bottom-1 transition-all duration-300 ease-in-out navbar_bg_shadow"
            style={indicatorStyles}
          />
          {links.map(({ id, label }) => (
            <li key={id} className="h-full flex items-center">
              <a
                href={`#${id}`}
                className={`px-4 py-1 sm:py-1 sm:mb-1 text-lg sm:text-3xl leading-8 rounded-md transition-colors duration-300 relative z-10 h-full flex items-center text-white ${activeLink === id ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                onClick={(e) => handleClick(e, id)}
                data-link={id}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden mt-5 h-10 w-full px-4 flex flex-row items-center justify-between'>
          <Logo />

          <motion.div
            className={`h-full w-fit flex flex-row items-center justify-center py-1 px-1 gap-3 rounded-full`}
            initial={{
              backgroundColor: 'transparent',
              opacity: 0.7
            }}
            animate={{
              backgroundColor: isScrolled
                ? 'var(--navbar-bg-color)'
                : 'transparent',
              opacity: 1
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  key="time"
                  initial={{
                    opacity: 0,
                    x: -10
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  exit={{
                    opacity: 0,
                    x: -10
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className='ml-2'
                >
                  {formatTimeForIndia()}
                </motion.div>
              )}
            </AnimatePresence>

            <div onClick={() => setisMenuOpen(true)} className='h-full w-fit flex flex-row gap-1 items-center justify-center rounded-full border border-white p-1'>
              <div className='ml-2 mb-1'>Menu</div>
              <motion.div
                className='h-6 w-6 p-1 flex items-center justify-center overflow-hidden rounded-full border border-white'
                whileTap={{ scale: 0.95 }}
              >
                <Menu />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    )
  }</AnimatePresence>



}


function Logo(){
  return (
    <div className='h-full w-fit'>
      <img src="/assets/images/Logo.png" className='h-[50px]' alt="" />
    </div>
  )
}

// ../assets/Logo.png
// ../../public/assets/images/Logo.png