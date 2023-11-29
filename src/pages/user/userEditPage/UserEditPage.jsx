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
        `https://gtrs.vercel.app/api/v1/user/single-user-edit/${storedEntry._id}`,
        newEntry,
        {
          headers: {
            authorization: `${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        setShowToast(true);
        navigate(`/user/single-user-review/${storedEntry?._id}`);
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
    newValue[field] = oldValue.toLowerCase();
    setNewEntry(newValue);

    console.log(newValue);
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

          {/* 5. Judicial Country */}
          <div className="mt-3">
            <label
              htmlFor="role"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Role (Four type of role{" "}
              <mark>super_admin, admin, editor & user</mark>)
            </label>
            <input
              type="text"
              name="role"
              id="role"
              defaultValue={storedEntry?.role}
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
              Phone Number{" "}
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
        </div>

        <div className="my-7 text-center">
          <button
            type="submit"
            className=" py-1 px-4 rounded-sm mx-4 bg-blue-800 text-white"
          >
            Update user
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactPage;
