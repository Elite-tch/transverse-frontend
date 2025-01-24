import { X } from "lucide-react";
import Image from "next/image";
import ConfirmAmount from "./ConfirmAmount";

export default function ConfirmChain() {
  type ChainItem = {
    name: string;
    amount: string;
    image: string;
    currentPrice: number;
    currentCoinBalance: number;
    dollarBalance: number;
  };

  const Chains: ChainItem[] = [
    {
      name: "e USD",
      amount: "10000",
      image: "/crypto-icons/eth.svg",
      currentPrice: 0.33,
      currentCoinBalance: 123567.1,
      dollarBalance: 10000.0,
    },
    {
      name: "STRK",
      amount: "10000",
      image: "/crypto-icons/strk.svg",
      currentPrice: 0.52,
      currentCoinBalance: 12987.556,
      dollarBalance: 1521.0,
    },
    {
      name: "BTC",
      amount: "10000",
      image: "/crypto-icons/btc.svg",
      currentPrice: 100987.25,
      currentCoinBalance: 0,
      dollarBalance: 0.0,
    },
    {
      name: "SOL",
      amount: "10000",
      image: "/crypto-icons/solana.svg",
      currentPrice: 206.01,
      currentCoinBalance: 0,
      dollarBalance: 0.0,
    },
    {
      name: "eUSD",
      amount: "10000",
      image: "/crypto-icons/btc.svg",
      currentPrice: 3626.86,
      currentCoinBalance: 0.000312,
      dollarBalance: 500,
    },
    {
      name: "ETH",
      amount: "10000",
      image: "/crypto-icons/ethereum.svg",
      currentPrice: 2.36,
      currentCoinBalance: 0,
      dollarBalance: 0.0,
    },
  ];

  const totalBalance = Chains.reduce((acc, chain) => acc + chain.dollarBalance, 0);

  const formatNumber = (number: number) =>
    new Intl.NumberFormat("en-US").format(number);

  return (
    <div className="w-full z-[999] min-h-screen bg-[#0000004D] fixed inset-0 flex items-center justify-center px-4">
      <div className="box bg-white w-full max-w-[700px] lg:h-[640px] rounded-[40px] px-8 py-10 flex flex-col items-center">
        <div className="self-start">
          <X className="text-[#000000] cursor-pointer" size={30} aria-label="Close modal" />
        </div>

        <div className="w-full h-full flex flex-col items-center gap-6">
          <h1 className="text-[#000000] text-3xl font-semibold text-center">Send Money</h1>
          <div className="flex flex-col justify-center items-center w-[160px]">
            <h4 className="text-[#666666] text-xs font-medium my-2">Total Balance</h4>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#000000] font-medium text-xl rounded-[3.3px]">
                ${formatNumber(totalBalance)}
              </p>
              <small className="bg-[#E0F0E4] text-center text-[10px] px-1 py-1 text-[#377E36]">
                +5.3%
              </small>
            </span>
          </div>

          <div className="w-full px-2">
            <div className="w-full flex flex-row items-center justify-between">
              <h2 className="text-[#000000] text-sm font-medium">
                Please select the Token you want to send
              </h2>
              <h4 className="text-[#767676] text-xs font-medium">Select another account</h4>
            </div>

            <form className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 mb-5">
                {Chains.map((chain, index) => (
                  <div
                    key={chain.name + index}
                    className="flex items-center gap-3 bg-white border border-[#F7ECFF] rounded-[10px] px-3 py-4"
                  >
                    <Image src={chain.image} alt={chain.name} height={100} width={100} className="w-[22px] h-[22px] object-contain" />

                    <div className="w-full flex flex-row justify-between items-center">
                      <div className="flex flex-col">
                        <h4 className="text-[#000000] font-normal text-xs">{chain.name}</h4>
                        <h1 className="text-[#000000] text-base font-medium">
                          ${formatNumber(chain.currentPrice)}
                        </h1>
                      </div>

                      <div className="flex flex-col">
                        <h4 className="text-[#000000] font-normal text-sm">{chain.currentCoinBalance}</h4>
                        <h1 className="text-[#000000] text-[10px] font-medium">
                          ${formatNumber(chain.dollarBalance)}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="bg-[#61278B] rounded-[20px] w-full text-center flex items-center justify-center text-white text-lg font-normal py-4 px-5"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
}
