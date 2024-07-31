import React from "react";
import { FaInstagram, FaDribbble, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
  
  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url(/footerimage.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center gap-[2rem] justify-center max-w-[80rem] px-[1.25rem] mx-auto py-[3rem] lg:py-[6rem]">
          <h1 className="text-white text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold  text-center">
            Visualize Your Fabric Now
          </h1>
          <button className="btn-primary border border-white text-[1rem] p-[0.75rem_2rem]">
            Visualize
          </button>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="flex flex-col md:flex-row justify-between px-5 max-w-[80rem] m-auto w-full py-[2.5rem] lg:py-[3.5rem]">
          <div className="flex items-start flex-col gap-6 mb-8 md:mb-0">
            <img className="h-32 w-32" src="/footerIcon.png" />
            <div>
              <p className="text-white font-normal text-base leading-6">
                Copyright © 2024 CamClo3D. <br /> All rights reserved
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[4rem] mb-[2rem] md:mb-0">
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                About us
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Help center
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Terms of service
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Legal
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="text-base leading-5 font-normal hover:underline text-white hover:text-primaryMediumLight"
              >
                Status
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-white font-bold text-xl leading-7">
                Contact Us
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row text-white gap-2">
                  <img className="h-6 w-6" src="/phone.png" />
                  <p>+91 9399150791</p>
                </div>
                <div className="flex flex-row text-white gap-2">
                  <img className="h-6 w-6" src="/email.png" />
                  <p className="hover:underline">
                    techtelligenceindia@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-xl leading-7">
                Follow Us
              </h1>
              <div className="flex flex-row gap-[1rem]">
                <div className="group w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-iconFooterBg hover:bg-[white]">
                  <FaInstagram
                    size={17}
                    className="text-white group-hover:text-primary"
                  />
                </div>
                <div className="group w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-iconFooterBg p-[0.467rem] hover:bg-[white]">
                  <FaDribbble
                    className="text-white group-hover:text-primary"
                    size={17}
                  />
                </div>
                <div className="group w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-iconFooterBg p-[0.467rem] hover:bg-[white]">
                  <FaTwitter
                    className="text-white group-hover:text-primary"
                    size={17}
                  />
                </div>
                <div className="group w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-iconFooterBg p-[0.467rem] hover:bg-[white]">
                  <FaYoutube
                    className="text-white group-hover:text-primary"
                    size={17}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
