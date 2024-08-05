import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { useSelector } from "react-redux";
import MyProfile from "../dashboard/MyProfile";
import { myProfile } from "../../services/authService";
import { store } from "../../redux/store";
import { clearAuth } from "../../redux/slice/authSlice";
import { setIsAuthenticated } from "../../redux/slice/globalSlice";
import ChangePassword from "../dashboard/ChangePassword";
import { FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { MdOutlineChangeCircle } from "react-icons/md";
import Credit from "../dashboard/Credit";
import Notification from "../dashboard/Notification";

const Dashboard = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [openNotification, SetOpenNotification] = useState(false);
  const [profileOpen, setProfileOpen] = useState(0);
  const [active, setActive] = useState(0);

  // Create separate refs for the profile trigger and dropdown
  const profileTriggerRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const toogleTriggerRef = useRef(null);

  const handleProfile = () => {
    setOpenProfile(!openProfile);
  };

  const myProfileData = async () => {
    let res = await myProfile();
    console.log(res);
  };
  const profile = useSelector((store) => store.auth.myProfile);

  useEffect(() => {
    myProfileData();
  }, []);

  const handleLogout = () => {
    store.dispatch(clearAuth());
    store.dispatch(setIsAuthenticated(false));
    toast.success("Logout Successful");
    setOpenProfile(false);
  };

  const handleClickOutside = (event) => {
    if (
      profileTriggerRef.current &&
      !profileTriggerRef.current.contains(event.target) &&
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setOpenProfile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderProfileComponent = () => {
    switch (profileOpen) {
      case 1:
        return <MyProfile profile={profile} title={"My Profile"} />;
      case 2:
        return <ChangePassword title={"Change Password"} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (active === 2) {
      setProfileOpen(0);
    }
  }, [active]);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setToggleSideBar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("dbcdhb", toggleSideBar);
  return (
    <>
      <div className="bg-[#f2eef3] relative min-h-[100vh]">
        <div
          className={`fixed top-0 bottom-0 lg:w-[21.875rem] w-48 bg-white transition-transform duration-300 ease-in-out transform ${
            toggleSideBar ? "-translate-x-full" : "translate-x-0"
          } z-40`}
        >
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div
          className={`${
            toggleSideBar
              ? "w-full"
              : "lg:w-[calc(100%-21.875rem)] w-[calc(100% - 12rem)]"
          } ${
            toggleSideBar ? "ml-[0rem]" : "lg:ml-[21.875rem] sm:ml-[12rem] ml-0"
          } lg:px-[3rem] px-7 py-[1.5rem]`}
        >
          <div>
            <div className="flex sm:mb-[2.5rem] mb-6 justify-between items-center z-50">
              <div>
                <BiMenuAltLeft
                  onClick={() => setToggleSideBar(!toggleSideBar)}
                  className="w-[2.5rem] h-[2.5rem] border bg-white rounded-md cursor-pointer text-primary"
                />
              </div>
              <div className="flex justify-center items-center gap-5">
                <div
                  className="relative"
                  onClick={() => SetOpenNotification(!openNotification)}
                >
                  <IoIosNotificationsOutline className="h-[2.5rem] p-1.5 w-[2.5rem] border bg-[#efe9f5] rounded-xl" />
                  <div className="w-[1rem] h-[1rem] bg-[#87258e] text-white !text-[0.688rem] font-semibold rounded-full flex items-center justify-center m-auto absolute top-[-.5rem] right-[-.5rem]">
                    13
                  </div>
                </div>
                {openNotification && (
                  <Notification
                    open={openNotification}
                    onClose={SetOpenNotification}
                  />
                )}
                <div className="flex justify-center items-center gap-2">
                  <p className="text-[#381952] font-barlow">
                    Hello,{" "}
                    <span className="font-bold">{profile?.first_name}</span>
                  </p>
                  <div className="relative z-50">
                    <div
                      onClick={() => handleProfile()}
                      ref={profileTriggerRef}
                      className="h-[3.5rem] w-[3.5rem] rounded-full border-white border-4 cursor-pointer"
                    >
                      <img
                        src="/user-profile.jpg"
                        alt="#"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    {openProfile && (
                      <div
                        ref={profileDropdownRef}
                        className="absolute mt-[1rem] right-10 gap-[.1rem] w-[12.5rem] m-auto bg-white overflow-hidden flex flex-col rounded-[.75rem] shadow-[2px_2px_12px_0px_#CAC2D1] border-b-4 border-primary"
                      >
                        <div
                          className={`flex flex-row cursor-pointer justify-start gap-[.6rem] px-[1.2rem] py-[1rem] ${
                            profileOpen === 1 ? "bg-[#EFE8F5]" : "bg-white"
                          }`}
                          onClick={() => {
                            setActive(0);
                            setProfileOpen(1);
                          }}
                        >
                          <FaRegUser size={20} className="text-primary" />
                          <p className="font-[400] text-[1rem] leading-[1.25rem] text-secondary Barlow">
                            My Profile
                          </p>
                        </div>
                        <div
                          className={`flex flex-row cursor-pointer justify-start gap-[.6rem] px-[1.2rem] py-[1rem] ${
                            profileOpen === 2 ? "bg-[#EFE8F5]" : "bg-white"
                          }`}
                          onClick={() => {
                            setActive(0);
                            setProfileOpen(2);
                          }}
                        >
                          <MdOutlineChangeCircle
                            size={20}
                            className="text-primary"
                          />
                          <p className="font-[400] text-[1rem] leading-[1.25rem] text-secondary Barlow">
                            Change Password
                          </p>
                        </div>
                        <div
                          className="flex flex-row cursor-pointer justify-start gap-[.6rem] px-[1.2rem] py-[1rem]"
                          onClick={handleLogout}
                        >
                          <TbLogout size={20} className="text-primary" />
                          <p className="font-[400] text-[1rem] leading-[1.25rem] text-secondary Barlow">
                            Logout
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {renderProfileComponent()}
          {active === 2 && <Credit title={"Credit"} />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
