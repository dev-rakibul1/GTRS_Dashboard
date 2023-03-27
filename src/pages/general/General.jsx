import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import Chart from "../dashboard/chart/Chart";

const General = () => {
  return (
    <div className="py-7">
      <div className="general-chart-comp">
        {/* status */}
        <div className="status sm:flex items-center justify-between my-4 sm:border-b sm:border-gray-300">
          <h5 className="sm:text-gray-700 sm:border-b border-gray-700 pb-4">
            Status
          </h5>
          <div className="status text-right flex items-end justify-end flex-col">
            <p className="">Avg. price per download:</p>
            <h5 className="flex items-center justify-start text-gray-700 ">
              0.079€{" "}
              <HiOutlineInformationCircle className="ml-2 cursor-pointer" />
            </h5>
          </div>
        </div>

        {/* Performance */}
        <div className="performance md:flex items-center justify-between">
          <div>
            <h5 className="text-gray-700  pb-4">Performance</h5>
            <p className="-mt-2">
              Earnings for this month are an estimate based on data from
              previous months. Actual earnings will be displayed at the end of
              the month.
            </p>
          </div>

          <div>
            <button className="border border-gray-300 py-1 px-4">All</button>
          </div>
        </div>

        {/* chat tabs and date piker */}
        <div className="chart-date-piker">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default General;
