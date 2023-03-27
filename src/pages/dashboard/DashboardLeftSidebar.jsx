import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import "./Dashboard.css";

const DashboardLeftSidebar = () => {
  return (
    <div>
      <div className="left-sidebar">
        {/*festivities-calendar  */}
        <div className="festivities-calendar p-4 border mt-7 rounded-lg grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
          <div>
            <h6 className="font-bold">Festivities calendar</h6>
            <div className="mt-4">
              <h6 className="text-sm">The new Festivities calendar is out.</h6>
              <h6 className="text-sm mt-2">
                Get your dose of creativity with Freepik
              </h6>
            </div>

            <div className="sm:flex items-center justify-between">
              <button className="border-2 rounded-lg py-2 px-5 border-gray-400 text-sm text-gray-500 flex items-center justify-between">
                <HiOutlineArrowTopRightOnSquare className="text-xl mr-2" /> See
                calender
              </button>
              <img
                src="https://contributor.freepik.com/media/img/calendar.webp"
                alt="calender-images"
              />
            </div>
          </div>

          {/* Next festivities:*/}
          <div className="next-festivities">
            <h5 className="font-bold">Next festivities:</h5>

            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              {/* next festivities box 01 */}
              <div className="next-festivities-box flex items-center justify-start rounded-xl overflow-hidden border hover:border-gray-400 cursor-pointer mt-4">
                <div className="w-full lg:max-w-[40%]">
                  <img
                    src="https://img.freepik.com/free-photo/people-table-enjoying-feast-first-day-passover-seder_23-2150247755.jpg"
                    alt="festivities"
                    className="max-w-full"
                  />
                </div>
                <div className="w-full lg:max-w-[60%] ml-4 ">
                  <p className="font-bold text-sm">Passover</p>
                  <div className="flex items-center justify-between mt-5 ">
                    <div className="next-article-search flex items-center text-gray-400">
                      <span>
                        <IoIosSearch />
                      </span>
                      <span className="text-sm ml-1">xx</span>
                    </div>
                    <div className="mx-4 hiOutlineArrow">
                      <HiOutlineArrowTopRightOnSquare />
                    </div>
                  </div>
                </div>
              </div>

              {/* next festivities box 02 */}
              <div className="next-festivities-box flex items-center justify-start rounded-xl overflow-hidden border hover:border-gray-400 cursor-pointer mt-4">
                <div className="w-full lg:max-w-[40%]">
                  <img
                    src="https://img.freepik.com/free-photo/covid-still-life-with-vaccine_23-2149079585.jpg"
                    alt="festivities"
                    className="max-w-full"
                  />
                </div>
                <div className="w-full lg:max-w-[60%] ml-4 ">
                  <p className="font-bold text-sm">World Health Day</p>
                  <div className="flex items-center justify-between mt-5 ">
                    <div className="next-article-search flex items-center text-gray-400">
                      <span>
                        <IoIosSearch />
                      </span>
                      <span className="text-sm ml-1">281.5k</span>
                    </div>
                    <div className="mx-4 hiOutlineArrow">
                      <HiOutlineArrowTopRightOnSquare />
                    </div>
                  </div>
                </div>
              </div>

              {/* next festivities box 03 */}
              <div className="next-festivities-box flex items-center justify-start rounded-xl overflow-hidden border hover:border-gray-400 cursor-pointer mt-4">
                <div className="w-full lg:max-w-[40%]">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-little-girl-with-bunny-ears-easter-eggs_169016-3323.jpg"
                    alt="festivities"
                    className="max-w-full"
                  />
                </div>
                <div className="w-full lg:max-w-[60%] ml-4 ">
                  <p className="font-bold text-sm">Easter</p>
                  <div className="flex items-center justify-between mt-5 ">
                    <div className="next-article-search flex items-center text-gray-400">
                      <span>
                        <IoIosSearch />
                      </span>
                      <span className="text-sm ml-1">2.1M</span>
                    </div>
                    <div className="mx-4 hiOutlineArrow">
                      <HiOutlineArrowTopRightOnSquare />
                    </div>
                  </div>
                </div>
              </div>

              {/* next festivities box 04 */}
              <div className="next-festivities-box flex items-center justify-start rounded-xl overflow-hidden border hover:border-gray-400 cursor-pointer mt-4">
                <div className="w-full lg:max-w-[40%]">
                  <img
                    src="https://img.freepik.com/free-photo/close-up-green-leaf-nerves_23-2148791141.jpg"
                    alt="festivities"
                    className="max-w-full"
                  />
                </div>
                <div className="w-full lg:max-w-[60%] ml-4 ">
                  <p className="font-bold text-sm">Earth day</p>
                  <div className="flex items-center justify-between mt-5 ">
                    <div className="next-article-search flex items-center text-gray-400">
                      <span>
                        <IoIosSearch />
                      </span>
                      <span className="text-sm ml-1">1.1M</span>
                    </div>
                    <div className="mx-4 hiOutlineArrow">
                      <HiOutlineArrowTopRightOnSquare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest trends */}
        <div className="latest-trends p-4">
          <h5 className="font-bold">Latest trends:</h5>

          <div className="latest-trends-box mt-7 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
            {/* single tends box items  01*/}
            <div className="latest-trends-single-items cursor-pointer border  p-2 rounded-xl">
              <div className="latest-trends-single-items-image">
                <img
                  src="https://mediablog.cdnpk.net/sites/7/2023/03/cover-EN.gif"
                  alt="trends"
                  className="rounded-xl overflow-hidden max-w-full"
                />
              </div>
              <article className="mt-4 px-4">
                <p className="font-bold text-sm">
                  Tag your assets with the new AI tool
                </p>
                <small className="mt-7 text-gray-400">2023.03.22</small>
              </article>
            </div>

            {/* single tends box items  02*/}
            <div className="latest-trends-single-items cursor-pointer border  p-2 rounded-xl">
              <div className="latest-trends-single-items-image">
                <img
                  src="https://mediablog.cdnpk.net/sites/7/2023/03/cover-blog-1.png"
                  alt="trends"
                  className="rounded-xl overflow-hidden max-w-full"
                />
              </div>
              <article className="mt-4 px-4">
                <p className="font-bold text-sm">
                  Shiny icons for shiny people
                </p>
                <small className="mt-7 text-gray-400">2023.03.14</small>
              </article>
            </div>

            <div className="latest-trends-single-items cursor-pointer border p-2 rounded-xl flex items-center justify-center">
              <h5 className="flex items-center justify-start text-primary font-bold">
                See more article <HiArrowNarrowRight className="ml-3" />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeftSidebar;
