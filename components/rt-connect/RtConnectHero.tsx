"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// All available images
const allImages = [
  "/rt1.jpg", "/rt2.jpg", "/rt3.jpg", "/rt4.jpg",
  "/rt5.jpg", "/rt6.jpg", "/rt7.jpg", "/rt8.jpg"
];

const COLLAGE_CHANGE_INTERVAL = 10_000;
const FADE_DURATION = 2000; // Slower, smoother fade

export default function RtConnectHero() {

  const [backImages, setBackImages] = useState(allImages.slice(0, 4));
  const [frontImages, setFrontImages] = useState(allImages.slice(0, 4));
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Pick new images for the "front" layer
      const shuffled = [...allImages].sort(() => 0.5 - Math.random());
      const nextSet = shuffled.slice(0, 4);

      setFrontImages(nextSet);
      setIsFading(true);

      setTimeout(() => {
        setBackImages(nextSet);
        setIsFading(false);
      }, FADE_DURATION);

    }, COLLAGE_CHANGE_INTERVAL);

    // Initial setup to ensure back and front match
    setBackImages(allImages.slice(0, 4));
    setFrontImages(allImages.slice(0, 4));

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black">

      {/* Layer 1: Bottom (Back Images) - Always Visible */}
      <div className="absolute inset-0 grid grid-cols-4 h-full w-full z-0">
        {backImages.map((src, index) => (
          <div key={`back-${index}`} className="relative h-full w-full">
            <Image
              src={src}
              alt={`RT Connect Background Back ${index}`}
              fill
              className="object-cover"
              priority={index < 4}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Layer 2: Top (Front Images) - Fades In/Out */}
      <div className={cn(
        "absolute inset-0 grid grid-cols-4 h-full w-full z-1 transition-opacity ease-in-out",
        isFading ? "opacity-100" : "opacity-0"
      )}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
      >
        {frontImages.map((src, index) => (
          <div key={`front-${index}`} className="relative h-full w-full">
            <Image
              src={src}
              alt={`RT Connect Background Front ${index}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Main Overlay - Primary Deep Color & Darkening */}
      <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="inline-block px-4 py-2 bg-emerald-500 rounded-full text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
          RT-Connect
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
          Powering Transport,
          <br />
          <span className="text-primary">Creating Ownership.</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
          Connecting drivers, partners, and investors to build a sustainable, asset-backed mobility ecosystem.
        </p>

        <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
          <span className="text-sm">Scroll Down</span>
        </div>

      </div>
    </section>
  );
}
