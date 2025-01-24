"use client";
import { Raleway } from "next/font/google";
import React, { useState } from "react";
import {
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";

const raleway = Raleway({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
const data = [
  { month: "Jan", revenue: 5000, expense: 2500 },
  { month: "Feb", revenue: 10000, expense: 7500 },
  { month: "Mar", revenue: 7000, expense: 3000 },
  { month: "Apr", revenue: 2000, expense: 1000 },
  { month: "May", revenue: 6000, expense: 1000 },
  { month: "Jun", revenue: 4000, expense: 1000 },
  { month: "Jul", revenue: 5000, expense: 3000 },
  { month: "Aug", revenue: 8000, expense: 8000 },
  { month: "Sep", revenue: 4000, expense: 3500 },
  { month: "Oct", revenue: 9000, expense: 4000 },
  { month: "Nov", revenue: 5000, expense: 2000 },
  { month: "Dec", revenue: 6000, expense: 3000 },
];
const stats = [
  { value: "721", label: "Total number of Transactions" },
  { value: "$64,00.00", label: "Total Amount spent" },
  { value: "$2,50,254", label: "Revenue" },
  { value: "12,185hr", label: "Total time spent" },
];
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md p-2 rounded">
        <p className="text-sm">{payload[0].payload.month}</p>
        <p className="font-bold">{`$${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const TransactionChart = () => {
  const [activeTab, setActiveTab] = useState("Year");

  return (
    <div
      className={`${raleway.className} px-6 py-3 bg-white border border-border-line rounded-[20px] w-full lg:max-w-md xl:max-w-3xl flex flex-col items-center`}
    >
      <div className="flex justify-between items-center  w-full mb-4">
        <h3 className="font-medium text-">Transaction Statistics</h3>
        <div className="flex space-x-2">
          {["Week", "Month", "Year"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-1 rounded font-semibold text-[8px] duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-[#ECD1FF] text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250} className="text-[10px]">
        <ComposedChart data={data} barSize={10}>
          <CartesianGrid horizontal vertical={false} stroke="#B7C5F8" />
          <XAxis
            dataKey="month"
            stroke="#3642CA"
            tick={{ fill: "black", strokeWidth: 1 }}
          />
          <YAxis
            stroke="#3642CA"
            tick={{ fill: "black", strokeWidth: 1 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            content={CustomTooltip}
            wrapperStyle={{ backgroundColor: "transparent", border: "none" }}
            cursor={{ fill: "transparent" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#969ED9" stopOpacity={1} />
              <stop offset="100%" stopColor="#F072F5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#F072F5"
            fill="url(#gradient)"
            strokeWidth={1}
          />
          <Bar
            dataKey="revenue"
            fill="#3642CA"
            radius={[16, 16, 0, 0]}
            barSize={12}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex justify-center items-center border-[1.3px] border-border-line rounded-b-lg  bg-white ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`xl:w-[120px] flex flex-col items-center px-2 ${
              raleway.className
            } ${
              index !== stats.length - 1 ? "border-r-2 border-border-line" : ""
            }`}
          >
            <p className="text-xs font-bold text-primary">{stat.value}</p>
            <p className="text-[8px] text-wrap text-primary text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionChart;
