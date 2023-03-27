import React from "react";
import { Link } from "react-router-dom";

const EmailLogin = () => {
  return (
    <div className="h-screen">
      <div className="md:flex block ">
        <div className=" md:w-[75%] w-full h-screen bg-[url('https://static-gcp.freepikcompany.com/web-app/media/freepik-2-2000.webp')]"></div>
        <div className="md:w-[480px] w-full h-screen ">
          <div className="flex flex-col items-center justify-center h-full relative">
            <Link to="/">
              {" "}
              <img
                className="w-32 mb-24"
                src="https://id.freepikcompany.com/v2/assets/freepik.7e5a42f2.svg"
                alt=""
              />
            </Link>
            <h2 className="text-2xl font-semibold mb-10">Log in</h2>
            <div className="w-80 leading-5	 font-semibold flex items-center mb-1">
              <label htmlFor="">Email</label>
            </div>

            <input className="w-80 leading-5 focus:outline-primary	 font-semibold flex items-center gap-5 px-10 py-4 mb-2 border"></input>

            <div className="w-80 leading-5	 font-semibold flex items-center mb-1">
              <label htmlFor="">Password</label>
            </div>

            <input className="w-80 leading-5 focus:outline-primary	 font-semibold flex items-center gap-5 px-10 py-4 mb-2 border"></input>

            <div className="w-80 leading-5	 font-semibold flex items-center ">
              <label className="label cursor-pointer items-center gap-1">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">Stay logged in</span>
              </label>
            </div>

            <button className="w-80 leading-5 rounded-md text-white bg-primary font-semibold flex items-center justify-center gap-5 px-10 py-4 mb-10 border">
              <span> Log In</span>
            </button>

            <p>
              Don’t you have an account?{" "}
              <Link
                to="/authenticate-layout/login"
                className="text-primary font-semibold"
              >
                Sign up
              </Link>
            </p>
            <div className="absolute w-full bottom-0 left-0 flex justify-center mb-10 items-center">
              <span className="">By</span>
              <img
                className="w-[182px]"
                src="https://id.freepikcompany.com/v2/assets/freepik-company-gray.721fdfe0.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
