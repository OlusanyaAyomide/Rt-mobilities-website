"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

interface TermsThePlatformProps {
  onVisible: (id: string) => void;
}

export default function TermsThePlatform({ onVisible }: TermsThePlatformProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("the-platform");
    },
  });

  return (
    <section
      id="the-platform"
      ref={ref}
      className={cn(
        "scroll-mt-32 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Heading + REVISED badge */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold text-primary-deep">
          3. The Platform
        </h2>
        <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-primary/15 text-primary uppercase">
          Revised
        </span>
      </div>

      {/* In Plain English callout */}
      <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 mb-5">
        <div className="flex items-center gap-2 mb-1.5">
          <Info className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
            In Plain English
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed italic">
          The &quot;Platform&quot; refers to both our physical vehicles and the RT Connect
          app that manages them. When you use RT Mobility, you&apos;re interacting
          with a blend of hardware and software designed to move people
          efficiently.
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm mb-4">
        RT Mobility provides an integrated ecosystem consisting of physical
        mobility assets (&quot;Fleet&quot;) and a proprietary software orchestration layer
        (&quot;RT Connect&quot;). The Platform facilitates the deployment, monitoring, and
        revenue-sharing mechanisms for all cooperative assets.
      </p>

      <p className="text-muted-foreground leading-relaxed text-sm">
        Usage of RT Connect requires a registered account. You are responsible
        for maintaining the confidentiality of your credentials and for all
        activities that occur under your account.
      </p>
    </section>
  );
}
