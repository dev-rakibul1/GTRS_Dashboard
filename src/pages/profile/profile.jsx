import React, { useContext } from "react";
import {
  FaEnvelope,
  FaLock,
  FaPhone,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
const profilePic = "/image/profile.png";

const Profile = () => {
  const { users } = useContext(AuthContext);
  const user = users?.data;

  return (
    <div className="bg-white">
      <div className="max-w-md mx-auto  p-6  py-16">
        {/* Step 1: 1st row - Profile picture, user role, and edit button */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-1/4">
            <img
              src={
                !users?.data?.profileImage
                  ? profilePic
                  : users?.data?.profileImage
              }
              alt="Profile"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <div className="text-xl font-bold">Rule: {users?.data?.role}</div>
            <div className="mt-2">
              <Link to={`/edit-profile/${user._id}`}>
                <button
                  className="text-blue-500"
                  onClick={() => console.log("Edit clicked")}
                >
                  <FaUserEdit className="inline-block mr-1" /> Edit
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Step 2: 2nd row - User details */}
        <div>
          <div className="mb-4 flex items-center">
            <FaUser className="mr-2" /> {users?.data?.firstName}{" "}
            {users?.data?.lastName}
          </div>

          <div className="mb-4 flex items-center">
            <FaEnvelope className="mr-2" /> {users?.data?.email}
          </div>
          <div className="mb-4 flex items-center">
            <FaPhone className="mr-2" /> {users?.data?.phone}
          </div>

          <Link to={`/password-change`}>
            <button
              className="text-blue-500"
              onClick={() => console.log("Edit clicked")}
            >
              <FaLock className="inline-block mr-1" /> Change password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
