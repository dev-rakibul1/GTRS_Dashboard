import React, { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import { NAVBAR_CONTEXT } from "../../layout/DashboardLayout";
import "./UploaderTabs.css";

function UploaderTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const { handleFileUploadToggle } = useContext(NAVBAR_CONTEXT);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-full mx-auto">
      <div className="tabs ">
        {/* upload sidebar close */}
        <div
          className="upload-sidebar-close text-2xl"
          onClick={handleFileUploadToggle}
        >
          <span className="w-12 h-12 flex items-center justify-center text-black cursor-pointer hover:bg-[#ecebe5]">
            <FiX />
          </span>
        </div>

        <div className="flex items-center justify-between max-w-full text-neutral">
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            Upload files
          </div>
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            Synchronize FTP
          </div>
        </div>

        {/* tabs information */}
        <div className="tab-content mt-7">
          {activeTab === 0 && (
            // bank payment
            <div className="freepik-container">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam earum is
              </p>
            </div>
          )}
          {activeTab === 1 && (
            // mobile payment
            <div className="freepik-container">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid pariatur similique quos! Animi alias dignissimos ullam a
                illo quia rem labore, exercitationem totam quae saepe inventore,
                dicta fugiat necessitatibus quibusdam.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploaderTabs;
