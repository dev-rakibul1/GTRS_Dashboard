import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Toast from "../../shared/Toast";

const EditPage = () => {
  const editData = useLoaderData();
  const storedEntry = editData?.data;
  const [newEntry, setNewEntry] = useState(storedEntry);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  let shareHolderFieldCount = [];
  let i = 0;

  do {
    if (i >= 16) {
      break;
    }
    shareHolderFieldCount.push({
      info: `shareholdersInfo${i + 1}`,
    });
    i++;
  } while (i < storedEntry?.shareholderCount);

  // console.log(shareHolderFieldCount);
  // console.log(`${editInfo.shareholdersInfo1}`);

  const handleInputUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.patch(
        `https://gtrs.vercel.app/api/v1/form-data/review/update-entry/${storedEntry._id}`,
        newEntry,
        {
          headers: {
            authorization: `${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setShowToast(true);
        navigate(`/review/${storedEntry?._id}`);
      } else {
        alert("Single entry update fail!!!");
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const oldValue = event.target.value;
    const newValue = { ...newEntry };

    // Convert the value to lowercase before setting it in newValue
    newValue[field] = oldValue.toUpperCase();
    setNewEntry(newValue);
  };

  return (
    <form className="px-2" onSubmit={handleInputUpdate}>
      <div className="gtr-form-step-1 gtr-form-step-title">
        {/* Form title */}
        <div className="">
          <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
            Agent details
          </h3>
        </div>
      </div>
      {/* gtr-multiple-form-step-1 */}
      <div className="gtr-multiple-form-step-1  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12">
        {/* ------------------------ */}

        {/* 1. Client Registered Name */}
        <div className="mt-3">
          <label
            htmlFor="client-registered-name"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Client Registered Name{" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="text"
            name="clientRegisteredName"
            id="client-registered-name"
            onChange={handleInputChange}
            defaultValue={storedEntry?.clientRegisteredName}
            aria-readonly
            className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300`}
          />
        </div>

        {/* 017 74 92 17 43-3 */}

        {/* 2. Client Trade Name */}
        <div className="mt-3">
          <label
            htmlFor="client-trade-name"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Client Trade Name (If different from registered Name){" "}
          </label>
          <input
            type="text"
            name="clientTradeName"
            id="client-trade-name"
            onChange={handleInputChange}
            defaultValue={storedEntry?.clientTradeName}
            className={`outline-0 border w-full border-slate-300 p-2 rounded-sm focus:border-blue-500 transition-all duration-300 `}
          />
        </div>

        {/* 3. Email address */}
        <div className="mt-3">
          <label
            htmlFor="email-address"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Email Address (Will be used as admin login ID){" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="email"
            name="emailAddress"
            id="email-address"
            defaultValue={storedEntry?.emailAddress}
            onChange={handleInputChange}
            className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
          />
        </div>

        {/* 4. Address */}
        <div className="mt-3">
          <label
            htmlFor="address"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Address <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue={storedEntry?.address}
            onChange={handleInputChange}
            className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300    border-slate-300`}
          />
        </div>

        {/* 5. Judicial Country */}
        <div className="mt-3">
          <label
            htmlFor="judicialCountry"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Judicial Country{" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="text"
            name="judicialCountry"
            id="judicial-country"
            defaultValue={storedEntry?.judicialCountry}
            onChange={handleInputChange}
            className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
          />
        </div>

        {/* 6. Office Phone */}
        <div className="mt-3">
          <label
            htmlFor="office-phone"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Office Phone{" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="number"
            name="officePhone"
            id="office-phone"
            defaultValue={storedEntry?.officePhone}
            onChange={handleInputChange}
            className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
          />
        </div>

        {/* 7. Website */}
        <div className="mt-3">
          <label
            htmlFor="website"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Website
          </label>
          <input
            type="text"
            name="website"
            id="website"
            defaultValue={storedEntry?.website}
            onChange={handleInputChange}
            className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
          />
        </div>

        {/* 8. Social/apps ID to send push notification */}
        <div className="mt-3">
          <label
            htmlFor="social-id"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Social ID to Send Push Notification
          </label>
          <input
            type="text"
            name="socialId"
            id="social-id"
            className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
            defaultValue={storedEntry?.socialId}
            onChange={handleInputChange}
          />
        </div>

        {/* 9. Number of years client has been trading */}

        <div className="mt-3">
          <label
            htmlFor="years-trading"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Number of Years Client has been Trading{" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue={storedEntry?.yearsTrading}
            onChange={handleInputChange}
            id="years-trading"
            className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
          />
        </div>

        {/* 10. Last year Total Turnover */}

        <div className="mt-3">
          <label
            htmlFor="total-turnover"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Last Year Total Turnover{" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="text"
            className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
            name="totalTurnover"
            id="total-turnover"
            defaultValue={storedEntry?.totalTurnover}
            onChange={handleInputChange}
          />
        </div>

        {/* 11. No of staff */}

        <div className="mt-3">
          <label
            htmlFor="no-of-staff"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            No of Staff{" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="text"
            className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
            name="noOfStaff"
            id="no-of-staff"
            defaultValue={storedEntry?.noOfStaff}
            onChange={handleInputChange}
          />
        </div>

        {/* 12. Trading Currency */}

        {/* 12.  Trading Currency */}
        <div className="mt-3">
          <label
            htmlFor="trading-currency"
            className="py-1 text-base text-gray-500 inline-block normal-case"
          >
            Trading Currency{" "}
            <span className="text-xl font-bold text-red-500">*</span>
          </label>
          <input
            type="text"
            className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
            name="tradingCurrency"
            id="trading-currency"
            defaultValue={storedEntry?.tradingCurrency}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-lg md:text-xl py-1 md:py-2 gtr-form-step-title capitalize">
          Admin Contact Person Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12">
          {/* 13. Name */}
          <div className="mt-3">
            <label
              htmlFor="name"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Name <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="adminContactName"
              id="name"
              defaultValue={storedEntry?.adminContactName}
              onChange={handleInputChange}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
            />
          </div>

          {/* 14. Designation */}
          <div className="mt-3">
            <label
              htmlFor="designation"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Designation{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="designation"
              id="designation"
              defaultValue={storedEntry?.designation}
              onChange={handleInputChange}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
            />
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="border  w-full ">
        {/* gtr-multiple-form-step-2 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Finance Contact Details
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Finance Contact Details */}
            <div className="">
              <label
                htmlFor="finance-contact-name"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Name
              </label>
              <input
                type="text"
                name="financeContactName"
                defaultValue={storedEntry?.financeContactName}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
            <div className="">
              <label
                htmlFor="finance-contact-designation"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Designation{" "}
              </label>
              <input
                type="text"
                name="financeContactDesignation"
                id="finance-contact-designation"
                defaultValue={storedEntry?.financeContactDesignation}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 
                  `}
              />
            </div>
            <div className="">
              <label
                htmlFor="finance-contact-email"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Email Address{" "}
              </label>
              <input
                type="email"
                name="financeContactEmail"
                id="finance-contact-email"
                defaultValue={storedEntry?.financeContactEmail}
                onChange={handleInputChange}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300`}
              />
            </div>
            <div className="">
              <label
                htmlFor="finance-contact-phone"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Contact No{" "}
              </label>
              <input
                type="number"
                name="financeContactPhone"
                id="finance-contact-phone"
                defaultValue={storedEntry?.financeContactPhone}
                onChange={handleInputChange}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-3 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Reservation Contact Details
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Reservation Contact Details */}

            <div className="">
              <label
                htmlFor="reservation-contact-name"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Name
              </label>
              <input
                type="text"
                name="reservationContactName"
                id="reservation-contact-name"
                defaultValue={storedEntry?.reservationContactName}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
            <div className="">
              <label
                htmlFor="reservation-contact-designation"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Designation{" "}
              </label>
              <input
                type="text"
                name="reservationContactDesignation"
                id="reservation-contact-designation"
                defaultValue={storedEntry?.reservationContactDesignation}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
            <div className="">
              <label
                htmlFor="reservation-contact-email"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Email Address{" "}
              </label>
              <input
                type="email"
                name="reservationContactEmail"
                id="reservation-contact-email"
                defaultValue={storedEntry?.reservationContactEmail}
                onChange={handleInputChange}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
            <div className="">
              <label
                htmlFor="reservation-contact-phone"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Contact No{" "}
              </label>
              <input
                type="number"
                name="reservationContactPhone"
                id="reservation-contact-phone"
                defaultValue={storedEntry?.reservationContactPhone}
                onChange={handleInputChange}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-4 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Emergency Contact Details
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Emergency Contact Details */}
            <div className="">
              <label
                htmlFor="emergency-contact-name"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Name <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="emergencyContactName"
                id="emergency-contact-name"
                defaultValue={storedEntry?.emergencyContactName}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300`}
              />
            </div>
            <div className="">
              <label
                htmlFor="emergency-contact-designation"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Designation{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="emergencyContactDesignation"
                id="emergency-contact-designation"
                defaultValue={storedEntry?.emergencyContactDesignation}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
            <div className="">
              <label
                htmlFor="emergency-contact-email"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Email Address{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emergencyContactEmail"
                id="emergency-contact-email"
                defaultValue={storedEntry?.emergencyContactEmail}
                onChange={handleInputChange}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
            <div className="">
              <label
                htmlFor="emergency-contact-phone"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Contact No{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="emergencyContactPhone"
                id="emergency-contact-phone"
                defaultValue={storedEntry?.emergencyContactPhone}
                onChange={handleInputChange}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-5 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Ownership Structure
              </h3>
            </div>
          </div>
          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* Ownership Structure */}
            {/* 1 - How Many Shareholders */}
            <div className="">
              <label
                htmlFor="shareholder-count"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                How Many Shareholders
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="shareholderCount"
                id="shareholder-count"
                defaultValue={storedEntry?.shareholderCount}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>

            {/* 2 - Please Put Shareholders' Name and Ratio */}

            <div className="">
              {shareHolderFieldCount.map((input, i) => (
                <div className="flex gap-x-4" key={i + 1}>
                  <div className="">
                    <label
                      htmlFor={`shareholders-info${i + 1}`}
                      className="py-1 text-base text-gray-500 inline-block normal-case"
                    >
                      Shareholders' Name{" "}
                      <span className="text-xl font-bold text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name={`shareholdersInfo${i + 1}`}
                      id={`shareholders-info${i + 1}`}
                      // defaultValue={`${storedEntry.shareholdersInfo1}`}
                      className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 border-slate-300`}
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor={`shareholders-ratio${i + 1}`}
                      className="py-1 text-base text-gray-500 inline-block normal-case"
                    >
                      Ratio{" "}
                      <span className="text-xl font-bold text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name={`shareholdersRatio${i + 1}`}
                      id={`shareholders-ratio${i + 1}`}
                      // value={`${storedEntry.shareholdersRatio1}`}
                      className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 border-slate-300 `}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="">
              <div className="flex gap-x-4">
                <div className="">
                  <label
                    htmlFor={`shareholders-info`}
                    className="py-1 text-base text-gray-500 inline-block normal-case"
                  >
                    Shareholders' Name{" "}
                    <span className="text-xl font-bold text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name={`shareholdersInfo`}
                    id={`shareholders-info`}
                    // value={`${formValue}`}
                    className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300`}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor={`shareholders-ratio`}
                    className="py-1 text-base text-gray-500 inline-block normal-case"
                  >
                    Ratio{" "}
                    <span className="text-xl font-bold text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name={`shareholdersRatio`}
                    id={`shareholders-ratio`}
                    // value={`${formData.shareholdersRatio}${i + 1}`}
                    className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* gtr-multiple-form-step-1 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2 capitalize">
                Complinance
              </h3>
            </div>
          </div>

          <div className="gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3">
            {/* 2 - Tax / VAT Registration No */}
            <div className="">
              <label
                htmlFor="tax-registration-no"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                TAX / VAT Registration No{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="taxRegistrationNo"
                id="tax-registration-no"
                defaultValue={storedEntry?.taxRegistrationNo}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}

      <div className="border  w-full">
        {/* gtr-multiple-form-step-1 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2">
                Understanding Content Requirements (Hotel Content)
              </h3>
            </div>
          </div>
          <div
            className={`gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3`}
          >
            {/* 1 - Distribution Market (Country/Region) */}
            <div className={`mt-3`}>
              <label
                htmlFor="distribution-market"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Distribution Market (Country/Region){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="distributionMarket"
                id="distribution-market"
                defaultValue={storedEntry?.distributionMarket}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 2 - Source Market (Mention your Top 10 Destination) */}
            <div className={`mt-3 `}>
              <label
                htmlFor="source-market"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Source Market (Mention your Top 10 Destination){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sourceMarket"
                id="source-market"
                defaultValue={storedEntry?.sourceMarket}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 3 - Daily Average Transaction */}
            <div className={`mt-3 `}>
              <label
                htmlFor="daily-average-transaction"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Daily Average Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="dailyAverageTransaction"
                id="daily-average-transaction"
                defaultValue={storedEntry?.dailyAverageTransaction}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 4 - Average Purchase Value for per transaction */}
            <div className={`mt-3 `}>
              <label
                htmlFor="average-purchase-value"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Average Purchase Value for Per Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="averagePurchaseValue"
                id="average-purchase-value"
                defaultValue={storedEntry?.averagePurchaseValue}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 5 - Total appx Monthly Transaction */}
            <div className={`mt-3 `}>
              <label
                htmlFor="monthly-transaction"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Total Approx Monthly Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="monthlyTransaction"
                id="monthly-transaction"
                defaultValue={storedEntry?.monthlyTransaction}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>
          </div>
        </div>

        {/* gtr-multiple-form-step-2 */}
        <div className="mt-7">
          <div className="gtr-form-step-1 gtr-form-step-title">
            {/* Form title */}
            <div className="">
              <h3 className="text-lg md:text-xl py-1 md:py-2">
                Understanding Content Requirements (Flight Content)
              </h3>
            </div>
          </div>
          <div
            className={`gtr-multiple-form-step-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 mt-3`}
          >
            {/* 1 - Distribution Market (Country/Region) */}
            <div className={`mt-3 `}>
              <label
                htmlFor="distribution-market-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Distribution Market (Country/Region){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="distributionMarket2"
                id="distribution-market-2"
                defaultValue={storedEntry?.distributionMarket2}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 2 - Source Market (Mention your Top 10 Route) */}
            <div className={`mt-3 `}>
              <label
                htmlFor="source-market-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Source Market (Mention your Top 10 Route){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sourceMarket2"
                id="source-market-2"
                defaultValue={storedEntry?.sourceMarket2}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 3 - Daily Average Transaction */}
            <div className={`mt-3 `}>
              <label
                htmlFor="daily-average-transaction-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Daily Average Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="dailyAverageTransaction2"
                id="daily-average-transaction-2"
                defaultValue={storedEntry?.dailyAverageTransaction2}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 4 - Average Purchase Value for per transaction */}
            <div className={`mt-3 `}>
              <label
                htmlFor="average-purchase-value-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Average Purchase Value for Per Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="averagePurchaseValue2"
                id="average-purchase-value-2"
                defaultValue={storedEntry?.averagePurchaseValue2}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 5 - Total appx Monthly Transaction */}
            <div className={`mt-3 `}>
              <label
                htmlFor="monthly-transaction-2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Total Approx Monthly Transaction{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="number"
                name="monthlyTransaction2"
                id="monthly-transaction-2"
                defaultValue={storedEntry?.monthlyTransaction2}
                onChange={handleInputChange}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 `}
              />
            </div>

            {/* 6 - Approx Look to Book Ratio (100:1) */}
            {/* <div
              className={`mt-3 ${
                isFlightChecked === false && "text-gray-200 cursor-not-allowed"
              }`}
            >
              <label
                htmlFor="look-to-book-ratio"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Approx Look to Book Ratio (100:1){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lookToBookRatio"
                id="look-to-book-ratio"
                value={formData.lookToBookRatio}
                className={`outline-0 border w-full p-2 rounded-sm border-slate-300 focus:border-blue-500 transition-all duration-300 ${
                  formData.lookToBookRatio &&
                  !approx_pattern.test(formData.lookToBookRatio)
                    ? "border-red-600 "
                    : " border-slate-300 "
                }`}
                onChange={handleInputFields}
              />
              {errorMeg?.lookToBookRatio && (
                <small className="text-red-600">
                  {errorMeg?.lookToBookRatio}
                </small>
              )}
            </div> */}

            <div className="relative mt-3">
              <label
                htmlFor="look-to-book-ratio"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Approx Look to Book Ratio (100:1){" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="lookToBookRatio"
                  id="look-to-book-ratio"
                  defaultValue={storedEntry?.lookToBookRatio}
                  onChange={handleInputChange}
                  // value={`${formData.shareholdersRatio}${i + 1}`}
                  className={`outline-0 border w-full p-2 rounded-sm  focus:border-blue-500 transition-all duration-300 border-slate-300 `}
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            {/* 1 - Accept Terms & Conditions of Use */}
            <div className="mt-3 flex justify-start items-center">
              <input
                defaultChecked={storedEntry?.privacyPolicyConsent}
                type="checkbox"
                name="privacyPolicyConsent"
                id="privacy-policy-consent"
                className=" rounded-sm focus:border-blue-500 transition-all duration-300"
                value=""
              />

              <label
                htmlFor="privacy-policy-consent"
                className=" flex justify-start items-start flex-col ml-4 text-base text-gray-500 normal-case"
              >
                <span className="flex items-center justify-start font-light text-base">
                  Accept
                  <a href="#" className="ml-2 text-blue-600">
                    Terms & Conditions
                  </a>
                  <span className="inline-block ml-1"> of Use</span>
                  <span className="text-xl font-bold text-red-500 ml-1">*</span>
                </span>
              </label>
            </div>

            {/* 2 - Click Box for Acceptance GPDR Cookie Consent Management */}
            <div className="flex justify-center items-start">
              <input
                type="checkbox"
                name="gdprConsent"
                defaultChecked={storedEntry?.gdprConsent}
                id="gdpr-consent"
                className=" rounded-sm focus:border-blue-500 transition-all duration-300 mt-2"
                value=""
              />

              <label
                htmlFor="gdpr-consent"
                className="flex items-start justify-start font-light text-xl flex-col ml-4"
              >
                <span className="flex items-center justify-start font-light text-base">
                  Accept{" "}
                  <a href="#" className="ml-2 text-blue-600">
                    {" "}
                    Privacy Policy
                  </a>
                  <span className="text-xl font-bold text-red-500 ml-1">
                    {" "}
                    *
                  </span>
                </span>
                <p className="mt-2 text-xs">
                  I have read the GTRSystem site
                  <a href="#" className="ml-1 text-blue-600">
                    Privacy Policy
                  </a>
                  , the terms of which are incorporated herein, and I agree that
                  the terms of such policy are reasonable. I consent to the use
                  of my personal information by GTRSystem and/or its Third Party
                  Suppliers in accordance with the terms of and for the purposes
                  set forth in the GTRSystem site
                  <a href="#" className="ml-1 text-blue-600">
                    Privacy Policy
                  </a>
                  .
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className=" py-1 px-4 rounded-sm mx-4 bg-blue-800 text-white my-7 cursor-pointer"
        >
          Update now
        </button>
      </div>
      {showToast && <Toast setShowToast={setShowToast} showToast={showToast} />}
    </form>
  );
};

export default EditPage;
