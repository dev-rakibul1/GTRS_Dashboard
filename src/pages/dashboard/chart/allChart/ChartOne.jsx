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
import { GiInfo } from "react-icons/gi";
import { RiInformationLine } from "react-icons/ri";

const ChartOne = () => {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Page G",
      uv: 140,
      pv: 80,
      amt: 2900,
    },

    {
      name: "Page H",
      uv: 2500,
      pv: 980,
      amt: 4500,
    },
    {
      name: "Page I",
      uv: 1200,
      pv: 780,
      amt: 1800,
    },
    {
      name: "Page J",
      uv: 2000,
      pv: 1080,
      amt: 2000,
    },
    {
      name: "Page K",
      uv: 2500,
      pv: 780,
      amt: 3500,
    },
    {
      name: "Page L",
      uv: 700,
      pv: 1380,
      amt: 2300,
    },
    {
      name: "Page M",
      uv: 2400,
      pv: 880,
      amt: 4500,
    },
    {
      name: "Page N",
      uv: 1500,
      pv: 2080,
      amt: 1700,
    },
    {
      name: "Page O",
      uv: 900,
      pv: 880,
      amt: 100,
    },
    {
      name: "Page P",
      uv: 1800,
      pv: 620,
      amt: 1800,
    },
    {
      name: "Page Q",
      uv: 3200,
      pv: 880,
      amt: 2100,
    },
    {
      name: "Page R",
      uv: 100,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Page S",
      uv: 800,
      pv: 200,
      amt: 2800,
    },
    {
      name: "Page T",
      uv: 1540,
      pv: 780,
      amt: 1200,
    },
    {
      name: "Page U",
      uv: 700,
      pv: 980,
      amt: 1700,
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
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
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
          <div className=" text-primary">
            <ResponsiveContainer width={200} height={120}>
              <ComposedChart data={data}>
                <Bar dataKey="pv" barSize={5} fill="#81b9cc" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400} style={{ zIndex: "-1" }}>
        <ComposedChart data={data}>
          {/* <XAxis dataKey="name" /> */}
          <XAxis
            dataKey="name"
            label={{ value: "Months", position: "right", labelOffset: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={20} fill="#81b9cc" />
          <Line type="monotone" dataKey="uv" stroke="#FAA020" />
        </ComposedChart>
      </ResponsiveContainer>

      {/* chart info */}
      <div className=" py-7">
        <div className="md:flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className=" flex items-center justify-start">
              <span className="w-4 h-4 inline-block bg-warning rounded-full mr-3"></span>
              <span>Estimated earning</span>
            </div>

            <div className=" flex items-center justify-start ml-4">
              <span className="w-4 h-4 inline-block bg-[#81b9cc] rounded-full  mr-3"></span>
              <span>Estimated earning</span>
            </div>
          </div>
          <span className="text-primary flex items-center justify-start font-bold cursor-pointer">
            <FiDownload className="mr-2" /> Export data
          </span>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <strong className="flex items-center justify-start">
          <GiInfo className="mr-2" /> Estimated earnings:
        </strong>
        <span className="ml-4">Month-to-date estimate.</span>
      </div>
    </>
  );
};

export default ChartOne;
