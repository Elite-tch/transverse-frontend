import { Krona_One } from "next/font/google";
import Image from "next/image";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"]
});



const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Blog", url: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of Use", url: "/terms-of-use" },
      { name: "FAQs", url: "/faqs" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "Twitter", url: "https://twitter.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Instagram", url: "https://instagram.com" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col w-full pt-6 items-center">
      <div
        className="bg-gradient-to-r from-[#3642CA] to-[#501A7A] w-[85%] h-[453px] rounded-[60px] mx-auto my-[30px] flex justify-between gap-4 py-8 px-12"
      >
        <div className="w-[45%] ">
          <h4 className={`${krona.className} text-white text-[30px]`}>
          You’re a Click away from:
          </h4>

          <div className="w-full mt-4">
            <ul className="flex flex-col gap-4 list-disc text-white px-8 text-[16.5px]">
              <li>Instantly Creating your Virtual USD, EUR, and GBP Accounts.</li>
              <li>Enjoying low cost and zero delay in getting paid from your employer by creating your personalized foreign bank accounts to start receiving money.</li>
              <li>Managing multiple currency wallets with Transverse Pay.</li>
              <li>Easily sending and receiving money from friends and families at zero cost.</li>
              <li>Benefiting from a Gateway that is fully Sponsored by Worldcoin and Starknet.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 relative w-[50%] h-full">
          <Image src='/footer-image1.svg' alt="footer icon" width={500} height={500} className="absolute top-4  w-2/3 mr-4  h-[80px]" />
          <Image src='/footer-image2.svg' alt="footer icon" width={500} height={500} className=" absolute top-[115px] right-12 w-full h-[80px]" />
          <Image src='/footer-image3.svg' alt="footer icon" width={500} height={500} className=" absolute top-[215px] -right-20 mr-6 w-full h-[80px]" />
         <Image src='/footer-image2.svg' alt="footer icon" width={500} height={500} className=" absolute bottom-0 right-0  w-full h-[80px]" />

        </div>

      </div>

      <footer className="flex flex-col mt-8 justify-between w-[85%] border-t-2 border-t-[#F7ECFF]">
        <div className="flex p-4 justify-between gap-6">
          {/* Left Section */}
          <div className="flex flex-col gap-4 w-[341px] items-start">
            <h4 className="font-bold capitalize text-lg">
              Transverse Pay
            </h4>
            <p className="text-[#666666] text-[14px]">
              From our scheduled downtime weekends to consoles and board games
              on site, we pride ourselves in our ability to switch off and play
              hard because playing and disconnecting is an essential part of the
              innovation process.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-10 w-full md:w-auto">
            {footerLinks.map((link) => (
              <div className="w-full md:w-auto" key={link.title}>
                <h4 className="font-medium">{link.title}</h4>
                <ul className="text-[#666666]">
                  {link.links.map((item) => (
                    <li
                      className="my-2 text-sm dark:hover:text-gray-300 hover:text-black hover:underline"
                      key={item.name}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex py-4 border-t-2 border-t-[#F7ECFF] justify-center mt-8">
          <p className="capitalize text-[#666666] font-light text-sm text-center">
            &copy; 2024 Transverse Pay. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
