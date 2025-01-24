"use client";
import { useState } from "react";
import TokenDisplay from "./TokenDisplay";
import { Token } from "./WithdrawModal";
import { Plus } from "lucide-react";

interface SelectTokenProps {
  onNext: (token: Token) => void;
}
const tokens: Token[] = [
  {
    tokenIcon: "/token.svg",
    name: "e USD",
    balance: 123567.1,
    usdValue: 10000.0,
    priceFeed: 0.33,
  },
  {
    tokenIcon: "/strk.svg",
    name: "STRK",
    balance: 12987.556,
    usdValue: 1521.0,
    priceFeed: 0.52,
  },
  {
    tokenIcon: "/btc.svg",
    name: "BTC",
    balance: 0,
    usdValue: 0.0,
    priceFeed: 100987.25,
  },
  {
    tokenIcon: "/sol.svg",
    name: "SOL",
    balance: 0,
    usdValue: 0.0,
    priceFeed: 206.01,
  },
  {
    tokenIcon: "/eth.svg",
    name: "ETH",
    balance: 0.000313,
    usdValue: 500,
    priceFeed: 3626.86,
  },
  {
    tokenIcon: "/world.svg",
    name: "WLD",
    balance: 0,
    usdValue: 0.0,
    priceFeed: 2.36,
  },
];

const SelectToken = ({ onNext }: SelectTokenProps) => {
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleTokenClick = (token: Token) => {
    setSelectedToken(token);
  };

  return (
    <div className="w-full h-full ">
      <div className="w-full flex justify-between items-center my-5">
        <p className="font-medium text-sm">
          Please select the Token you want to send
        </p>
        <div className="flex gap-x-1 items-center">
          <Plus
            color="#767676"
            size={9}
            className="cursor-pointer"
            onClick={() => {}}
          />
          <p className="font-medium text-sm text-[#767676]">
            Select another account
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-4 my-4">
        {tokens.map((token, index) => (
          <TokenDisplay
            key={index}
            token={token}
            onClick={handleTokenClick}
            isSelected={selectedToken?.name === token.name}
          />
        ))}
      </div>
      <button
        className="w-full bg-[#61278B] text-white py-2 rounded-lg mt-[6.6rem]  cursor-pointer"
        onClick={() => onNext(selectedToken!)}
        disabled={!selectedToken}
      >
        Confirm
      </button>
    </div>
  );
};

export default SelectToken;
