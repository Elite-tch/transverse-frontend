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
    <footer className="flex flex-col py-5 my-2 justify-between border-t-2 border-t-[] text-black">
      <div className="flex flex-col px-4 md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <h4 className="font-bold capitalize text-lg dark:text-white">
            Transverse Pay
          </h4>
          <p className="text-[#666666] text-sm">
            From our scheduled downtime weekends to consoles and board games on
            site, we pride ourselves in our ability to switch off and play hard
            because playing and disconnecting is an essential part of the
            innovation process.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-10 w-full md:w-auto">
          {footerLinks.map((link) => (
            <div className="w-full md:w-auto" key={link.title}>
              <h4 className="font-medium dark:text-white">{link.title}</h4>
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
      <div className="flex py-4 border-t-2 border-t-[#F7ECFF] justify-center">
        <p className="capitalize text-[#666666] font-light text-sm text-center">
          &copy; 2024 Transverse Pay. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
