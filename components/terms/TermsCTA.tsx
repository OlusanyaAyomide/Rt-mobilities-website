"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Mail, ClipboardList } from "lucide-react";

export default function TermsCTA() {
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
            "relative max-w-4xl mx-auto bg-primary-deep rounded-3xl p-12 md:p-16 overflow-hidden text-center text-white transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0 shadow-2xl" : "opacity-0 translate-y-12"
          )}
        >
          {/* Plus pattern subtle overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.07] bg-pattern-plus" />

          {/* Top-right decorative circle  darker blue tone */}
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full z-0 pointer-events-none"
            style={{ background: "oklch(16% 0.06 258)" }}
          />
          {/* Smaller inner ring top-right for depth */}
          <div
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full z-0 pointer-events-none opacity-60"
            style={{ background: "oklch(18% 0.055 258)" }}
          />

          {/* Bottom-left decorative circle darker blue tone */}
          <div
            className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full z-0 pointer-events-none"
            style={{ background: "oklch(16% 0.06 258)" }}
          />
          {/* Smaller inner ring bottom-left for depth */}
          <div
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full z-0 pointer-events-none opacity-60"
            style={{ background: "oklch(18% 0.055 258)" }}
          />

          {/* Content — sits above decorations */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Have questions about our Terms?
            </h2>

            <p className="text-white/75 text-base md:text-lg leading-relaxed">
              Our Legal &amp; Compliance team is available to help you understand
              your rights and how we handle your agreements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="mailto:legal@rtmobility.com"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                Email Legal Team
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/15 border border-white/20 text-white font-semibold text-sm hover:bg-white/25 hover:scale-105 active:scale-95 transition-all backdrop-blur-sm"
              >
                <ClipboardList className="w-4 h-4" />
                Submit a Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
