"use client";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export default function WhatIsRtConnect() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 bg-blue-50/30 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />
      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
            INVESTMENT PHILOSOPHY
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary-deep mb-6 relative inline-block">
            What is RT Connect?
            {/* Animated Underline */}
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-1000 ease-out",
                inView ? "w-full opacity-100" : "w-0 opacity-0"
              )}
              style={{ transitionDelay: "300ms" }}
            />
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-6">
            RT Connect is a bridge between retail and professional capital and real-economy assets. We enable direct participation in the fleets that power modern logistics and ride-hailing, managed by industry experts.
          </p>
        </div>
      </div>
    </section>
  );
}
