"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TermsIntroductionProps {
  onVisible: (id: string) => void;
}

export default function TermsIntroduction({ onVisible }: TermsIntroductionProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("introduction");
    },
  });

  return (
    <section
      id="introduction"
      ref={ref}
      className={cn(
        "scroll-mt-32 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <h2 className="text-2xl font-bold text-primary-deep mb-5">
        1. Introduction
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
        Welcome to RT Mobility. These Terms and Conditions (&quot;Terms&quot;) govern
        your use of our platform, fleet participation programs, and digital
        services. By accessing or using the RT Mobility ecosystem, you agree to
        be bound by these Terms and our Privacy Policy.
      </p>

      <p className="text-muted-foreground leading-relaxed text-sm">
        Please read these terms carefully before participating. The RT Mobility
        framework is built on a cooperative asset-backed model designed to
        optimize fleet operations through decentralized participation.
      </p>
    </section>
  );
}
