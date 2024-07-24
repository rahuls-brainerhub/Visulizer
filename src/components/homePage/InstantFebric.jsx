import React from "react";

const InstantFebric = () => {
  return (
    <div className="relative z-[2] max-w-[80rem] px-[1.25rem] w-full flex flex-col md:flex-row gap-[3.25rem] items-center m-auto py-[3rem] md:py-[6rem]">
      <div className="w-full md:w-[45%]">
        <img
          className="h-[30rem] w-full object-cover"
          src={"/instantFebric.png"}
        />
      </div>
      <div className="flex flex-col gap-[2rem] w-full md:w-[55%]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-secondary leading-[3.375rem] font-[600] text-[2.813rem]">
            Instant Fabric Transformation at &nbsp;
            <span className="text-primary">Your Fingertips</span>
          </h1>
          <p className="text-primaryLight text-[1rem] font-[400] leading-[1.5rem]">
            Revolutionize garment design with our advanced digital draping
            capabilities. Our innovative software allows you to effortlessly
            create, refine, and visualize fabric designs with precision. Whether
            you're designing sarees, kurtas, shirts, or other garments, our
            intuitive tools provide unparalleled flexibility and accuracy.
            Transform your fabric concepts into stunning, realistic
            representations in just a few clicks, empowering you to bring your
            vision to life with ease.
          </p>
        </div>
        <div>
          <button className="btn-primary text-[1rem] font-[500] leading-[1.5rem]">
            Visualize Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstantFebric;
