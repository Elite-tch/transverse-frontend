import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center p-[117px]">
      <div className="outline flex flex-col items-center gap-8 outline-3 outline-blue-500 w-[1200px] h-[536px]">
        <div className="mt-3 flex flex-col gap-2 items-center">
          <h1 className="font-krona text-center text-[#61278B] text-3xl leading-[37.5px]">
            Testimonials
          </h1>
          <p className="font-raleway text-center text-black font-normal w-[465px] text-sm leading-[15px] mt-2">
            So many positive feedback from different people using Transaverse
            Pay all over the world. Wanna be part of the positivity? Hop along.
          </p>
        </div>
        <div
          className="w-[978px] h-[404px] flex flex-row relative bg-cover bg-center"
          style={{ backgroundImage: `url('/Images/Hero.png')` }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="ml-5 mt-[122px] relative w-[156px] h-[165px]">
              <Image
                src={"/Images/Group-42.png"}
                alt="Group"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="ml-[401px] mt-[108px] relative w-[156px] h-[165px]">
              <Image
                src={"/Images/Group-42.png"}
                alt="Group"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
