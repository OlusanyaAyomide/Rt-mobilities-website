"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TermsEligibilityProps {
  onVisible: (id: string) => void;
}

export default function TermsEligibility({ onVisible }: TermsEligibilityProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("eligibility");
    },
  });

  return (
    <section
      id="eligibility"
      ref={ref}
      className={cn(
        "scroll-mt-32 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <h2 className="text-2xl font-bold text-primary-deep mb-5">
        2. Eligibility
      </h2>

      <p className="text-muted-foreground leading-relaxed text-sm">
        Participation in RT Mobility is restricted to individuals who are at
        least 18 years of age and reside in supported jurisdictions.
        Institutional participants must provide valid corporate documentation and
        undergo our standard KYC (Know Your Customer) procedures.
      </p>
    </section>
  );
}
