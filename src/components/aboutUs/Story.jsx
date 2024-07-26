import React from "react";

const Story = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <div className="py-[6rem] max-w-[80rem] px-[1.25rem] w-full m-auto flex flex-col gap-[2.188rem] items-center">
        <h1 className="text-[2.83rem] leading-[3.375rem] font-[700] text-center">
          The story behind <br />
          <span className="text-primary">CamClo3D</span>
        </h1>
        <p className="text-primaryLight text-[1rem] leading-[1.5rem] font-[400] text-center  ">
          We are a team of enthusiastic and passionate professionals from a
          textile background. Camclo3D has been built on a foundation of years
          of working in the textile-com industry. Running an e-commerce business
          has become excessively competitive in the past few years with the
          influx of new businesses every day. Photoshoots are one of the most
          expensive features in running an online business, making it
          inaccessible for MSMEs, in turn reducing their rate of success.
        </p>
        <p className="text-primaryLight text-[1rem] leading-[1.5rem] font-[400] text-center ">
          Camclo3D is an attempt to streamline the photography process and make
          it economical even for MSMEs. With our digital draping technology, you
          can now successfully visualize basic flat lays of fabrics into shirts,
          kurtis, sarees, kurtas, etc.
        </p>
        <p className="text-primaryLight text-[1rem] leading-[1.5rem] font-[400] text-center ">
          Our aim is to make e-commerce business easier and more successful for
          every individual.
        </p>
      </div>
    </div>
  );
};

export default Story;
