import React from "react";
import { Token } from "./WithdrawModal";
import Image from "next/image";

interface TokenDisplayProps {
  token: Token;
  onClick: (token: Token) => void;
  isSelected: boolean;
}
function TokenDisplay({ token, onClick, isSelected }: TokenDisplayProps) {
  return (
    <div
      className={`border h-[3.75rem] w-[15.75rem] rounded-md flex items-center justify-between p-3 hover:bg-[#F7ECFF] cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-[#F7ECFF] border-[#D1C4E9]"
          : "border-[#F7ECFF] hover:bg-[#F7ECFF]"
      }`}
      onClick={() => onClick(token)}
    >
      <div className="flex items-center gap-x-5">
        <Image
          src={token.tokenIcon ?? ""}
          alt={token.name ?? ""}
          width={token.name === "ETH" ? 11 : 22}
          height={18.75}
          quality={80}
        />

        <div className="flex flex-col ">
          <p className="text-xs font-normal">{token.name}</p>
          <p className="text-base font-medium">
            ${token.priceFeed.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-medium text-sm">{token.balance.toLocaleString()}</p>
        <p className="font-normal text-[0.625rem]">
          ${token.usdValue.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default TokenDisplay;
