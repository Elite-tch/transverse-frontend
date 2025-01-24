"use client";
import Image from "next/image";
import { useState } from "react";
import { Krona_One } from "next/font/google";
import { ArrowDownUp, ChevronDown, LoaderCircle } from "lucide-react";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

type CryptoCoin = {
  name: string;
  logo: string;
};

const blockchain_logo: CryptoCoin[] = [
  { name: "XRP", logo: "/crypto-icons/xrp.svg" },
  { name: "ALGO", logo: "/crypto-icons/algo.svg" },
  { name: "USDC", logo: "/crypto-icons/usdc.svg" },
  { name: "USDT", logo: "/crypto-icons/usdt.svg" },
  { name: "TRX", logo: "/crypto-icons/trx.svg" },
  { name: "BCH", logo: "/crypto-icons/bch.svg" },
];

export default function Swap() {
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("");
  const [fromCoin, setFromCoin] = useState<CryptoCoin>(blockchain_logo[0]);
  const [toCoin, setToCoin] = useState<CryptoCoin>(blockchain_logo[3]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectingCoinFor, setSelectingCoinFor] = useState<"from" | "to">(
    "from"
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const openModal = (type: "from" | "to") => {
    setSelectingCoinFor(type);
    setShowModal(true);
  };

  const handleCoinSelect = (coin: CryptoCoin) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selectingCoinFor === "from" ? setFromCoin(coin) : setToCoin(coin);
    setShowModal(false);
  };

  const handleSwap = () => {
    setIsLoading(true);
    setIsSuccess(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 3000);
  };

  const handleInputSwap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCoin(toCoin);
    setToCoin(fromCoin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e1e1e1]">
      <div className="bg-white p-12 rounded-[40px] shadow-lg max-w-xl w-full">
        {isSuccess ? (
          <div className="animated fadeIn">
            <button className="text-2xl font-light">✕</button>
            <div className="text-center mt-12">
              <h2 className={`text-2xl font-bold ${krona.className}`}>
                Congratulations <span className="text-[#61278B]">Prof</span>🥳
              </h2>
              <p
                className={`text-gray-500 mt-2 text-sm ${krona.className} font-light mt-4`}
              >
                You have successfully Swapped $10 of your ETH
              </p>
              <p className={`text-gray-500 mt-2 text-xs`}>
                Your request will be processed shortly.🙂
              </p>
              <div className="flex gap-5 my-10">
                <button
                  onClick={() => setIsSuccess(false)}
                  className={`mt-6 border-2 border-[#61278B] text-[#61278B] py-4 rounded-2xl text-md w-full ${krona.className}`}
                >
                  Swap Again
                </button>
                <button
                  onClick={() => setIsSuccess(false)}
                  className={`mt-6 bg-[#61278B] text-white py-4 rounded-2xl text-md w-full ${krona.className}`}
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={`flex items-center ${krona.className}`}>
              <button className="text-2xl font-light">✕</button>
              <h2 className="text-center flex-1 text-2xl text-black">
                Swap Token
              </h2>
            </div>

            <div className={`text-center mt-6`}>
              <p className="text-gray-500 text-sm">Total Balance</p>
              <p
                className={`text-lg font-semibold text-black ${krona.className}`}
              >
                $11,485.30{" "}
                <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded-md">
                  +5.3%
                </span>
              </p>
            </div>

            <div className="mt-6 border border-gray-300 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">From</p>
                <input
                  type="number"
                  placeholder="Amount"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className={`text-2xl font-bold text-black outline-none bg-transparent w-full ${krona.className} appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                />
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => openModal("from")}
              >
                <Image
                  src={fromCoin.logo}
                  alt={fromCoin.name}
                  width={30}
                  height={30}
                />
                <p className="font-semibold">{fromCoin.name}</p>
                <ChevronDown />
              </div>
            </div>

            <div className="flex justify-center my-4">
              <span className="text-2xl cursor-pointer">
                <ArrowDownUp className="text-[#61278B]"  onClick={handleInputSwap} />
              </span>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">To</p>
                <input
                  type="number"
                  placeholder="Amount"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className={`text-2xl font-bold text-black outline-none bg-transparent w-full ${krona.className} appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                />
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => openModal("to")}
              >
                <Image
                  src={toCoin.logo}
                  alt={toCoin.name}
                  width={30}
                  height={30}
                />
                <p className="font-semibold">{toCoin.name}</p>
                <ChevronDown />
              </div>
            </div>

            <div className={`mt-14 ${krona.className}`}>
              <button
                onClick={handleSwap}
                className="bg-[#61278B] text-white w-full py-4 rounded-2xl text-lg flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <LoaderCircle className="animate-spin" />
                  </div>
                ) : (
                  "Swap"
                )}
              </button>
            </div>
          </>
        )}
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center animated fadeIn">
          <div className="bg-white p-6 max-w-lg w-full shadow-lg rounded-[40px] animated fadeIn">
            <h3
              className={`text-lg font-bold text-center mb-4 ${krona.className}`}
            >
              Select Coin
            </h3>
            <ul>
              {blockchain_logo.map((coin, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded-lg mb-3"
                  onClick={() => handleCoinSelect(coin)}
                >
                  <div className="flex items-center space-x-2">
                    <Image
                      src={coin.logo}
                      alt={coin.name}
                      width={30}
                      height={30}
                    />
                    <span className="text-lg font-semibold">{coin.name}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className={`mt-4 bg-[#61278B] text-white py-4 rounded-[40px] w-full ${krona.className}`}
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
