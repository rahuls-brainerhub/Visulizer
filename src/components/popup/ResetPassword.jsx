import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { loginSchema } from "../../schema/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login, resetPassword } from "../../services/authService";
import { toast } from "react-toastify";
import { resetPasswordSchema } from "../../schema/resetPasswordSchema";
const ResetPassword = ({ onClose, token }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("token", token);
    formData.append("new_password", data?.new_password);
    formData.append("new_password_confirm", data?.new_password_confirm);
    setLoading(true);
    try {
      const response = await resetPassword(formData);
      console.log(response?.response?.data?.message);
      if (response?.status === 1) {
        toast.success("Password Reset successfully");
        onClose("openLogin");
        removeTokenFromURL();
      } else {
        toast.error(response?.response?.data?.message);
      }
    } catch (error) {
      toast.error("Error login");
    } finally {
      setLoading(false);
      close();
    }
  };
  const close = () => {
    reset({
      new_password: "",
      new_password_confirm: "",
    });
  };

  const removeTokenFromURL = () => {
    const baseUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, baseUrl);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col py-[2.5rem] gap-[2.5rem]">
          <div className="text-center">
            <p className="text-primaryLight font-[400] text-[1rem] leading-[1rem]">
              Enter Your Email address and we will send you a link to reset your
              password
            </p>
          </div>
          <div className="">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              New Password
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[55%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <img src="/password.svg" alt="password icon" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg w-[38.625rem] h-[3rem] pl-[2.75rem] transition duration-300 ease-in-out hover:border-primary"
                id=""
                type={showPassword ? "text" : "password"}
                placeholder="Enter New Password"
                {...register("new_password")}
              />
                <div
              className="absolute right-[.5rem] top-[60%] translate-y-[-50%] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} className="text-primary" />
              ) : (
                <LuEye size={20} className="text-primary" />
              )}
            </div>
            </div>
           
            <p className="text-[red]">{errors.new_password?.message}</p>
          </div>
          <div className="">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              New Password Confirm
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[55%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <img src="/password.svg" alt="password icon" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg w-[38.625rem] h-[3rem] pl-[2.75rem] transition duration-300 ease-in-out hover:border-primary"
                id=""
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter New Password Confirm"
                {...register("new_password_confirm")}
              />
              <div
                className="absolute right-[0.5rem] top-[60%] translate-y-[-50%] cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible size={20} className="text-primary" />
                ) : (
                  <LuEye size={20} className="text-primary" />
                )}
              </div>
            </div>
            <p className="text-[red]">{errors.new_password_confirm?.message}</p>
          </div>
          <button className="btn-primary text-[1rem] font-[500] w-[38.625rem] my-[1.5rem] leading-[1.5rem]">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
