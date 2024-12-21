"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Interfaces for data structures
interface Testimonial {
  id: number;
  text: string;
  author: string;
}

// Props interfaces for sub-components
interface SlideIndicatorsProps {
  currentSlide: number;
  totalSlides: number;
}

interface NavigationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  direction: "prev" | "next";
}

interface TestimonialContentProps {
  text: string;
  author: string;
}

// Constants
const allTestimonials: Testimonial[] = [
  {
    id: 1,
    text: "It's really been hard for me to send money to my family back in Africa because there hasn't really been any simple and easy means to send them funds as they are not really educated. My friend introduced me to Transverse Pay and I reluctantly said to try it out. Long story short, I'm really glad I did. Thank you Transverse Pay.",
    author: "Jefferson Benerd",
  },
  {
    id: 2,
    text: "I just want to say thank you to whoever invented Transverse Pay. That person had fashion designers at heart, Weldone!",
    author: "Esther Ogah",
  },
  {
    id: 3,
    text: "You want a very fast sight that keeps updated transactions and real live rate? Indeed Transverse Pay is what you need. I have tested and seen. Haq!",
    author: "Mary Awilo",
  },
];

// Sub-components with TypeScript props
const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  currentSlide,
  totalSlides,
}) => (
  <div className="flex gap-2 items-center mx-4">
    {[...Array(totalSlides)].map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          index === currentSlide ? "bg-white" : "bg-purple-400/30"
        }`}
      />
    ))}
  </div>
);

const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  disabled,
  children,
  direction,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-12 h-12 rounded-full bg-purple-400/30 hover:bg-purple-400/50 \
               flex items-center justify-center transition-colors disabled:opacity-50"
    aria-label={`${direction} slide`}
  >
    {children}
  </button>
);

const TestimonialContent: React.FC<TestimonialContentProps> = ({
  text,
  author,
}) => (
  <div className="w-[350px] h-[112px] text-center mt-20 text-white font-raleway font-bold text-sm">
    <p>{text}</p>
    <p className="text-center mt-4">-{author}</p>
  </div>
);

// Main component
export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleSlideChange = (direction: "prev" | "next"): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => {
      const totalSlides = allTestimonials.length;
      return direction === "next"
        ? (prev + 1) % totalSlides
        : (prev - 1 + totalSlides) % totalSlides;
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-white min-h-screen flex justify-center p-[117px]">
      <div className="flex flex-col items-center gap-8 w-[1200px] h-[536px]">
        {/* Header Section */}
        <div className="mt-3 flex flex-col gap-2 items-center">
          <h1 className="font-krona text-center text-[#61278B] text-3xl leading-[37.5px]">
            Testimonials
          </h1>
          <p className="font-raleway text-center text-black font-normal w-[465px] text-sm leading-[15px] mt-2">
            So many positive feedback from different people using Transaverse
            Pay all over the world. Wanna be part of the positivity? Hop along.
          </p>
        </div>

        {/* Main Testimonial Section */}
        <div
          className="w-[978px] h-[404px] flex flex-row justify-between items-center relative bg-cover bg-center"
          style={{ backgroundImage: `url('/Images/Hero.png')` }}
        >
          {/* Left Group Image */}
          <div className="ml-5 relative w-[156px] h-[165px]">
            <Image
              src="/Images/group.png"
              alt="Group of people"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex flex-row gap-8 w-[629px] h-[380px]">
            <div className="relative flex flex-row gap-2">
              <div className="ml-[66px] relative mt-12">
                <Image
                  src="/Images/left1.png"
                  alt="Left quotation mark"
                  width={58}
                  height={78}
                />
              </div>

              <div className="flex flex-col">
                <TestimonialContent
                  text={allTestimonials[currentSlide].text}
                  author={allTestimonials[currentSlide].author}
                />

                {/* Navigation Controls */}
                <div className="flex mt-20 items-center justify-center">
                  <NavigationButton
                    onClick={() => handleSlideChange("prev")}
                    disabled={isAnimating}
                    direction="prev"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </NavigationButton>

                  <SlideIndicators
                    currentSlide={currentSlide}
                    totalSlides={allTestimonials.length}
                  />

                  <NavigationButton
                    onClick={() => handleSlideChange("next")}
                    disabled={isAnimating}
                    direction="next"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </NavigationButton>
                </div>
              </div>

              <div className="mr-[66px] mt-[133px] relative">
                <Image
                  src="/Images/right.png"
                  alt="Right quotation mark"
                  width={58}
                  height={78}
                />
              </div>
            </div>
          </div>

          {/* Right Group Image */}
          <div className="mr-5 mt-[-40px] relative w-[156px] h-[165px]">
            <Image
              src="/Images/group.png"
              alt="Group of people"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
