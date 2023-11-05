import React, { useState } from "react";
import { SlArrowLeft, SlPencil, SlTrash } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import ContactUsDeletePopup from "../ContactUsDelete/ContactUsDeletePopup";

const ContactUsBtn = () => {
  const data = useLoaderData();
  const storedEntry = data?.data;

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
          <Link to="/contact-us">
            <button className=" py-1 px-2 rounded-sm mx-1 text-gray-500">
              <SlArrowLeft />
            </button>
          </Link>
        </div>
        <div className="">
          {/* update btn */}
          <div className="tooltip" data-tip="Edit">
            <Link to={`/review-contact-us/${storedEntry?._id}`}>
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
            <ContactUsDeletePopup
              isOpen={isPopupOpen}
              onClose={handleClosePopup}
              user={storedEntry}
              // user={user}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsBtn;
