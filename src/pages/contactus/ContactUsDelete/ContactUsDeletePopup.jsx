import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactUsDeletePopup({ isOpen, onClose, user }) {
  const [deleteEntry, setDeleteEntry] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleDeleteEntry = async () => {
    setDeleteEntry(!deleteEntry);

    try {
      const response = await axios.delete(
        `https://gtrs.vercel.app/api/v1/contact-us/review-contact-us/remove-entry/${user?._id}`
      );

      if (response.data.success) {
        setShowToast(true);
        navigate("/contact-us");
      } else {
        alert("Entry deletion failed!!!");
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-md mx-auto my-6">
        {/* Popup content */}
        <div className="relative flex flex-col w-full bg-white border rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
            <h3 className="text-2xl font-bold text-gradient">
              Delete {user?.clientRegisteredName}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/* Content */}
          <div className="relative p-6 flex-auto  justify-start items-center flex">
            {/* Your popup content here */}
            <div className="flex justify-start items-center flex-col">
              <h4 className="font-bold">
                Are you sure delete the{" "}
                <span className="text-blue-800">
                  {" "}
                  {user?.clientRegisteredName}
                </span>
              </h4>
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
            <button
              className=" py-1 px-4 rounded-sm mx-2 bg-blue-800 text-white"
              type="button"
              onClick={handleDeleteEntry}
            >
              Confirm
            </button>
            <button
              className=" py-1 px-4 rounded-sm mx-2 bg-blue-800 text-white"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsDeletePopup;
