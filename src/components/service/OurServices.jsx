import React from "react";
import { PiCheckCircleThin } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Free",
    price: "Rs.0",
    heading: "In the free plan you get access to:",
    credits: "10 credits",
    pricePerImage: "Rs.0",
    features: [
      "CamCl3D software to digitally drape your garments online",
      "100+ templates for draping sarees and visualizing kurtas, kurtis, shirts etc. from fabric images",
      "10 free credits to generate images. Each credit is worth 1 image and the images will be generated with a watermark.",
    ],

    buttonLabel: "Start for free",
  },
  {
    title: "Bronze",
    price: "Rs.5000",
    credits: "100 credits",
    pricePerImage: "Rs.50",
    features: [
      "CamCl3D software to digitally drape your garments online",
      "100+ templates for draping sarees and visualizing kurtas, kurtis, shirts etc. from fabric images",
      "100 credits to generate images. Each credit is worth 1 image.",
      "Note - Credits are only valid for 6 months from the date of purchase.",
    ],
    note: "All purchases made are final.",
    buttonLabel: "Purchase Credits",
    heading: "In the Bronze plan you get access to:",
  },
  {
    title: "Silver",
    price: "Rs.7500",
    credits: "175 credits",
    pricePerImage: "Rs.42",
    features: [
      "CamCl3D software to digitally drape your garments online",
      "100+ templates for draping sarees and visualizing kurtas, kurtis, shirts etc. from fabric images",
      "150 credits to generate images. Each credit is worth 1 image.",
      "Note - Credits are only valid for 6 months from the date of purchase.",
    ],
    note: "All purchases made are final.",
    buttonLabel: "Purchase Credits",
    heading: "In the Silver plan you get access to:",
  },
  {
    title: "Gold",
    price: "Rs.10000",
    credits: "275 credits",
    pricePerImage: "Rs.36",
    features: [
      "CamCl3D software to digitally drape your garments online",
      "100+ templates for draping sarees and visualizing kurtas, kurtis, shirts etc. from fabric images",
      "200 credits to generate images. Each credit is worth 1 image.",
    ],

    buttonLabel: "Purchase Credits",
    heading: "In the gold plan you get access to:",
  },
];
const OurServices = () => {
  return (
    <div className="flex-col py-[3rem] lg:py-[5.938rem]">
      <div className=" max-w-[80rem] px-[1.25rem] mx-auto">
        <h2 className="leading-[2.375rem] lg:leading-[3.375rem]  text-[1.813rem] lg:text-[2.813rem] text-center font-bold text-secondary ">
          Take a Look Into <span className="text-primary">Our Services</span>
        </h2>
      </div>
      <div className=" max-w-[80rem] grid sm:grid-cols-2 xl:grid-cols-4 px-[1rem] md:px-[1.25rem] w-full gap-[2.5rem] xl:gap-[1.5rem] pt-[2.788rem] lg:pt-[5.788rem] mx-auto">
        {plans?.map((feature, index) => (
          <div
            key={index}
            className="w-full group  h-[auto] py-[1.2rem] px-[1.5rem] rounded-2xl border border-[#E1D9E9] hover:mb-[2rem] hover:bg-primary hover:-mt-[2rem] hover:border-primary transition duration-300 flex flex-col relative"
          >
            <img
              src="/cardVactor.png"
              alt="#"
              className="absolute w-full top-0 left-0"
            />
            <h3 className="leading-[2.25ren]  font-[700] text-[1.5rem] text-center text-secondary group-hover:text-white mb-[0.5rem] ">
              {feature.title}
            </h3>
            <p className="leading-[1.5rem] font-[400] text-primaryLight text-[1rem] text-center group-hover:text-white px-[1.40rem] pb-[1.4rem]">
              {feature?.heading}
            </p>
            <h2 className="text-[1.5rem] leading-[2rem] text-center font-bold text-primary group-hover:text-white">
              {feature?.price}
              <span className="text-primary font-[400] text-[.75rem] leading-[1rem] group-hover:text-white ">
                /{feature?.credits}
              </span>
            </h2>
            <p className="leading-[1.5rem] font-[400] text-primaryLight text-[1rem] text-center group-hover:text-white italic">
              ( pricePerImage {feature?.pricePerImage})
            </p>
            <ul className="mt-[2rem] mb-[1rem]">
              {feature.features?.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-[0.5rem] mb-[0.5rem]"
                >
                  <span className=" h-4 w-4 p-[0.188rem] block rounded-full bg-primary group-hover:bg-white">
                    <FaCheck className="text-white group-hover:text-primary text-[0.688rem]" />
                  </span>
                  <span className="group-hover:text-white font-[400] text-[1rem] leading-[1.25rem]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            {feature?.note && (
              <p className="leading-[1.5rem] font-[700] text-primary text-[1rem] text-center group-hover:text-white pt-[0.5rem] pb-[1rem]">
                Note:{" "}
                <span className="text-primaryLight font-[400] text-[.85rem] leading-[1.2rem] group-hover:text-white italic">
                  {feature?.note}
                </span>
              </p>
            )}
            <button
              type="submit"
              className="btn-primary mt-[auto] text-[1rem] font-[500] z-10 leading-[1.5rem] w-full group-hover:bg-white group-hover:text-secondary "
            >
              {feature?.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
