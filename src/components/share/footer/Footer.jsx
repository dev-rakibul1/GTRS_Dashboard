import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#F8FAFB]  px-[15px] py-4">
      {/* footer section */}

      {/* copyright */}
      <div className="copyright md:flex items-center justify-between">
        <div className="md:flex items-center justify-start">
          <img
            src="https://static-contributor-fp.cdnpk.net/assets/02ec3a17f5e64ae55fabaaacb8ed4ac1.svg"
            alt=""
          />
          <span className="py-2 md:py-0 md:ml-6">
            Copyright 2022-2023 Innovate Solution | All Rights Reserved
          </span>
        </div>
        <button className="flex items-center justify-start border-2 border-gray-400 py-2 px-5 rounded-md">
          <BsGlobeAmericas className=" mr-2" /> EN
        </button>
      </div>

      {/* footer navbar */}
      {/* <div className="footer-navbar sm:flex items-center justify-between mt-7">
        <span className="text-sm">Freepik company projects</span>
        <ul className="flex items-center justify-between">
          <li className="p-2 hover:text-[#000]  text-sm">
            <Link to="/">Freepik</Link>
          </li>
          <li className="p-2 hover:text-[#000]  text-sm">
            <Link to="/"> Flaticon</Link>
          </li>
          <li className="p-2 hover:text-[#000]  text-sm">
            <Link to="/"> Slidesgo</Link>
          </li>
          <li className="p-2 hover:text-[#000]  text-sm">
            <Link to="/"> Videvo</Link>
          </li>
          <li className="p-2 hover:text-[#000]  text-sm">
            <Link to="/"> Wepik</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Footer;
