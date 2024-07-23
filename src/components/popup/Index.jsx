import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const PopupTemplete = ({ title, bodyComponent, onClose,removeTokenFromURL}) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-[#00000050] z-[100]">
      <div className="relative flex justify-center items-start mt-[7.75rem] w-[46.875rem] m-auto bg-[white] rounded-[1.25rem]">
        <div className="absolute top-[0%] translate-y-[-50%] rounded-[0.75rem] w-[41.875rem] h-[3.5rem] bg-gradient-to-r from-primaryDark to-primaryMediumLight">
          <div className="flex px-[1.625rem] items-center justify-between h-full">
            <p className="text-[1.25rem] font-[700] text-[white] leading-[1.813rem]">
              {title}
            </p>
            <IoCloseCircleOutline
              color="white"
              size={20}
              onClick={() => {
                if (title === "Sign up") {
                  onClose("openSignup");
                } else if (title === "Log In") {
                  onClose("openLogin");
                } else if (title === "Verify OTP") {
                  onClose("openOTP");
                }
                else if (title === "Forget Password") {
                  onClose("openForgetPassword");
                }
                else if (title === "Reset Password") {
                  onClose("openResetPassword");
                  removeTokenFromURL()
                }
              }}
            />
          </div>
        </div>
        <div className="mt-[3.313rem] flex flex-col gap-[1.25rem]">
          <img className="h-[6rem]  object-contain" src={"/logo_new.png"} />
          <div className="max-w-[95%] px-[1.25rem] m-auto">{bodyComponent}</div>
        </div>
      </div>
    </div>
  );
};

export default PopupTemplete;
