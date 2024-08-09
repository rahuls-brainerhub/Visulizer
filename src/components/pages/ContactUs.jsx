import React, { useEffect, useState } from "react";
import Footer from "../homePage/Footer";
import TopSection from "./Topsection";
import Location from "../contactUs/Location";
import Love from "../contactUs/Love";
import NavbarPages from "./NavbarPages";
import { contactUsService } from "../../services/contactUsService";

const ContactUs = () => {
  const contactData = async () => {
    const res = await contactUsService();
  };
  useEffect(() => {
    contactData();
  }, []);
  const [open, setopen] = useState(false);
  const handleLogin = () => {
    setopen(!open);
  };
  return (
    <>
      <NavbarPages modalOpen={open} handleLogin={handleLogin} />
      <TopSection
        keys={"unique"}
        title={"Contact Us"}
        breadcrumData={["Home", "Contact us"]}
        image={"/contactus.png"}
        bg={true}
      />
      <div className="w-full overflow-hidden relative py-[3rem] lg:py-[6rem]">
        <Love />
        <Location />
      </div>

      <Footer footer={true} handleLogin={handleLogin}  />
    </>
  );
};

export default ContactUs;
