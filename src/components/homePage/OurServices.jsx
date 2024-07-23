import React from "react";
const features = [
  {
    title: "Free",
    description:
      "10 free credits to generate images. Each credit is worth 1 image and the images will be generated with a watermark.",
    icon: "/free.png",
    link: "#",
  },
  {
    title: "Bronze",
    description:
      "100 credits to generate images. Each credit is worth 1 image.",
    icon: "/bronze.png",
    link: "#",
  },
  {
    title: "Silver",
    description:
      "150 credits to generate images. Each credit is worth 1 image.",
    icon: "/silver.png",
    link: "#",
  },
  {
    title: "Gold",
    description:
      "200 credits to generate images. Each credit is worth 1 image.",
    icon: "/silver.png",
    link: "#",
  },
];
const OurServices = () => {
  return (
    <div className="max-w-[90rem] px-[1.25rem] mx-auto flex flex-col gap-[2.188rem] py-[5.938rem]">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <h2 className="text-[2.813rem] leading-[3.375rem] font-bold text-secondary ">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-primaryLight leading-[1.5rem] text-[1rem] font-[400]  ">
          Seamlessly drape garments digitally
        </p>
      </div>
      <div className="flex flex-row w-full gap-[1.5rem]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-1/4 h-[auto] p-[2rem] group rounded-2xl border border-[#E1D9E9] transition duration-300 hover:bg-[#EFE8F5]  flex flex-col gap-[1rem] items-center"
          >
            <div className="relative z-[0] h-14 w-14">
              <div className="absolute z-[1] top-1 left-1.5 h-14 w-14 rounded-[10px_5px_10px_5px] bg-[#EFE8F5] group-hover:rounded-[10px] group-hover:bg-[#8C2A8D3D] group-hover:left-0 group-hover:top-0"></div>
              <img
                className="relative z-[2] h-[3rem] w-[3rem] -top-1 -left-1.5 group-hover:left-[4px] group-hover:top-[4px]"
                src={feature?.icon}
              />
            </div>

            <h1 className="leading-[.25ren] font-[700] text-[1.375rem] text-center ">
              {feature.title}
            </h1>
            <p className="min-h-[100px] text-center leading-[1.25rem] font-[400] text-primaryLight text-[1rem]">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="text-primary text-[1rem] leading-[1.25rem] font-semibold inline-flex items-center  underline"
            >
              View More
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurServices;
