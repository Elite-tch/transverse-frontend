import { Chart } from "@/public";
import Image from "next/image";
import React from "react";
import { Inter, Raleway } from "next/font/google";
import { Plus } from "lucide-react";

const inter = Inter({
  weight: ["400", '600'],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const beneficiaries = [
  { id: 1, name: "Lizzie Benson" },
  { id: 2, name: "John Bernard" },
  { id: 3, name: "Ruth Kada" },
  { id: 4, name: "Lexy Ugo" },
  { id: 5, name: "Maria Wonder" },
  { id: 6, name: "Shantel Peters" },
  { id: 7, name: "Raphael Bassey" },
  { id: 8, name: "Raphael Bassey" },
];

export default function GoalsAndBeneficiaries() {
  return (
    <div className="flex justify-between gap-9">
      <section
        className={`${raleway.className} px-2 py-3 border border-border-line rounded-[20px] flex flex-col w-1/2 items-center h-fit gap-6`}
      >
        <p className="text-xs font-medium">Your Goals</p>
        <div className="flex flex-col gap-2.5 items-center">
          <div className="relative">
              <Image src={Chart} alt="Chart" className="pl-4" />
              <span className={`${inter.className} text-[26px] font-semibold absolute right-[72px] -bottom-3 `}>600</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[9px]">
              This is a chart showing all your Goals achieved.
            </p>
            <span className="text-[#7A7A7A] text-[8px]">
              Last updated 5 minute ago
            </span>
          </div>
          <button className="bg-[] text-[8px] w-fit py-1 px-1.5 rounded text-[#7A7A7A] bg-[#EAEAEA]">
            Check all your goals
          </button>
        </div>
      </section>
      <section
        className={`${raleway.className} w-1/2 px-3 py-2.5 border border-border-line rounded-[20px] flex flex-col items-center h-fit gap-2`}
      >
        <div className="px-2 py-1.5 flex justify-between w-full items-center border-b border-gray-100">
          <h2 className="text-xs font-medium">Beneficiaries</h2>
          <button className="text-[10px] py-1.5 px-1 font-normal border border-border-line flex gap-1 ">
            Add <Plus className=" h-3 w-3" />
          </button>
        </div>
        <div className="max-h-[150px] relative flex flex-col w-full gap-2 overflow-y-auto custom-scrollbar">
          {beneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.id}
              className="px-3  flex justify-between gap-8 w-full items-center border-t border-border-line first:border-0 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-[10px]">
                  {beneficiary.id}.
                </span>
                <span className="text-xs">{beneficiary.name}</span>
              </div>
              <button className="text-gray-500 text-[8px] hover:bg-transparent">
                Remove
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
