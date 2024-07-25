import React, { useEffect, useState } from "react";
import Navbar from "../homePage/Navbar";
import HeroSection from "../homePage/HeroSection";
import InstantFebric from "../homePage/InstantFebric";
import AboutUs from "../homePage/AboutUs";
import WhyChooseUs from "../homePage/WhyChooseUS";
import OurServices from "../homePage/OurServices";
import Footer from "../homePage/Footer";
import Faq from "../homePage/Faq";
import PopupTemplete from "../popup/Index";
import SignUpPopup from "../popup/SignUpPopup";
import ForgetPassword from "../popup/ForgetPassword";
import LoginPopup from "../popup/LoginPopup";
import VerifyOTP from "../popup/VerifyOTP";
import ResetPassword from "../popup/ResetPassword";

const HomePage = () => {
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [open, setOpen] = useState({
    openSignup: false,
    openLogin: false,
    openOTP: false,
    openForgetPassword: false,
    openResetPassword: false,
  });

  const onClose = (modalType) => {
    setOpen((prevState) => {
      const newState = {
        openSignup: false,
        openLogin: false,
        openOTP: false,
        openForgetPassword: false,
        openResetPassword: false,
      };
      newState[modalType] = !prevState[modalType];
      updateBodyOverflowClass(newState);
      return newState;
    });
  };

  function updateBodyOverflowClass(modalStates) {
    const hasOpenModal = Object.values(modalStates).some(
      (state) => state === true
    );

    if (hasOpenModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  const removeTokenFromURL = () => {
    const baseUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, baseUrl);
  };
  return (
    <div>
      <Navbar
        onClose={() => onClose("openSignup")}
        onCloseLogin={() => onClose("openLogin")}
      />
      <HeroSection />
      <InstantFebric />
      <WhyChooseUs />
      <OurServices />
      <AboutUs />
      <Faq />
      <Footer />
      {open?.openSignup && (
        <PopupTemplete
          title={"Sign up"}
          bodyComponent={
            <SignUpPopup setOpen={setOpen} onClose={(view) => onClose(view)} />
          }
          onClose={() => onClose("openSignup")}
        />
      )}
      {open?.openForgetPassword && (
        <PopupTemplete
          title={"Forget Password"}
          bodyComponent={
            <ForgetPassword
              setOpen={setOpen}
              onClose={(view) => onClose(view)}
            />
          }
          onClose={onClose}
        />
      )}

      {open?.openLogin && (
        <PopupTemplete
          title={"Log In"}
          bodyComponent={
            <LoginPopup setOpen={setOpen} onClose={(view) => onClose(view)} />
          }
          onClose={onClose}
        />
      )}
      {/* onClose={() => onClose("openSignup")}  */}
      {/* open?.openOTP */}
      {open?.openOTP ? (
        <PopupTemplete
          title={"Verify OTP"}
          bodyComponent={<VerifyOTP onClose={() => onClose("openLogin")} />}
          onClose={onClose}
        />
      ) : null}
      {token && (
        <PopupTemplete
          title={"Reset Password"}
          bodyComponent={
            <ResetPassword token={token} onClose={(view) => onClose(view)} />
          }
          onClose={onClose}
          removeTokenFromURL={removeTokenFromURL}
        />
      )}

      {/* <Link to={"/products/all"}>Product Listing</Link> */}
    </div>
  );
};

export default HomePage;
