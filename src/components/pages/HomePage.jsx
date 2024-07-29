import React, { useEffect, useState } from "react";
import Navbar from "../homePage/Navbar";
import HeroSection from "../homePage/HeroSection";
import InstantFebric from "../homePage/InstantFebric";
import AboutUs from "../homePage/AboutUs";
import WhyChooseUs from "../homePage/WhyChooseUS";
import OurServices from "../homePage/OurServices";
import Footer from "../homePage/Footer";
import Faq from "../homePage/Faq";
import NavbarPages from "./NavbarPages";

const HomePage = () => {
  return (
    <div>
      <NavbarPages />
      <HeroSection />
      <InstantFebric />
      <WhyChooseUs />
      <OurServices />
      <AboutUs />
      <Faq />
      <Footer />

      {/* <Link to={"/products/all"}>Product Listing</Link> */}
    </div>
  );
};

export default HomePage;
