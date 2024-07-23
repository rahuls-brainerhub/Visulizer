import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden relative bg-[#F9FAFE]">
      <img
        className="absolute top-0 left-0 w-full rotate-[180deg] opacity-[0.2] z-[0]"
        src="/bg.png"
        alt=""
        srcset=""
      />
      <div className="relative z-[2] max-w-[90rem] px-[1.25rem] w-full flex justify-between items-center m-auto py-[6rem]">
        <div className="w-1/2 flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-secondary leading-[4.625rem] font-[600] text-[4rem]">
              Experience Fabric Magic
              <span className="text-primary">&nbsp;in Seconds</span>
            </h1>
            <p className="text-primaryLight text-[1rem] font-[400] leading-[1.5rem]">
              Transform fabrics instantly with our mesmerizing techniques!
            </p>
          </div>
          <div>
            <button className="btn-primary text-[1rem] font-[500] leading-[1.5rem]">
              Visualize
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="h-[30rem] w-full object-cover" src={"/hero.jpeg"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
