import Link from "next/link";
import { TransactionDetails } from "./WithdrawModal";
import { Krona_One } from "next/font/google";
interface ConfirmationProps {
  transactionDetails: TransactionDetails;
  onReset: () => void;
}

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

const Confirmation: React.FC<ConfirmationProps> = ({
  transactionDetails,
  onReset,
}) => {
  const formatWalletAddress = (address: string) => {
    if (address.length < 10) return address;
    return `${address.slice(0, 4)}********${address.slice(-4)}`;
  };

  return (
    <div className="text-center">
      <h2 className={`text-3xl font-normal mb-4 ${krona.className}`}>
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
          className={`w-1/2  border-[2.5px] border-[#61278B] text-[#61278B] flex justify-center items-center rounded-2xl h-[3.5rem] ${krona.className}`}
          onClick={onReset}
        >
          Withdraw Again
        </button>
        <Link
          href="/dashboard"
          className={`w-1/2 bg-[#61278B] text-white flex justify-center items-center rounded-2xl h-[3.5rem] ${krona.className}`}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
