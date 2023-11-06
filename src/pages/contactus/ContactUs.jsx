import exportFromJSON from "export-from-json";
import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RxDownload } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  const [contactUsData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = (page, search) => {
    const url =
      "https://gtr-multiple-form-backend-server-md75ucjkc-dev-rakibul1.vercel.app/api/v1/contact-us/";
    // const pageUrl = `${url}?page=${page}`;
    const pageUrl = `${url}?page=${page}${
      search ? "&searchTerm=" + search : ""
    }`;
    // console.log(pageUrl);

    fetch(pageUrl)
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
  // console.log("Contact us data___", contactUsData);

  // Pagination calculation
  const totalUser = contactUsData?.meta?.total;
  const eachPageUser = contactUsData?.meta?.limit;
  const totalNumberOfPages = totalUser / eachPageUser;
  const totalCurrentPageCount = currentPage;
  const totalCurrentPage = eachPageUser * totalCurrentPageCount;

  let countPage = [];
  for (let page = 1; page < totalNumberOfPages; page++) {
    countPage.push(page);
  }

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

  const handleExportUser = () => {
    const data = contactUsData?.data;

    // Set the filename and export type
    const fileName = "exported_data";
    const exportType = exportFromJSON.types.csv;

    // Export the data
    exportFromJSON({ data, fileName, exportType });
  };

  // Search query
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData(1, searchQuery);
  };

  return (
    <>
      <div className="full-width-container ">
        <div className="w-full  mx-auto ">
          <div className="join join-vertical w-full">
            {loading ? (
              <h1 className="flex items-center justify-center h-screen">
                Loading...
              </h1>
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
                  <div className="search w-full sm:flex items-center justify-between gap-4  sm:w-[60%] ">
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
                    <form className="flex items-center sm:justify-between mt-3 sm:mt-0 w-[25%]">
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
                        onClick={handleExportUser}
                      >
                        Export
                        <RxDownload />
                      </button>
                    </div>
                  </div>
                </div>
                {!contactUsData?.data?.length ? (
                  <div className="flex items-center justify-center min-h-screen h-full">
                    <h2 className="text-gray-400 text-4xl">
                      User entry not available.
                    </h2>
                  </div>
                ) : (
                  <>
                    <div className="p-3  border-gray-300 mt-3 w-full justify-between items-center font-bold dashboard-user-entry-contact ">
                      <div className="hidden md:block ">Sl</div>
                      <div className="">Name</div>
                      <div className="hidden md:block ">Email</div>
                      <div className="hidden sm:block">Phone</div>
                      <div className="">Country</div>
                      <div className="">More</div>
                    </div>
                    {contactUsData?.data?.map((user, index) => (
                      <>
                        {/* Table Header */}

                        <div
                          key={user?.id}
                          className="p-3 border-b border-gray-300 border  mt-3 w-full items-center bg-white dashboard-user-entry-contact"
                        >
                          <div className=" hidden md:block ">{index + 1}</div>
                          <div className=" text-gray-900  ">
                            {user?.firstName}
                          </div>
                          <div className="hidden md:block ">{user?.email}</div>
                          <div className=" hidden sm:block">{user?.phone}</div>
                          <div className=" text-gray-600 capitalize">
                            {/* {format(user?.createdAt, "en_US")} */}
                            {user?.country}
                          </div>
                          <div className=" text-gray-600">
                            <Link to={`/single-user/${user?._id}`}>
                              <button className=" py-1 px-4 rounded-sm mx-4 bg-blue-800 text-white">
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
            {totalUser > eachPageUser && (
              <div className="pagination my-7 text-center flex items-center justify-center ">
                <button
                  className=" py-1 px-4 rounded-sm bg-blue-800 text-white"
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
                    {page}
                  </span>
                ))}

                <button
                  className={` py-1 px-4 rounded-sm mx-4 text-white ${
                    totalCurrentPage > totalUser
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-800 "
                  }`}
                  onClick={handleNextClick}
                  disabled={totalCurrentPage > totalUser}
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

export default ContactUs;
