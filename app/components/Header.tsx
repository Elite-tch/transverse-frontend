import Image from "next/image";

export default function HeroSection() {
  const backgroundColor = "bg-[#4F0E7D]";
  const backgroundImage = "bg-[url('/header-bg.svg')]";
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#4F0E7D] to-transparent text-white flex items-center justify-center px-6 ${backgroundColor} ${backgroundImage} bg-cover bg-center rounded-[60px]`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Accessing Global Wealth <br /> without Limitations.
          </h1>
          <p className="text-lg mb-8">
            Transverse Pay is making transactions exciting, safer, and easier.
          </p>
          <div className="flex gap-4">
            <button className="px-4 min-w-[159px] py-2 bg-[#61278B] border border-[#FCF8FF] text-white rounded-full hover:bg-purple-100 hover:text-[#61278B]">
              Login
            </button>
            <button className="px-4 min-w-[159px] py-2 bg-white border border-[#FCF8FF] text-[#61278B] rounded-full hover:bg-[#61278B] hover:text-white">
              Login
            </button>
          </div>
          <div className="flex items-center gap-2 mt-8 relative -bottom-16">
            <div className="flex -space-x-3">
              <Image
                src="/user1.svg"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-white"
              />
              <Image
                src="/user1.svg"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-white"
              />
              <Image
                src="/user1.svg"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-white"
              />
              <Image
                src="/user1.svg"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-white"
              />
            </div>
            <span>100+ Active Users</span>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/user.svg"
            alt="Hero"
            width={400}
            height={400}
            className="rounded-lg objdect-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
