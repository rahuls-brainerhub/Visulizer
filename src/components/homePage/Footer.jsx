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
        <div className="relative flex flex-col items-center gap-[2rem] justify-center py-[6rem]">
          <h1 className="text-white text-[4rem] font-bold mb-4">
            Visualize Your Fabric Now
          </h1>
          <button className="btn-primary border border-white text-[1rem] p-[0.75rem_2rem]">
            Visualize
          </button>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="flex flex-row justify-between px-[1.25rem] max-w-[90rem] m-auto w-full py-[3.5rem] ">
          <div className="flex items-start flex-col gap-[1.625rem]">
            <img className="h-[8.125rem] w-[8.125rem]" src="/footerIcon.png" />
            <div>
              <p className="text-[white] font-[400] text-[1rem] leading-[1.563rem] ">
                Copyright © 2024 CamClo3D. <br /> All rights reserved
              </p>
            </div>
          </div>
          <div className="flex gap-[5.5rem]">
            <div className="flex flex-col gap-[0.75rem]">
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                About us
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Blog
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-[0.75rem]">
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Help center
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Terms of service
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Legal
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="text-[1rem] leading-[1.25rem] font-[400] hover:underline text-white hover:text-primaryMediumLight "
              >
                Status
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[1.5rem]">
              <h1 className="text-white font-[700] text-[1.5rem] leading-[1.875rem]">
                Contact Us
              </h1>
              <div className="flex flex-col gap-[0.75rem]">
                <div className="flex flex-row text-white gap-[0.5rem]">
                  <img className="h-[1.5rem] w-[1.5rem]" src="/phone.png" />
                  <p>+91 9399150791</p>
                </div>
                <div className="flex flex-row text-white gap-[0.5rem]">
                  <img className="h-[1.5rem] w-[1.5rem]" src="/email.png" />
                  <p className="hover:underline ">
                    techtelligenceindia@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h1 className="text-white font-[700] text-[1.5rem] leading-[1.875rem]">
                Follow Us
              </h1>
              <div className="flex flex-row gap-[1rem]">
                <div className="group w-[2rem] flex justify-center items-center rounded-full bg-iconFooter hover:bg-[white]">
                  <FaInstagram
                    size={17}
                    className="text-white group-hover:text-primary"
                  />
                </div>
                <div className="group w-[2rem] flex justify-center items-center rounded-full bg-iconFooter p-[0.467rem] hover:bg-[white]">
                  <FaDribbble
                    className="text-white group-hover:text-primary"
                    size={17}
                  />
                </div>
                <div className="group w-[2rem] flex justify-center items-center rounded-full bg-iconFooter p-[0.467rem] hover:bg-[white]">
                  <FaTwitter
                    className="text-white group-hover:text-primary"
                    size={17}
                  />
                </div>
                <div className="group w-[2rem] flex justify-center items-center rounded-full bg-iconFooter p-[0.467rem] hover:bg-[white]">
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
