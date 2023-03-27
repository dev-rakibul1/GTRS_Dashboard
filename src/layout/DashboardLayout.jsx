import React, { createContext, useEffect, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/share/footer/Footer";
import Navbar from "../components/share/manu/Navbar";
import UploaderTabs from "../components/tabs/UploaderTabs";
import "./DashboardLayout.css";

export const NAVBAR_CONTEXT = createContext();

const DashboardLayout = () => {
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
        <Link to="/" className="router-link">
          Dashboard
        </Link>
      </li>

      <li className="router-items dropdown">
        <Link
          to="/"
          className="router-link  dropdown-toggle "
          onClick={handleToggle}
        >
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
            <Link
              to="/general"
              className=" hover:bg-gray-500 p-2 mt-2 block w-full rounded-md"
            >
              General
            </Link>
            <Link
              to="/ranking"
              className=" hover:bg-gray-500 p-2 mt-2 block w-full rounded-md"
            >
              Contributors ranking
            </Link>
          </div>
        </Link>
      </li>
      <li className="router-items">
        <Link to="/" className="router-link">
          Contact
        </Link>
      </li>

      <li className="router-items">
        <Link to="/referral" className="router-link">
          Referral Program
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="lg:flex dashboard-layout-wrapper">
        {/* side bar/left bar */}
        {/* {isSmallScreen ? <h1>Hello world!</h1> : <h1>Sorry</h1>} */}
        <div
          className={`bg-neutral w-full lg:max-w-[20%] dashboard-sidebar  hidden lg:block sticky top-0
         `}
        >
          <div className="freepik-container">
            <div className="nav-area">
              <div className="max-w-[180px] py-7">
                <Link to="/">
                  <img
                    src="https://static-contributor-fp.cdnpk.net/assets/e418cfe53773617e237f15fb02f027ea.svg"
                    alt="logo"
                    className="max-w-full"
                  />
                </Link>
              </div>

              {/* route */}

              <ul className="route-wrap">{routeItems}</ul>
            </div>

            {/* login */}
            <div className="login absolute bottom-0 left-0 p-4">
              <Link to="/authenticate-layout/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
        {/* -----------------START OFF CANVAS SIDEBAR ROUTE HANDLER--------------------- */}
        <div
          className={`bg-neutral w-full lg:max-w-[20%] dashboard-sidebar block lg:hidden off-canvas-sidebar-router z-10 ${
            sidebarToggle ? "sidebar-add" : ""
          }  ${isSmallScreen ? "remove-sidebar-position" : ""} 
         `}
        >
          <div className="freepik-container">
            <div className="nav-area">
              <div className="max-w-[180px] py-7">
                <Link to="/">
                  <img
                    src="https://static-contributor-fp.cdnpk.net/assets/e418cfe53773617e237f15fb02f027ea.svg"
                    alt="logo"
                    className="max-w-full"
                  />
                </Link>
              </div>

              {/* route */}

              <ul className="route-wrap">{routeItems}</ul>
            </div>
          </div>
        </div>
        {/* -----------------END OF OFF CANVAS SIDEBAR ROUTE HANDLER--------------------- */}

        {/* -------------------------Start hidden uploader file--------------------- */}
        <div
          className={`hidden-uploader-sidebar ${
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
          <div className="">
            <div className="">
              <NAVBAR_CONTEXT.Provider value={navbarInfo}>
                <Navbar />
              </NAVBAR_CONTEXT.Provider>
            </div>
          </div>
          <div className="placeholder-outlet h-screen bg-[#ECEBE5]">
            <div className="freepik-container  ">
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

// import React, { createContext, useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Navbar from "../components/share/manu/Navbar";
// import "./DashboardLayout.css";

// export const NAVBAR_CONTEXT = createContext();

// const DashboardLayout = () => {
//   // const [sidebar, setSidebar] = useState("");

//   // data toggle with navbar connection here
//   const [sidebarToggle, setSidebarToggle] = useState(false);
//   const handleSidebar = () => {
//     setSidebarToggle(!sidebarToggle);
//   };
//   const navbarInfo = { handleSidebar };

//   // sidebar breaking point class add
//   const [isSmallScreen, setIsSmallScreen] = useState(0);
//   useEffect(() => {
//     function handleResize() {
//       setIsSmallScreen(window.innerWidth > 1000);
//     }
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const dashboardSidebar = document.querySelector(".dashboard-sidebar");
//     if (isSmallScreen) {
//       dashboardSidebar.classList.remove("add-sidebar");
//     }
//     console.log(dashboardSidebar);
//   }, [isSmallScreen]);

//   return (
//     <div className="lg:flex">
//       {/* side bar/left bar */}

//       {/* {isSmallScreen ? <h1>Hello world!</h1> : <h1>Sorry</h1>} */}

//       <div
//         className={`bg-neutral w-full lg:max-w-[30%] dashboard-sidebar  ${
//           sidebarToggle ? "block add-sidebar" : "hidden lg:block"
//         } ${isSmallScreen ? "remove-sidebar-position" : ""} `}
//       >
//         <div className="freepik-container">
//           <div className="max-w-[180px] py-7">
//             <Link to="/">
//               <img
//                 src="https://static-contributor-fp.cdnpk.net/assets/e418cfe53773617e237f15fb02f027ea.svg"
//                 alt="logo"
//                 className="max-w-full"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* right bar */}
//       <div className="bg-gray-600 w-full lg:max-w-[70%]">
//         <div className="">
//           <div className="freepik-container">
//             <NAVBAR_CONTEXT.Provider value={navbarInfo}>
//               <Navbar />
//             </NAVBAR_CONTEXT.Provider>
//           </div>
//         </div>
//         <div className="">
//           <div className="freepik-container">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
