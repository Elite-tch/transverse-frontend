"use client";

import {
  ListFilter,
  ArrowUpDown,
  MoreHorizontal,
  Plus,
  ArrowUp,
} from "lucide-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500"],
  subsets: ["latin"],
});

interface Activity {
  id: string;
  type: "Add" | "Send";
  name: string;
  date: string;
  amount: number;
  currency: string;
  status: "Success" | "Pending";
  method: string;
  cardLastFour: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "Add",
    name: "Prof Isaac Larry",
    date: "Dec 18th, 2024",
    amount: 500.0,
    currency: "USD",
    status: "Success",
    method: "Credit Card",
    cardLastFour: "3512",
  },
  {
    id: "2",
    type: "Add",
    name: "Prof Isaac Larry",
    date: "Dec 18th, 2024",
    amount: 500.0,
    currency: "USD",
    status: "Success",
    method: "Credit Card",
    cardLastFour: "3512",
  },
  {
    id: "3",
    type: "Send",
    name: "Abayomi Mi",
    date: "Dec 18th, 2024",
    amount: 500.0,
    currency: "USD",
    status: "Pending",
    method: "Credit Card",
    cardLastFour: "3512",
  },
  {
    id: "4",
    type: "Add",
    name: "Prof Isaac Larry",
    date: "Dec 18th, 2024",
    amount: 500.0,
    currency: "USD",
    status: "Pending",
    method: "Credit Card",
    cardLastFour: "3512",
  },
  {
    id: "5",
    type: "Add",
    name: "Prof Isaac Larry",
    date: "Dec 18th, 2024",
    amount: 500.0,
    currency: "USD",
    status: "Success",
    method: "Credit Card",
    cardLastFour: "3512",
  },
];

export function RecentActivities() {
  return (
    <div
      className={` ${raleway.className} relative w-full rounded-3xl border border-border-line overflow-hidden`}
    >
      <div className="">
        <div className="flex items-center justify-between px-9 pt-3 pb-2 border-b border-border-line">
          <h2 className="text-xs font-medium">Recent Activities</h2>
          <div className="flex items-center gap-8">
            <button className="shadow-custom-purple px-3 py-1.5 text-[10px] flex items-center font-normal">
              <ListFilter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="shadow-custom-purple px-3 py-1.5 text-[10px] flex items-center font-normal">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </button>
            <button className="shadow-custom-purple py-1.5 px-2.5">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="min-w-[160px] max-h-[300px] text-xs  ">
          <div className="flex justify-between border-b px-5 xl:px-9 font-medium text-[#666666] py-1.5 border-border-line">
            <div>Type</div>
            <div className="grid grid-cols-3 gap-5 xl:gap-12 ">
              <div>Amount</div>
              <div>Status</div>
              <div>Method</div>
            </div>
          </div>

          <div className="custom-scrollbar ">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex justify-between gap-32 first:border-0 border-t px-3 xl:px-9 pt-1.5 pb-2.5 border-border-line"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E0F0E4] flex items-center justify-center">
                    {activity.type === "Add" ? (
                      <Plus className="h-4 w-4 text-[#377E36]" />
                    ) : (
                      <ArrowUp className="h-4 w-4 text-[#377E36]" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-xs">{activity.name}</div>
                    <div className="text-[10px] text-[#666666] text-nowrap">
                      {activity.type} • {activity.date}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 text-[10px] gap-8 items-center">
                  <div className="text-[10px]">
                    <div className="font-medium">
                      ${activity.amount.toFixed(2)}
                    </div>
                    <div className=" text-[#666666]">{activity.currency}</div>
                  </div>
                  <div>
                    <span
                      className={` text-[8.6px] p-0.5
                          ${
                            activity.status === "Success"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-gray-50 text-gray-700 border-gray-200"
                          }
                        `}
                    >
                      {activity.status}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{activity.method}</div>
                    <div className="text- text-[#666666]">
                      **** {activity.cardLastFour}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
