"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Header";
import Features from "./components/features";
import Faqs from "./components/FaqCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import { Krona_One } from "next/font/google";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {


  return (
    <div className="py-4 px-8 flex flex-col items-center">
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <div className="flex flex-col gap-2  w-[85%] bg-[url('/faq-mesh.svg')] bg-cover h-fit ">
        <div className="flex flex-col gap-1 md:gap-2  h-full  w-full items-center justify-center">
          <h4 className={`text-primary text-[30px] ${krona.className}`}>
            FAQs
          </h4>
          <p className="text-black text-[14px]">
            Confused about something? Be sure to gain clarity from us.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 gap-4 mb-12">
          <Faqs
            title="What is Transverse Pay?"
            description="Transverse Pay is a name of a person, animal, place or thing."
          />
          <Faqs
            title="How to use Transverse Pay?"
            description="Transverse Pay is a name of a person, animal, place or thing."
          />

          <Faqs
            title="Is Transverse Pay right for you?"
            description="Transverse Pay is a name of a person, animal, place or thing."
          />

          <Faqs
            title="What makes Transverse Pay stand out from others?"
            description="Transverse Pay is a name of a person, animal, place or thing."
          />

          <Faqs
            title="Are my assets safe with Transverse Pay?"
            description="Transverse Pay is a name of a person, animal, place or thing."
          />

          <Faqs
            title="How fast is Transverse Pay?"
            description="Transverse Pay is a name of a person, animal, place or thing."
          />

          <Faqs
            title="Can I receive money from abroad with Transverse Pay?"
            description="Transverse Pay is a name of a person, animal, place or thing."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
