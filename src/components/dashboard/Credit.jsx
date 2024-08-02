import React, { useState } from "react";

const Credit = ({ title }) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="flex text-[#381952] text-[32px] font-[600] font-barlow pb-[2.188rem]">
        {title}
      </div>
      <div className="flex flex-col bg-white py-[3.125rem] rounded-[1rem] ">
        <div className="mx-auto text-center ">
          <h2 className="font-[700] text-[1.5rem] leading-[1.8rem] text-secondary Barlow">
            Purchase a plan
          </h2>
          <p className="text-[1rem] leading-[1.2rem] font-[400] Barlow text-primaryLight">
            Choose the plan that work for you.
          </p>
          <div className="flex flex-row bg-primaryInputBorder rounded-full gap-[.25rem] ">
            <button
              className={`${active === 0 ? "btn-primary" : ""} ${
                active === 0 ? "rounded-full" : ""
              } w-[9.375rem] m-[0.25rem]   p-[0.625rem]`}
              onClick={() => setActive(0)}
            >
              Credits
            </button>
            <button
              className={`${active === 1 ? "btn-primary" : ""} ${
                active === 1 ? "rounded-full" : ""
              } w-[9.375rem] m-[0.25rem]   p-[0.625rem]`}
              onClick={() => setActive(1)}
            >
              My Plan
            </button>
          </div>
        </div>
        <div className="flex flex-row">

        </div>

      </div>
    </>
  );
};

export default Credit;
