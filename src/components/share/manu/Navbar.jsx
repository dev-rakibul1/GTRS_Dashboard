import React, { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { NAVBAR_CONTEXT } from "../../../layout/DashboardLayout";
import "./Navbar.css";

const Navbar = () => {
  const { handleSidebar } = useContext(NAVBAR_CONTEXT);
  const [navScroll, setNavScroll] = useState("");
  const [fileUploadToggle, setFileUploadToggle] = useState(false);

  // file upload toggle
  const handleFileUploadToggle = () => {
    setFileUploadToggle(!fileUploadToggle);
  };

  console.log(fileUploadToggle);
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

  return (
    <div
      className={`text-primary bg-white sticky top-0 left-0 border-b border-gray-300`}
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
              Synchronize FTP
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
          <div className="user w-8 h-8 rounded-full border border-primary flex justify-center items-center ml-4 cursor-pointer">
            <span className=" text-xl">
              <FaRegUser />
            </span>
          </div>
          <div className="user-dashboard ml-4 hidden sm:block">
            <h6 className="leading-3 text-sm">Dashboard</h6>
            <small className="leading-3 text-xs">Label 3</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
