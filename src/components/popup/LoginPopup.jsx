import React, { useEffect, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { loginSchema } from "../../schema/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login, socialAuth } from "../../services/authService";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

import FacebookLogin from "react-facebook-login";
import axios from "axios";
// import { InstagramLogin } from "@amraneze/react-instagram-login";

// const redirectUrl="http://localhost:5173"

const LoginPopup = ({ setOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
      console.log(codeResponse)
    },
    onError: (error) => console.log("Login Failed:", error)
  });

  const getAuthTokn = async(token) => {
    const socialLogin = await socialAuth({
      access_token:token,
      provider: "google",
    });
    console.log(socialLogin);
  }
  useEffect(() => {
    if (user) {
      getAuthTokn(user.access_token)
      /* axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err)); */
    }
  }
  )

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
  const onSuccess = async (googleUser) => {
    console.log("Logged in successfully!", googleUser);
    getAccessToken(googleUser.credential, "http://localhost:5173")
    const socialLogin = await socialAuth({
      access_token: googleUser.credential,
      provider: "google",
    });
    console.log(socialLogin);
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
  const responseFacebook = async (response) => {
    console.log(response);
    const socialLogin = await socialAuth({
      access_token: response.accessToken,
      provider: "facebook",
    });
    console.log(socialLogin);
    try {
      console.log(response?.response?.data?.message);
      if (socialLogin?.status === 1) {
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
    // Handle the response from Facebook, e.g. store user details to state
  };
  // const responseInstagram = (response) => {
  //   console.log(response);
  // };
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <form
        className="max-w-[38.625rem] px-[1.25rem] w-full m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
            Email Address
          </label>
          <div className="relative pt-[.5rem] w-full">
            <div className=" absolute left-[0.5rem] top-[50%] translate-y-[-50%] flex items-center gap-[0.25rem]">
              <FaRegUser size={20} className="text-primary" />
              <p className="text-[1rem] text-gray-400">|</p>
            </div>
            <input
              className="border w-full border-primaryInputBorder rounded-lg h-[3rem] pl-[2.75rem] transition duration-300 ease-in-out hover:border-primary"
              id=""
              type="text"
              placeholder="Enter Email Address"
              {...register("email")}
            />
          </div>
          <p className="text-[red]">{errors.email?.message}</p>
        </div>
        <div className="w-full">
          <label className="text-secondary font-[400] text-[1rem] leading-[1rem]">
            Password
          </label>
          <div className="relative pt-[.5rem] w-full">
            <div className=" absolute left-[0.5rem] top-[55%] translate-y-[-50%] flex items-center gap-[0.25rem]">
              <img src="/password.svg" alt="password icon" />
              <p className="text-[1rem] text-gray-400">|</p>
            </div>
            <input
              className="border w-full border-primaryInputBorder rounded-lg h-[3rem] pl-[2.75rem] pr-[2rem] transition duration-300 ease-in-out hover:border-primary"
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
        <button className="btn-primary text-[1rem] font-[500] mt-[0.75rem] leading-[1.5rem] w-full">
          Login
        </button>
      </form>
      <div className="max-w-[38.625rem] px-[1.25rem] w-full m-auto">
        <div className="w-full flex justify-end">
          <a
            onClick={(e) => {
              e.preventDefault();
              onClose("openForgetPassword");
            }}
            className="w-full text-end text-primary underline cursor-pointer"
          >
            Forget Password
          </a>
        </div>
        <div className="flex flex-col items-center gap-[0.75rem] py-[1rem]">
          <p className="font-[400] text-[1rem] text-secondary">
            Or continue with
          </p>
          <div className="flex gap-[1rem] w-full justify-center">
          
                <button
                  type="button"
                  className="flex items-center justify-center px-[0.6rem] rounded-full cursor-pointer border border-[#CAC2D1] overflow-hidden"
                  onClick={() => login()}
                >
                  <FcGoogle size={18}/>
                </button>
            <FacebookLogin
              appId="1260486952064586"
              autoLoad={false}
              cssClass="flex items-center justify-center rounded-full  hover:bg-[#CAC2D1] cursor-pointer border border-[#CAC2D1] overflow-hidden"
              fields="name,email,picture"
              callback={responseFacebook}
              icon={
                <img
                  className="bg-[white] h-[38px] w-[38px] p-[9px] "
                  src="/googleSignup.png"
                />
              }
              textButton=""
            />
            {/* <InstagramLogin
            clientId="1674124336754072"
            buttonText={
              <img
              className="bg-[white] h-[38px] w-[38px] p-[9px] "
              src="/facebookSignup.png"
              />
              }
              onSuccess={responseInstagram}
              onFailure={responseInstagram}
              redirectUri={redirectUrl}
              cssClass="flex items-center justify-center rounded-full  hover:bg-[#CAC2D1] cursor-pointer border border-[#CAC2D1] overflow-hidden"
              /> */}
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
    </div>
  );
};

export default LoginPopup;
