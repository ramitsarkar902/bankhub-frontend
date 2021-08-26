import React, { useState, UseEffect } from "react";
import Hero from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import infoData from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle} />
      <Navbar toogle={toogle} />

      <Hero />
      {infoData.map((data, index) => {
        return <InfoSection {...data} key={index} />;
      })}
      <Services />
      <Footer />
    </>
  );
};

export default Home;
