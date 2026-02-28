"use client";

import { useEffect, useState } from "react";
import CalculatorSection from "@/components/landing/CalculatorSection";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export default function MobileAppOverview() {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    color: string;
    delay: number;
    duration: number;
  }>>([]);

  // Ref for Calculator Section Animation
  const { ref: calcRef, inView: calcInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  // Ref for Mobile App Section Animation
  const { ref: appRef, inView: appInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  // Generate Bubbles on mount (Shared Background)
  useEffect(() => {
    const colors = [
      "bg-amber-400", "bg-cyan-400", "bg-emerald-400",
      "bg-primary", "bg-purple-400", "bg-pink-400", "bg-blue-400"
    ];

    // Create 30 bubbles with varying properties
    const newBubbles = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 10,
      left: Math.floor(Math.random() * 100),
      top: Math.floor(Math.random() * 100),
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 10,
      duration: Math.floor(Math.random() * 15) + 20,
    }));

    setBubbles(newBubbles);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-primary-deep text-white">
      {/* Shared Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={cn(
              "absolute rounded-full blur-xl animate-float opacity-50",
              bubble.color
            )}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 space-y-32">
        {/* Calculator Section */}
        {/* <div
          ref={calcRef}
          className={cn(
            "transition-all duration-1000 ease-out transform",
            calcInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <CalculatorSection embedded={true} />
        </div> */}

        {/* Mobile App Overview Section */}
        <div
          ref={appRef}
          className={cn(
            "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-1000 ease-out transform",
            appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Left: Phone Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] scale-80 md:w-[320px] lg:w-[360px] aspect-1/2 rounded-[3rem] border-8 border-white/10 shadow-2xl overflow-hidden bg-black/20 backdrop-blur-sm group hover:scale-[90%] transition-transform duration-500">
              {/* Image Container with Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <Image
                src="/mobile.png"
                alt="RT Connect Mobile App Interface"
                fill
                className="object-cover object-top rounded-[2.5rem]"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Mobility at <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/60">
                  Your Fingertips
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                Use the RT Mobility app to:
              </p>
            </div>

            <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {[
                "Access ride and rental services",
                "Manage vehicle programs",
                "Track usage and activity",
                "Get support and updates"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <button className="transition-transform hover:scale-105 active:scale-95">
                <Image src="/apple.svg" alt="Download on the App Store" width={160} height={48} className="h-[48px] w-auto" />
              </button>
              <button className="transition-transform hover:scale-105 active:scale-95">
                <Image src="/playstore.svg" alt="Get it on Google Play" width={160} height={48} className="h-[48px] w-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
