import exportFromJSON from "export-from-json";
import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import { Link } from "react-router-dom";
import Spinner from "../../shared/Spinner";
import "./Dashboard.css";
const url = "https://gtrs.vercel.app/api/v1/form-data";
// const url = "https://gtrs.vercel.app/api/v1/form-data";

const DashboardContentSidebar = () => {
  const [contactUsData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = (page, search) => {
    // const pageUrl = `${url}?page=${page}`;
    const pageUrl = `${url}?page=${page}${
      search ? "&searchTerm=" + search : ""
    }`;
    console.log(contactUsData.data);

    fetch(pageUrl, {
      headers: {
        authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
        setCurrentPage(page);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  // Pagination calculation
  const totalUser = contactUsData?.meta?.total;
  const eachPageUser = contactUsData?.meta?.limit;
  const totalNumberOfPages = totalUser / eachPageUser;
  const totalCurrentPageCount = currentPage;
  const totalCurrentPage = eachPageUser * totalCurrentPageCount;

  const mathCeil = Math.ceil(totalNumberOfPages);

  let countPage = [];
  for (let page = 0; page < mathCeil; page++) {
    countPage.push(page);
  }

  console.log(countPage);

  const handleNextClick = () => {
    const nextPage = currentPage + 1;
    fetchData(nextPage);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      fetchData(prevPage);
    }
  };

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  // Search query
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData(1, searchQuery);
  };

  const handleExportMultipleFormUser = () => {
    const data = contactUsData?.data;

    // Set the filename and export type
    const fileName = "exported_data";
    const exportType = exportFromJSON.types.csv;

    // Export the data
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <>
      <div className="full-width-container ">
        <div className="w-full  mx-auto ">
          <div className="join join-vertical w-full">
            {loading ? (
              <div className="grid place-items-center min-h-screen">
                <Spinner />
              </div>
            ) : (
              <>
                <div className="sm:flex items-center justify-between py-4">
                  <h4 className="py-2 font-semibold text-lg text-pink-700">
                    Total entry :{" "}
                    {contactUsData?.meta?.total
                      ? contactUsData?.meta?.total
                      : 0}
                  </h4>

                  {/* Search */}
                  <div className="search w-full sm:flex items-center justify-between gap-4  sm:w-[60%]">
                    <form
                      className="flex items-center justify-between w-full relative overflow-hidden"
                      onSubmit={handleSearchSubmit}
                    >
                      <div className="overflow-hidden w-full">
                        <input
                          type="search"
                          placeholder="Search..."
                          name=""
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 border-slate-300"
                          id=""
                        />
                        <button className=" search-icons" type="submit">
                          <GrSearch className="text-xl" />
                        </button>
                      </div>
                    </form>

                    {/* sort */}
                    <form className="flex items-center sm:justify-between mt-3 sm:mt-0">
                      <label htmlFor="sortData">Sort: </label>
                      <select
                        name=""
                        id="sortData"
                        className="ml-4 outline-0 border p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 "
                      >
                        <option value="default">Default</option>
                        <option value="asc">Asc</option>
                        <option value="desc">Desc</option>
                      </select>
                    </form>

                    {/* export data */}
                    <div className="ftp ">
                      <button
                        className=" ml-2 border-2 border-primary text-primary px-4 py-[7px] cursor-pointer rounded-[4px] text-sm w-full flex items-center justify-between"
                        onClick={handleExportMultipleFormUser}
                      >
                        Export
                        <RxDownload />
                      </button>
                    </div>
                  </div>
                </div>
                {!contactUsData?.data?.length ? (
                  <div className="flex items-center justify-center h-56 mt-16">
                    <h2 className="text-gray-400 text-4xl">
                      User entry not available.
                    </h2>
                  </div>
                ) : (
                  <>
                    <div className="p-3  border-gray-300 mt-3 w-full justify-between items-center font-bold dashboard-user-entry">
                      <div className="hidden md:block ">Sl</div>
                      <div className="">Name</div>
                      <div className="hidden md:block ">Email</div>
                      <div className="hidden sm:block">Phone</div>
                      <div className="">Country</div>
                      <div className=" hidden md:block ">Ip Address</div>
                      <div className="">More</div>
                    </div>
                    {contactUsData?.data?.map((user, index) => (
                      <>
                        {/* Table Header */}

                        <div
                          key={user?.id}
                          className="p-3 border-b border-gray-300 border  mt-3 w-full items-center bg-white dashboard-user-entry"
                        >
                          <div className=" text-gray-600 px-2 mr-4 hidden md:block flex-grow-0 w-5 ">
                            {index + 1}
                          </div>
                          <div className="w-full ">
                            {user?.clientRegisteredName}
                          </div>
                          <div className=" hidden md:block ">
                            {user?.emailAddress}
                          </div>
                          <div className="  hidden sm:block ">
                            {user?.officePhone}
                          </div>
                          <div className="  flex-grow w-full  ">
                            {/* {format(user?.createdAt, "en_US")} */}
                            <div className="flex items-center justify-start capitalize">
                              {user?.judicialCountry &&
                                user.judicialCountry[0].slice(0, -2)}

                              {user?.judicialCountry[0]
                                .slice(-2)
                                .toUpperCase() ==
                              user?.userTrackIp?.country ? null : (
                                <IoWarningOutline className="ml-2 text-orange-700" />
                              )}
                            </div>

                            {user?.judicialCountry !=
                              user?.userTrackIp.country && (
                              <div className="text-[10px]">
                                User country: {user?.userTrackIp?.country}
                              </div>
                            )}
                          </div>
                          <div className=" hidden md:block ">
                            {user?.userTrackIp?.ip}
                          </div>
                          <div className=" text-gray-600 flex-grow w-full ">
                            <Link to={`/review/${user?._id}`}>
                              <button className=" py-1 px-4 rounded-sm  bg-blue-800 text-white">
                                Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </>
            )}

            {/* Pagination Controls */}
            {totalUser >= eachPageUser && (
              <div className="pagination my-7 text-center flex items-center justify-center ">
                <button
                  className=" py-1 px-4 rounded-sm mx-4 bg-blue-800 text-white"
                  onClick={handlePrevClick}
                >
                  Prev
                </button>

                {countPage?.map((page, i) => (
                  <span
                    className={` py-1 px-2 m-2  flex justify-center items-center text-sm ${
                      currentPage === i + 1
                        ? "bg-blue-800 text-white"
                        : "bg-slate-400"
                    }`}
                    key={i + 1}
                  >
                    {page + 1}
                  </span>
                ))}

                <button
                  className={` py-1 px-4 rounded-sm mx-4 text-white ${
                    totalCurrentPage >= totalUser
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-800 "
                  }`}
                  onClick={handleNextClick}
                  disabled={totalCurrentPage >= totalUser}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContentSidebar;
