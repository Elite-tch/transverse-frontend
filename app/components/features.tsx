import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Krona_One } from "next/font/google";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

interface FeatureCardProps {
  title: string;
  description: string;
  featureImage: string;
  showLiveRate?: boolean;
  titleColor: string;
  hoverBgColor: string;
  actionText: string;
  isLastCard?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  featureImage,
  titleColor,
  hoverBgColor,
  actionText,
  isLastCard = false,
}) => {
  return (
    <div
      className={`bg-purple-50 pl-12 pt-12 rounded-3xl transition-colors duration-300 ${hoverBgColor} group relative overflow-hidden`}
    >
      <h2
        className={`${titleColor} font-[600] text-3xl group-hover:text-white mb-[0.5em]`}
      >
        {title}
      </h2>
      <p className="w-[312px] text-base font-normal text-black group-hover:text-white">
        {description}
      </p>
      <div className="flex justify-between gap-4">
        <div
          className={`flex justify-center items-end gap-[1em] ${
            !isLastCard ? "pb-12" : "pb-2"
          }`}
        >
          <ArrowRight
            className={`${titleColor} group-hover:text-white w-6 h-6`}
          />
          <h3
            className={`${titleColor} group-hover:text-white font-[400] text-[16px]`}
          >
            {actionText}
          </h3>
        </div>
        <div className="pr-4 pt-16 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <Image src={featureImage} alt="feature illustration" width={500} height={500} className="w-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const featureItems = [
    {
      id: 1,
      title: "Real Live Rate",
      description:
        "Get Real-Time each 24/7 of your currency's equivalence of any crypto currency or fiat all in one place without stress.",
      featureImage: '/LiveRate.svg',
      titleColor: "text-blue-500",
      hoverBgColor: "hover:bg-blue-500",
      actionText: "Real-Time",
    },
    {
      id: 2,
      title: "24hr uptime anytime",
      description:
        "Wherever you are in the world, you can save • transfer • manage • organise • and withdraw your money at any time.",
      featureImage: '/24uphour.svg',
      titleColor: "text-pink-600",
      hoverBgColor: "hover:bg-pink-600",
      actionText: "You are safe with us",
    },
    {
      id: 3,
      title: "Security using world ID",
      description:
        "All you have to do is input your password known by you alone (that you can remember), save and be sure that it's private to you alone.",
      featureImage: '/security.svg',
      titleColor: "text-blue-800",
      hoverBgColor: "hover:bg-blue-800",
      actionText: "100% Security",
    },
    {
      id: 4,
      title: "Ease of transactions",
      description:
        "Monitor all your transactions from your comfort zone with just one click. 24/7 we're always available with updated records of your transactions.",
      featureImage: '/updatedtx.svg',
      titleColor: "text-green-400",
      hoverBgColor: "hover:bg-green-400",
      actionText: "Updated Transactions",
    },
  ];

  return (
    <div className="flex flex-col items-center py-[2em] gap-[1em]">
      <div className="w-full flex flex-col items-center px-12 py-4 my-4">
        <h1
          className={`text-primary text-[30px] text-center  ${krona.className} `}
        >
          All you Have to do
        </h1>
        <p className="text-black font-normal text-[14px] text-center w-[35%] mb-8">
          Just these three important steps to get started and your’re already on
          your way to a happy & safe path.
        </p>

        <div className="flex justify-between items-center w-full px-24">
          <div className="flex flex-col gap-2 items-center justify-center w-[30%]">
            <p className="bg-primary flex items-center justify-center text-white w-[60.56px] h-[60.56px] rounded-full p-4">
              1.
            </p>
            <p className="text-primary font-semibold">Login / Signup</p>
            <p className="text-center text-[14px]">
              Create an account by filling in your necessary details like your
              email, password and creating a code for all your transactions.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center w-[30%]">
            <p className="bg-[#F8EEFF] flex items-center justify-center text-primary w-[60.56px] h-[60.56px] rounded-full p-4">
              2.
            </p>
            <p className="text-primary font-semibold">Deposit money</p>
            <p className="text-center text-[14px]">
            Transfer into your account or convert any of your crypto currency to the fiat of your choice.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center w-[30%]">
            <p className="bg-[#F8EEFF] flex items-center justify-center text-primary w-[60.56px] h-[60.56px] rounded-full p-4">
              3.
            </p>
            <p className="text-primary font-semibold">Send money to your loved ones</p>
            <p className="text-center text-[14px]">
            Thats it! You can now start sending money to your friends, family, business partners or whoever you want to. Easy peasy!
            </p>
          </div>
        </div>
      </div>
      <h1
        className={`text-primary text-[30px] text-center  ${krona.className} `}
      >
        Features
      </h1>
      <p className="text-black font-normal text-[14px] text-center w-[40%]">
        Why using Transverse Pay is a MUST for anyone that wants to live a happy
        life.
      </p>
      <div className="grid grid-cols-2 gap-[4em] mt-[2em]">
        {featureItems.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            featureImage={feature.featureImage}
            titleColor={feature.titleColor}
            hoverBgColor={feature.hoverBgColor}
            actionText={feature.actionText}
            isLastCard={index === featureItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
