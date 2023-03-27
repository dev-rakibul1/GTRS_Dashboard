import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const SingUp = () => {
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
            <h2 className="text-2xl font-semibold mb-10">Create an account</h2>

            <button className="w-80 leading-5 rounded-md	 font-semibold flex items-center gap-5 px-10 py-4 mb-2 border">
              <FcGoogle className="text-2xl" />
              <span> Continue With Google</span>
            </button>
            <button className="w-80 leading-5 rounded-md	 font-semibold flex items-center gap-5 px-10 py-4 mb-2 border">
              <BsFacebook className="text-2xl text-[#3b5998]" />
              <span> Continue With Facebook</span>
            </button>
            <Link
              to="/authenticate-layout/email-login"
              className="w-80 leading-5 rounded-md	 font-semibold flex items-center gap-5 px-10 py-4 mb-10 border"
            >
              <HiOutlineMail className="text-2xl " />
              <span> Continue With Email</span>
            </Link>

            <div className="form-control sm:px-16 px-4 mb-7">
              <label className="label cursor-pointer items-start gap-1">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">
                  I do not wish to receive news and promotions from Freepik
                  Company by email.
                </span>
              </label>
            </div>
            <p className="sm:px-16 px-4 mb-7 text-center">
              By continuing, you agree to Freepik Company’s Terms of Use and
              Privacy Policy.
            </p>

            {/* {/ {2}/} */}

            <p>
              Don’t you have an account?{" "}
              <Link
                to="/authenticate-layout/login"
                className="text-primary font-semibold"
              >
                Log In
              </Link>
            </p>
            <div className="absolute w-full bottom-0 left-0 flex justify-center mb-7 items-center ">
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

export default SingUp;
