'use client'
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing Lucide icons

export default function TopUpDetails() {
    const [selectedWallet, setSelectedWallet] = useState("");
    const [selectedToken, setSelectedToken] = useState("");
    
    const [showWalletDropdown, setShowWalletDropdown] = useState(false);
    const [showTokenDropdown, setShowTokenDropdown] = useState(false);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const wallet = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    const token = [
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
      ];

    const handleConfirmClick = () => {
        setIsModalOpen(true);
    };

  return (
    <div className="flex  flex-col justify-center min-h-fit my-8 bg-white shadow md:w-[50%] mx-auto rounded-[40px] w-[90%]">
      <Link href="/deposit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-left mx-10 mt-8"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </Link>

      <div className="md:pb-[8%] md:pt-[3%] pb-[5%] pt-[8%]">
        <h2 className="h-[53px] leading-[32.87px] flex justify-center mx-auto text-[28px] font-[600]">
          Top Up Money
        </h2>
        <div className="flex justify-center gap-3 w-[29%] md:w-[12%] mx-auto flex-col items-start ">
          <p className="font-[500] text-[12px] h-[14px] text-custom-gray">Total Balance </p>
          <h4 className="font-[500] text[20px] flex items-center gap-9">
            $11,485.30{" "}
            <span className="round-[3px] font-[500] text-[9.92px] leading-[13.23px] text-btntext bg-custom-green">
              +5.3%
            </span>{" "}
          </h4>
        </div>

        <div className="flex justify-center gap-4 mt-8 md:w-[90%]  mx-auto flex-col items-start ">
        
        <div className="flex flex-col gap-3 w-[90%] mx-auto">
        <label className="font-[500] text-[14px]">Select Wallet you want to Top Up from</label>
        <div
          className="relative w-[100%] mx-auto border border-[#E5E5E5] h-[60px] rounded-[10px] px-4 flex items-center justify-between cursor-pointer"
          onClick={() => setShowWalletDropdown(!showWalletDropdown)}
        >
          <div className={`flex-1 font-medium ${selectedWallet ? "text-black" : "text-custom-gray "}`}>
            {selectedWallet ? (
              <span className="text-black">
                {wallet.find((option) => option.value === selectedWallet)?.label}
              </span>
            ) : (
              <span className="text-custom-gray font-[500] text-[10px]">You can only select one wallet at a time</span>
            )}
          </div>
          <div className="text-gray-400">
            {showWalletDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {showWalletDropdown && (
            <ul className="absolute top-full left-0 w-[100%] mx-auto bg-white border border-[#E5E5E5] mt-1 rounded-[10px] z-10">
              {wallet.map((option, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedWallet(option.value);
                    setShowWalletDropdown(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Token Dropdown */}
      <div className="flex flex-col gap-3 w-[90%] mx-auto">
        <label className="font-[500] text-[14px]">Select Token</label>
        <div
          className="relative w-[100%] mx-auto border border-[#E5E5E5] h-[60px] rounded-[10px] px-4 flex items-center justify-between cursor-pointer"
          onClick={() => setShowTokenDropdown(!showTokenDropdown)}
        >
          <div className={`flex-1 font-medium ${selectedToken ? "text-black" : "text-custom-gray "}`}>
            {selectedToken ? (
              <span className="text-black">
                {token.find((option) => option.value === selectedToken)?.label}
              </span>
            ) : (
              <span className="text-custom-gray font-[500] text-[10px]">You can only select one token at a time</span>
            )}
          </div>
          <div className="text-gray-400">
            {showTokenDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {showTokenDropdown && (
            <ul className="absolute top-full left-0 w-[100%] mx-auto bg-white border border-[#E5E5E5] mt-1 rounded-[10px] z-10">
              {token.map((option, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedToken(option.value);
                    setShowTokenDropdown(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
          <div className="flex justify-start flex-col gap-5 w-[90%] mx-auto">
          <label className="font-[500] text-[14px]">Enter Amount</label>
            <div className="flex gap-2 items-center border border-[#E5E5E5] h-[60px] rounded-[10px] px-4 ">
             <input type="text" className="outline-none bg-transparent w-full  py-2 px-4"/>
           <h3 className="bg-input-bg text-[10px] text-primary font-[400] h-[24px] w-[54px] flex items-center justify-center rounded-[6px]">MAX</h3>
            </div>
          </div>

          <div onClick={handleConfirmClick} className="flex justify-center  w-[90%] mx-auto items-center  rounded-[20px] bg-primary text-white h-[60px] mt-5 ">
          <button >Confirm</button>
          
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-[40px] w-[90%] md:w-[700px] h-[500px] md:h-[536px] p-5 md:px-[5%] shadow-lg  flex flex-col items-center justify-center gap-3">
            <h2 className="text-[24px] font-[400] text-center">Congratulations <span className="text-[32px] text-primary"> Prof 🥳</span></h2>
            <p className="font-[400] text-[20px] text-center">You have successfully Topped Up your account
            <span className="font-[500]">-Prof Isaac</span> with  $500 ETH.</p>
            <p className="text-[14px] font-[400] text-custom-gray text-center">Transfer request is being processed and you will receive your money in a bit😎</p>
            <div className="flex justify-center items-center md:gap-10 mt-4 md:flex-row flex-col gap-4">
              <button  className="border-primary  border bg-lightpurple text-primary text-[14px] w-[280px] h-[60px] rounded-[20px]">Top Up Again</button>
              <button  className="text-white bg-primary text-[14px] w-[280px] h-[60px] rounded-[20px]">Go to Dashboard</button>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-[5%] left-[15%] md:left-[27%] md:top-[10%] text-gray-900 hover:text-gray-800 text-[30px]"
            >
              &times; {/* Close button (X) */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
