"use client";

import React from "react";
import {
  ArrowUpToLine,
  ArrowLeftRight,
  ArrowDownToLine,
  ArrowDownLeft,
} from "lucide-react";
import {
  Bitcoin,
  DiamondDollar,
  Ethereum,
  Solana,
  Stark,
  TokenIcon,
} from "@/public";
import Image from "next/image";
import { Krona_One, Raleway, Inter } from "next/font/google";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const actions = [
  { name: "Send", Icon: ArrowDownLeft },
  { name: "Withdraw", Icon: ArrowUpToLine },
  { name: "Top Up", Icon: ArrowDownToLine },
  { name: "Swap", Icon: ArrowLeftRight },
];

const accounts = [
  {
    name: "e USD",
    Icon: DiamondDollar,
    amount: 123567.1,
    rating: 0.33,
    balance: 10000,
  },
  { name: "STRK", Icon: Stark, amount: 1290.25, rating: 0.52, balance: 1521 },
  { name: "e USD", Icon: Bitcoin, amount: 0, rating: 100987.25, balance: 0.0 },
  { name: "e USD", Icon: Solana, amount: 0, rating: 206.01, balance: 0.0 },
  {
    name: "ETH",
    Icon: Ethereum,
    amount: 0.000312,
    rating: 3626.86,
    balance: 500,
  },
  { name: "e USD", Icon: TokenIcon, amount: 0, rating: 2.36, balance: 0.0 },
];

const ExchangeRate = () => {
  const ActionCard = ({
    name,
    Icon,
  }: {
    name: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }) => {
    return (
      <button className="bg-[#EEEFFF] rounded-xl text-nowrap px-5 py-2.5 flex items-center justify-between text-blue-600 font-medium">
        <span className="mt-0.5">{name}</span>
        <Icon className="w-4 h-4" />
      </button>
    );
  };

  const AccountCard = ({
    name,
    Icon,
    amount,
    rating,
    balance,
  }: {
    name: string;
    Icon: string;
    amount: number;
    rating: number;
    balance: number;
  }) => {
    return (
      <div className="flex items-center justify-between border border-purple-100 rounded-lg p-4">
        <div className="flex items-center gap-4">
          <Image src={Icon} alt={name} />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-base text-gray-600">
              ${rating.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{amount.toLocaleString()}</p>
          <p className="text-[10px] text-gray-500">
            ${balance.toLocaleString()}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-4 px-8 border border-border-line rounded-[20px] flex flex-col gap-6 w-full h-fit">
      <div className={`flex flex-col gap-2`}>
        <span className="text-xs font-medium text-[#666666]">Total Balance</span>
        <div className="flex items-center gap-3.5">
          <p
            className={`${raleway.className} flex items-center text-4xl font-medium`}
          >
            $11,521.30{" "}
          </p>
          <span
            className={`${inter.className} rounded font-medium text-[10px] px-1 py-0.5 w-fit bg-[#E0F0E4] text-[#377E36]`}
          >
            +5.3%
          </span>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="flex flex-col gap-4">
        <section
          className={`${krona.className} flex items-center gap-2 text-[10px]`}
        >
          {actions.map((action) => (
            <ActionCard
              key={action.name}
              name={action.name}
              Icon={action.Icon}
            />
          ))}
        </section>
        <hr className=" bg-border-line" />
        {/* Account Details Section */}
        <div className={`${raleway.className} flex flex-col gap-2`}>
          <div className="flex justify-between items-center text-xs font-medium">
            <p>Account</p>
            <button className="text-[#767676]">+ New Account</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {accounts.map((account) => (
              <AccountCard
                key={account.name + account.amount}
                name={account.name}
                Icon={account.Icon}
                amount={account.amount}
                rating={account.rating}
                balance={account.balance}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRate;
