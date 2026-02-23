"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Phone, Mail } from "lucide-react";

export default function HelpCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "relative max-w-5xl mx-auto bg-primary-deep rounded-3xl p-12 md:p-16 overflow-hidden text-center text-white transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0 shadow-2xl" : "opacity-0 translate-y-12"
          )}
        >
          {/* Plus pattern subtle overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.07] bg-pattern-plus" />

          {/* Top-right decorative circle */}
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full z-0 pointer-events-none"
            style={{ background: "oklch(16% 0.06 258)" }}
          />
          <div
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full z-0 pointer-events-none opacity-60"
            style={{ background: "oklch(18% 0.055 258)" }}
          />

          {/* Bottom-left decorative circle */}
          <div
            className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full z-0 pointer-events-none"
            style={{ background: "oklch(16% 0.06 258)" }}
          />
          <div
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full z-0 pointer-events-none opacity-60"
            style={{ background: "oklch(18% 0.055 258)" }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Still have questions?
            </h2>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              If you couldn{"'"}t find the information you were looking for, our institutional support team is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="/contact"
                className="inline-flex text-white items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00D0F5] font-bold text-sm hover:bg-[#00D0F5]/90 hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                Request a Call
              </a>

              <a
                href="mailto:support@rtmobility.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all backdrop-blur-sm"
              >
                <Mail className="w-4 h-4" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
