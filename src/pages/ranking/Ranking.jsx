import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiUserHeartLine } from "react-icons/ri";
import { TfiImage } from "react-icons/tfi";
import { rankingData } from "../../AllData";

const Ranking = () => {
  return (
    <div className="mt-7">
      <div className="ranking flex flex-wrap gap-7">
        {rankingData?.map((data, index) => (
          <div className="max-w-[250px] border p-2 rounded-md ">
            <div className="text-right">
              <span className="ranking-number">#{index + 1}</span>
            </div>

            <div className="ranking-user flex items-center justify-start ">
              <img
                src={`${data?.img}`}
                alt="ranking-user"
                className="max-w-[60px] rounded-full mr-2"
              />
              <h4 className="text-sm">{data?.name}</h4>
            </div>
            {/* article */}
            <article className="mt-7">
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 px-4">
                {/* flex items  01*/}
                <div className="flex items-center justify-center flex-col">
                  <span>
                    <TfiImage />
                  </span>
                  <span className="mt-4">{data.files}</span>
                </div>

                {/* flex items  01*/}
                <div className="flex items-center justify-center flex-col">
                  <span>
                    <MdOutlineFileDownload />
                  </span>
                  <span className="mt-4">{data.download}</span>
                </div>

                {/* flex items  01*/}
                <div className="flex items-center justify-center flex-col">
                  <span>
                    <RiUserHeartLine />
                  </span>
                  <span className="mt-4">{data.user}</span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="pagination flex items-center justify-center mt-7">
        <span>First</span>
        <div className="flex">
          <span className="w-11 h-11 bg-primary text-white m-2 flex items-center justify-center  cursor-pointer  rounded-md">
            <HiChevronLeft />
          </span>
          <span className="w-11 h-11 bg-primary text-white m-2 flex items-center justify-center  rounded-md">
            1
          </span>
          <span className="w-11 h-11 bg-primary text-white m-2 flex items-center justify-center  rounded-md">
            2
          </span>
          <span className="w-11 h-11 bg-primary text-white m-2 flex items-center justify-center  rounded-md">
            3
          </span>
          <span className="w-11 h-11 bg-primary text-white m-2 flex items-center justify-center cursor-pointer  rounded-md">
            <HiChevronRight />
          </span>
        </div>
        <span>Last</span>
      </div>
    </div>
  );
};

export default Ranking;
