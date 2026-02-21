"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

interface IntroductionProps {
  onVisible: (id: string) => void;
}

export default function Introduction({ onVisible }: IntroductionProps) {
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
        "scroll-mt-28 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary-deep mb-6">
        1. Introduction
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-4">
        At RT Mobility, we are committed to protecting your privacy and ensuring
        the security of your personal information. This Privacy Policy describes
        our practices regarding the collection, use, and disclosure of the
        information we collect from and about you when you use our web portal,
        mobile applications, and mobility services.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        By using our services, you agree to the collection and use of
        information in accordance with this policy. We reserve the right to
        modify this policy at any time, and your continued use of our services
        after any such modification signifies your acceptance of the updated
        policy.
      </p>
    </section>
  );
}
