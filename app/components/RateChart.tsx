"use client";
import { Raleway, Inter } from "next/font/google";
import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Area,
} from "recharts";
const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const data = [
  { name: "Jan", pv: 300 },
  { name: "Feb", pv: 400 },
  { name: "Mar", pv: 250 },
  { name: "Apr", pv: 140 },
  { name: "May", pv: 100 },
  { name: "Jun", pv: 200 },
  { name: "Jul", pv: 350 },
  { name: "Aug", pv: 250 },
  { name: "Sep", pv: 110 },
  { name: "Oct", pv: 200 },
  { name: "Nov", pv: 400 },
  { name: "Dev", pv: 100 },
];
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${inter.className} bg-white p-2 shadow-md rounded-md"`}>
        <p className="text-[7px] text-[#7A7A7A]">
          18 {`${label}`}, 2024 10:53am
        </p>
        <div className="flex gap-1">
          <p className="font-medium text text-black">{`220,342.76`}</p>
          <p
            className={`text-[8px] p-0.5 bg-[#E0F0E4] ${
              payload[0].value > 0 ? "text-[#377E36]" : "text-red-500"
            }`}
          >
            {`+5.3%`}
          </p>
        </div>
      </div>
    );
  }
  return null;
};
export default function PureChartComponent() {
  return (
    <div
      className={`${raleway.className} px- py-3 lg:-mt-32 bg-white border border-border-line xl:max-w-lg lg:max-w-sm rounded-[20px] w-full flex flex-col gap-6 items-center`}
    >
      <div className="flex justify-between items-center gap-40 w-full px-6">
        <div>
          <p className="text-xs text-[#242424]">Live Exchange Rate</p>
          <h3 className=" text-lg font-semibold text-black">
            1 USD = 1780 NAIRA
          </h3>
        </div>
        <div className="flex space-x-2"></div>
      </div>
      <ResponsiveContainer width="100%" height={300} className="w-full">
        <ComposedChart data={data}>
          <CartesianGrid
            strokeDasharray="3 9"
            vertical={false}
            horizontalPoints={[0, 100, 200, 500, 1000]}
            stroke="#ddd"
          />
          <XAxis
            dataKey="name"
            padding={{ left: 10, right: 20 }}
            tick={{ fontSize: 10, fill: "#999" }}
            interval={2}
            axisLine={false}
            tickLine={false}
            strokeDasharray=""
            display="none"
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#000" }}
            ticks={[-1000, -500, 100, 200, 300, 500, 700, 1000]}
            domain={[0, 1000]}
            tickFormatter={(value) => {
              if (
                value === 0 ||
                value === 100 ||
                value === 100 ||
                value === 500 ||
                value === 1000
              ) {
                return `$${value}`;
              }
              if (value < 0) {
                return "";
              }
              return "";
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ backgroundColor: "transparent", border: "none" }}
            cursor={{ fill: "transparent" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="100" stopColor="#3d0dcd" stopOpacity={1} />
              <stop offset="0%" stopColor="#ADB7F9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#3642CA"
            fill="url(#gradient)"
            strokeWidth={1}
            baseValue="dataMin"
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#3d0dcd"
            strokeWidth={0.8}
            fill="url(#gradient)"
            dot={false}
            activeDot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
