"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-blue-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "relative z-10 w-full max-w-6xl mx-auto bg-primary-deep rounded-[2rem] p-12 md:p-20 overflow-hidden text-center text-white transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0 shadow-2xl" : "opacity-0 translate-y-12"
          )}
        >
          {/* Enhanced Background Decor */}
          <div className="absolute inset-0 z-0 opacity-[0.1] bg-pattern-plus" />

          {/* Solid Corner Accents as seen in image */}
          <div className="absolute -top-36 -right-20 w-80 h-80 bg-white/10 rounded-full z-0" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full z-0" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to invest in the future?
            </h2>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
              Download our mobile app to track your investments, manage your fleet, and receive payouts directly to your wallet.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <button className="transition-transform hover:scale-105 active:scale-95 bg-black rounded-xl p-0.5 border border-white/10">
                <Image
                  src="/apple.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </button>
              <button className="transition-transform hover:scale-105 active:scale-95 bg-black rounded-xl p-0.5 border border-white/10">
                <Image
                  src="/playstore.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
