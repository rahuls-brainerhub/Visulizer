import React from "react";
const contactData = [
  {
    icon: "/locationIcon.png",
    title: "Visit A Office",
    text: "56/1/4 SK-1 Compound, Malviya Warehouse, Dewas Naka, Indore, Madhya Pradesh, India",
    img: "/contactLocation.png",
  },
  {
    icon: "/callIcon.png",
    title: "Make A Call",
    text: "+91 9399150791",
    img: "/contactCall.png",
  },
  {
    icon: "/mailIcon.png",
    title: "Send Email",
    text: "techtelligenceindia@gmail.com",
    img: "/contactMail.png",
  },
];
const Love = () => {
  return (
 
      <div className="flex-col  pt-[3rem]">
        <div className=" max-w-[80rem] px-[1.25rem] mx-auto">
          <p className="text-center py-[.5rem] text-primaryLight leading-[1.5rem] text-[1rem] font-[700]  ">
            Contact Details
          </p>
          <h2 className="text-[2.813rem] text-center font-bold text-secondary ">
            We Would Love To <span className="text-primary">Help You</span>
          </h2>
        </div>
        <div className=" max-w-[80rem] px-[1.25rem] flex flex-col md:flex-row w-full gap-[1.5rem] pt-[3.25rem] mx-auto">
          {contactData?.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 h-[auto] p-[2rem]  border border-[#E1D9E9] hover:border-primary transition duration-300 flex flex-col gap-[1rem]"
            >
              <div className="flex justify-between">
                <div className="bg-primary p-[0.875rem] w-[4.688rem] h-[4.688rem] top-[-3.25rem] shadow-[2px_2px_12px_0px_#CAC2D1] relative">
                  <div className="arrow-up"></div>
                  <img className="" src={feature?.icon} />
                </div>
                <div className="">
                  <img className="w-[4.5rem]" src={feature?.img} />
                </div>
              </div>

              <h1 className="leading-[2.25ren] font-[700] text-[1.375rem] text-secondary ">
                {feature.title}
              </h1>
              <p className="leading-[1.25rem] font-[400] text-primaryLight text-[1rem]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
   
  );
};

export default Love;
