"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ShieldCheck, Info } from "lucide-react";

interface TermsComplianceProps {
  onVisible: (id: string) => void;
}

export default function TermsCompliance({ onVisible }: TermsComplianceProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("compliance");
    },
  });

  return (
    <section
      id="compliance"
      ref={ref}
      className={cn(
        "scroll-mt-32 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <h2 className="text-2xl font-bold text-primary-deep mb-5">
        6. Compliance
      </h2>

      {/* In Plain English callout */}
      <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 mb-5">
        <div className="flex items-center gap-2 mb-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
            In Plain English
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed italic">
          We operate under a &quot;Cooperative Framework.&quot; This means we follow
          specific laws designed for businesses where members share in the
          success. We stick to the rules so the platform stays safe and legal
          for everyone.
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm">
        RT Mobility operates within a Cooperative Legal Framework. All
        activities are conducted in accordance with the regulations of the
        jurisdictions in which we operate. We reserve the right to modify these
        terms to comply with new legislative requirements or regulatory guidance.
      </p>
    </section>
  );
}
