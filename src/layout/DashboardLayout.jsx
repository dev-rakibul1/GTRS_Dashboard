import React, { createContext, useContext, useEffect, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../components/authProvider/AuthProvider";
import Footer from "../components/share/footer/Footer";
import Navbar from "../components/share/manu/Navbar";
import UploaderTabs from "../components/tabs/UploaderTabs";
import "./DashboardLayout.css";

export const NAVBAR_CONTEXT = createContext();

const DashboardLayout = () => {
  const { users } = useContext(AuthContext);
  const [fileUploadToggle, setFileUploadToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // sidebar dropdown toggle
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  // file upload toggle
  const handleFileUploadToggle = () => {
    setFileUploadToggle(!fileUploadToggle);
  };

  // data toggle with navbar connection here
  const handleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  // share navbar information
  const navbarInfo = { handleSidebar, handleFileUploadToggle };

  // sidebar breaking point class add
  const [isSmallScreen, setIsSmallScreen] = useState(0);
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth > 1024);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // dashboard router
  const routeItems = (
    <>
      <li className="router-items">
        <NavLink to="/" className="router-link">
          KYC Request
        </NavLink>
      </li>

      <li className="router-items">
        <NavLink to="/contact-us" className="router-link">
          Contact Request
        </NavLink>
      </li>

      {users?.data?.role === "super_admin" && (
        <li className="router-items">
          <NavLink to="/user" className="router-link">
            Manage User
          </NavLink>
        </li>
      )}

      {users?.data?.role === "super_admin" && (
        <li className="router-items">
          <NavLink to="/add-user" className="router-link">
            Add User
          </NavLink>
        </li>
      )}
      <li className="router-items dropdown">
        <Link className="router-link  dropdown-toggle " onClick={handleToggle}>
          <div className="flex items-center justify-between">
            <span>Status</span>
            {isOpen ? (
              <MdArrowDropUp className="text-2xl" />
            ) : (
              <MdArrowDropDown className="text-2xl " />
            )}
          </div>
          <div
            className={`dropdown-menu flex items-start justify-start flex-col w-full   ${
              isOpen ? "open" : ""
            }`}
          >
            <NavLink
              to="/general"
              className=" hover:bg-gray-500 p-2 mt-2 block w-full rounded-md"
            >
              General
            </NavLink>
            <NavLink
              to="/ranking"
              className=" hover:bg-gray-500 p-2 mt-2 block w-full rounded-md"
            >
              Contributors ranking
            </NavLink>
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="lg:flex dashboard-layout-wrapper overflow-y-scroll h-screen overflow-hidden">
        {/* side bar/left bar */}
        {/* {isSmallScreen ? <h1>Hello world!</h1> : <h1>Sorry</h1>} */}
        <div
          className={`bg-neutral w-full lg:max-w-[20%] dashboard-sidebar  hidden lg:block sticky top-0 overflow-y-scroll max-h-screen h-full
         `}
        >
          <div className="freepik-container">
            <div className="nav-area">
              <div className="max-w-[180px] py-7">
                <NavLink to="/">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="max-w-full"
                  />
                </NavLink>
              </div>

              {/* route */}
              <ul className="route-wrap text-gray-400">{routeItems}</ul>
            </div>

            {/* login */}
            {!users?.data?.email && (
              <div className="login absolute bottom-0 left-0 p-4">
                <NavLink to="/authenticate-layout/login">
                  <button className="text-gray-400">Login</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
        {/* -----------------START OFF CANVAS SIDEBAR ROUTE HANDLER--------------------- */}
        <div
          className={`bg-neutral w-full lg:max-w-[20%] dashboard-sidebar block lg:hidden off-canvas-sidebar-router z-10  ${
            sidebarToggle ? "sidebar-add" : ""
          }  ${isSmallScreen ? "remove-sidebar-position" : ""} 
         `}
        >
          <div className="freepik-container">
            <div className="nav-area">
              <div className="max-w-[180px] py-7">
                <NavLink to="/">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="max-w-full"
                  />
                </NavLink>
              </div>

              {/* route */}

              <ul className="route-wrap text-gray-400">{routeItems}</ul>
            </div>
          </div>
        </div>
        {/* -----------------END OF OFF CANVAS SIDEBAR ROUTE HANDLER--------------------- */}

        {/* -------------------------Start hidden uploader file--------------------- */}
        <div
          className={`hidden-uploader-sidebar z-20 ${
            fileUploadToggle ? "block-uploader-sidebar" : ""
          }`}
        >
          <NAVBAR_CONTEXT.Provider value={navbarInfo}>
            <UploaderTabs />
          </NAVBAR_CONTEXT.Provider>
        </div>
        {/* -------------------------End of  hidden uploader file--------------------- */}

        {/* right bar */}
        <div className=" w-full lg:max-w-[80%]">
          <div className="relative">
            <div className="">
              <NAVBAR_CONTEXT.Provider value={navbarInfo}>
                <Navbar />
              </NAVBAR_CONTEXT.Provider>
            </div>
          </div>
          <div className="placeholder-outlet  bg-[#ECEBE5] ">
            <div className="">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
