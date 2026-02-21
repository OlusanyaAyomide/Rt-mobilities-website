"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface TermsOperationalRisksProps {
  onVisible: (id: string) => void;
}

export default function TermsOperationalRisks({ onVisible }: TermsOperationalRisksProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("operational-risks");
    },
  });

  return (
    <section
      id="operational-risks"
      ref={ref}
      className={cn(
        "scroll-mt-32 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <h2 className="text-2xl font-bold text-primary-deep mb-5">
        5. Operational Risks
      </h2>

      {/* Amber risk disclosure callout */}
      <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-4 mb-5">
        <div className="flex items-center gap-2 mb-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
            Important Risk Disclosure
          </span>
        </div>
        <p className="text-amber-900/75 text-sm leading-relaxed">
          Physical assets are subject to wear and tear, accidents, and
          regulatory changes. While we insure our fleet, major market shifts or
          catastrophic events can impact the value and performance of the assets.
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm">
        Participants acknowledge that mobility operations involve inherent risks,
        including but not limited to: mechanical failure, traffic accidents,
        fluctuating fuel/energy prices, and changing urban transportation
        regulations. RT Mobility maintains comprehensive commercial insurance,
        but this does not eliminate all operational risks associated with
        asset-backed participation.
      </p>
    </section>
  );
}
