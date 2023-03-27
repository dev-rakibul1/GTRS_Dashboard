import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import ChartOne from "./allChart/ChartOne";
import ChartThree from "./allChart/ChartThree";
import ChartTwo from "./allChart/ChartTwo";
import "./Chart.css";

import "react-datepicker/dist/react-datepicker.css";

function Chart() {
  const [activeTab, setActiveTab] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-full mx-auto" style={{ zIndex: -1 }}>
      <div className="uploader-tabs">
        <div className="lg:flex items-center justify-between my-12">
          <div className="border-b border-gray-300 inline-block my-7">
            <div
              className={`tab  text-lg ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleClick(0)}
            >
              Month to date
            </div>
            <div
              className={`tab  text-lg ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              Last month
            </div>

            <div
              className={`tab  text-lg ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              Year to date
            </div>
          </div>

          {/* date picker */}
          <div className="flex items-center justify-start border border-gray-300 py-2 px-7 rounded-md bg-[#ECEBE5]">
            <span className="mr-4 text-2xl">
              <MdCalendarMonth />
            </span>
            <DatePicker
              className="bg-[#ECEBE5]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="Pp"
              locale="es"
              monthsShown={2}
            />
          </div>
        </div>

        {/* tabs information */}
        <div className="tab-content mt-7">
          {activeTab === 0 && (
            // bank payment
            <div className="freepik-container">
              <div className="chart-one text-black">
                <ChartOne />
              </div>
            </div>
          )}
          {activeTab === 1 && (
            // mobile payment
            <div className="freepik-container">
              <div className="chart-two text-black">
                <ChartTwo />
              </div>
            </div>
          )}

          {activeTab === 2 && (
            // mobile payment
            <div className="freepik-container">
              <div className="chart-three text-black">
                <ChartThree />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chart;
