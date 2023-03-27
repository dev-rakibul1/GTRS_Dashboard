import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegChartBar, FaRegImages } from "react-icons/fa";
import {
  HiArrowNarrowRight,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineFire,
} from "react-icons/hi";
import { RxMinus } from "react-icons/rx";
import { TbHeart } from "react-icons/tb";
import PublishedFiles from "./dashboardComp/PublishedFiles";
import DashboardSlider from "./DashboardSlider";

const DashboardContentSidebar = () => {
  const [changeArrow, setChangeArrow] = useState(false);
  const handleChangeArrow = () => {
    setChangeArrow(!changeArrow);
  };

  return (
    <>
      <div className="right-content">
        {/* Dashboard slider */}
        <div className="">
          <DashboardSlider />
        </div>

        <div>
          {/* overview */}
          <div className="performance-overview py-4">
            <div className="md:flex items-center justify-between">
              <p className="font-bold text-[16px]">Performance overview</p>
              <p className="flex items-center justify-start text-primary text-[16px] cursor-pointer  mt-4 lg:mt-0">
                All data
                <span className="ml-2">
                  <HiArrowNarrowRight />
                </span>
              </p>
            </div>
          </div>

          {/* overview box */}
          <div className="pt-7 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
            {/* box 01 */}
            <div className="overview-box border  p-4 rounded-lg">
              <p className="flex items-center justify-between">
                Estimated earnings{" "}
                <CiCircleInfo className="ml-3 text-xl text-primary" />
              </p>
              <h4 className="font-bold text-xl py-2">17.24 €</h4>
              <div className="flex items-center justify-between">
                <div>
                  <small>Last Month</small>
                  <h6>3€</h6>
                </div>
                <div>
                  <span>
                    <FaRegChartBar className="text-primary" />
                  </span>
                </div>
              </div>
            </div>

            {/* box 01 */}
            <div className="overview-box border  p-4 rounded-lg">
              <p className="flex items-center justify-between">Downloads</p>
              <h4 className="font-bold text-xl py-2">218</h4>
              <div className="flex items-center justify-between">
                <div>
                  <small>Last Month</small>
                  <h6>42</h6>
                </div>
                <div>
                  <span>
                    <BsDownload className="text-primary" />
                  </span>
                </div>
              </div>
            </div>

            {/* box 01 */}
            <div className="overview-box border  p-4 rounded-lg">
              <p className="flex items-center justify-between">Likes</p>
              <h4 className="font-bold text-xl py-2">13</h4>
              <div className="flex items-center justify-between">
                <div>
                  <small>Last Month</small>
                  <h6>
                    <RxMinus />
                  </h6>
                </div>
                <div>
                  <span>
                    <TbHeart className=" text-red-600" />
                  </span>
                </div>
              </div>
            </div>

            {/* box 01 */}
            <div className="overview-box border  p-4 rounded-lg">
              <p className="flex items-center justify-between">Files</p>
              <h4 className="font-bold text-xl py-2">2,649</h4>
              <div className="flex items-center justify-between">
                <div>
                  <small>Last Month</small>
                  <h6>475</h6>
                </div>
                <div>
                  <span>
                    <FaRegImages className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Estimated earnings */}
        <div>
          <p className="text-sm py-7 leading-7 ">
            <strong className="text-md inline">
              <CiCircleInfo className="inline leading-3 text-lg" /> Estimated
              earnings:
            </strong>{" "}
            This amount is an estimate based on your earnings from last month.
            Actual earnings will be displayed at the end of the month.
          </p>
        </div>

        {/* Published files */}
        <div className="">
          <PublishedFiles />
        </div>

        {/* Content suggestions */}
        <div className="content-suggestions border p-4 rounded-md">
          <h5 className="font-normal text-gray-500">
            Check out our content suggestions and get inspiration on what to
            upload next.
          </h5>
          <button className="px-7 py-2 border-2 border-primary flex items-center justify-start text-primary mt-7">
            <HiOutlineFire className="mr-2 text-xl" /> Search trends
          </button>

          <div className="suggestions-button-group flex items-center justify-start flex-wrap mt-7">
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              World Press Freedom Day
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Buddha Purnima
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              World Laughter Day
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Día de la madre
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Class of 2023
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Graduation
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Día del maestro
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Revolución de mayo
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Africa day
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Pentecost
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Memorial day
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              World hypertension day
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              No tobacco day
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              LGBT Pride
            </span>
            <span className="text-[14px] text-gray-500 cursor-pointer rounded-sm border border-gray-500 px-5  py-1 mr-2 my-2">
              Anti terrorism day
            </span>
          </div>
        </div>

        {/* Hall of fame*/}
        <div className="hall-of-fame mt-7 border p-4 rounded-md relative">
          <h5 className="">Hall of fame</h5>

          <div className="">
            <div className="flex items-center justify-between">
              <p className="text-sm">
                These artists are on the top of the ranking
              </p>
              <button
                className="p-2 bg-primary text-white text-2xl rounded-sm"
                onClick={handleChangeArrow}
              >
                <span>
                  {changeArrow ? <HiChevronRight /> : <HiChevronLeft />}
                </span>
              </button>
            </div>

            {/* content */}
            <div className="mt-7 overflow-x-scroll max-w-[710px] max-auto">
              <div
                className={` flex items-center ${
                  changeArrow ? "slide-far" : "slide-near"
                }`}
              >
                <div className="slide-right-content mr-7">
                  {/* slide content part 02 */}
                  <div className="flex items-center justify-between gap-7 ">
                    {/* content 01 */}
                    <div className="pt-7 max-w-[250px]  border p-2 rounded-md relative">
                      <span className="absolute right-0 top-0 text-warning p-1">
                        #1
                      </span>
                      <div className="hall-image flex items-center justify-start">
                        <img
                          src="https://avatar.freepik.com/2199844-210728105124.jpg"
                          alt=""
                          className="w-[60px] rounded-full"
                        />
                        <span className="text-primary ml-4">
                          @ rawpixel.com
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* article 01 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Resources</p>
                          <h5 className="font-light">175k</h5>
                        </article>

                        {/* article 02 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Downloads</p>
                          <h5 className="font-light">237m</h5>
                        </article>

                        {/* article 01 */}
                        <article className="">
                          <p className="text-gray-400">Followers</p>
                          <h5 className="font-light">121k</h5>
                        </article>
                      </div>
                    </div>

                    {/* content 02 */}
                    <div className="pt-7 max-w-[250px]  border p-2 rounded-md relative">
                      <span className="absolute right-0 top-0 text-warning p-1">
                        #2
                      </span>
                      <div className="hall-image flex items-center justify-start">
                        <img
                          src="https://avatar.cdnpk.net/737579.jpg"
                          alt=""
                          className="w-[60px] rounded-full"
                        />
                        <span className="text-primary ml-4">@ starline</span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* article 01 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Resources</p>
                          <h5 className="font-light">42k</h5>
                        </article>

                        {/* article 02 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Downloads</p>
                          <h5 className="font-light">252m</h5>
                        </article>

                        {/* article 01 */}
                        <article className="">
                          <p className="text-gray-400">Followers</p>
                          <h5 className="font-light">131k </h5>
                        </article>
                      </div>
                    </div>

                    {/* content 03 */}
                    <div className="pt-7 max-w-[250px]  border p-2 rounded-md relative">
                      <span className="absolute right-0 top-0 text-warning p-1">
                        #3
                      </span>
                      <div className="hall-image flex items-center justify-start">
                        <img
                          src="https://avatar.cdnpk.net/1684710.jpg"
                          alt=""
                          className="w-[60px] rounded-full"
                        />
                        <span className="text-primary ml-4">@ brgfx</span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* article 01 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Resources</p>
                          <h5 className="font-light">175k</h5>
                        </article>

                        {/* article 02 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Downloads</p>
                          <h5 className="font-light">237m</h5>
                        </article>

                        {/* article 01 */}
                        <article className="">
                          <p className="text-gray-400">Followers</p>
                          <h5 className="font-light">121k</h5>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>

                {/* slide content part 01 */}
                <div className="slide-left-content">
                  <div className={`flex items-center justify-between gap-4 `}>
                    {/* content 01 */}
                    <div className="pt-7 max-w-[250px]  border p-2 rounded-md relative">
                      <span className="absolute right-0 top-0 text-warning p-1">
                        #4
                      </span>
                      <div className="hall-image flex items-center justify-start">
                        <img
                          src="https://avatar.freepik.com/13115374-220407115921.jpg"
                          alt=""
                          className="w-[60px] rounded-full"
                        />
                        <span className="text-primary ml-4">@ upklyak</span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* article 01 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Resources</p>
                          <h5 className="font-light">19k</h5>
                        </article>

                        {/* article 02 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Downloads</p>
                          <h5 className="font-light">40m</h5>
                        </article>

                        {/* article 01 */}
                        <article className="">
                          <p className="text-gray-400">Followers</p>
                          <h5 className="font-light">60k</h5>
                        </article>
                      </div>
                    </div>

                    {/* content 02 */}
                    <div className="pt-7 max-w-[250px]  border p-2 rounded-md relative">
                      <span className="absolute right-0 top-0 text-warning p-1">
                        #5
                      </span>
                      <div className="hall-image flex items-center justify-start">
                        <img
                          src="https://avatar.cdnpk.net/14787228-220806032820.jpg"
                          alt=""
                          className="w-[60px] rounded-full"
                        />
                        <span className="text-primary ml-4">@ Vectonauta</span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* article 01 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Resources</p>
                          <h5 className="font-light">2k</h5>
                        </article>

                        {/* article 02 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Downloads</p>
                          <h5 className="font-light">20m</h5>
                        </article>

                        {/* article 01 */}
                        <article className="">
                          <p className="text-gray-400">Followers</p>
                          <h5 className="font-light">161k </h5>
                        </article>
                      </div>
                    </div>

                    {/* content 03 */}
                    <div className="pt-7 max-w-[250px]  border p-2 rounded-md relative">
                      <span className="absolute right-0 top-0 text-warning p-1">
                        #6
                      </span>
                      <div className="hall-image flex items-center justify-start">
                        <img
                          src="https://avatar.freepik.com/474714-220317102808.jpg"
                          alt=""
                          className="w-[60px] rounded-full"
                        />
                        <span className="text-primary ml-4">@ BiZkettE1</span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* article 01 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Resources</p>
                          <h5 className="font-light">4k</h5>
                        </article>

                        {/* article 02 */}
                        <article className="border-r border-gray-400 pr-2 mr-2">
                          <p className="text-gray-400">Downloads</p>
                          <h5 className="font-light">63m</h5>
                        </article>

                        {/* article 01 */}
                        <article className="">
                          <p className="text-gray-400">Followers</p>
                          <h5 className="font-light">35k</h5>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ranking button */}
            <div>
              <button className="py-2 px-7 bg-primary text-white rounded-sm mt-7">
                View ranking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContentSidebar;
