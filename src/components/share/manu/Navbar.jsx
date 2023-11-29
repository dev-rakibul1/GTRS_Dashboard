import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import {
  MdLogout,
  MdNotificationsNone,
  MdOutlineSettings,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { NAVBAR_CONTEXT } from "../../../layout/DashboardLayout";
import { AuthContext } from "../../authProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { users } = useContext(AuthContext);
  const { handleSidebar, handleFileUploadToggle } = useContext(NAVBAR_CONTEXT);
  const [navScroll, setNavScroll] = useState("");
  const [activeProfileDrop, setActiveProfileDrop] = useState(false);

  const handleProfileDrop = () => {
    setActiveProfileDrop(!activeProfileDrop);
  };

  // navigation collapse function
  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);
    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  console.log(navScroll);

  // navbar scrolling effect
  const handleNavbarScroll = () => {
    if (window.scrollY > 0) {
      setNavScroll("navScrollOver");
    } else {
      setNavScroll("");
    }
  };

  // log out
  const navigate = useNavigate();

  const handleLogout = () => {
    const logoutUrl = "https://gtrs.vercel.app/api/v1/auth/logout";

    axios
      .get(logoutUrl, {
        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json", // Adjust the content type if needed
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        localStorage.removeItem("accessToken");
        navigate("/authenticate-layout/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="relative z-20">
      <div
        className={`text-primary bg-white border-b border-gray-300 sticky top-0 right-0 z-10 w-full max-w-full`}
      >
        <div className="navbar-wrapper flex items-center justify-between  p-4">
          <div className="flex items-center justify-between">
            {/* Navbar toggler */}
            <div className="block lg:hidden mr-1 " onClick={handleSidebar}>
              <div className="navbar-toggler rounded-[4px]">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* file upload */}

            <div
              className="flex items-center justify-start bg-primary text-white px-4 py-2 cursor-pointer rounded-[4px] text-sm "
              onClick={handleFileUploadToggle}
            >
              <span>
                <FiUpload />
              </span>
              <span className="ml-4 hidden lg:block"> Upload files</span>
            </div>

            {/* FTP */}
            <div className="ftp   hidden sm:block">
              <button className=" ml-2 border-2 border-primary text-primary px-4 py-[7px] cursor-pointer rounded-[4px] text-sm">
                Export Data
              </button>
            </div>
          </div>

          {/* user and notification */}
          <div className="user-notification  flex items-center">
            {/* notification */}
            <div className="relative cursor-pointer">
              <span className="text-2xl">
                <MdNotificationsNone />
                <span className="w-5 h-5 absolute top-[-15px] right-[-8px] bg-warning text-sm p-[3px] rounded-sm flex items-center justify-center">
                  1
                </span>
              </span>
            </div>

            {/* user */}
            <div className="flex items-center relative">
              <div
                className="user w-8 h-8 rounded-full  flex justify-center items-center ml-4 cursor-pointer overflow-hidden"
                onClick={handleProfileDrop}
              >
                <span className=" text-xl">
                  <img src={users?.data?.profileImage} alt="profile" />
                </span>
              </div>
              {/* <div className="user-dashboard ml-4 hidden sm:block">
                <h6 className="leading-3 text-sm">Dashboard</h6>
                <small className="leading-3 text-xs">Label 3</small>
              </div> */}

              {activeProfileDrop ? (
                <>
                  {" "}
                  {/* dropdoen */}
                  <div className="user-profile-dropdown">
                    <ul>
                      <Link to="/profile">
                        <li className="flex items-center  cursor-pointer hover:bg-gray-200 p-1 ">
                          <CgProfile className="mr-2" />
                          Profile
                        </li>
                      </Link>
                      <Link to="/setting">
                        <li className="flex items-center  cursor-pointer hover:bg-gray-200 p-1 mt-2">
                          <MdOutlineSettings className="mr-2" />
                          Setting
                        </li>
                      </Link>

                      <li
                        className="flex items-center  cursor-pointer hover:bg-gray-200 p-1 mt-2"
                        onClick={handleLogout}
                      >
                        <MdLogout className="mr-2" />
                        Log out
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
