// import gsap from "gsap";
import AboutSection from "../../../components/About/AboutSection";
import HomeSection from "../../../components/Home/HomeSection";
import Navbar from "../../../components/Navbar";
import CasesSection from "../../../components/Cases/CasesSection";
import ConnectSection from "../../../components/Connect/ConnectSection";
import ServiceSection from "../../../components/Service/ServiceSection";
import React from "react";
import Clients from "../../../components/Clients/Clients";
import Background from "../../../components/Background";

export default function Hero() {
  return (
    <div className="w-full">
      <Navbar />
      <Background />
      <HomeSection />
      <AboutSection />
      <Clients />
      <ServiceSection />
      <CasesSection />
      <ConnectSection />
    </div>
  );
}
