"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ComplianceHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/compliance-hero.jpg"
        alt="Compliance Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay - Primary Deep Color */}
      <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-block px-4 py-2 bg-primary rounded-full text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
          STANDARD OF EXCELLENCE
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
          Institutional Rigor.
          <br />
          <span className="text-white">Operational</span>
          <br />
          <span className="text-white">Integrity.</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
          Setting the gold standard for regulatory adherence and institutional
          oversight in the mobility sector. Ensuring transparency at every layer
          of operation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-deep text-white px-8 h-12 rounded-full text-base font-semibold shadow-lg hover:scale-105 transition-all group"
          >
            View Governance Framework
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
}
