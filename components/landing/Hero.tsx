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
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 tracking-normal lg:leading-[66px] drop-shadow-lg animate-fade-in-up">
          Moving People. <br />
          Powering <span className="text-primary">Livelihoods</span> and Communities.
        </h1>
        <p className="text-lg md:text-xl md:max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-md animate-fade-in-up animation-delay-200">
          Rt-mobility is a technology‑driven mobility company providing affordable transport services, vehicle access programs, and sustainable income opportunities across Nigeria.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button size="lg" className="bg-primary hover:bg-primary-deep text-white px-8 h-12 rounded-full text-base font-semibold shadow-lg hover:scale-105 transition-all">
            Explore Our Mobility Services
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white px-8 h-12 rounded-full text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all">
            Partner With Us
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full mx-auto text-sm font-medium animate-fade-in-up animation-delay-400 backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
            <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
            Transport Solutions
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
            <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            Vehicle Access
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
            <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
            Partner Empowerment
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
            <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
            Technology-Enabled
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
