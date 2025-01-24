"use client";
import { useState } from "react";
import SelectToken from "./SelectToken";
import EnterDetails from "./EnterDetails";
import Confirmation from "./Confirmation";
import { Raleway, Inter } from "next/font/google";
import { X, MoveLeftIcon } from "lucide-react";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export interface Token {
  tokenIcon: string;
  name: string;
  balance: number;
  usdValue: number;
  priceFeed: number;
}

export interface TransactionDetails {
  walletAddress: string;
  amount: number;
}

const WithdrawModal: React.FC = () => {
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
