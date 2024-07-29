import React from "react";
import Footer from "../homePage/Footer";
import TopSection from "./Topsection";
import Faq from "../faq/Faq";
import NavbarPages from "./NavbarPages";

const Fqa = () => {
  return (
    <>
      <NavbarPages />
      <TopSection
        keys={"unique"}
        title={"FAQ"}
        breadcrumData={["Home", "FAQ"]}
        image={"/faqBanner.png"}
      />
      <Faq />
      <Footer />
    </>
  );
};

export default Fqa;
