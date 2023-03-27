import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F8FAFB] py-12">
      {/* footer section */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 ">
        {/* article 01 */}
        <article>
          <h5 className="text-sm font-bold uppercase ">CONTRIBUTOR CONTENT</h5>
          <ul>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Become ambassador</Link>
            </li>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Contributor terms & conditions</Link>
            </li>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">About us</Link>
            </li>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </article>

        {/* article 02 */}
        <article>
          <h5 className="text-sm font-bold uppercase ">LEGAL</h5>
          <ul>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Cookies Policy</Link>
            </li>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Referral Program Terms & Condition</Link>
            </li>
          </ul>
        </article>

        {/* article 03 */}
        <article>
          <h5 className="text-sm font-bold uppercase ">HELP</h5>
          <ul>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Support</Link>
            </li>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Contact</Link>
            </li>
            <h5 className="text-sm font-bold uppercase ">Learn</h5>
            <li className="text-sm font-normal text-gray-600 mt-2">
              <Link to="/">Content submission Requirements</Link>
            </li>
          </ul>
        </article>

        {/* article 04 */}
        <article>
          <h5 className="text-sm font-bold uppercase ">FOLLOW US</h5>
          <img
            src="https://i.ibb.co/mzBX9QZ/pngwing-com.png"
            alt="instragram"
            className="max-w-[40px] cursor-pointer"
          />
        </article>
      </div>

      {/* copyright */}
      <div className="copyright md:flex items-center justify-between mt-12">
        <div className="md:flex items-center justify-start">
          <img
            src="https://static-contributor-fp.cdnpk.net/assets/02ec3a17f5e64ae55fabaaacb8ed4ac1.svg"
            alt=""
          />
          <span className="py-2 md:py-0 md:ml-6">
            Copyright 2010-2023 Freepik Company S.L. © their respective owners.{" "}
          </span>
        </div>
        <button className="flex items-center justify-start border-2 border-gray-400 py-2 px-5 rounded-md">
          <BsGlobeAmericas className=" mr-2" /> EN
        </button>
      </div>

      {/* footer navbar */}
      <div className="footer-navbar sm:flex items-center justify-between mt-7">
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
      </div>
    </div>
  );
};

export default Footer;
