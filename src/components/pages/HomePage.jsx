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
  const [open, setOpen] = useState(false);
  const handleLogin = () => {
    setOpen(!open);
  };
  console.log(open, "open");
  return (
    <div>
      <NavbarPages modalOpen={open} handleLogin={handleLogin} />
      <HeroSection handleLogin={handleLogin} />
      <InstantFebric handleLogin={handleLogin} />
      <WhyChooseUs />
      <OurServices />
      <AboutUs />
      <Faq />
      <Footer footer={true} handleLogin={handleLogin} />

      {/* <Link to={"/products/all"}>Product Listing</Link> */}
    </div>
  );
};

export default HomePage;
