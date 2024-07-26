import React from "react";
import Navbar from "../homePage/Navbar";
import Footer from "../homePage/Footer";
import TopSection from "./Topsection";
import Story from "../aboutUs/Story";
// import successImage from "../../../public/"
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <TopSection
        keys={"unique"}
        title={"About Us"}
        breadcrumData={["Home", "About us"]}
        image={"/aboutus.png"}
      />
      <Story />
      <Footer />
    </div>
  );
};

export default AboutUs;
