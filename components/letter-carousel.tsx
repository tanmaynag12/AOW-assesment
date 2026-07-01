"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  title: string;
  backgroundImage: string;
  align?: "left" | "center";
  objectPosition?: string;
  titleTopClass?: string;
}

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      title: "Skill Assessment",
      backgroundImage: "/images/homepage/Carousel/Drivers License.jpg",
      objectPosition: "center center",
      titleTopClass: "pt-32 md:pt-36",
    },
    {
      title: "Quiz Excellence",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
      objectPosition: "center 55%",
      titleTopClass: "pt-32 md:pt-36",
    },
    {
      title: "Learning Journey",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
      objectPosition: "center 32%",
      titleTopClass: "pt-32 md:pt-36",
    },
    {
      title: "Hiring Simplified",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
      align: "center",
      objectPosition: "center center",
      titleTopClass: "pt-32 md:pt-36",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <div className="relative h-[80vh] w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.backgroundImage}
                  alt={`${slide.title} background`}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: slide.objectPosition || "center",
                  }}
                  priority={index === 0}
                />
              </div>

              <div
                className={`relative z-10 h-full flex items-start ${
                  slide.titleTopClass || "pt-24 md:pt-28"
                } ${
                  slide.align === "center" ? "justify-center" : "pl-6 md:pl-12"
                }`}
              >
                <h3 className="text-3xl md:text-5xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  <span className="text-blue-600">
                    {slide.title.split(" ")[0]}
                  </span>{" "}
                  <span className="bg-gradient-to-r from-gray-400 to-yellow-400 bg-clip-text text-transparent">
                    {slide.title.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-[#00418d]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-[#00418d]" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-[#f73e5d] w-8" : "bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
