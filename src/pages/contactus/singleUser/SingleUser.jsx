import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ContactUsBtn from "./ContactUsBtn";

const SingleUser = () => {
  const singleUser = useLoaderData();
  const formData = singleUser?.data;
  console.log(formData);

  return (
    <div className="pb-16  w-full">
      <div className=" bg-white w-full">
        <div className="">
          {/* agent details */}
          <div className=" p-4">
            <div className="text-center flex justify-end items-center">
              <ContactUsBtn />
            </div>
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient capitalize">
              User Contact details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm">First Name</span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.firstName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.firstName ? formData.firstName : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm">Last Name </span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.lastName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.lastName ? formData?.lastName : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 3 */}
              <div className="">
                <span className="font-bold text-sm">Email address</span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.email ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm lowercase`}>
                    {formData?.email ? formData?.email : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 4 */}
              <div className="">
                <span className="font-bold text-sm">Country </span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.country ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.country ? formData?.country : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 5 */}
              <div className="">
                <span className="font-bold text-sm">Company </span>
                <span className="flex items-center justify-start font-normal">
                  {formData?.company ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.company ? formData?.company : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 6 */}
              <div className="">
                <span className="font-bold text-sm">Office Phone</span>
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

              {/* data 8 */}
              {formData?.value && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm"> Inquiry For</span>
                    <span className="flex items-center justify-start font-normal">
                      {formData?.value ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.value ? formData?.value : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 9 */}
              {formData?.productQuery && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm"> Product Query</span>
                    <span className="flex items-center justify-start font-normal">
                      {formData?.productQuery ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.productQuery
                          ? formData?.productQuery
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 10 */}
              {formData?.quarryFilter && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Quarry Filter (Galaxy, Orbit, Pluse)
                    </span>
                    <span className="flex items-center justify-start font-normal">
                      {formData?.quarryFilter ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.quarryFilter
                          ? formData?.quarryFilter
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 11 */}
              {formData?.group2.length ? (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm"> Inquiry For</span>
                    <span className="flex items-center justify-start font-normal">
                      <span className={`my-1 text-sm`}>
                        {formData?.group2
                          ? formData?.group2?.map((d, i) => (
                              <li key={i + 1}>{d}</li>
                            ))
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              ) : null}
              {/* data 12 */}
              {formData?.group3 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm"> group3</span>
                    <span className="flex items-center justify-start font-normal">
                      {formData?.group3 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.group3 ? formData?.group3 : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 13 */}
              {formData?.group4 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm"> group4</span>
                    <span className="flex items-center justify-start font-normal">
                      {formData?.group4 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.group4 ? formData?.group4 : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-7">
              {/* data 7 */}
              {formData?.message && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm"> Message</span>
                    <span className="flex items-center justify-start font-normal">
                      <span className={`my-1 text-sm`}>
                        {formData?.message ? formData?.message : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
