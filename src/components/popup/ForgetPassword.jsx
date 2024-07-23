import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPassword } from "../../services/authService";
import { forgetPasswordSchema } from "../../schema/forgetPasswordSchema";
import { toast } from "react-toastify";

const ForgetPassword = ({setOpen}) => {
  const [loading,setLoading]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
  });
  const onSubmit = async (data) => {
 
    const formData = new FormData();
    formData.append("email", data?.email);
    setLoading(true);
    try {
      const response = await forgetPassword(formData);
      console.log(response?.response?.data);
      if (response?.status === 1) {
        toast.success("send Link to email successfully");
        setOpen({});
      } else {
        // toast.error(response?.response?.data?.message);
      }
    } catch (error) {
      // toast.error("Error Forget Password");
    } finally {
      setLoading(false);
      close();
    }
  };
  const close = () => {
    reset({
      email: "",
    });
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
              Email Address
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[55%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <AiOutlineMail size={20} className="text-primary" />
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
          <div>
            <button className="btn-primary text-[1rem] font-[500] w-[38.625rem]  leading-[1.5rem]">
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
