"use client";

import { useState, useEffect, useRef } from "react";
import CarouselSection from "./CarouselSection";
import ContentSection from "./ContentSection";

export default function HowWeWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track user interaction
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return; // Stop timer if paused

    startTimer();
    return () => stopTimer();
  }, [activeIndex, isPaused]); // Re-run if index changes or pause state changes

  const startTimer = () => {
    stopTimer();
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000); // 5 seconds
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleHover = (index: number) => {
    // Setting active index triggers useEffect -> resets timer
    setActiveIndex(index);
  };

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev + 1) % 3);
    } else {
      setActiveIndex((prev) => (prev - 1 + 3) % 3);
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="how-we-work" className="relative py-20 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern - Plus CSS */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Order matches "Love World" screenshot: Image Left, Content Right */}
          <div className="order-1 lg:order-1">
            <CarouselSection
              activeIndex={activeIndex}
              onSwipe={handleSwipe}
              onDotClick={handleDotClick}
            />
          </div>
          <div className="order-2 lg:order-2">
            <ContentSection activeIndex={activeIndex} onHover={handleHover} />
          </div>
        </div>
      </div>
    </section>
  );
}
