import React, { useState } from "react";
import { SlArrowLeft, SlPencil, SlTrash } from "react-icons/sl";
import { Link } from "react-router-dom";
import DeletePopup from "../../../shared/DeletePopup";

const DashboardUserHandleBtn = ({ user }) => {
  // console.log(user);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="btn-group  bg-white pb-3 flex justify-between items-center w-full  mb-7 border-b z-10">
        {/* review btn */}
        <div className="tooltip" data-tip="Back">
          <Link to="/">
            <button className=" py-1 px-2 rounded-sm mx-1 text-gray-500">
              <SlArrowLeft />
            </button>
          </Link>
        </div>
        <div className="">
          {/* update btn */}
          <div className="tooltip" data-tip="Edit">
            <Link to={`/review/update-entry/${user?._id}`}>
              <button className=" py-1 px-2 rounded-sm mx-1 text-gray-500">
                <SlPencil />
              </button>
            </Link>
          </div>
          {/* delete btn */}
          <div className="tooltip" data-tip="Delete">
            <button
              className=" py-1 px-2 rounded-sm mx-1 text-gray-500"
              onClick={handleOpenPopup}
            >
              <SlTrash />
            </button>
            <DeletePopup
              isOpen={isPopupOpen}
              onClose={handleClosePopup}
              user={user}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUserHandleBtn;
