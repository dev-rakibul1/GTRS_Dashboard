import exportFromJSON from "export-from-json";
import React, { useContext, useState } from "react";
import { RxDownload } from "react-icons/rx";
import { SlArrowLeft, SlPencil, SlTrash } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/authProvider/AuthProvider";
import DeletePopup from "../../../shared/DeletePopup";

const DashboardUserHandleBtn = ({ user }) => {
  const { users } = useContext(AuthContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleExportUser = () => {
    const data = [user];

    // Set the filename and export type
    const fileName = "exported_data";
    const exportType = exportFromJSON.types.csv;

    // Export the data
    exportFromJSON({ data, fileName, exportType });
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
          {/* Download btn */}
          <div className="tooltip" data-tip="Export user">
            <button
              className=" py-1 px-2 rounded-sm mx-1 text-gray-500"
              onClick={handleExportUser}
            >
              <RxDownload />
            </button>
          </div>
          {/* update btn */}
          {users?.data?.role === "super_admin" ||
          users?.data?.role === "admin" ||
          users?.data?.role === "editor" ? (
            <div className="tooltip" data-tip="Edit">
              <Link to={`/review/update-entry/${user?._id}`}>
                <button className=" py-1 px-2 rounded-sm mx-1 text-gray-500">
                  <SlPencil />
                </button>
              </Link>
            </div>
          ) : null}

          {/* delete btn */}
          {users?.data?.role === "super_admin" ||
          users?.data?.role === "admin" ? (
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
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DashboardUserHandleBtn;
