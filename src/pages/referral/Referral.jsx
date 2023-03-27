import React from "react";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCopy } from "react-icons/rx";
import { Link } from "react-router-dom";

const Referral = () => {
  return (
    <div className="mx-5">
      {/* Contributor Referral */}
      <div className="sm:flex items-center justify-between">
        <h1 className="text-[26px] font-bold mb-2">Contributor Referral</h1>
        <button className="flex items-center justify-start">
          <strong>Filter</strong>
          <span className="flex items-center justify-start border border-gray-300 py-1 px-2 ml-3">
            All <IoMdArrowDropdown />
          </span>
        </button>
      </div>

      {/* terms and conditions */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12  mt-5">
        <div className="">
          <h2 className="text-2xl mb-2">
            Refer a friend and
            <span className="font-bold">earn 10% commission</span> on every
            referral
          </h2>
          <p>
            *From April 2021 onwards, Referral Program is subject to new{" "}
            <Link className="text-primary font-semibold">
              terms and conditions.
            </Link>
          </p>
        </div>

        <div className="">
          <div className="text-center border p-4 rounded-sm border-gray-300">
            <h4 className="text-3xl font-bold text-primary">0 €</h4>
            <h5 className="uppercase font-md text-primary mt-4">EARNINGS*</h5>
          </div>
          <p className="mt-4">
            *The Referral Program’s earnings will be included in your monthly
            invoice.
          </p>
        </div>
      </div>

      {/* How does it work */}

      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 p-4 py-7 mt-7">
        <div className="">
          {/* email */}
          <div className=" mt-10">
            <label className="font-semibold " htmlFor="">
              Invite via email
            </label>
            <div className="flex mt-1">
              <input
                className="w-full input input-bordered focus:outline-none"
                type="text"
                placeholder="example@exaiple.com"
              />
              <button className="bg-primary w-[200px] text-white ml-[-10px] rounded-r-md ">
                Send invitation
              </button>
            </div>
          </div>

          {/* Share the link*/}
          <div className=" mt-10">
            <label className="font-semibold " htmlFor="">
              Share the link
            </label>
            <div className="lg:flex w-full justify-center ali">
              <div className="md:flex items-center justify-start w-full relative">
                <input
                  className="w-full input input-bordered focus:outline-none"
                  type="text"
                  placeholder="https://contributor.freepik.com?utm_campaign=bstudiobd&utm_medium=referral-content&utm_source=referral
                  "
                />
                <button
                  className="border-primary flex items-center justify-center border-2 bg-white text-primary  rounded-r-md    max-w-full absolute top-0 right-0"
                  style={{ marginLeft: "-20px", padding: "10px 5px" }}
                >
                  <RxCopy className="mr-2" />
                  <span> Copy Link</span>
                </button>
              </div>
              <div className="flex md:mt-0 mt-3 ">
                <button className=" w-12 h-12 flex items-center justify-center border border-gray-500 rounded-sm  ml-2">
                  <BsFacebook className="text-2xl text-primary" />
                </button>
                <button className=" w-12 h-12 flex items-center justify-center border border-gray-500 rounded-sm  ml-2">
                  <BsWhatsapp className="text-2xl text-[#59DC8B]" />
                </button>
                <button className=" w-12 h-12 flex items-center justify-center border border-gray-500 rounded-sm ml-2">
                  <BsLinkedin className="text-2xl text-[#0072b1]" />
                </button>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" ">
            <div className=" mt-10">
              <h2 className="text-lg font-normal">How does it work?</h2>

              <div className=" sm:flex gap-4 mt-4">
                <img
                  className="max-w-[80px]"
                  src="https://contributor.freepik.com/media/img/referral/megaphone.svg"
                  alt=""
                />
                <div className="">
                  <h5 className="font-bold my-2">Share</h5>
                  <p className="font-normal text-[16px] text-gray-800 leading-6">
                    Your friend has to{" "}
                    <span className="font-semibold">register</span> through your
                    referral link and get{" "}
                    <span className="font-semibold">content published.</span>
                  </p>
                </div>
              </div>

              <div className=" sm:flex gap-4 mt-4">
                <img
                  className="max-w-[80px]"
                  src="https://contributor.freepik.com/media/img/referral/diamond.svg"
                  alt=""
                />
                <div className="">
                  <h5 className="font-bold my-2">Earn</h5>
                  <p className="font-normal text-[16px] text-gray-800 leading-6">
                    Receive 10% commission from the earnings generated by each
                    referral during a year.
                  </p>
                </div>
              </div>

              <div className=" sm:flex gap-4 mt-4">
                <img
                  className="max-w-[80px]"
                  src="https://contributor.freepik.com/media/img/referral/graphics.svg"
                  alt=""
                />
                <div className="">
                  <div className="">
                    <h5 className="font-bold my-2">Grow</h5>
                    <p className="font-normal text-[16px] text-gray-800 leading-6">
                      The more friends you have, the more money you earn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Do you have any questions? Check our FAQ */}
            <div className="py-7">
              <p className="text-gray-700 text-[16px]">
                Do you have any questions? Check our{" "}
                <Link to="/" className="text-primary">
                  FAQ
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* No referrals to show*/}
        <div className="referral-show py-7  border border-gray-300 rounded-sm flex items-center justify-center p-2">
          <div className="flex items-center justify-center flex-col">
            <img
              src="https://static-contributor-fp.cdnpk.net/assets/eff9626468a6ec890d4c2c4a2196a776.svg"
              alt=""
            />
            <h5 className="my-4 text-xl text-normal text-gray-800">
              No referrals to show
            </h5>
            <p className="text-gray-800 text-[16px] font-normal leading-6">
              As soon as your referred friends content is published, they will
              appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
