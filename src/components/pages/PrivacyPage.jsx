import React from "react";
import NavbarPages from "./NavbarPages";
import Footer from "../homePage/Footer";
import PrivacyPolicy from "../privacy/PrivacyPolicy";
import TopSection from "./Topsection";

const PrivacyPage = () => {
  return (
    <>
      <NavbarPages />
      <TopSection
        keys={"unique"}
        title={"Privacy Policy"}
        breadcrumData={["Home", "Privacy Policy"]}
        image={"/privacyPolicy.png"}
      />
      <PrivacyPolicy />
      <Footer footer={false} />
    </>
  );
};

export default PrivacyPage;
