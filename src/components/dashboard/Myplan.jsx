import React from "react";
import myPlane from "../../utils/myPlane";

const Myplan = () => {
  const history = [
    {
      title: "Men Custom Face",
      price: 5400,
      heading:
        "You can get a unique (male) model for your brand, which will not be used by any other clients.",
    },
    {
      title: "Women Custom Face",
      price: 7400,
      heading:
        "You can get a unique (male) model for your brand, which will not be used by any other clients.",
    },
    {
      title: "Men Custom Face",
      price: 5400,
      heading:
        "You can get a unique (male) model for your brand, which will not be used by any other clients.",
    },
    {
      title: "Women Custom Face",
      price: 7400,
      heading:
        "You can get a unique (male) model for your brand, which will not be used by any other clients.",
    },
  ];
  return (
    <>
      <div className="max-w-[80.625rem] w-full m-auto py-[3.175rem] px-[1rem]">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-center lg:gap-[2.5rem] gap-8 w-full">
          {myPlane.map((plan, index) => (
            <div className="px-[1.5rem] py-[.75rem] bg-[#F3F2F7]  rounded-[1rem] border-l-[.4rem] border-primary max-w-[400px]">
              <div className="flex justify-between py-[.5rem]">
                <p className="font-[700] text-[1.25rem] leading-[1.5rem]">
                  My Plan
                </p>
                {plan?.active && <button className="btn-active">Active</button>}
              </div>
              <div className="flex justify-between border-t-[.06rem] py-[.5rem] border-primary">
                <p className="font-[700] text-[2.5rem] leading-[2.813rem] text-secondary Barlow">
                  {plan?.name}
                </p>
                <div>
                  <p className="font-[400] text-[1rem] leading-[1rem] text-secondary Barlow">
                    Expires
                  </p>
                  <p className="font-[500] text-primary text-[1rem] leading-[1rem] Barlow">
                    {plan?.expiry}
                  </p>
                </div>
              </div>
              <h2 className="text-[1.5rem] leading-[1.65rem] text-start font-[700] text-primary group-hover:text-white">
                Rs.{plan?.price}
                <span className="text-primary font-[400] text-[.75rem] leading-[1.21rem] group-hover:text-white ">
                  /{plan?.credits} Credits
                </span>
              </h2>
              <p className="leading-[1.5rem] font-[400] text-primaryLight text-[1rem] text-start group-hover:text-white italic">
                (Price per image - Rs.{plan?.pricePerImage})
              </p>
              <p className="font-[400] text-[1rem] leading-[1.25rem] py-[0.75rem]">
                {plan?.description}
              </p>
            </div>
          ))}
        </div>
        <div className="py-[2.25rem] text-secondary">
          <h3 className="font-[600] text-[1.875rem] leading-[2.25rem] ">
            Add on{" "}
            <span className="font-[700] text-[1.875rem] leading-[2.25rem]">
              {" "}
              History
            </span>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-[2.5rem] ">
          {history.map((plan, index) => (
            <div className="px-[1.5rem] py-[.75rem] bg-[#F3F2F7]  rounded-[1rem]   border border-primary max-w-[600px]">
              <h3 className="font-[700] text-[1.5rem] leading-[1.8rem] text-secondary">
                {plan?.title}
              </h3>
              <p className="font-[700] text-[1.875rem] leading-[2.25rem] text-primary py-[.8rem]">
                Rs.{plan?.price}
              </p>
              <p className="font-[400] text-[1rem] leading-[1.3rem] text-primaryLight">
                {plan?.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Myplan;
