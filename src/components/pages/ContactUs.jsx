import React from "react";
import Footer from "../homePage/Footer";
import TopSection from "./Topsection";
import Location from "../contactUs/Location";
import Love from "../contactUs/Love";
import NavbarPages from "./NavbarPages";

const ContactUs = () => {
  return (
    <>
      <NavbarPages />
      <TopSection
        keys={"unique"}
        title={"Contact Us"}
        breadcrumData={["Home", "Contact us"]}
        image={"/contactus.png"}
        bg={true}
      />
      <div className="w-full overflow-hidden relative py-[3rem] lg:py-[6rem]">
        {/* <img
          className="absolute top-0 left-0 w-full rotate-[180deg] opacity-[0.2] z-[0]"
          src="/contactBg.png"
          alt=""
        /> */}
        <Love />
        <Location />
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
