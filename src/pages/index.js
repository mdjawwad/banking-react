import React from "react";
import Navbar from "../componets/navbars";
import Sidebar from "../componets/sidebar";
import HeroSection from "../componets/HeroSection/index";
import { useState } from "react";
import InfoSection from "../componets/InfoSection";
import FooterSection from '../componets/footer/index'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../componets/InfoSection/Data";
import Services from "../componets/services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services/>
      <InfoSection {...homeObjThree} />
      <FooterSection />
    </>
  );
};

export default Home;
