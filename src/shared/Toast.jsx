import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Toast = ({ setShowToast, showToast }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeToast = () => {
    setIsVisible(false);
    setShowToast(false);
  };

  console.log(showToast);

  return (
    isVisible && (
      <div
        className={`bg-red-100 text-red-700 font-normal px-7 py-4 rounded shadow-md fixed top-[-10%] right-5 text-sm flex items-center justify-between transition-all  duration-1000 z-10 mt-16 ${
          showToast === true && "toast-visibl"
        }`}
      >
        <span>Single entry update success!!!</span>
        <button className="text-white hover:text-red-500" onClick={closeToast}>
          <RxCross1 className="text-xl text-red-600 ml-4" />
        </button>
      </div>
    )
  );
};

export default Toast;
