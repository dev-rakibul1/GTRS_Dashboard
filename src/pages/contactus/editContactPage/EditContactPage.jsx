import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditContactPage = () => {
  const editData = useLoaderData();
  const storedEntry = editData?.data;
  const [newEntry, setNewEntry] = useState(storedEntry);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleInputUpdate = async (event) => {
    event.preventDefault();

    console.log(newEntry);

    try {
      const response = await axios.patch(
        `https://gtr-multiple-form-backend-server-rfbv762mc-dev-rakibul1.vercel.app/api/v1/contact-us/review-contact-us/update-entry/${storedEntry._id}`,
        newEntry
      );
      console.log(response.data);
      if (response.data.success) {
        setShowToast(true);
        navigate(`/single-user/${storedEntry?._id}`);
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
    <div className="px-2">
      <form onSubmit={handleInputUpdate}>
        <div className="gtr-multiple-form-step-1  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12">
          {/* 1. Client Registered Name */}
          <div className="mt-3">
            <label
              htmlFor="firstName"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              First Name
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleInputChange}
              defaultValue={storedEntry?.firstName}
              aria-readonly
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300`}
            />
          </div>

          {/* 017 74 92 17 43-3 */}

          {/* 2. Client Trade Name */}
          <div className="mt-3">
            <label
              htmlFor="lastName"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleInputChange}
              defaultValue={storedEntry?.lastName}
              className={`outline-0 border w-full border-slate-300 p-2 rounded-sm focus:border-blue-500 transition-all duration-300 `}
            />
          </div>

          {/* 3. Email address */}
          <div className="mt-3">
            <label
              htmlFor="email-address"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Email Address
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email-address"
              defaultValue={storedEntry?.email}
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
              Country <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="country"
              id="country"
              defaultValue={storedEntry?.country}
              onChange={handleInputChange}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300    border-slate-300`}
            />
          </div>

          {/* 5.Company */}
          <div className="mt-3">
            <label
              htmlFor="company"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Judicial Country{" "}
              <span className="text-xl font-bold text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              defaultValue={storedEntry?.company}
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
              name="phone"
              id="office-phone"
              defaultValue={storedEntry?.phone}
              onChange={handleInputChange}
              className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
            />
          </div>

          {/* 7. quarryFilter */}
          {storedEntry?.quarryFilter && (
            <div className="mt-3">
              <label
                htmlFor="quarryFilter"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Query Filter
              </label>
              <input
                type="text"
                name="quarryFilter"
                id="quarryFilter"
                defaultValue={storedEntry?.quarryFilter}
                onChange={handleInputChange}
                className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
              />
            </div>
          )}

          {/* 8. Social/apps ID to send push notification */}
          {storedEntry?.value && (
            <div className="mt-3">
              <label
                htmlFor="social-id"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Inquiry For
              </label>
              <input
                type="text"
                name="value"
                id="social-id"
                className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
                defaultValue={storedEntry?.value}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* 9. Number of years client has been trading */}

          {storedEntry?.productQuery && (
            <div className="mt-3">
              <label
                htmlFor="productQuery"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Product Query
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={storedEntry?.productQuery}
                onChange={handleInputChange}
                id="productQuery"
                className="outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              />
            </div>
          )}

          {storedEntry?.group2 && (
            <div className="mt-3">
              <label
                htmlFor="group2"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Inquiry For{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <textarea
                type="text"
                defaultValue={storedEntry?.group2}
                onChange={handleInputChange}
                id="group2"
                className="overflow-hidden resize-none h-28 outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              />
            </div>
          )}

          {storedEntry?.message && (
            <div className="mt-3">
              <label
                htmlFor="message"
                className="py-1 text-base text-gray-500 inline-block normal-case"
              >
                Message{" "}
                <span className="text-xl font-bold text-red-500">*</span>
              </label>
              <textarea
                type="text"
                defaultValue={storedEntry?.message}
                onChange={handleInputChange}
                id="message"
                className="overflow-hidden resize-none h-28 outline-0 border border-slate-300 w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              />
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className=" py-1 px-4 rounded-sm mx-4 bg-blue-800 text-white my-7 cursor-pointer"
          >
            Update now
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactPage;
