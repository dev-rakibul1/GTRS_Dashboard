import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import { useLoaderData } from "react-router-dom";
import { handleDownload } from "../../../utility/downloadFile";
import DashboardUserHandleBtn from "./DashboardUserHandleBtn";

const UserUi = () => {
  const singleUser = useLoaderData();
  const formData = singleUser?.data;
  // console.log(formData);

  return (
    <div className="pb-16  w-full">
      <div className=" bg-white w-full">
        <div className="">
          {/* agent details */}
          <div className=" p-4">
            <div className="text-center flex justify-end items-center">
              <DashboardUserHandleBtn user={formData} />
            </div>
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient capitalize">
              Agent details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm">
                  Client Registered Name
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.clientRegisteredName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.clientRegisteredName
                      ? formData?.clientRegisteredName
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm">Client Trade Name </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.clientTradeName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.clientTradeName
                      ? formData?.clientTradeName
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 3 */}
              <div className="">
                <span className="font-bold text-sm">Email address</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.emailAddress ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.emailAddress ? formData.emailAddress : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 4 */}
              <div className="">
                <span className="font-bold text-sm">Address </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.address ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.address ? formData.address : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 5 */}
              <div className="">
                <span className="font-bold text-sm">Judicial country </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.judicialCountry ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.judicialCountry
                      ? formData?.judicialCountry
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 6 */}
              <div className="">
                <span className="font-bold text-sm">Office Phone</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.officePhone ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.officePhone ? formData?.officePhone : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 7 */}
              <div className="">
                <span className="font-bold text-sm">Website</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.website ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.website ? formData?.website : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 8 */}
              <div className="">
                <span className="font-bold text-sm">Social ID</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.socialId ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.socialId ? formData?.socialId : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 9 */}
              <div className="">
                <span className="font-bold text-sm">Number of years</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.yearsTrading ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.yearsTrading ? formData?.yearsTrading : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 10 */}
              <div className="">
                <span className="font-bold text-sm">Total Turnover *</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.totalTurnover ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.totalTurnover
                      ? formData?.totalTurnover
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 11 */}
              <div className="">
                <span className="font-bold text-sm">
                  Number of years trading{" "}
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.yearsTrading ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.yearsTrading ? formData?.yearsTrading : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 12 */}
              <div className="">
                <span className="font-bold text-sm">No of staff </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.noOfStaff ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.noOfStaff ? formData?.noOfStaff : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 13 */}
              <div className="">
                <span className="font-bold text-sm">Trading Currency </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.tradingCurrency ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.tradingCurrency
                      ? formData?.tradingCurrency
                      : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Admin Contact Person Details */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Admin Contact Person Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm"> Name</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.adminContactName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.adminContactName
                      ? formData?.adminContactName
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm">Client Trade Name </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.designation ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.designation ? formData?.designation : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Finance Contact Details*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Finance Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm"> Name</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.financeContactName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.financeContactName
                      ? formData?.financeContactName
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm"> Designation </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.financeContactDesignation ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.financeContactDesignation
                      ? formData?.financeContactDesignation
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold text-sm"> Email address</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.financeContactEmail ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.financeContactEmail
                      ? formData?.financeContactEmail
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold text-sm"> Contact No</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.financeContactPhone ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.financeContactPhone
                      ? formData?.financeContactPhone
                      : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Reservation Contact Details*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Reservation Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm"> Name</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.reservationContactName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.reservationContactName
                      ? formData?.reservationContactName
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm"> Designation </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.reservationContactDesignation ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.reservationContactDesignation
                      ? formData?.reservationContactDesignation
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold text-sm"> Email address</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.reservationContactEmail ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.reservationContactEmail
                      ? formData?.reservationContactEmail
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold text-sm"> Contact No</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.reservationContactPhone ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.reservationContactPhone
                      ? formData?.reservationContactPhone
                      : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Emergency Contact Details*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Emergency Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm"> Name</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.emergencyContactName ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.emergencyContactName
                      ? formData?.emergencyContactName
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm"> Designation </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.emergencyContactDesignation ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.emergencyContactDesignation
                      ? formData?.emergencyContactDesignation
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold text-sm"> Email address</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.emergencyContactEmail ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.emergencyContactEmail
                      ? formData?.emergencyContactEmail
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold text-sm"> Contact No</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.emergencyContactPhone ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.emergencyContactPhone
                      ? formData?.emergencyContactPhone
                      : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Ownership Structure */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Ownership Structure
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Shareholders (count){" "}
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.shareholderCount ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.shareholderCount
                      ? formData?.shareholderCount
                      : "Empty"}
                  </span>
                </span>
              </div>

              {/* data 2 */}
              {formData?.shareholdersInfo1 && formData?.shareholdersRatio1 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo1 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo1
                          ? formData?.shareholdersInfo1
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio1 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio1
                          ? formData?.shareholdersRatio1
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}

              {/* data 3 */}
              {formData?.shareholdersInfo2 && formData?.shareholdersRatio2 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo2 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo2
                          ? formData?.shareholdersInfo2
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio2 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio2
                          ? formData?.shareholdersRatio2
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}

              {/* data 3 */}
              {formData?.shareholdersInfo3 && formData?.shareholdersRatio3 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo3 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo3
                          ? formData?.shareholdersInfo3
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio3 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio3
                          ? formData?.shareholdersRatio3
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 4*/}
              {formData?.shareholdersInfo4 && formData?.shareholdersRatio4 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo4 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo4
                          ? formData?.shareholdersInfo4
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio4 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio4
                          ? formData?.shareholdersRatio4
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 5*/}
              {formData?.shareholdersInfo5 && formData?.shareholdersRatio5 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo5 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo5
                          ? formData?.shareholdersInfo5
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio5 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio5
                          ? formData?.shareholdersRatio5
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 6*/}
              {formData?.shareholdersInfo6 && formData?.shareholdersRatio6 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo6 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo6
                          ? formData?.shareholdersInfo6
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio6 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio6
                          ? formData?.shareholdersRatio6
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 7*/}
              {formData?.shareholdersInfo7 && formData?.shareholdersRatio7 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo7 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo7
                          ? formData?.shareholdersInfo7
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio7 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio7
                          ? formData?.shareholdersRatio7
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 8*/}
              {formData?.shareholdersInfo8 && formData?.shareholdersRatio8 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo8 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo8
                          ? formData?.shareholdersInfo8
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio8 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio8
                          ? formData?.shareholdersRatio8
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 9*/}
              {formData?.shareholdersInfo9 && formData?.shareholdersRatio9 && (
                <div className="">
                  <div className="">
                    <span className="font-bold text-sm">
                      {" "}
                      Shareholders' Name
                    </span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersInfo9 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersInfo9
                          ? formData?.shareholdersInfo9
                          : "Empty"}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold text-sm">Ratio Name</span>
                    <span className="flex items-center justify-start font-light">
                      {formData?.shareholdersRatio9 ? (
                        <FaRegCheckCircle className="text-green-600" />
                      ) : (
                        <FaRegTimesCircle className="text-red-600" />
                      )}
                      <span className={`ml-2 my-1 text-sm`}>
                        {formData?.shareholdersRatio9
                          ? formData?.shareholdersRatio9
                          : "Empty"}
                      </span>
                    </span>
                  </div>
                </div>
              )}
              {/* data 10*/}
              {formData?.shareholdersInfo10 &&
                formData?.shareholdersRatio10 && (
                  <div className="">
                    <div className="">
                      <span className="font-bold text-sm">
                        {" "}
                        Shareholders' Name
                      </span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersInfo10 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersInfo10
                            ? formData?.shareholdersInfo10
                            : "Empty"}
                        </span>
                      </span>
                    </div>

                    <div className="">
                      <span className="font-bold text-sm">Ratio Name</span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersRatio10 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersRatio10
                            ? formData?.shareholdersRatio10
                            : "Empty"}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              {/* data 11*/}
              {formData?.shareholdersInfo11 &&
                formData?.shareholdersRatio11 && (
                  <div className="">
                    <div className="">
                      <span className="font-bold text-sm">
                        {" "}
                        Shareholders' Name
                      </span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersInfo11 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersInfo11
                            ? formData?.shareholdersInfo11
                            : "Empty"}
                        </span>
                      </span>
                    </div>

                    <div className="">
                      <span className="font-bold text-sm">Ratio Name</span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersRatio11 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersRatio11
                            ? formData?.shareholdersRatio11
                            : "Empty"}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              {/* data 12*/}
              {formData?.shareholdersInfo12 &&
                formData?.shareholdersRatio12 && (
                  <div className="">
                    <div className="">
                      <span className="font-bold text-sm">
                        {" "}
                        Shareholders' Name
                      </span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersInfo12 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersInfo12
                            ? formData?.shareholdersInfo12
                            : "Empty"}
                        </span>
                      </span>
                    </div>

                    <div className="">
                      <span className="font-bold text-sm">Ratio Name</span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersRatio12 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersRatio12
                            ? formData?.shareholdersRatio12
                            : "Empty"}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              {/* data 13*/}
              {formData?.shareholdersInfo13 &&
                formData?.shareholdersRatio13 && (
                  <div className="">
                    <div className="">
                      <span className="font-bold text-sm">
                        {" "}
                        Shareholders' Name
                      </span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersInfo13 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersInfo13
                            ? formData?.shareholdersInfo13
                            : "Empty"}
                        </span>
                      </span>
                    </div>

                    <div className="">
                      <span className="font-bold text-sm">Ratio Name</span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersRatio13 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersRatio13
                            ? formData?.shareholdersRatio13
                            : "Empty"}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              {/* data 14*/}
              {formData?.shareholdersInfo14 &&
                formData?.shareholdersRatio14 && (
                  <div className="">
                    <div className="">
                      <span className="font-bold text-sm">
                        {" "}
                        Shareholders' Name
                      </span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersInfo14 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersInfo14
                            ? formData?.shareholdersInfo14
                            : "Empty"}
                        </span>
                      </span>
                    </div>

                    <div className="">
                      <span className="font-bold text-sm">Ratio Name</span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersRatio14 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersRatio14
                            ? formData?.shareholdersRatio14
                            : "Empty"}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              {/* data 15*/}
              {formData?.shareholdersInfo15 &&
                formData?.shareholdersRatio15 && (
                  <div className="">
                    <div className="">
                      <span className="font-bold text-sm">
                        {" "}
                        Shareholders' Name
                      </span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersInfo15 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersInfo15
                            ? formData?.shareholdersInfo15
                            : "Empty"}
                        </span>
                      </span>
                    </div>

                    <div className="">
                      <span className="font-bold text-sm">Ratio Name</span>
                      <span className="flex items-center justify-start font-light">
                        {formData?.shareholdersRatio15 ? (
                          <FaRegCheckCircle className="text-green-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-600" />
                        )}
                        <span className={`ml-2 my-1 text-sm`}>
                          {formData?.shareholdersRatio15
                            ? formData?.shareholdersRatio15
                            : "Empty"}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Complinance */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Complinance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Tax / VAT Registration No
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.taxRegistrationNo ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.taxRegistrationNo
                      ? formData?.taxRegistrationNo
                      : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Understanding Content Requirements (Hotel content)*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Understanding Content Requirements (Hotel content)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm"> Distribution Market</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.distributionMarket ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.distributionMarket
                      ? formData?.distributionMarket
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm"> Source Market</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.sourceMarket ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.sourceMarket ? formData?.sourceMarket : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Daily Average Transaction
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.dailyAverageTransaction ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.dailyAverageTransaction
                      ? formData?.dailyAverageTransaction
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold text-sm"> Average Purchase</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.averagePurchaseValue ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.averagePurchaseValue
                      ? formData?.averagePurchaseValue
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 5 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Total appx Monthly Transaction{" "}
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.monthlyTransaction ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.monthlyTransaction
                      ? formData?.monthlyTransaction
                      : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* Understanding Content Requirements (Flight content)*/}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Understanding Content Requirements (Flight content)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm"> Distribution Market</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.distributionMarket2 ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.distributionMarket2
                      ? formData?.distributionMarket2
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm"> Source Market</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.sourceMarket2 ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.sourceMarket2
                      ? formData?.sourceMarket2
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 3 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Daily Average Transaction
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.dailyAverageTransaction2 ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.dailyAverageTransaction2
                      ? formData?.dailyAverageTransaction2
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 4 */}
              <div className="">
                <span className="font-bold text-sm"> Average Purchase</span>
                <span className="flex items-center justify-start font-light">
                  {formData?.averagePurchaseValue2 ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.averagePurchaseValue2
                      ? formData?.averagePurchaseValue2
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 5 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Total appx Monthly Transaction{" "}
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.monthlyTransaction2 ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.monthlyTransaction2
                      ? formData?.monthlyTransaction2
                      : "Empty"}
                  </span>
                </span>
              </div>
              {/* data 6 */}
              <div className="">
                <span className="font-bold text-sm">
                  Approx Look to Book Ratio
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.lookToBookRatio ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.lookToBookRatio
                      ? formData?.lookToBookRatio
                      : "Empty"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* File collection */}
          <div className="">
            <div class="heading">
              <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
                Documents
              </h2>
            </div>

            <ul className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <li>
                <strong>Upload Name Card... </strong>
                <br />
                {formData?.nameCard ? (
                  <img src={formData?.nameCard} alt="doc" />
                ) : (
                  <img
                    src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                    alt="doc"
                  />
                )}
                {/* download image */}
                <button
                  onClick={() =>
                    handleDownload(formData?.nameCard, "upload-name-card.jpg")
                  }
                  className="py-1 px-4 rounded-sm mt-3 bg-blue-800 text-white flex items-center justify-center"
                >
                  Download <RxDownload className="ml-4" />
                </button>
              </li>

              <li>
                <strong>National ID/Driving License... </strong>
                <br />
                {formData?.nationalID ? (
                  <img src={formData?.nationalID} alt="doc" />
                ) : (
                  <img
                    src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                    alt="doc"
                  />
                )}
                {/* download image */}
                <button
                  onClick={() =>
                    handleDownload(
                      formData?.nationalID,
                      "National ID/Driving License.jpg"
                    )
                  }
                  className="py-1 px-4 rounded-sm mt-3 bg-blue-800 text-white flex items-center justify-center"
                >
                  Download <RxDownload className="ml-4" />
                </button>
              </li>

              <li>
                <strong>Registration No/Registration Scan Docs: </strong>
                <br />
                {formData?.registrationDocs ? (
                  <img src={formData?.registrationDocs} alt="doc" />
                ) : (
                  <img
                    src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                    alt="doc"
                  />
                )}
                {/* download image */}
                <button
                  onClick={() =>
                    handleDownload(
                      formData?.registrationDocs,
                      "Registration-No.jpg"
                    )
                  }
                  className="py-1 px-4 rounded-sm mt-3 bg-blue-800 text-white flex items-center justify-center"
                >
                  Download <RxDownload className="ml-4" />
                </button>
              </li>

              <li>
                <strong>Travel Agent License Copy: </strong>
                <br />
                {formData?.travelAgentLicense ? (
                  <img src={formData?.travelAgentLicense} alt="doc" />
                ) : (
                  <img
                    src="https://i.ibb.co/YWxyWz0/Nice-Png-sold-out-png-59205.png"
                    alt="doc"
                  />
                )}
                {/* download image */}
                <button
                  onClick={() =>
                    handleDownload(
                      formData?.travelAgentLicense,
                      "travel-agent-license.jpg"
                    )
                  }
                  className="py-1 px-4 rounded-sm mt-3 bg-blue-800 text-white flex items-center justify-center"
                >
                  Download <RxDownload className="ml-4" />
                </button>
              </li>
            </ul>
          </div>

          {/* agent details */}
          <div className="mt-7 border p-4">
            <h2 className="text-lg md:text-xl py-1 md:py-2 text-gradient">
              Our terms & conditions
            </h2>
            <div className="flex flex-col gap-7">
              {/* data 1 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Accept Terms & Conditions of Use
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.gdprConsent ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.gdprConsent && "True"}
                  </span>
                </span>
              </div>
              {/* data 2 */}
              <div className="">
                <span className="font-bold text-sm">
                  {" "}
                  Accept Privacy Policy{" "}
                </span>
                <span className="flex items-center justify-start font-light">
                  {formData?.privacyPolicyConsent ? (
                    <FaRegCheckCircle className="text-green-600" />
                  ) : (
                    <FaRegTimesCircle className="text-red-600" />
                  )}
                  <span className={`ml-2 my-1 text-sm`}>
                    {formData?.privacyPolicyConsent && "True"}
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

export default UserUi;
