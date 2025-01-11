"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import React, { useState } from "react";

interface FaqCardProps {
  title: string;
  description: string;
}
const FaqCard: React.FC<FaqCardProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-6 w-[667px] bg-[#F8EEFF] p-4 rounded-xl" onClick={toggleOpen}>
      <div
        className="flex flex-row justify-between gap-2 items-center cursor-pointer w-full"
        onClick={toggleOpen}
      >
        <h4 className="text-primary text-[20px]">
          {title}
        </h4>
        <button name="FQA toggle" id="FQA toggle">
          {isOpen ? <MinusCircle className="text-primary" /> : <PlusCircle className="text-primary" />}
        </button>
      </div>
      {isOpen && (
        <p className="font-light text-black delay-200 duration-300 ease-out">
          {description}
        </p>
      )}
    </div>
  );
};

export default FaqCard;
