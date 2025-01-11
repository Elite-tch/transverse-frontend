import Image from "next/image";
import { Krona_One } from "next/font/google";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"]
});

export default function HeroSection() {
  return (
    <div
      className={`h-screen md:h-[676px] w-[90%] text-white flex items-center justify-center px-6 bg-[#4F0E7D] bg-[url('/header-mesh.svg')] bg-cover rounded-[60px] ${krona.className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-[24px] font-bold mb-4">
            Accessing Global Wealth <br /> without Limitations.
          </h1>
          <p className="text-base md:text-[16px] font-extralight mb-8">
            Transverse Pay is making transactions exciting, safer, and easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-4 min-w-[159px] py-2 bg-[#61278B] border border-[#FCF8FF] text-white rounded-full transition-colors hover:bg-purple-100 hover:text-[#61278B]">
              Login
            </button>
            <button className="px-4 min-w-[159px] py-2 bg-white border border-[#FCF8FF] text-[#61278B] rounded-full transition-colors hover:bg-[#61278B] hover:text-white">
              Create Account
            </button>
          </div>
          <div className="flex items-center gap-2 mt-8 md:relative md:-bottom-16">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((index) => (
                <Image
                  key={index}
                  src="/user1.svg"
                  alt={`User ${index}`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm md:text-base">100+ Active Users</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <Image
            src="/user.svg"
            alt="Hero illustration"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}