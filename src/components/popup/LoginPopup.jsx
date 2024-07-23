import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { loginSchema } from "../../schema/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../services/authService";
import { toast } from "react-toastify";
const LoginPopup = ({ setOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data?.email);
    formData.append("password", data.password);
    setLoading(true);
    try {
      const response = await login(formData);
      console.log(response?.response?.data?.message);
      if (response?.status === 1) {
        toast.success("Login successfully");
        setOpen({});
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
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
            Email Address
          </label>
          <div className="relative pt-[.5rem]">
            <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
              <FaRegUser size={20} className="text-primary" />
              <p className="text-[1rem] text-gray-400">|</p>
            </div>
            <input
              className="border border-primaryInputBorder rounded-lg w-[38.625rem] h-[3rem] pl-[2.75rem] transition duration-300 ease-in-out hover:border-primary"
              id=""
              type="text"
              placeholder="Enter Email Address"
              {...register("email")}
            />
          </div>
          <p className="text-[red]">{errors.email?.message}</p>
        </div>
        <div className="">
          <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
            Password
          </label>
          <div className="relative pt-[.5rem]">
            <div className=" absolute left-[0.5rem] top-[55%] translate-y-[-50%] flex items-center gap-[0.25rem]">
              <img src="/password.svg" alt="password icon" />
              <p className="text-[1rem] text-gray-400">|</p>
            </div>
            <input
              className="border border-primaryInputBorder rounded-lg w-[38.625rem]  h-[3rem] pl-[2.75rem] pr-[2rem] transition duration-300 ease-in-out hover:border-primary"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              {...register("password")}
            />
            <div
              className="absolute right-[0.5rem] top-[60%] translate-y-[-50%] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} className="text-primary" />
              ) : (
                <LuEye size={20} className="text-primary" />
              )}
            </div>
          </div>
          <p className="text-[red]">{errors.password?.message}</p>
        </div>

        <button className="btn-primary text-[1rem] font-[500] w-[38.625rem] my-[1.5rem] leading-[1.5rem]">
         Login
        </button>
      </form>
      <a
        onClick={(e) => {
          e.preventDefault();
          onClose("openForgetPassword");
        }}
        className="text-end text-primary underline cursor-pointer"
      >
        Forget Password
      </a>
      <div className="flex flex-col items-center py-[2.375rem]">
        <p className="font-[400] text-[1rem] text-secondary">
          Or continue with
        </p>
        <div className="flex py-[1.75rem] gap-[1rem]">
          <div className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full border border-[#CAC2D1] hover:bg-[#CAC2D1]">
            <img src="/instagramSignup.png" />
          </div>
          <div className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full border border-[#CAC2D1] hover:bg-[#CAC2D1]">
            <img src="/googleSignup.png" />
          </div>
          <div className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full border border-[#CAC2D1] hover:bg-[#CAC2D1]">
            <img src="/facebookSignup.png" />
          </div>
        </div>
        <p className="font-[400] text-[1rem] leading-[1.563rem] text-secondary">
          Didn’t have an account?{" "}
          <span
            className="text-primary underline cursor-pointer "
            onClick={(e) => {
              e.preventDefault();
              onClose("openSignup");
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
