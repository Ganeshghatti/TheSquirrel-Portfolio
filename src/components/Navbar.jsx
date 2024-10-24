import React, { useState, useEffect, useRef } from 'react';


export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [indicatorStyles, setIndicatorStyles] = useState({});
  const navRef = useRef(null);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'service', label: 'Service' },
    { id: 'cases', label: 'Cases' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    // updateIndicatorPosition(activeLink);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = links.map(link => document.getElementById(link.id));
      const currentSection = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        return section.offsetTop <= scrollPosition + 50 && 
               (!nextSection || nextSection.offsetTop > scrollPosition + 50);
      });
      if (currentSection) {
        // setActiveLink(currentSection.id);
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
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-fit mx-auto top-10 left-0 right-0 z-50 flex items-center border border-white px-1 bg-[var(--navbar-bg-color)] text-[var(--navbar-link-color)] rounded-full" ref={navRef}>
      <ul className="relative flex items-center w-full justify-around h-full">
        <div
          className="absolute rounded-full bg-[var(--navbar-link-active-bg-color)] top-1 bottom-1 transition-all duration-300 ease-in-out navbar_bg_shadow"
          style={indicatorStyles}
        />
        {links.map(({ id, label }) => (
          <li key={id} className="h-full flex items-center">
            <a
              href={`#${id}`}
              className={ `px-4 py-1 sm:py-3 text-lg sm:text-3xl leading-8 rounded-md transition-colors duration-300 relative z-10 h-full flex items-center text-white ${
                activeLink === id ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
              onClick={(e) => handleClick(e, id)}
              data-link={id}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}