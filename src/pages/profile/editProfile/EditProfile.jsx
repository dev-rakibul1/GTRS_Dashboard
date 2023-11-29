import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../components/authProvider/AuthProvider";
import Spinner from "../../../shared/Spinner";
import { uploadImageToImgBB } from "../../../utility/uploadImageToImgBB";

const EditProfile = () => {
  const { users } = useContext(AuthContext);
  const user = users?.data;
  const editData = user;
  const storedEntry = editData;
  const [newEntry, setNewEntry] = useState(user);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputUpdate = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      // get image host ImgBB URL
      const imgBBImageUrl = await uploadImageToImgBB(newEntry.profileImage);

      const eventData = event.target;
      const updateData = {
        firstName: eventData.firstName.value,
        lastName: eventData.lastName.value,
        email: eventData.email.value,
        phone: eventData.phone.value,
        role: eventData.role.value,
        profileImage: imgBBImageUrl,
      };

      console.log(updateData);

      const response = await axios.patch(
        `https://gtrs.vercel.app/api/v1/user/single-user-edit/${storedEntry._id}`,
        updateData,
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
        navigate(`/profile`);
        window.location.reload();
      } else {
        alert("Single entry update fail!!!");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    if (field === "profileImage") {
      const profileImage = event.target.files[0];

      // Handle other properties as needed
      setNewEntry({
        ...newEntry,
        [field]: profileImage,
        imageUrl: profileImage ? URL.createObjectURL(profileImage) : "",
      });
    } else {
      setNewEntry({
        ...newEntry,
        [field]: value,
      });
    }
  };

  return (
    <div className="px-2">
      <form onSubmit={handleInputUpdate}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7">
          {/* 1. First Name */}
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
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300 border-slate-300`}
            />
          </div>

          {/* 2. Last Name */}
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

          {/* 3. Email Address */}
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

          {/* 4. Role (read-only) */}
          <div className="mt-3">
            <label
              htmlFor="role"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Role (Role is not editable)
            </label>
            <input
              type="text"
              name="role"
              id="role"
              readOnly
              defaultValue={storedEntry?.role}
              onChange={handleInputChange}
              className={`outline-0 border w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
            />
          </div>

          {/* 5. Phone Number */}
          <div className="mt-3">
            <label
              htmlFor="office-phone"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Phone Number
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

          {/* 6. Profile pic */}
          <div className="mt-3">
            <label
              htmlFor="profileImage"
              className="py-1 text-base text-gray-500 inline-block normal-case"
            >
              Profile image
            </label>
            <img src={newEntry.imageUrl || ""} alt="" />
            <input
              type="file"
              name="profileImage"
              id="profileImage"
              onChange={handleInputChange}
              className={`outline-0 border  w-full p-2 rounded-sm focus:border-blue-500 transition-all duration-300  border-slate-300 `}
            />
          </div>
        </div>

        <div className="my-7 text-center">
          <button
            type="submit"
            className="py-1 px-4 rounded-sm mx-4 bg-blue-800 text-white"
          >
            {loading ? "Updating..." : "Update user"}
          </button>
        </div>
      </form>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-75 bg-gray-200 z-50">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default EditProfile;
