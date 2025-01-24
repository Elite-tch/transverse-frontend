import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ConfirmAmount() {
  return (
    <div className="w-full z-[999] min-h-screen bg-[#0000004D] fixed inset-0 flex items-center justify-center px-4">
      <div className="box bg-white w-full max-w-[700px] lg:h-[640px] rounded-[40px] px-8 py-10 flex flex-col items-center">
        <div className="self-start">
          <ArrowLeft
            className="text-[#000000] cursor-pointer"
            size={30}
            aria-label="Go back"
          />
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
                $11, 521.30
              </p>
              <small className="bg-[#E0F0E4] text-center text-[10px] px-1 py-1 text-[#377E36]">
                +5.3%
              </small>
            </span>
          </div>

          <form
            action=""
            className="w-full h-full px-2 py-3 flex flex-col items-center gap-2"
          >
            <div className="w-full block space-y-1 ">
              <span className="w-full flex flex-row items-center justify-between">
                <p className="text-sm font-normal text-[#000000] ">
                  Please enter receivers Username
                </p>
                <small className="font-medium text-xs text-[#767676] ">
                  + Select from Beneficiaries
                </small>
              </span>
              <input
                type="text"
                name="recipient"
                id="recipient"
                className="w-full py-4 px-5 outline-none border border-[#F7ECFF] bg-white rounded-[10px] "
              />
            </div>

            <div className="w-full block space-y-1 ">
              <span className="w-full flex flex-row items-center justify-between">
                <p className="text-sm font-normal text-[#000000] ">
                  Enter Amount
                </p>
              </span>
              <div className="w-full flex items-center justify-between gap-4 pr-2 border border-[#F7ECFF] bg-white rounded-[10px]  ">
                <input
                  type="amount"
                  name="amount"
                  id="amount"
                  className="w-full py-4 px-5 outline-none border-0 "
                />
                <button
                  type="button"
                  className="bg-[#ECD1FF] w-[54px] h-[24px] p-1 rounded-[6px] text-[#61278B] text-[10px] font-normal "
                >
                  Max
                </button>
              </div>
            </div>

            <label>
              <input type="checkbox" name="saveUsername" />
              Save Username ID as Beneficiary 
            </label>
            <button
              type="button"
              className="bg-[#61278B] rounded-[20px] w-full text-center flex items-center justify-center text-white text-lg font-normal py-4 px-5"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
