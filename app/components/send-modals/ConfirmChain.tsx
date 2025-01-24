import { X } from "lucide-react";
import Image from "next/image";

export default function ConfirmChain() {
  type ChainItem = {
    name: string;
    amount: string;
    image: string;
  };

  const Chains: ChainItem[] = [
    {
      name: "eUSD",
      amount: "10000",
      image: "crypto-icons/btc.svg",
    },
    {
      name: "STRK",
      amount: "10000",
      image: "crypto-icons/trx.svg",
    },
    {
      name: "USDC",
      amount: "10000",
      image: "crypto-icons/btc.svg",
    },
    {
      name: "eUSD",
      amount: "10000",
      image: "crypto-icons/btc.svg",
    },
    {
      name: "eUSD",
      amount: "10000",
      image: "crypto-icons/btc.svg",
    },
    {
      name: "eUSD",
      amount: "10000",
      image: "crypto-icons/btc.svg",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#0000004D] fixed top-0 left-0 flex items-center justify-center">
      <div className="box bg-[#FFFFFF] min-w-[340px] min-h-[400px]  lg:w-[700px] lg:h-[640px] rounded-[40px] px-8 py-10 flex flex-col items-center">
        <div className="self-start">
          <X className="text-[#000000] cursor-pointer" size={30} />
        </div>

        <div className="w-full h-full flex flex-col items-center gap-6">
          <h1 className="text-[#000000] text-3xl font-semibold text-center">
            Send Money
          </h1>
          <div className="flex flex-col justify-center items-center w-[160px]">
            <h4 className="text-[#666666] text-xs font-medium my-2">
              Total Balance
            </h4>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#000000] font-medium text-xl rounded-[3.3px]">
                $11, 500.30
              </p>
              <small className="bg-[#E0F0E4] text-center text-[10] px-1 py-1 text-[#377E36]">
                +5.3%
              </small>
            </span>
          </div>

          <div className="w-full px-2">
            <div className="w-full flex flex-row items-center justify-between">
              <h2 className="text-[#000000] text-sm font-medium">
                Please select the Token you want to send
              </h2>
              <h4 className="text-[#767676] text-xs font-medium">
                Select another account
              </h4>
            </div>

            <form action="" className="w-full">
              {/* Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 mb-5">
                {Chains.map((chain, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white border border-[#F7ECFF] rounded-[10px] px-3 py-4 "
                  >
                    <Image src={chain.image} alt={chain.name} height={100} width={100} className="w-[22px] h-[22px] object-contain " />
                   
                   
                   <div className="w-full flex flex-row justify-between items-center" >
                   <div className="flex flex-col">
                      <h4 className="text-[#000000] font-normal text-xs">
                        {chain.name}
                      </h4>
                      <h1 className="text-[#000000] text-xl font-medium">
                        {chain.amount}
                      </h1>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-[#000000] font-normal text-xs">
                        {chain.name}
                      </h4>
                      <h1 className="text-[#000000] text-xl font-medium">
                        {chain.amount}
                      </h1>
                    </div>
                   </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="bg-[#61278B] rounded-[20px] w-full text-center flex items-center justify-center text-white text-lg font-normal py-4 px-6"
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
