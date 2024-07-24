import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Productions Of Fabrics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: "/fabrics.png",
      link: "#",
    },
    {
      title: "Exportation Globally",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: "/globally.png",
      link: "#",
    },
    {
      title: "Great Clients Support",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: "/support.png",
      link: "#",
    },
  ];

  return (
    <div className="flex-col bg-[#FDFBFF] py-[3rem] md:py-[5.938rem]">
      <div className=" max-w-[80rem] px-[1.25rem] mx-auto">
        <h2 className="text-[2.813rem] text-center font-bold text-secondary ">
          Why <span className="text-primary">Choose Us</span>
        </h2>
        <p className="text-center py-[.5rem] text-[#7E6E8C] leading-[1.5rem] text-[1rem] font-[400]  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className=" max-w-[80rem] px-[1.25rem] flex flex-col md:flex-row w-full gap-[1.5rem] py-[2.188rem] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 h-[auto] p-[2rem] rounded-2xl border border-[#E1D9E9] hover:border-primary transition duration-300 flex flex-col gap-[1rem]"
          >
            <div className="bg-primary p-[0.875rem] w-[4.688rem] h-[4.688rem] rounded-2xl border border-white shadow-[2px_2px_12px_0px_#CAC2D1]">
              <img className="" src={feature?.icon} />
            </div>

            <h1 className="leading-[2.25ren] font-[700] text-[1.375rem] ">
              {feature.title}
            </h1>
            <p className="leading-[1.25rem] font-[400] text-primaryLight text-[1rem]">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="text-primary text-[1rem] leading-[1.25rem] font-semibold inline-flex items-center underline"
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

export default WhyChooseUs;
