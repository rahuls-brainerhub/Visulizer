import React from "react";
import NavbarPages from "./NavbarPages";
import Footer from "../homePage/Footer";
import TopSection from "./Topsection";
import Touch from "../service/Touch";
import OurServices from "../service/OurServices";
import AddService from "../service/AddService";

const ServicePage = () => {
  return (
    <>
      <NavbarPages />
      <TopSection
        keys={"unique"}
        title={"Our Services"}
        breadcrumData={["Home", "Our Services"]}
        image={"/serviceBanner.png"}
      />
      <OurServices />
      <AddService />
      <Touch />
      <Footer />
    </>
  );
};

export default ServicePage;
