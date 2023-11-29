import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import { format } from "timeago.js";

const GetSingleUser = () => {
  const singleUser = useLoaderData();
  const formData = singleUser?.data;
  console.log(formData);

  return (
    <div className="pb-16  w-full">
      <div className=" bg-white w-full">
        <div className="">
          {/* agent details */}
          <div className=" p-4">
            <div className="text-center flex justify-end items-center"></div>
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient capitalize">
              User informations
            </h2>
            <div className="flex items-center">
              <div className="">
                <img
                  src={formData.profileImage}
                  alt="profileImage"
                  className="w-24 h-24 rounded-md object-cover"
                />
              </div>
              <div className="ml-4">
                <article>
                  {/* data 1 */}
                  <div className="">
                    <span className="flex items-center justify-start font-normal">
                      {formData?.firstName ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className="font-bold text-sm ml-2">Name</span>
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.firstName ? formData.firstName : "Empty"}{" "}
                        {formData?.lastName ? formData?.lastName : "Empty"}
                      </span>
                    </span>
                  </div>
                  {/* data 2 */}
                  <div className="">
                    <span className="flex items-center justify-start font-normal">
                      {formData?.role ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className="font-bold text-sm ml-2">Role</span>
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.role ? formData.role : "Empty"}{" "}
                      </span>
                    </span>
                  </div>
                  {/* data 3 */}
                  <Link to={`/user/single-user-edit/${formData._id}`}>
                    <button className="flex items-center justify-center bg-gray-200 py-1 px-3 rounded-sm mt-2">
                      Edit
                      <SlPencil className="ml-2" />
                    </button>
                  </Link>
                </article>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 mt-7">
              {/* data 5 */}
              <div className="">
                <span className="font-bold text-sm">Join date </span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.createdAt ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {format(formData.createdAt)}
                  </span>
                </span>
              </div>

              {/* data 6 */}
              <div className="">
                <span className="font-bold text-sm">Phone number</span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.phone ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.phone ? formData?.phone : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 7 */}
              <div className="">
                <span className="font-bold text-sm">Email Address</span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.email ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.email ? formData?.email : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSingleUser;
