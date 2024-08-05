import React from "react";
import Footer from "../homePage/Footer";
import TopSection from "./Topsection";
import Story from "../aboutUs/Story";
import NavbarPages from "./NavbarPages";
// import successImage from "../../../public/"
const AboutUs = () => {
  return (
    <div>
      <NavbarPages />
      <TopSection
        keys={"unique"}
        title={"About Us"}
        breadcrumData={["Home", "About us"]}
        image={"/aboutus.png"}
      />
      <Story />
      <Footer footer={true} />
    </div>
  );
};

export default AboutUs;
