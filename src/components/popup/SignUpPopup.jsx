import React, { createRef, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail, AiOutlineEyeInvisible } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { userRegister } from "../../services/authService";
import { signupSchema } from "../../schema/signupSchema";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import InstagramLogin from "react-instagram-login";
import axios from "axios";
const clientId =
  "566791707357-313huo648nc02hc6cfl0ha07cco4kole.apps.googleusercontent.com";

const SignUpPopup = ({ onClose }) => {
  const facebookBtnRef = createRef();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    formData.append("email", data?.email);
    formData.append("password", data.password);
    formData.append("phone_number", data?.phone_number);
    setLoading(true);
    try {
      const response = await userRegister(formData);
      if (response?.status === 1) {
        toast.success("Register successfully");
        onClose("openOTP");
      } else {
        toast.error(response?.response?.data?.error.email[0]);
      }
    } catch (error) {
      toast.error("Error adding Register");
    } finally {
      setLoading(false);
      close();
    }
  };
  const close = () => {
    reset({
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  const onSuccess = (googleUser) => {
    console.log("Logged in successfully!", googleUser);
    // Handle successful login. You can access user profile in googleUser.profileObj
  };

  const onFailure = (error) => {
    if (error.error === "popup_closed_by_user") {
      alert(
        "The login popup was closed before completing the process. Please try again."
      );
    } else {
      console.error("Login failed:", error);
      alert("An error occurred during login. Please try again.");
    }
  };
  const responseFacebook = (response) => {
    console.log(response);
    // Handle the response from Facebook, e.g. store user details to state
  };
  const responseInstagram = async (response) => {
    try {
      // Use response.code or response.token for API requests
      const accessToken = response.access_token;
      const userId = response.user_id;

      // Example: Fetch user data
      const userData = await axios.get(
        `https://graph.instagram.com/${userId}?fields=id,username&access_token=${accessToken}`
      );

      console.log("User Data:", userData.data);

      // Handle further logic (e.g., save user data to state or localStorage)
    } catch (error) {
      console.error("Error fetching Instagram user data:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-[1.125rem] w-full">
          <div className="w-1/2">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              First Name
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <FaRegUser size={20} className="text-primary" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg w-[18.813rem] h-[3rem] pl-[2.75rem] transition duration-300 ease-in-out hover:border-primary"
                id=""
                type="text"
                placeholder="Enter Your First Name"
                {...register("first_name")}
              />
            </div>
            <p className="text-[red]">{errors.first_name?.message}</p>
          </div>
          <div className="w-1/2">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              Last Name
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <FaRegUser size={20} className="text-primary" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg  h-[3rem] pl-[2.75rem] w-[18.813rem] transition duration-300 ease-in-out hover:border-primary"
                id=""
                type="text"
                placeholder="Enter Your Last Name"
                {...register("last_name")}
              />
            </div>
            <p className="text-[red]">{errors.last_name?.message}</p>
          </div>
        </div>

        <div className="flex flex-row gap-[1.125rem] w-full mt-[1.1rem]">
          <div className="w-1/2">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              Email Address
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <AiOutlineMail size={20} className="text-primary" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg  h-[3rem] pl-[2.75rem] w-[18.813rem] transition duration-300 ease-in-out hover:border-primary"
                id=""
                type="text"
                placeholder="Enter Email Address"
                {...register("email")}
              />
            </div>
            <p className="text-[red]">{errors.email?.message}</p>
          </div>
          <div className="w-1/2">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              Mobile Number
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <LuPhone size={20} className="text-primary" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg h-[3rem] pl-[2.75rem] w-[18.813rem] transition duration-300 ease-in-out hover:border-primary"
                id=""
                type="text"
                placeholder="Enter Mobile Number"
                {...register("phone_number")}
              />
            </div>
            <p className="text-[red]">{errors.phone_number?.message}</p>
          </div>
        </div>
        {/* <div className="flex flex-row gap-[1.125rem] mt-[1.1rem] w-full">
        <div className="w-1/2">
          <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
            Password
          </label>
          <div className="relative pt-[.5rem]">
            <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
              <img src="/password.svg" />
              <p className="text-[1rem] text-gray-400">|</p>
            </div>
            <input
              className="border rounded-lg w-full h-[3rem] pl-[2.75rem] "
              id=""
              type="text"
              placeholder="Enter Your Password"
            />
          </div>
        </div>
        <div className="w-1/2">
          <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
            Confirm Password
          </label>
          <div className="relative pt-[.5rem]">
            <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
              <img src="/password.svg" />
              <p className="text-[1rem] text-gray-400">|</p>
            </div>
            <input
              className="border rounded-lg w-full h-[3rem] pl-[2.75rem] "
              id=""
              type="text"
              placeholder="Enter Your Confirm Password"
            />
          </div>
        </div>
      </div> */}
        <div className="flex flex-row gap-[1.125rem] mt-[1.1rem] w-full">
          <div className="w-1/2">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              Password
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[55%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <img src="/password.svg" alt="password icon" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg w-[18.813rem] h-[3rem] pl-[2.75rem] pr-[2rem] transition duration-300 ease-in-out hover:border-primary"
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
          <div className="w-1/2">
            <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
              Confirm Password
            </label>
            <div className="relative pt-[.5rem]">
              <div className=" absolute left-[0.5rem] top-[60%] translate-y-[-50%] flex items-center gap-[0.25rem]">
                <img src="/password.svg" alt="password icon" />
                <p className="text-[1rem] text-gray-400">|</p>
              </div>
              <input
                className="border border-primaryInputBorder rounded-lg w-[18.813rem] h-[3rem] pl-[2.75rem] pr-[2rem] transition duration-300 ease-in-out hover:border-primary "
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter Confirm Password"
                {...register("confirm_password")}
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
            <p className="text-[red]">{errors.confirm_password?.message}</p>
          </div>
        </div>
        <button className="btn-primary text-[1rem] font-[500] w-[38.625rem] my-[1.5rem] leading-[1.5rem]">
          Signup
        </button>
      </form>
      <div className="flex flex-col items-center py-[2.375rem]">
        <p className="font-[400] text-[1rem] text-secondary">
          Or continue with
        </p>
        <div className="flex py-[1.75rem] gap-[1rem]">
          <GoogleLogin
            clientId={clientId}
            type="icon"
            icon={true}
            shape="circle"
            buttonText={""}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            id="google-signin-button"
            className="google-btn flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full border border-[#CAC2D1] hover:bg-[#CAC2D1] cursor-pointer"
          />
          <FacebookLogin
            appId="1260486952064586"
            autoLoad={false}
            cssClass="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full border border-[#CAC2D1] hover:bg-[#CAC2D1] cursor-pointer"
            fields="name,email,picture"
            callback={responseFacebook}
            icon={<img src="/googleSignup.png" />}
            textButton=""
          />
          <InstagramLogin
            clientId="1674124336754072"
            buttonText={<img src="/facebookSignup.png" />}
            onSuccess={responseInstagram}
            onFailure={(error) =>
              console.error("Instagram login error:", error)
            }
            cssClass="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full border border-[#CAC2D1] hover:bg-[#CAC2D1] cursor-pointer"
          />
        </div>
        <p className="font-[400] text-[1rem] leading-[1.563rem] text-secondary">
          Already have an account?{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              onClose("openLogin");
            }}
            className="text-primary underline cursor-pointer "
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPopup;
