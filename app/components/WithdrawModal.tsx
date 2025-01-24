"use client";
import { useState } from "react";
import { Raleway, Inter } from "next/font/google";
import { X, MoveLeftIcon, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface Token {
  tokenIcon: string;
  name: string;
  balance: number;
  usdValue: number;
  priceFeed: number;
}

interface TransactionDetails {
  walletAddress: string;
  amount: number;
}

interface SelectTokenProps {
  onNext: (token: Token) => void
}

interface EnterDetailsProps {
  selectedToken: Token;
  onNext: (details: TransactionDetails) => void;
}

interface ConfirmTransactionProps {
  transactionDetails: TransactionDetails; 
  onReset: () => void;
}

interface TokenDisplayProps {
  token: Token; 
  onClick: (token: Token) => void; 
  isSelected: boolean
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

const WithdrawModal = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null);

  const handleNext = (data: Token | TransactionDetails) => {
    if (step === 1) setSelectedToken(data as Token);
    if (step === 2) setTransactionDetails(data as TransactionDetails);
    setStep(step + 1);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedToken(null);
    setTransactionDetails(null);
  };

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
            <Plus color="#767676" size={9} className="cursor-pointer" onClick={() => {}} />
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
          className="w-full bg-[#61278B] text-white py-2 rounded-lg mt-[6.6rem] cursor-pointer"
          onClick={() => onNext(selectedToken!)}
          disabled={!selectedToken}
        >
          Confirm
        </button>
      </div>
    );
  };

  const EnterDetails = ({
    selectedToken,
    onNext,
  }: EnterDetailsProps) => {
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
              className="w-full border border-[#F7ECFF] focus:border-[#f1e2fc] outline-[#f1e2fc] p-2 rounded-lg mt-1 no-spin"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />

            <div
              className="bg-[#ECD1FF] text-[#61278B] font-normal text-[10px] rounded-md w-[3.375rem] h-[1.5rem] flex justify-center items-center absolute right-4 bottom-2 cursor-pointer"
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

  const Confirmation= ({
    transactionDetails,
    onReset,
  }: ConfirmTransactionProps) => {
    const formatWalletAddress = (address: string) => {
      if (address.length < 10) return address;
      return `${address.slice(0, 4)}********${address.slice(-4)}`;
    };

    return (
      <div className="text-center">
        <h2 className={`text-3xl font-normal mb-4 ${raleway.className}`}>
          Congratulations <span className="text-[#61278B]">Prof🥳</span>
        </h2>
        <p className="text-xl font-normal text-gray-500">
          You have successfully sent ${transactionDetails.amount} to{" "}
          <span className="font-medium">
            {formatWalletAddress(transactionDetails.walletAddress)}
          </span>
        </p>

        <p className="text-[#666666] font-normal text-xs">
          Transfer request is being processed and user should receive money in a
          few minutes..😎
        </p>
        <div className="my-[3rem] flex justify-between items-center gap-x-2">
          <button
            className={`w-1/2 border-[2.5px] border-[#61278B] text-[#61278B] flex justify-center items-center rounded-2xl h-[3.5rem] ${raleway.className}`}
            onClick={onReset}
          >
            Withdraw Again
          </button>
          <Link
            href="/dashboard"
            className={`w-1/2 bg-[#61278B] text-white flex justify-center items-center rounded-2xl h-[3.5rem] ${raleway.className}`}
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  };

  const TokenDisplay = ({
    token,
    onClick,
    isSelected,
  }: TokenDisplayProps) => {
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
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
      <div
        className={`bg-white w-[90%] max-w-[38rem] p-[3rem] rounded-[2.5rem] shadow-lg relative ${raleway.className}`}
      >
        {step === 1 || step === 3 ? (
          <X
            size={18.75}
            color="#000000"
            className="absolute top-5 left-8 cursor-pointer"
            onClick={() => {}}
          />
        ) : (
          <MoveLeftIcon
            size={18.75}
            color="#000000"
            className="absolute top-5 left-8 cursor-pointer"
            onClick={() => setStep(step - 1)}
          />
        )}
        {step !== 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-[1.7rem] text-center mt-[0.6rem]">
              Withdraw Money
            </h2>

            <div className="w-fit mx-auto">
              <p className="text-xs font-medium w-fit text-[#666666]">
                Total Balance
              </p>
              <div className="flex items-end gap-x-6 w-fit">
                <p className="font-medium text-xl">
                  ${(11567).toLocaleString()}
                </p>

                <div
                  className={`${inter.className} text-[#377E36] font-medium text-[9.92px] bg-[#E0F0E4] w-[2.3rem] h-[1.1rem] rounded-sm flex justify-center items-center`}
                >
                  +5.3%
                </div>
              </div>
            </div>
          </>
        )}
        {step === 1 && <SelectToken onNext={handleNext} />}
        {step === 2 && (
          <EnterDetails selectedToken={selectedToken!} onNext={handleNext} />
        )}
        {step === 3 && (
          <Confirmation
            transactionDetails={transactionDetails!}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default WithdrawModal;