"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Landmark, Languages } from "lucide-react";

interface RegulatoryDisclosureProps {
  onVisible: (id: string) => void;
}

export default function RegulatoryDisclosure({ onVisible }: RegulatoryDisclosureProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("regulatory");
    },
  });

  return (
    <section
      id="regulatory"
      ref={ref}
      className={cn(
        "scroll-mt-28 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
          <Landmark className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-deep">
          5. Regulatory Disclosure
        </h2>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4">
        RT Mobility operates under the cooperative framework governed by the{" "}
        <strong className="text-primary-deep">Coffer Cooperative Society</strong>.
        As such, we comply with specific financial and cooperative bylaws that
        mandate transparent reporting and data integrity.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-6">
        We may disclose your information when we believe release is appropriate
        to comply with the law, enforce our site policies, or protect ours or
        others&apos; rights, property, or safety.
      </p>

      {/* Plain English */}
      <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-5">
        <div className="flex items-center gap-2 mb-2">
          <Languages className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
            In Plain English
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed italic">
          Because we are part of the Coffer Cooperative, we have extra rules to
          follow to keep things fair and legal. If a judge or the law asks for
          data, we have to provide it.
        </p>
      </div>
    </section>
  );
}
