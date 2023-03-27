import React from "react";
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { FiDownload } from "react-icons/fi";
import { RiInformationLine } from "react-icons/ri";

const ChartThree = () => {
  const data = [
    {
      name: "Page A",
      uv: 5,
      pv: 20,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 250,
      pv: 250,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1800,
      pv: 1800,
      amt: 5000,
    },
  ];
  return (
    <>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-7 py-7 mb-12">
        <div className="sm:flex items-center justify-between border p-7 rounded-lg">
          <div className="flex items-start flex-col justify-start">
            <h5 className="flex items-center justify-start uppercase text-primary text-lg">
              ESTIMATED EARNINGS
              <span>
                <RiInformationLine className="ml-2 text-xl" />
              </span>
            </h5>
            <h4 className="text-xl font-semibold text-neutral">€23.57</h4>
          </div>
          <div>
            <ResponsiveContainer width={200} height={120}>
              <ComposedChart data={data}>
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#FAA020"
                  barSize={10}
                  strokeWidth={5}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex items-center justify-between  border  p-7 rounded-lg">
          <div>
            <h5 className=" uppercase text-primary text-lg">
              ESTIMATED EARNINGS
            </h5>
            <h4 className="text-xl font-semibold text-neutral">298</h4>
          </div>
          <div className="text-8xl text-primary">
            <ResponsiveContainer width={200} height={120}>
              <ComposedChart data={data}>
                <XAxis dataKey="name" />
                <Bar dataKey="pv" barSize={20} fill="#81b9cc" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={150} fill="#81b9cc" />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#FAA020"
            barSize={10}
            strokeWidth={5}
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* chart info */}
      <div className=" py-7">
        <div className="md:flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className=" flex items-center justify-start">
              <span className="w-4 h-4 inline-block bg-warning rounded-full mr-3"></span>
              <span> Earning</span>
            </div>

            <div className=" flex items-center justify-start ml-4">
              <span className="w-4 h-4 inline-block bg-[#81b9cc] rounded-full  mr-3"></span>
              <span> Download</span>
            </div>
          </div>
          <span className="text-primary flex items-center justify-start font-bold cursor-pointer">
            <FiDownload className="mr-2" /> Export data
          </span>
        </div>
      </div>
    </>
  );
};

export default ChartThree;
