"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  { src: "/transport.webp", alt: "Ride Services" },
  { src: "/assests.jpeg", alt: "Vehicle Rentals" },
  { src: "/operation.jpg", alt: "Ownership Schemes" },
  { src: "/garage.jpg", alt: "Managed Services" },
];

interface CarouselSectionProps {
  activeIndex: number;
  onSwipe?: (direction: "left" | "right") => void;
  onDotClick?: (index: number) => void;
}

export default function CarouselSection({ activeIndex, onSwipe, onDotClick }: CarouselSectionProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipe?.("left");
    } else if (isRightSwipe) {
      onSwipe?.("right");
    }
  };

  return (
    <div
      className="relative h-[500px] w-full overflow-hidden rounded-2xl lg:h-full lg:min-h-[716px] touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Glassy Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />
        </div>
      ))}

      {/* Glassy Label Indicator */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/10 shadow-lg">
          <div className={cn(
            "h-2 w-2 rounded-full",
            activeIndex === 0 ? "bg-emerald-400" :
              activeIndex === 1 ? "bg-blue-400" :
                activeIndex === 2 ? "bg-amber-400" :
                  "bg-purple-400"
          )} />
          {images[activeIndex].alt}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation(); // Prevent swipe interference if any
              onDotClick?.(index);
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-white",
              index === activeIndex ? "bg-white w-6" : "bg-white/50 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
