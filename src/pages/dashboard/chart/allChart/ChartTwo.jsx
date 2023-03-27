import React from "react";
import { FiDownload } from "react-icons/fi";
import { RiInformationLine } from "react-icons/ri";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page F",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page G",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page H",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },

  {
    name: "Page I",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page J",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page K",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },

  {
    name: "Page L",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page M",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page N",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page O",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const ChartTwo = () => {
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
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <Bar dataKey="uv" barSize={5} fill="#81b9cc" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#81b9cc" />
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
              <span> Earning</span>
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

export default ChartTwo;
