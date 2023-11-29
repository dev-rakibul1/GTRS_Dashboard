import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../shared/Spinner";

const User = () => {
  const [usersLoad, setUsersLoad] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const users = usersLoad?.data;

  const fetchData = (page, search) => {
    const url = "https://gtrs.vercel.app/api/v1/user/";
    // const pageUrl = `${url}?page=${page}`;
    const pageUrl = `${url}?page=${page}${
      search ? "&searchTerm=" + search : ""
    }`;
    // console.log(pageUrl);

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
        setUsersLoad(responseData);
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

  return (
    <div>
      <div className="join join-vertical w-full">
        {loading ? (
          <div className="grid place-items-center min-h-screen">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="sm:flex items-center justify-between py-4">
              <h4 className="py-2 font-semibold text-lg text-pink-700">
                Total entry : {users?.meta?.total ? users?.meta?.total : 0}
              </h4>
            </div>
            {!users?.length ? (
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
                  <div className="">Role</div>
                  <div className="">More</div>
                </div>
                {users?.map((user, index) => (
                  <>
                    {/* Table Header */}

                    <div
                      key={user?.id}
                      className="p-3 border-b border-gray-300 border  mt-3 w-full items-center bg-white dashboard-user-entry-contact"
                    >
                      <div className=" hidden md:block ">{index + 1}</div>
                      <div className=" text-gray-900  ">{user?.firstName}</div>
                      <div className="hidden md:block ">{user?.email}</div>
                      <div className=" hidden sm:block">{user?.phone}</div>
                      <div className=" text-gray-600 capitalize">
                        {user?.role}
                      </div>
                      <div className=" text-gray-600">
                        <Link to={`/user/single-user-review/${user._id}`}>
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
      </div>
    </div>
  );
};

export default User;
