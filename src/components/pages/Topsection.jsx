import React, { useEffect } from "react";
import { HiHome } from "react-icons/hi";

const TopSection = ({ title, breadcrumData, keys, image }) => {
  const isAboutPage = title === "ABOUT US";
  console.log(image, "image");
  useEffect(() => {
    if (image) {
      document.documentElement.style.setProperty(
        "--background-image",
        `url(${image})`
      );
    }
  }, [image]);
  console.log(isAboutPage);
  return (
    <div
      className={`flex flex-col w-full justify-center items-center form-bg relative `}
    >
      <div className="flex justify-center items-center z-10 py-[6.25rem]">
        <h1 className="text-white text-[4rem] font-[700] text-center leading-[4.75rem]">
          About Us
        </h1>
      </div>
      <div className=" w-full flex items-center py-[2.25rem]  justify-center border-t-[0.031rem] border-[#E1D9E9]  gap-[.6rem]">
        {breadcrumData?.length === 1 ? (
          <div key={keys} className="page-subtitle text-white text-center">
            {breadcrumData[0]}
          </div>
        ) : (
          <>
            {breadcrumData.map((item, index) => (
              <React.Fragment key={index}>
                <p className="font-medium  text-white flex">
                  {index === 0 && (
                    <HiHome
                      className={
                        "bg-primaryMediumLight mr-[0.5rem] p-[0.18rem] rounded-full flex items-center justify-center"
                      }
                      color="white"
                      size={22}
                    />
                  )}
                  <span
                    className={`text-[1rem] font-[500] leading-[1.5rem] ${
                      index === breadcrumData?.length - 1
                        ? "text-primaryMediumLight"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </span>
                </p>
                {index !== breadcrumData?.length - 1 && (
                  <>
                    <img className=" w-[.5rem]" src="/arrow.png" alt="" />
                  </>
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TopSection;
