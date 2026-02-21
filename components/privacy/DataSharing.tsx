"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Share2, Languages } from "lucide-react";

interface DataSharingProps {
  onVisible: (id: string) => void;
}

export default function DataSharing({ onVisible }: DataSharingProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("data-sharing");
    },
  });

  return (
    <section
      id="data-sharing"
      ref={ref}
      className={cn(
        "scroll-mt-28 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
          <Share2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-deep">
          3. Data Sharing
        </h2>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4">
        RT Mobility is a subsidiary of{" "}
        <strong className="text-primary-deep">Riverscope Technology Limited</strong>.
        For the purpose of providing an integrated service experience, your data
        may be shared within our corporate group.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-6">
        We do not sell your personal data to third parties. We only share
        information with authorized service providers who assist us in operating
        our platform, conducting our business, or serving our users, so long as
        those parties agree to keep this information confidential.
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
          We share your info with our parent company, Riverscope, so your
          account works everywhere. We don&apos;t sell your data to advertisers.
        </p>
      </div>
    </section>
  );
}
