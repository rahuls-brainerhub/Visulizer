import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../../redux/store";
import { clearAuth } from "../../redux/slice/authSlice";
import { setIsAuthenticated } from "../../redux/slice/globalSlice";
import { toast } from "react-toastify";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ onClose, onCloseLogin }) => {
  const [activeLink, setActiveLink] = useState(0);
  const links = ["Home", "Services", "About us", "Contact us", "FAQ"];
  const isAuthenticated = useSelector(
    (store) => store.global?.is_authenticated
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const logout = () => {
    store.dispatch(clearAuth());
    store.dispatch(setIsAuthenticated(false));
    toast.success("Logout Successful");
  };
  function updateBodyOverflowClass(isMobileOpen) {
    if (isMobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <div className="shadow-lg">
      <div className="max-w-[80rem] px-[1.25rem] mx-auto flex justify-between items-center relative">
        <div className="my-[0.5rem]">
          <img className="h-[4rem]" src={"/logo_new.png"} />
        </div>
        <div className="hidden md:flex items-center gap-[3rem]">
          {links.map((item, i) => (
            <Link key={i}
              onClick={() => {
                setActiveLink(i);
              }}
              className={`navbar-link ${activeLink === i ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </div>
        {isAuthenticated ? (
          <>
            <div className="hidden md:flex gap-[0.9rem]">
              <button
                className="btn-outline bg-primary text-[white]"
                onClick={logout}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:flex gap-[0.9rem]">
              <button className="btn-outline" onClick={onCloseLogin}>
                Login
              </button>
              <button className="btn-primary" onClick={onClose}>
                Sign up
              </button>
            </div>
          </>
        )}
        <button
          onClick={() => {
            updateBodyOverflowClass(!isMobileOpen);
            setIsMobileOpen(!isMobileOpen);
          }}
          className="block md:hidden"
        >
          <RiMenu2Fill size={30} fill="#8c2a8d" />
        </button>
        {isMobileOpen && (
          <div className="absolute md:hidden z-[10] top-[5rem] left-[0px] w-full min-h-[calc(100vh-5rem)] h-full bg-white ">
            <div className="p-[1.25rem] h-full flex flex-col gap-[2rem]">
              <div className="flex flex-col items-start gap-[1.5rem]">
                {links.map((item, i) => (
                  <Link
                    onClick={() => {
                      setActiveLink(i);
                    }}
                    className={`navbar-link ${
                      activeLink === i ? "active" : ""
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div>
                {isAuthenticated ? (
                  <>
                    <div className="flex gap-[0.9rem]">
                      <button
                        className="btn-outline bg-primary text-[white]"
                        onClick={logout}
                      >
                        Log Out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-[0.9rem]">
                      <button className="btn-outline" onClick={onCloseLogin}>
                        Login
                      </button>
                      <button className="btn-primary" onClick={onClose}>
                        Sign up
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
