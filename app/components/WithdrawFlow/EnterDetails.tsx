import { useState } from "react";
import { Token, TransactionDetails } from "./WithdrawModal";
import Image from "next/image";

interface EnterDetailsProps {
  selectedToken: Token;
  onNext: (details: TransactionDetails) => void;
}

const EnterDetails: React.FC<EnterDetailsProps> = ({
  selectedToken,
  onNext,
}) => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  const handleSubmit = () => {
    if (walletAddress && amount) {
      onNext({ walletAddress, amount: Number(amount) });
    }
  };

  return (
    <div className="w-full h-full mt-[3rem]">
      <div className="border h-[3.75rem] full rounded-md flex items-center justify-between p-3 bg-[#FCF8FF] border-[#F7ECFF] cursor-pointer transition-allduration-300">
        <div className="flex items-center gap-x-5">
          <Image
            src={selectedToken.tokenIcon ?? ""}
            alt={selectedToken.name ?? ""}
            width={selectedToken.name === "ETH" ? 11 : 22}
            height={18.75}
            quality={80}
          />

          <div className="flex flex-col ">
            <p className="text-xs font-normal">{selectedToken.name}</p>
            <p className="text-base font-medium">
              ${selectedToken.priceFeed.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-medium text-sm">
            {selectedToken.balance.toLocaleString()}
          </p>
          <p className="font-normal text-[0.625rem]">
            ${selectedToken.usdValue.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="my-4">
        <label className="block text-sm font-medium">
          Enter valid wallet address
        </label>
        <input
          type="text"
          className="w-full border border-[#F7ECFF] focus:border-[#f1e2fc] outline-[#e7cafc] p-2 rounded-lg mt-1"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>
      <div className="my-4">
        <div className="w-full flex items-center justify-between">
          <label className="block text-sm font-medium">Enter Amount</label>
          <p className="text-sm font-medium text-[#767676]">
            ${selectedToken.usdValue} {selectedToken.name} remaining
          </p>
        </div>

        <div className="w-full relative">
          <input
            type="number"
            className="w-full border border-[#F7ECFF] focus:border-[#f1e2fc] outline-[#f1e2fc] p-2 rounded-lg mt-1 "
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <div
            className="bg-[#ECD1FF] text-[#61278B] font-normal text-[10px] rounded-md w-[3.375rem] h-[1.5rem] flex justify-center items-center absolute right-7 bottom-2 cursor-pointer"
            onClick={() => setAmount(Number(selectedToken.usdValue))}
          >
            MAX
          </div>
        </div>
      </div>
      <button
        className="w-full bg-purple-600 text-white py-2 rounded-lg"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
};

export default EnterDetails;
