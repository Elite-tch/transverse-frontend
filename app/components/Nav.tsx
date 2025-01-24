import React from "react";
import { Krona_One, Raleway } from "next/font/google";
import { Search, BellRing } from "lucide-react";
import Image from "next/image";
import { Pfp } from "@/public";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Nav() {
  return (
    <div className="flex justify-between px-10 pt-3 relative pb-2 w-full border-b border-border-line">
      <section className="flex flex-col gap-1 text-xs">
        <p className={`${krona.className} text-primary`}>Welcome back Prof </p>
        <span className={`${raleway.className} text-xs text-[#666666] font-normal`}>
          We&apos;re happy to be at your service.
        </span>
      </section>
      <section className="flex gap-3 items-center ">
        <div className="relative flex w- justify-center sm:px-2 px-4 bg-[#FCF8FF] border border-border-line rounded-[20px]">
          <input
            type="search"
            placeholder=""
            className="px-2 py-1.5 rounded-md text-primary bg-transparent placeholder:text-gray-500 focus:outline-none appearance-none"
          />
          <button className="relative right-2 top-0 transform -translate bg-transparent focus:outline-none">
            <Search className="text-primary w-5 h-5" />
          </button>
        </div>
        <BellRing className="text-primary w-5 h-5 cursor-pointer" />
        <Image src={Pfp} alt="profile icon" width={24} height={24}/>
      </section>
    </div>
  );
}
