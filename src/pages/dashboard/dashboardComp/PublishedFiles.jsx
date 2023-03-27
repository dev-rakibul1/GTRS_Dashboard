import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { mostDownload, PublishedFilesData } from "../../../AllData";

import "../Dashboard.css";

const PublishedFiles = () => {
  return (
    <div className="mt-4">
      <div className="grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className=" border rounded-xl p-4">
          <div className=" flex justify-between mb-3">
            <p>Published files</p>
            <button className="text-primary flex items-center font-bold gap-2">
              <span>All data</span>
              <BsArrowRight className="text-xl" />
            </button>
          </div>

          {/* {/ table  /} */}
          <div className="overflow-x-auto">
            <table className=" w-full overflow-hidden">
              {/* {/ head /} */}
              <thead className="">
                <tr className="p-2">
                  <td className="rounded-tl-md px-2">Preview</td>
                  <td>
                    <div className="flex gap-10">
                      <span>Last Downloads</span>
                      <span></span>
                    </div>
                  </td>
                  <td className="rounded-tr-md">
                    <div className="flex gap-10">
                      <span>Like</span>
                      <span></span>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {/* {/ row  /} */}

                {PublishedFilesData.map((file) => (
                  <tr>
                    <td className="p-4">
                      <div className="relative cursor-pointer MainImg ease-in duration-700">
                        {/* {/ image /} */}

                        <div className="relative inline-block">
                          <img
                            className="max-w-full w-[100px] h-[100px] "
                            src={file?.img}
                            alt=""
                          />
                          <div className="absolute bottom-0 right-0 p-1  ">
                            <BiLinkExternal />
                          </div>
                        </div>

                        {/* {/ tool tip img /} */}
                        <div className="tullTip p-3 hidden w-[210px] h-[210px] absolute right-[-151px] top-[-55px] ">
                          <img className="max-w-full" src={file?.img} alt="" />
                          <div className="absolute top-0 right-[100%] h-full flex items-center">
                            <div className="ToolIcone "></div>
                          </div>
                        </div>

                        {/* {/ king icone /} */}
                        <div className=" max-w-full absolute top-0 left-0 w-7 h-7 bg-[rgba(8,25,43,.8)] flex justify-center items-center rounded-md">
                          <img
                            className=""
                            src="https://contributor.freepik.com/media/img/crown.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=" border rounded-xl p-4">
          <div className=" flex justify-between mb-3">
            <p>Most downloaded in last month</p>
          </div>

          {/* {/ table  /} */}
          <div className="overflow-x-auto">
            <table className=" w-full overflow-hidden">
              {/* {/ head /} */}
              <thead className="bg-[#F2F5F7]">
                <tr className="p-2">
                  <td className="rounded-tl-md px-2">Author</td>
                  <td>
                    <div className="flex gap-10">
                      <span>Preview</span>
                      <span></span>
                    </div>
                  </td>
                  <td className="rounded-tr-md">
                    <div className="flex gap-10">
                      <span>Downloads</span>
                      <span></span>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {/* {/ row  /} */}

                {mostDownload.map((file) => (
                  <tr>
                    <td className="relative UserAvator">
                      {/* {/ user name tool tip /} */}
                      <div className="absolute hidden userName  h-full items-center right-[-60px] top-0">
                        <p className="bg-white p-2 py-1 rounded-md shadow-xl z-50 ">
                          user4545454
                        </p>
                        <div className="absolute h-full flex items-center right-[100%] top-0">
                          <div className="userTool"></div>
                        </div>
                      </div>
                      <div className="avatar mx-2 relative">
                        <div className="w-14 rounded-full overflow-visible  ">
                          <img src={file?.Athor} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="relative cursor-pointer MainImg ease-in duration-700">
                        {/* {/ image /} */}

                        <div className="relative inline-block">
                          <img
                            className="max-w-full w-[100px] h-[100px] "
                            src={file?.img}
                            alt=""
                          />
                          <div className="absolute bottom-0 right-0 p-1  text-white ">
                            <BiLinkExternal />
                          </div>
                        </div>

                        {/* {/ tool tip img /} */}
                        <div className="tullTip bg-white p-3 hidden w-[210px] h-[210px] absolute right-[-151px] top-[-55px] ">
                          <img className="max-w-full" src={file?.img} alt="" />
                          <div className="absolute top-0 right-[100%] h-full flex items-center">
                            <div className="ToolIcone "></div>
                          </div>
                        </div>

                        {/* {/ king icone /} */}
                        <div className=" max-w-full absolute top-0 left-0 w-7 h-7 bg-[rgba(8,25,43,.8)] flex justify-center items-center rounded-md">
                          <img
                            className=""
                            src="https://contributor.freepik.com/media/img/crown.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>

                    <td>{file?.download}</td>
                  </tr>
                ))}

                {/* {/ row  /} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedFiles;
