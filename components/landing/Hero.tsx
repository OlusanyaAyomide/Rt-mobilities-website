"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";



export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Set playback speed

    // Handle loop delay
    const handleEnded = () => {
      setTimeout(() => {
        videoElement.play();
      }, 15000); // 15 seconds delay
    };

    videoElement.addEventListener("ended", handleEnded);

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {/* Placeholder for video - user can replace src */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay - Primary Deep Color */}
        <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" /> {/* Additional darkening for text readability */}
      </div>

      {/* Content */}
      <div className="relative  z-10 container mx-auto px-4 text-center mt-28 md:mt-16 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg animate-fade-in-up">
          Empowering Wealth Through <br />
          <span className="text-primary">Asset-Backed </span>Mobility Investments
        </h1>
        <p className="text-lg md:text-xl md:max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-md animate-fade-in-up animation-delay-200">
          Participate in real transportation assets and earn from daily operations — powered by technology, driven by transparency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button className="transition-transform hover:scale-105 active:scale-95">
            <Image src="/apple.svg" alt="Download on the App Store" width={180} height={54} className="h-[54px] w-auto" />
          </button>
          <button className="transition-transform hover:scale-105 active:scale-95">
            <Image src="/playstore.svg" alt="Get it on Google Play" width={180} height={54} className="h-[54px] w-auto" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full mx-auto text-sm font-medium animate-fade-in-up animation-delay-400 backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            Asset-Backed Model
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            Managed Operations
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            Transparent Performance
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            Secure Technology
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
}
